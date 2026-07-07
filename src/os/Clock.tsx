import {useState, useEffect} from "react";

export function Clock() {
  const [now, setNow] = useState<string>("")

  useEffect(() => {
    const tick = () => setNow(new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"}));

    tick();
    const id = setInterval(tick, 1000);

    return () => clearInterval(id)
  }, [])

  return <span className="text-xs font-mono-os text-[color:var(--os-text)]">{now}</span>
}
