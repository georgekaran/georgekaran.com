"use client"

import type { PostMeta } from "@/blog/posts"
import type React from "react"
import { APPS } from "./apps"
import { BlogProvider } from "@/apps/BlogProvider"
import { WindowManagerProvider, useWindowManager } from "./WindowManager"
import { MenuBar } from "./MenuBar"
import { Window } from "./Window"
import { DesktopIcon } from "./DesktopIcon"

function DesktopInner() {
  const { windows } = useWindowManager()
  const anyOpen = windows.some((w) => !w.minimized)

  return (
    <>
      <MenuBar />
      <main className="os-grid fixed inset-0 top-10 overflow-hidden" aria-label="GeorgeOS desktop">
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {APPS.map((app) => (
            <DesktopIcon key={app.id} app={app} />
          ))}
        </div>

        {!anyOpen && (
          <p className="absolute bottom-6 right-6 text-sm font-mono-os text-[color:var(--os-text-muted)] select-none pointer-events-none">
            <span aria-hidden="true">👋</span> click an app to explore
          </p>
        )}

        {windows.map((w) => (
          <Window key={w.id} instance={w} />
        ))}
      </main>
    </>
  )
}

export function Desktop({ posts = [], initialSlug = null, initialRenderedPost = null }: {
  posts?: PostMeta[]
  initialSlug?: string | null
  initialRenderedPost?: React.ReactNode
}) {
  return (
    <WindowManagerProvider>
      <BlogProvider posts={posts} initialSlug={initialSlug} initialRenderedPost={initialRenderedPost}>
        <DesktopInner />
      </BlogProvider>
    </WindowManagerProvider>
  )
}
