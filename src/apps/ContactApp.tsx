import Link from "next/link"
import { Mail, ArrowRight } from "lucide-react"
import { Github } from "@/icons/Github"
import { Linkedin } from "@/icons/Linkedin"

const LINKS = [
  { icon: Mail, label: "georgekaran12@gmail.com", href: "mailto:georgekaran12@gmail.com" },
  { icon: Github, label: "github.com/georgekaran", href: "https://github.com/georgekaran" },
  { icon: Linkedin, label: "linkedin.com/in/georgekaran", href: "https://linkedin.com/in/georgekaranmueller" },
]

export default function ContactApp() {
  return (
    <div className="p-6 space-y-4 text-[color:var(--os-text)]">
      <p className="text-[color:var(--os-text-muted)] leading-relaxed">
        I&#39;m always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
      </p>
      <div className="space-y-2">
        {LINKS.map((l) => {
          const Icon = l.icon
          return (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 rounded-xl border border-[color:var(--os-border)] bg-[color:var(--os-surface)] p-3 hover:bg-[color:var(--os-surface-muted)] transition-colors"
            >
              <Icon className="text-[color:var(--os-accent)]" />
              <span className="text-sm">{l.label}</span>
            </a>
          )
        })}
      </div>
      <Link
        href="https://drive.google.com/file/d/1wL6sNDsPOLMBveUaW2lWdfx0VJGozt4b/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[color:var(--os-accent)] text-white px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity"
      >
        Download Résumé <ArrowRight size={16} />
      </Link>
    </div>
  )
}
