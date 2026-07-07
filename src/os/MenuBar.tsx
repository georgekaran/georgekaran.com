"use client"

import { useEffect, useRef, useState } from "react"
import { APPS } from "./apps"
import { TINT_HEX } from "./types"
import { useWindowManager } from "./WindowManager"
import { Clock } from "@/os/Clock"

export function MenuBar() {
  const { windows, activeId, open, focus, minimize } = useWindowManager()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation()
        setMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [menuOpen])


  return (
    <div className="fixed top-0 inset-x-0 h-10 z-[9999] flex items-center gap-2 px-3 bg-[color:var(--os-surface)]/80 backdrop-blur border-b border-[color:var(--os-border)]">
      <div className="relative" ref={menuRef}>
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-[color:var(--os-surface-muted)] text-sm font-mono-os font-semibold text-[color:var(--os-text)]"
        >
          <span className="text-[color:var(--os-accent)]">◆</span> GeorgeOS
        </button>
        {menuOpen && (
          <div
            role="menu"
            className="absolute left-0 top-full mt-1 w-52 rounded-lg border border-[color:var(--os-border)] bg-[color:var(--os-surface)] shadow-xl py-1"
          >
            {APPS.map((app) => {
              const Icon = app.icon
              return (
                <button
                  key={app.id}
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    open(app.id)
                    setMenuOpen(false)
                  }}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm text-left hover:bg-[color:var(--os-surface-muted)] text-[color:var(--os-text)]"
                >
                  <Icon size={16} style={{ color: TINT_HEX[app.tint] }} />
                  {app.title}
                </button>
              )
            })}
          </div>
        )}
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto">
        {windows.map((w) => {
          const app = APPS.find((a) => a.id === w.id)!
          const isActive = activeId === w.id && !w.minimized
          const onClick = () => {
            if (w.minimized) {
              open(w.id)
            } else if (activeId === w.id) {
              minimize(w.id)
            } else {
              focus(w.id)
            }
          }
          return (
            <button
              key={w.id}
              type="button"
              onClick={onClick}
              className={`px-2.5 py-1 rounded-md text-xs font-mono-os whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-[color:var(--os-accent-soft)] text-[color:var(--os-accent)]"
                  : "hover:bg-[color:var(--os-surface-muted)] text-[color:var(--os-text-muted)]"
              } ${w.minimized ? "italic opacity-50" : ""}`}
            >
              {app.title}
            </button>
          )
        })}
      </div>

      <div className="ml-auto">
        <Clock />
      </div>
    </div>
  )
}
