"use client"

import { useSyncExternalStore } from "react"

const MQ = "(prefers-reduced-motion: reduce)"

function subscribe(callback: () => void): () => void {
  const mq = window.matchMedia(MQ)
  mq.addEventListener("change", callback)
  return () => mq.removeEventListener("change", callback)
}

function getSnapshot(): boolean {
  return window.matchMedia(MQ).matches
}

function getServerSnapshot(): boolean {
  return false
}

export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
