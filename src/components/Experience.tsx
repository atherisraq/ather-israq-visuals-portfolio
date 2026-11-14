import { EXPERIENCE } from "@/lib/site-data";
import { Reveal, SectionTitle } from "./Reveal";

export function ExperienceSection() {
  return (
    <section className="px-6 py-24 md:px-14 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Career" title="Experience" />
        <div className="border-t border-ink/20">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="grid gap-2 border-b border-ink/20 py-8 md:grid-cols-[1fr_1fr_auto] md:items-baseline md:gap-8">
                <h3 className="text-2xl font-semibold md:text-3xl">{e.role}</h3>
                <p className="opacity-70">{e.org} — {e.detail}</p>
                <p className="text-sm font-semibold uppercase tracking-widest opacity-60">{e.period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
