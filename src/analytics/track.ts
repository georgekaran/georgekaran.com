import posthog from "posthog-js"

// No-op unless PostHog was initialized (i.e. NEXT_PUBLIC_POSTHOG_KEY is set).
export function track(event: string, properties?: Record<string, unknown>): void {
  if (!posthog.__loaded) {
    return;
  }

  posthog.capture(event, properties)
}
