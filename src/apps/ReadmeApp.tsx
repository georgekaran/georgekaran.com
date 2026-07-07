export default function ReadmeApp() {
  return (
    <div className="p-6 font-mono-os text-sm leading-relaxed text-[color:var(--os-text)] space-y-3">
      <p>$ cat README.txt</p>
      <p className="text-[color:var(--os-text-muted)]">
        Welcome to GeorgeOS — a portfolio pretending to be an operating system.
      </p>
      <p className="text-[color:var(--os-text-muted)]">
        Everything here is a window: drag it, resize it, stack it, close it. Click the icons on the
        desktop (or use the ◆ menu up top) to open apps. Start with{" "}
        <span className="text-[color:var(--os-accent)]">About Me</span>, poke around{" "}
        <span className="text-[color:var(--os-accent)]">Projects</span>, and hit{" "}
        <span className="text-[color:var(--os-accent)]">Contact</span> if you want to talk.
      </p>
      <p className="text-[color:var(--os-text-muted)]">
        No cookies, no trackers, no newsletter pop-up. Just me. — George
      </p>
    </div>
  )
}
