"use client"

import { useEffect, useRef } from "react"
import { Rnd } from "react-rnd"
import type { WindowInstance } from "./types"
import { TINT_HEX } from "./types"
import { getApp } from "./apps"
import { useWindowManager } from "./WindowManager"
import { useReducedMotion } from "./useReducedMotion"
import { useViewport } from "./useViewport"

const MENU_BAR_HEIGHT = 40
const MIN_W = 300
const MIN_H = 220
const MOBILE_MAX_WIDTH = 640

export function Window({ instance }: { instance: WindowInstance }) {
  const { activeId, focus, close, minimize, toggleMaximize, move, resize } = useWindowManager()
  const app = getApp(instance.id)
  const dialogRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const { width: viewportWidth, height: viewportHeight } = useViewport()
  const isMobile = viewportWidth > 0 && viewportWidth <= MOBILE_MAX_WIDTH

  const isActive = activeId === instance.id
  const titleId = `win-title-${instance.id}`

  useEffect(() => {
    if (!isActive) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(instance.id)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isActive, close, instance.id])

  useEffect(() => {
    if (isActive) dialogRef.current?.focus()
  }, [isActive])

  if (!app) return null
  if (instance.minimized) return null

  const Content = app.Content
  const tint = TINT_HEX[app.tint]

  const fullscreen = isMobile || instance.maximized
  const rect =
    fullscreen && viewportWidth > 0
      ? { x: 0, y: MENU_BAR_HEIGHT, width: viewportWidth, height: viewportHeight - MENU_BAR_HEIGHT }
      : instance.rect

  return (
    <Rnd
      size={{ width: rect.width, height: rect.height }}
      position={{ x: rect.x, y: rect.y }}
      minWidth={MIN_W}
      minHeight={MIN_H}
      bounds="parent"
      dragHandleClassName="os-window-titlebar"
      disableDragging={fullscreen}
      enableResizing={!fullscreen}
      style={{ zIndex: instance.zIndex }}
      onMouseDown={() => focus(instance.id)}
      onDragStop={(_e, d) => move(instance.id, d.x, d.y)}
      onResizeStop={(_e, _dir, ref, _delta, pos) =>
        resize(instance.id, {
          x: pos.x,
          y: pos.y,
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        })
      }
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`flex flex-col h-full w-full rounded-xl overflow-hidden outline-none border border-[color:var(--os-border)] bg-[color:var(--os-surface)] transition-shadow ${
          reducedMotion ? "" : "os-window-anim"
        }`}
        style={{ boxShadow: isActive ? "0 20px 50px -12px rgba(26,34,51,0.35)" : "0 8px 24px -12px rgba(26,34,51,0.2)" }}
      >
        <div
          className={`os-window-titlebar flex items-center gap-2 px-3 h-9 shrink-0 cursor-grab active:cursor-grabbing border-b border-[color:var(--os-border)] bg-[color:var(--os-surface-muted)] ${
            isActive ? "" : "opacity-70"
          }`}
          onDoubleClick={() => toggleMaximize(instance.id)}
        >
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              aria-label={`Close ${app.title}`}
              onClick={() => close(instance.id)}
              className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-95"
            />
            <button
              type="button"
              aria-label={`Minimize ${app.title}`}
              onClick={() => minimize(instance.id)}
              className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-95"
            />
            <button
              type="button"
              aria-label={`Maximize ${app.title}`}
              onClick={() => toggleMaximize(instance.id)}
              className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-95"
            />
          </div>
          <div className="flex items-center gap-1.5 mx-auto pr-10">
            <app.icon size={14} style={{ color: tint }} />
            <span id={titleId} className="text-xs font-mono-os text-[color:var(--os-text)]">
              {app.title}
            </span>
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <Content />
        </div>
      </div>
    </Rnd>
  )
}
