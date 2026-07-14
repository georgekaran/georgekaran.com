"use client"

import { useBlog } from "@/apps/BlogProvider"

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-")
  return `${d}/${m}/${y}`
}

function TagChip({ tag }: { tag: string }) {
  return (
    <span className="rounded-full bg-[color:var(--os-accent-soft)] px-2 py-0.5 text-xs font-mono-os text-[color:var(--os-accent)]">
      {tag}
    </span>
  )
}

export default function BlogApp() {
  const { posts, activeSlug, renderedPost, openPost, backToList } = useBlog()
  const active = posts.find((p) => p.slug === activeSlug) ?? null

  if (active) {
    return (
      <article className="p-6 text-[color:var(--os-text)]">
        <button
          type="button"
          onClick={backToList}
          className="mb-4 text-xs font-mono-os text-[color:var(--os-accent)] hover:underline"
        >
          ← All posts
        </button>
        <h1 className="text-xl font-bold">{active.title}</h1>
        <p className="mt-1 text-xs font-mono-os text-[color:var(--os-text-muted)]">
          {formatDate(active.date)} · {active.readingTime} min read
        </p>
        <div className="mt-2 flex flex-wrap gap-1">
          {active.tags.map((t) => (
            <TagChip key={t} tag={t} />
          ))}
        </div>
        <div className="mt-4 leading-relaxed">
          {renderedPost ?? (
            <p className="text-sm font-mono-os text-[color:var(--os-text-muted)]">Loading…</p>
          )}
        </div>
      </article>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="p-6 text-sm font-mono-os text-[color:var(--os-text-muted)]">No posts yet.</div>
    )
  }

  return (
    <div className="p-4 text-[color:var(--os-text)]">
      <ul className="space-y-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <button
              type="button"
              onClick={() => openPost(p.slug)}
              className="w-full rounded-xl border border-[color:var(--os-border)] bg-[color:var(--os-surface)] p-3 text-left hover:bg-[color:var(--os-surface-muted)] transition-colors"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-semibold">{p.title}</span>
                <span className="shrink-0 text-xs font-mono-os text-[color:var(--os-text-muted)]">{formatDate(p.date)}</span>
              </div>
              <p className="mt-1 text-sm text-[color:var(--os-text-muted)]">{p.excerpt}</p>
              <div className="mt-2 flex flex-wrap items-center gap-1">
                {p.tags.map((t) => (
                  <TagChip key={t} tag={t} />
                ))}
                <span className="ml-auto text-xs font-mono-os text-[color:var(--os-text-muted)]">{p.readingTime} min read</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
