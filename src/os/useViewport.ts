"use client"

import { useSyncExternalStore } from "react"

let cache = { width: 0, height: 0 }

function subscribe(callback: () => void): () => void {
  window.addEventListener("resize", callback)
  window.addEventListener("orientationchange", callback)
  return () => {
    window.removeEventListener("resize", callback)
    window.removeEventListener("orientationchange", callback)
  }
}

function getSnapshot(): { width: number; height: number } {
  if (cache.width !== window.innerWidth || cache.height !== window.innerHeight) {
    cache = { width: window.innerWidth, height: window.innerHeight }
  }
  return cache
}

const SERVER_SNAPSHOT = { width: 0, height: 0 }

function getServerSnapshot(): { width: number; height: number } {
  return SERVER_SNAPSHOT
}

export function useViewport(): { width: number; height: number } {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
