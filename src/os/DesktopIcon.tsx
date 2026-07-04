"use client"

import type { AppDefinition } from "./types"
import { TINT_HEX } from "./types"
import { useWindowManager } from "./WindowManager"

export function DesktopIcon({ app }: { app: AppDefinition }) {
  const { open } = useWindowManager()
  const Icon = app.icon
  const tint = TINT_HEX[app.tint]

  return (
    <button
      type="button"
      onClick={() => open(app.id)}
      className="flex flex-col items-center gap-1.5 w-20 p-2 rounded-lg hover:bg-white/50 focus-visible:outline-2 focus-visible:outline-[color:var(--os-accent)] transition-colors group"
    >
      <span
        className="flex items-center justify-center w-12 h-12 rounded-xl shadow-sm border border-[color:var(--os-border)] bg-[color:var(--os-surface)] group-hover:scale-105 transition-transform"
        style={{ color: tint }}
      >
        <Icon size={24} />
      </span>
      <span className="text-xs font-mono-os text-[color:var(--os-text)] text-center leading-tight">
        {app.title}
      </span>
    </button>
  )
}
