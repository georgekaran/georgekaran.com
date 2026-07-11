"use client"

import { createContext, useContext, useReducer, useMemo, useRef, useEffect, type ReactNode } from "react"
import type { AppId, Rect, WindowInstance } from "./types"
import { DEFAULT_OPEN, getApp } from "./apps"
import { track } from "@/analytics/track"

const CASCADE_STEP = 28

interface State {
  windows: WindowInstance[]
  counter: number
  lastRect: Record<AppId, Rect>
}

type Action =
  | { type: "OPEN"; id: AppId }
  | { type: "CLOSE"; id: AppId }
  | { type: "FOCUS"; id: AppId }
  | { type: "MOVE"; id: AppId; x: number; y: number }
  | { type: "RESIZE"; id: AppId; rect: Rect }
  | { type: "MINIMIZE"; id: AppId }
  | { type: "TOGGLE_MAX"; id: AppId }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "OPEN": {
      const existing = state.windows.find((w) => w.id === action.id)
      const counter = state.counter + 1
      if (existing) {
        return {
          ...state,
          counter,
          windows: state.windows.map((w) => w.id === action.id ? { ...w, minimized: false, zIndex: counter } : w
          ),
        }
      }
      const app = getApp(action.id)
      if (!app) return state
      const remembered = state.lastRect[action.id]
      const offset = state.windows.length * CASCADE_STEP
      const rect: Rect = remembered ?? {
        x: app.defaultRect.x + offset,
        y: app.defaultRect.y + offset,
        width: app.defaultRect.width,
        height: app.defaultRect.height,
      }
      const instance: WindowInstance = {
        id: action.id,
        rect,
        zIndex: counter,
        minimized: false,
        maximized: false,
        prevRect: null,
      }
      return { ...state, counter, windows: [...state.windows, instance] }
    }
    case "CLOSE": {
      const closing = state.windows.find((w) => w.id === action.id)
      return {
        ...state,
        windows: state.windows.filter((w) => w.id !== action.id),
        lastRect: closing ? { ...state.lastRect, [action.id]: closing.rect } : state.lastRect,
      }
    }
    case "FOCUS": {
      const counter = state.counter + 1
      return {
        ...state,
        counter,
        windows: state.windows.map((w) => (w.id === action.id ? { ...w, zIndex: counter } : w)),
      }
    }
    case "MOVE":
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, rect: { ...w.rect, x: action.x, y: action.y } } : w
        ),
      }
    case "RESIZE":
      return {
        ...state,
        windows: state.windows.map((w) => (w.id === action.id ? { ...w, rect: action.rect } : w)),
      }
    case "MINIMIZE":
      return {
        ...state,
        windows: state.windows.map((w) => (w.id === action.id ? { ...w, minimized: true } : w)),
      }
    case "TOGGLE_MAX":
      return {
        ...state,
        windows: state.windows.map((w) => {
          if (w.id !== action.id) return w
          if (w.maximized) {
            return { ...w, maximized: false, rect: w.prevRect ?? w.rect, prevRect: null }
          }
          return { ...w, maximized: true, prevRect: w.rect }
        }),
      }
    default:
      return state
  }
}

function init(): State {
  let counter = 0
  const windows: WindowInstance[] = DEFAULT_OPEN.map((id) => {
    const app = getApp(id)!
    counter += 1
    return {
      id,
      rect: { ...app.defaultRect },
      zIndex: counter,
      minimized: false,
      maximized: false,
      prevRect: null,
    }
  })
  return { windows, counter, lastRect: {} }
}

type WindowManagerValue = {
  windows: WindowInstance[]
  activeId: AppId | null
  open: (id: AppId) => void
  close: (id: AppId) => void
  focus: (id: AppId) => void
  move: (id: AppId, x: number, y: number) => void
  resize: (id: AppId, rect: Rect) => void
  minimize: (id: AppId) => void
  toggleMaximize: (id: AppId) => void
  isOpen: (id: AppId) => boolean
}

const WindowManagerContext = createContext<WindowManagerValue | null>(null)

type WindowManagerProviderProps = {
  children: ReactNode
}

export function WindowManagerProvider({ children }: WindowManagerProviderProps) {
  const [state, dispatch] = useReducer(reducer, undefined, init)

  const stateRef = useRef(state)
  useEffect(() => {
    stateRef.current = state
  }, [state])

  const actions = useMemo(
    () => ({
      open: (id: AppId) => {
        track("app_opened", { app_id: id })
        dispatch({ type: "OPEN", id })
      },
      close: (id: AppId) => {
        track("app_closed", { app_id: id })
        dispatch({ type: "CLOSE", id })
      },
      focus: (id: AppId) => {
        track("app_focused", { app_id: id })
        dispatch({ type: "FOCUS", id })
      },
      move: (id: AppId, x: number, y: number) => dispatch({ type: "MOVE", id, x, y }),
      resize: (id: AppId, rect: Rect) => dispatch({ type: "RESIZE", id, rect }),
      minimize: (id: AppId) => {
        track("app_minimized", { app_id: id })
        dispatch({ type: "MINIMIZE", id })
      },
      toggleMaximize: (id: AppId) => {
        const win = stateRef.current.windows.find((w) => w.id === id)
        track("app_maximize_toggled", { app_id: id, maximized: !win?.maximized })
        dispatch({ type: "TOGGLE_MAX", id })
      },
    }),
    []
  )

  const value = useMemo<WindowManagerValue>(() => {
    const visible = state.windows.filter((w) => !w.minimized)
    const activeId =
      visible.length > 0
        ? visible.reduce((top, w) => (w.zIndex > top.zIndex ? w : top)).id
        : null
    return {
      windows: state.windows,
      activeId,
      isOpen: (id: AppId) => state.windows.some((w) => w.id === id),
      ...actions,
    }
  }, [state, actions])

  return <WindowManagerContext.Provider value={value}>{children}</WindowManagerContext.Provider>
}

export function useWindowManager(): WindowManagerValue {
  const context = useContext(WindowManagerContext)

  if (context === null) {
    throw new Error("useWindowManager must be used within WindowManagerProvider")
  }

  return context
}
