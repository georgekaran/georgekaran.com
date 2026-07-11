"use client"

import posthog from "posthog-js"

// No-op until PostHog is initialized (which only happens when NEXT_PUBLIC_POSTHOG_KEY is set).
export function track(event: string, properties?: Record<string, unknown>): void {
  if (!posthog.__loaded) {
    return
  }

  posthog.capture(event, properties)
}
