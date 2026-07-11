import type { ComponentType, CSSProperties } from "react"

export type AppIcon = ComponentType<{ size?: number; style?: CSSProperties }>

export type AppId = string

export type Tint = "blue" | "teal" | "amber" | "violet" | "coral" | "gray"

export interface Rect {
  x: number
  y: number
  width: number
  height: number
}

export interface AppDefinition {
  id: AppId
  title: string
  icon: AppIcon
  tint: Tint
  defaultRect: Rect
  Content: ComponentType
}

export interface WindowInstance {
  id: AppId
  rect: Rect
  zIndex: number
  minimized: boolean
  maximized: boolean
  prevRect: Rect | null
}

export const TINT_HEX: Record<Tint, string> = {
  blue: "#3b82f6",
  teal: "#14b8a6",
  amber: "#f59e0b",
  violet: "#8b5cf6",
  coral: "#f4796b",
  gray: "#6b7280",
}
