const GROUPS = [
  { title: "Frontend", items: ["React", "JavaScript", "TypeScript", "GraphQL", "Relay", "Apollo", "Next.js", "CSS-in-JS", "Emotion", "Tailwind"] },
  { title: "Testing", items: ["Jest", "React Testing Library", "Cucumber", "Cypress", "Playwright", "Unit Testing", "Chai", "Mocha", "Storybook"] },
  { title: "Backend", items: ["Node.js", "SQL", "Postgres", "MongoDB", "Java", "Spring", "Go", "Full-Stack", "Webpack", "CI/CD"] },
  { title: "Languages & Other", items: ["English (Professional)", "Portuguese (Native)", "Spanish (Professional)", "Git", "GitHub Actions", "OOP", "Design Systems", "Developer Experience", "Accessibility (a11y)", "Performance"] },
]

export default function SkillsApp() {
  return (
    <div className="p-6 grid sm:grid-cols-2 gap-4 text-[color:var(--os-text)]">
      {GROUPS.map((g) => (
        <div key={g.title} className="rounded-xl border border-[color:var(--os-border)] bg-[color:var(--os-surface)] p-4">
          <h3 className="font-bold text-[color:var(--os-accent)] mb-2">{g.title}</h3>
          <ul className="space-y-1 text-sm text-[color:var(--os-text-muted)]">
            {g.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
