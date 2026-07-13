import type { ReactNode } from "react"

export const mdxComponents = {
  Callout: ({ children }: { children: ReactNode }) => (
    <div className="my-4 rounded-lg border border-[color:var(--os-border)] bg-[color:var(--os-surface-muted)] p-3 text-sm text-[color:var(--os-text)]">
      {children}
    </div>
  ),
  a: ({ href, children }: { href?: string; children?: ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[color:var(--os-accent)] underline">
      {children}
    </a>
  ),
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="mt-6 mb-2 text-lg font-semibold text-[color:var(--os-text)]">{children}</h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="mt-4 mb-2 text-base font-semibold text-[color:var(--os-text)]">{children}</h3>
  ),
  code: ({ children }: { children?: ReactNode }) => (
    <code className="rounded bg-[color:var(--os-surface-muted)] px-1 py-0.5 font-mono-os text-[0.85em]">{children}</code>
  ),
  pre: ({ children }: { children?: ReactNode }) => (
    <pre className="my-4 overflow-x-auto rounded-lg border border-[color:var(--os-border)] bg-[color:var(--os-surface-muted)] p-3 font-mono-os text-xs">
      {children}
    </pre>
  ),
}
