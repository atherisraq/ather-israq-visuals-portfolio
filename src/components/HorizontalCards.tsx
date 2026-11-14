import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";

export function HorizontalCards({ eyebrow, title, items }: { eyebrow: string; title: string; items: { name: string; note?: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => ref.current?.scrollBy({ left: d * 340, behavior: "smooth" });
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl items-end justify-between px-6 md:px-14">
        <SectionTitle eyebrow={eyebrow} title={title} className="mb-10" />
        <div className="mb-10 hidden gap-2 md:flex">
          <button aria-label="Previous" onClick={() => scroll(-1)} className="rounded-full border border-ink/30 p-3 transition hover:bg-ink hover:text-bone"><ArrowLeft className="h-5 w-5" /></button>
          <button aria-label="Next" onClick={() => scroll(1)} className="rounded-full border border-ink/30 p-3 transition hover:bg-ink hover:text-bone"><ArrowRight className="h-5 w-5" /></button>
        </div>
      </div>
      <div ref={ref} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:px-14">
        {items.map((it, i) => (
          <Reveal key={it.name} delay={i * 70} className="snap-start">
            <div className="group relative flex h-56 w-72 shrink-0 flex-col justify-between overflow-hidden rounded-md border border-ink/20 p-6 transition-colors duration-500 hover:bg-ink hover:text-bone md:h-64 md:w-80">
              <span className="text-sm font-semibold opacity-50">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-2xl font-semibold transition-transform duration-500 group-hover:-translate-y-1">{it.name}</h3>
                {it.note && <p className="mt-2 text-sm opacity-60">{it.note}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
