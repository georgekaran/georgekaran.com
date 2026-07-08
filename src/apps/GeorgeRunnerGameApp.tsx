"use client"

import { useRef, useEffect } from "react"

const GAME_W = 600
const GAME_H = 150
const GROUND_Y = 130

export default function GeorgeRunnerGameApp() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, GAME_W, GAME_H)
    // sky
    ctx.fillStyle = "#eef4ff"
    ctx.fillRect(0, 0, GAME_W, GAME_H)
    // ground line
    ctx.fillStyle = "#d7deea"
    ctx.fillRect(0, GROUND_Y, GAME_W, 2)
  }, [])

  return (
    <div className="flex items-center justify-center h-full w-full bg-[color:var(--os-surface-muted)] p-3">
      <canvas
        ref={canvasRef}
        width={GAME_W}
        height={GAME_H}
        className="w-full max-w-full h-auto rounded-md border border-[color:var(--os-border)] bg-white"
        style={{ imageRendering: "pixelated", aspectRatio: `${GAME_W} / ${GAME_H}` }}
      />
    </div>
  )
}
