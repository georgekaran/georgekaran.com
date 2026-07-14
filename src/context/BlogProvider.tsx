"use client"

import { createContext, useContext, useState, useCallback, useMemo, useRef, useEffect, type ReactNode } from "react"
import type { PostMeta } from "@/blog/posts"
import { useWindowManager } from "@/os/WindowManager"
import { track } from "@/analytics/track"

type BlogContextValue = {
  posts: PostMeta[]
  activeSlug: string | null
  renderedPost: ReactNode | null
  openPost: (slug: string) => void
  backToList: () => void
}

const BlogContext = createContext<BlogContextValue | null>(null)

type BlogProviderProps = {
  children: ReactNode
  posts?: PostMeta[]
  initialSlug?: string | null
  initialRenderedPost?: ReactNode
}

export function BlogProvider({ children, posts = [], initialSlug = null, initialRenderedPost = null }: BlogProviderProps) {
  const { open } = useWindowManager()
  const [activeSlug, setActiveSlug] = useState<string | null>(initialSlug)
  const [renderedPost, setRenderedPost] = useState<ReactNode | null>(initialRenderedPost)
  // Monotonic id so a slow response for a post the user has since navigated
  // away from can't overwrite the currently displayed one.
  const postRequestRef = useRef(0)

  const loadPost = useCallback((slug: string) => {
    const requestId = ++postRequestRef.current
    setActiveSlug(slug)
    setRenderedPost(null)
    fetch(`/blog/${slug}/content`)
      .then((res) => {
        if (!res.ok) throw new Error(`status ${res.status}`)
        return res.text()
      })
      .then((html) => {
        if (postRequestRef.current !== requestId) return
        // Trusted content: our own compiled MDX, never user input.
        setRenderedPost(<div dangerouslySetInnerHTML={{ __html: html }} />)
      })
      .catch(() => {
        if (postRequestRef.current !== requestId) return
        setRenderedPost(
          <p className="text-sm font-mono-os text-[color:var(--os-text-muted)]">Could not load this post.</p>
        )
      })
  }, [])

  const openPost = useCallback((slug: string) => {
    track("post_viewed", { slug })
    window.history.pushState(null, "", `/blog/${slug}`)
    loadPost(slug)
  }, [loadPost])

  const backToList = useCallback(() => {
    postRequestRef.current++
    setActiveSlug(null)
    setRenderedPost(null)
    window.history.pushState(null, "", "/")
  }, [])

  useEffect(() => {
    if (initialSlug) open("blog")
  }, [initialSlug, open])

  // Keep the blog view in sync when the user uses browser Back/Forward.
  useEffect(() => {
    const onPopState = () => {
      const match = window.location.pathname.match(/^\/blog\/([^/]+)\/?$/)
      if (match) {
        open("blog")
        loadPost(decodeURIComponent(match[1]))
      } else {
        postRequestRef.current++
        setActiveSlug(null)
        setRenderedPost(null)
      }
    }
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [loadPost, open])

  const value = useMemo<BlogContextValue>(
    () => ({ posts, activeSlug, renderedPost, openPost, backToList }),
    [posts, activeSlug, renderedPost, openPost, backToList]
  )

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
}

export function useBlog(): BlogContextValue {
  const context = useContext(BlogContext)

  if (context === null) {
    throw new Error("useBlog must be used within BlogProvider")
  }

  return context
}
