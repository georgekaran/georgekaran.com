import Image from "next/image"
import { MapPin } from "lucide-react"

export default function AboutApp() {
  const years = new Date().getFullYear() - 2018
  return (
    <div className="p-6 space-y-6 text-[color:var(--os-text)]">
      <div className="flex items-center gap-5">
        <div className="relative h-24 w-24 shrink-0 rounded-2xl overflow-hidden border border-[color:var(--os-border)]">
          <Image src="/profile.png" alt="George Karan" width={96} height={96} className="object-cover" priority />
        </div>
        <div>
          <span className="inline-block px-2 py-0.5 rounded-full text-xs font-mono-os bg-[color:var(--os-accent-soft)] text-[color:var(--os-accent)]">
            Software Engineer
          </span>
          <h1 className="text-2xl font-bold mt-2">
            Hi, I&#39;m <span className="text-[color:var(--os-accent)]">George</span>
          </h1>
          <p className="flex items-center gap-1 text-sm text-[color:var(--os-text-muted)] mt-1">
            <MapPin size={14} className="text-[color:var(--os-accent)]" />
            São Paulo, Brazil
          </p>
        </div>
      </div>

      <p className="leading-relaxed">
        A Software Engineer with {years}+ years of experience in the SaaS industry with strong
        fundamentals in React, TypeScript and Node.
      </p>
      <p className="leading-relaxed text-[color:var(--os-text-muted)]">
        I regularly attend web development meetups and contribute to open-source projects (currently
        a maintainer of Ariakit), staying connected with the community and keeping my skills sharp.
        My expertise spans modern frontend — React, JavaScript, TypeScript, GraphQL, and testing —
        with a focus on accessible, performant apps and great developer experience.
      </p>
      <p className="leading-relaxed text-[color:var(--os-text-muted)]">
        I&#39;m fluent in English, Portuguese, and Spanish, which has enabled me to collaborate
        effectively with international teams throughout my career.
      </p>
    </div>
  )
}
