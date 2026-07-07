const ITEMS = [
  {
    period: "08/2025 - Present",
    role: "Software Engineer",
    org: "Constructor, Remote",
    detail:
      "Part of the Prospect UI Solution team, enabling the sales team and building features for the application. Spearheaded the end-to-end testing migration from Cypress (cy.js) to Cypress + Cucumber (.feature), improving test readability and collaboration.",
  },
  {
    period: "11/2020 - 08/2025",
    role: "Founding/Lead Frontend Engineer",
    org: "Croct, Denver, United States",
    detail:
      "Architected and led development of the company's main product platform, working closely with the CEO, serving over 1,000 active users monthly. Built core features of Croct's B2B SaaS: a CMS, real-time dashboards, and audience segmentation tools.",
  },
  {
    period: "08/2020 - 11/2020",
    role: "Software Engineer",
    org: "Santander (via DBC), Brazil",
    detail:
      "Partnered with the software architect to design microservices per feature. Achieved 90%+ code coverage with unit tests (Mocha, Chai), reducing production defects. Collaborated with teams in Mexico and Spain to integrate APIs.",
  },
  {
    period: "11/2018 - 08/2020",
    role: "Software Engineer",
    org: "BIMachine, Brazil",
    detail:
      "Developed and maintained the BIMachine B2B SaaS using React with Java/Spring, managing $11B+ in customer revenue and 11k+ active users. Led the frontend migration of the Planning app from JSF to React.",
  },
  {
    period: "02/2016 - 12/2021",
    role: "Bachelor of Software Engineering",
    org: "Universidade do Vale do Taquari, Brazil",
    detail: "Leave of absence — 95% completed.",
  },
]

export default function ExperienceApp() {
  return (
    <div className="p-6 space-y-5 text-[color:var(--os-text)]">
      {ITEMS.map((item) => (
        <div key={item.period} className="border-l-2 border-[color:var(--os-accent)] pl-4">
          <span className="text-xs font-mono-os text-[color:var(--os-accent)]">{item.period}</span>
          <h3 className="font-bold mt-0.5">{item.role}</h3>
          <p className="text-sm text-[color:var(--os-text-muted)]">{item.org}</p>
          <p className="text-sm mt-2 leading-relaxed text-[color:var(--os-text-muted)]">{item.detail}</p>
        </div>
      ))}
    </div>
  )
}
