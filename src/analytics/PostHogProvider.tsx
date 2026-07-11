"use client"

import { useEffect, type ReactNode } from "react"
import posthog from "posthog-js"

type PostHogProviderProps = {
  children: ReactNode
}

export function PostHogProvider({children}: PostHogProviderProps) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY

    if (!key || posthog.__loaded) {
      return
    }

    const init = () => {
      posthog.init(key, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
        // Opt into PostHog's modern defaults (SPA-aware pageviews, etc.).
        defaults: "2026-06-25",
        // Cookieless: no cookies/localStorage, so no consent banner needed.
        persistence: "memory",
      })
    }
    init()
  }, [])

  return children
}
