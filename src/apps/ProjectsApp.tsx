import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const PROJECTS = [
  {
    name: "Ariakit",
    image: "/ariakit.png",
    href: "https://github.com/ariakit/ariakit",
    tags: ["React", "TypeScript", "Accessibility"],
    detail:
      "Open-source accessible UI components for React. Currently a maintainer, contributing to web accessibility standards.",
  },
  {
    name: "Croct CMS",
    image: "/croct-site.png",
    href: "https://croct.com",
    tags: ["React", "GraphQL", "Relay"],
    detail:
      "Led development of a Content Management System for Croct's B2B SaaS, enabling non-technical users to create and manage personalized content.",
  },
  {
    name: "Design System",
    image: "/design-system.png",
    href: "https://app.croct.com",
    tags: ["React", "Storybook", "CSS-in-JS"],
    detail:
      "Built and led a comprehensive design system, establishing a consistent visual and functional language across applications.",
  },
]

export default function ProjectsApp() {
  return (
    <div className="p-6 grid sm:grid-cols-2 gap-4 text-[color:var(--os-text)]">
      {PROJECTS.map((p) => (
        <div
          key={p.name}
          className="rounded-xl border border-[color:var(--os-border)] bg-[color:var(--os-surface)] overflow-hidden"
        >
          <div className="h-32 relative bg-[color:var(--os-surface-muted)]">
            <Image src={p.image} alt={p.name} width={400} height={128} className="object-cover w-full h-full" />
          </div>
          <div className="p-4">
            <h3 className="font-bold">{p.name}</h3>
            <p className="text-sm text-[color:var(--os-text-muted)] mt-1 leading-relaxed">{p.detail}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-full text-xs font-mono-os bg-[color:var(--os-accent-soft)] text-[color:var(--os-accent)]"
                >
                  {t}
                </span>
              ))}
            </div>
            <Link
              href={p.href}
              target="_blank"
              className="inline-flex items-center gap-1 text-sm text-[color:var(--os-accent)] hover:underline mt-3"
            >
              View project <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
