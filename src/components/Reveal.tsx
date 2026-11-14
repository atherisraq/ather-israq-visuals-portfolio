import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => { if (entries[0]?.isIntersecting) { el.classList.add("is-in"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function SectionTitle({ eyebrow, title, className }: { eyebrow: string; title: string; className?: string }) {
  return (
    <Reveal className={cn("mb-10 md:mb-16", className)}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] opacity-60">{eyebrow}</p>
      <h2 className="font-display text-5xl leading-none md:text-7xl">{title}</h2>
    </Reveal>
  );
}
