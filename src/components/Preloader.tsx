import { useEffect, useState } from "react";
import { GREETINGS } from "@/lib/site-data";

export function Preloader() {
  const [i, setI] = useState(0);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("greeted")) { setGone(true); return; }
    if (i < GREETINGS.length - 1) {
      const t = setTimeout(() => setI(i + 1), i === 0 ? 900 : i < 3 ? 420 : 170);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => { setDone(true); sessionStorage.setItem("greeted", "1"); setTimeout(() => setGone(true), 900); }, 500);
    return () => clearTimeout(t);
  }, [i]);
  if (gone) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink text-bone transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
      style={{ transform: done ? "translateY(-100%)" : "none", borderBottomLeftRadius: done ? "50% 20%" : 0, borderBottomRightRadius: done ? "50% 20%" : 0 }}
    >
      <p key={i} className="flex items-center gap-4 text-3xl font-medium md:text-5xl animate-in fade-in duration-300">
        <span className="h-2.5 w-2.5 rounded-full bg-bone" /> {GREETINGS[i]}
      </p>
    </div>
  );
}
