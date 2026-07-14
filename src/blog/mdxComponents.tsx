import type { ReactNode } from "react"

type MdxProps = { children?: ReactNode }
type CalloutProps = { children: ReactNode }
type AnchorProps = { href?: string; children?: ReactNode }

export const mdxComponents = {
  Callout: ({ children }: CalloutProps) => (
    <div className="my-4 rounded-lg border border-[color:var(--os-border)] bg-[color:var(--os-surface-muted)] p-3 text-sm text-[color:var(--os-text)]">
      {children}
    </div>
  ),
  a: ({ href, children }: AnchorProps) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[color:var(--os-accent)] underline">
      {children}
    </a>
  ),
  h2: ({ children }: MdxProps) => (
    <h2 className="mt-6 mb-2 text-lg font-semibold text-[color:var(--os-text)]">{children}</h2>
  ),
  h3: ({ children }: MdxProps) => (
    <h3 className="mt-4 mb-2 text-base font-semibold text-[color:var(--os-text)]">{children}</h3>
  ),
  code: ({ children }: MdxProps) => (
    <code className="rounded bg-[color:var(--os-surface-muted)] px-1 py-0.5 font-mono-os text-[0.85em]">{children}</code>
  ),
  pre: ({ children }: MdxProps) => (
    <pre className="my-4 overflow-x-auto rounded-lg border border-[color:var(--os-border)] bg-[color:var(--os-surface-muted)] p-3 font-mono-os text-xs">
      {children}
    </pre>
  ),
}
