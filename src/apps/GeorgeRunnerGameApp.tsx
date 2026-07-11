"use client"

import {useRef, useEffect, useState, useCallback} from "react"

const GAME_W = 600
const GAME_H = 150
const GROUND_Y = 130

const HISCORE_KEY = "georgeos:runner:highscore"

type Phase = "ready" | "running" | "gameover"

interface Obstacle {
  x: number
}

interface GameState {
  phase: Phase
  playerY: number
  playerVY: number
  obstacles: Obstacle[]
  speed: number
  score: number
  spawnTimer: number
  runFrameTime: number
  runFrame: 0 | 1
}

const GRAVITY = 2200
const JUMP_VELOCITY = -680
const START_SPEED = 240
const PLAYER_X = 40
const SPAWN_MIN = 0.9
const SPAWN_MAX = 1.8
const MAX_SPEED = 560
const SPEED_RAMP = 12
const SCORE_RATE = 12
const MS_PER_SECOND = 1000
const MAX_FRAME_DELTA = 0.05
const RUN_FRAME_INTERVAL = 0.12
const SPAWN_OFFSET = 10

const SKY_COLOR = "#eef4ff"
const GROUND_COLOR = "#d7deea"
const GROUND_THICKNESS = 2

function createState(): GameState {
  return {
    phase: "running",
    playerY: GROUND_Y - PLAYER_H,
    playerVY: 0,
    obstacles: [],
    speed: START_SPEED,
    score: 0,
    spawnTimer: 1.2,
    runFrameTime: 0,
    runFrame: 0,
  }
}

type PixelGrid = string[]

const PALETTE: Record<string, string> = {
  G: "#8b5cf6", // George body (violet)
  D: "#6d28d9", // George dark accent
  S: "#f4f6fb", // George highlight / face
  E: "#1a2233", // eyes / outline
  B: "#f4796b", // bug body (coral)
  L: "#1a2233", // bug legs / eyes
}

// 8 wide x 9 tall — a compact pixel figure (running frame A)
const GEORGE_RUN_A: PixelGrid = [
  "  GGGG  ",
  " GGGGGG ",
  " GSSGSG ",
  " GSEGEG ",
  " GGGGGG ",
  "  GGGG  ",
  " DD  DD ",
  " D    D ",
  "DD    DD",
]

// running frame B — legs swapped
const GEORGE_RUN_B: PixelGrid = [
  "  GGGG  ",
  " GGGGGG ",
  " GSSGSG ",
  " GSEGEG ",
  " GGGGGG ",
  "  GGGG  ",
  " DD  DD ",
  "  D  D  ",
  "  DD DD ",
]

// jump pose — legs tucked
const GEORGE_JUMP: PixelGrid = [
  "  GGGG  ",
  " GGGGGG ",
  " GSSGSG ",
  " GSEGEG ",
  " GGGGGG ",
  "  GGGG  ",
  " D    D ",
  "DD    DD",
  "        ",
]

// 7 wide x 5 tall bug
const BUG: PixelGrid = [
  "L     L",
  " BBBBB ",
  "BBLBLBB",
  " BBBBB ",
  "L  L  L",
]

const PLAYER_PX = 4
const BUG_PX = 3
const PLAYER_W = GEORGE_RUN_A[0].length * PLAYER_PX
const PLAYER_H = GEORGE_RUN_A.length * PLAYER_PX
const BUG_W = BUG[0].length * BUG_PX
const BUG_H = BUG.length * BUG_PX

function drawSprite(ctx: CanvasRenderingContext2D, grid: PixelGrid, x: number, y: number, px: number): void {
  for (let row = 0; row < grid.length; row++) {
    const line = grid[row]
    for (let col = 0; col < line.length; col++) {
      const key = line[col]
      const color = PALETTE[key]
      if (!color) continue
      ctx.fillStyle = color
      ctx.fillRect(x + col * px, y + row * px, px, px)
    }
  }
}

export default function GeorgeRunnerGameApp() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // Game state lives in a ref, not useState: it mutates every frame (~60fps) and
  // must not trigger re-renders. Only coarse phase + throttled score go to React.
  const stateRef = useRef<GameState>(createState())
  const [displayScore, setDisplayScore] = useState(0)
  const lastScoreRef = useRef(0)
  const [phase, setPhase] = useState<Phase>("running")
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    const loadHighScore = () => {
      const raw = localStorage.getItem(HISCORE_KEY)
      if (raw) setHighScore(Number(raw) || 0)
    }
    loadHighScore()
  }, [])

  const reset = useCallback(() => {
    stateRef.current = createState()
    lastScoreRef.current = 0
    setDisplayScore(0)
    setPhase("running")
  }, [])

  const onInput = useCallback(() => {
    const s = stateRef.current
    if (s.phase === "gameover") {
      reset()
      return
    }
    if (s.phase !== "running") return
    const onGround = s.playerY >= GROUND_Y - PLAYER_H
    if (onGround) s.playerVY = JUMP_VELOCITY
  }, [reset])

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const context = canvas.getContext("2d")

    if (!context) {
      return
    }

    let raf = 0
    let last = 0

    const endGame = () => {
      const gameState = stateRef.current
      gameState.phase = "gameover"
      const finalScore = Math.floor(gameState.score)

      setPhase("gameover")

      setHighScore((prev) => {
        const next = Math.max(prev, finalScore)
        localStorage.setItem(HISCORE_KEY, String(next))
        return next
      })
    }

    const frame = (now: number) => {
      if (last === 0) {
        last = now
      }

      const dt = Math.min((now - last) / MS_PER_SECOND, MAX_FRAME_DELTA)
      last = now
      const gameState = stateRef.current

      if (gameState.phase === "running") {
        gameState.playerVY += GRAVITY * dt
        gameState.playerY += gameState.playerVY * dt
        const floor = GROUND_Y - PLAYER_H

        if (gameState.playerY > floor) {
          gameState.playerY = floor
          gameState.playerVY = 0
        }

        gameState.runFrameTime += dt

        if (gameState.runFrameTime > RUN_FRAME_INTERVAL) {
          gameState.runFrameTime = 0
          gameState.runFrame = gameState.runFrame === 0 ? 1 : 0
        }

        gameState.speed = Math.min(MAX_SPEED, gameState.speed + SPEED_RAMP * dt)
        gameState.score += SCORE_RATE * dt
        gameState.spawnTimer -= dt

        if (gameState.spawnTimer <= 0) {
          gameState.obstacles.push({x: GAME_W + SPAWN_OFFSET})
          gameState.spawnTimer = SPAWN_MIN + Math.random() * (SPAWN_MAX - SPAWN_MIN)
        }

        for (const obstacle of gameState.obstacles) {
          obstacle.x -= gameState.speed * dt
        }
        gameState.obstacles = gameState.obstacles.filter((obstacle) => obstacle.x + BUG_W > 0)

        const px = PLAYER_X
        const py = gameState.playerY
        const bugTop = GROUND_Y - BUG_H
        for (const o of gameState.obstacles) {
          const hit =
            px < o.x + BUG_W &&
            px + PLAYER_W > o.x &&
            py < bugTop + BUG_H &&
            py + PLAYER_H > bugTop
          if (hit) {
            endGame()
            break
          }
        }
      }

      context.fillStyle = SKY_COLOR
      context.fillRect(0, 0, GAME_W, GAME_H)
      context.fillStyle = GROUND_COLOR
      context.fillRect(0, GROUND_Y, GAME_W, GROUND_THICKNESS)

      const onGround = gameState.playerY >= GROUND_Y - PLAYER_H
      const sprite = !onGround ? GEORGE_JUMP : gameState.runFrame === 0 ? GEORGE_RUN_A : GEORGE_RUN_B
      drawSprite(context, sprite, PLAYER_X, gameState.playerY, PLAYER_PX)

      for (const obstacle of gameState.obstacles) {
        drawSprite(context, BUG, obstacle.x, GROUND_Y - BUG_H, BUG_PX)
      }

      const rounded = Math.floor(gameState.score)

      if (rounded !== lastScoreRef.current) {
        lastScoreRef.current = rounded
        setDisplayScore(rounded)
      }

      // Keep the loop alive during "gameover" (no state updates run, just redraws
      // the frozen frame) so a reset() flipping phase back to "running" is picked up.
      raf = requestAnimationFrame(frame)
    }

    raf = requestAnimationFrame(frame)

    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === " " || event.key === "ArrowUp") {
        event.preventDefault()
        onInput()
      }
    }

    const canvas = canvasRef.current

    window.addEventListener("keydown", onKey)
    canvas?.addEventListener("pointerdown", onInput)

    return () => {
      window.removeEventListener("keydown", onKey)
      canvas?.removeEventListener("pointerdown", onInput)
    }
  }, [onInput])

  return (
    <div className="relative flex items-center justify-center h-full w-full bg-[color:var(--os-surface-muted)] p-3">
      <canvas
        ref={canvasRef}
        width={GAME_W}
        height={GAME_H}
        aria-label="George Runner game. Press space or tap to jump."
        className="w-full max-w-full h-auto rounded-md border border-[color:var(--os-border)] bg-white"
        style={{imageRendering: "pixelated", aspectRatio: `${GAME_W} / ${GAME_H}`}}
      />
      <div className="absolute top-4 right-5 font-mono-os text-sm text-[color:var(--os-text)] tabular-nums">
        {String(displayScore).padStart(5, "0")}
        <span className="ml-3 text-[color:var(--os-text-muted)]">HI {String(highScore).padStart(5, "0")}</span>
      </div>
      {phase === "gameover" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/70">
          <p className="font-mono-os font-semibold text-[color:var(--os-text)]">Bug hit! 🐛</p>
          <p className="font-mono-os text-xs text-[color:var(--os-text-muted)]">
            Score {displayScore} · Best {highScore}
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-1 px-3 py-1.5 rounded-md text-xs font-mono-os bg-[color:var(--os-accent)] text-white hover:brightness-95"
          >
            Press Space to restart
          </button>
        </div>
      )}
    </div>
  )
}
