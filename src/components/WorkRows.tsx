import { ArrowUpRight } from "lucide-react";
import type { Album, Video } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function VideoRow({ v, index }: { v: Video; index: number }) {
  const url = `https://www.youtube.com/watch?v=${v.id}`;
  const embed = `https://www.youtube.com/embed/${v.id}?autoplay=1&mute=1&loop=1&playlist=${v.id}&controls=0&modestbranding=1&playsinline=1&rel=0`;
  return (
    <Reveal>
      <div className="grid gap-6 border-t border-ink/20 py-10 md:grid-cols-[1fr_1.3fr] md:items-center md:gap-14 md:py-14">
        <div className="order-2 md:order-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] opacity-50">{String(index + 1).padStart(2, "0")} · {v.category}</p>
          <h3 className="text-3xl font-semibold leading-tight md:text-4xl">{v.title}</h3>
          <p className="mt-4 max-w-md leading-relaxed opacity-70">{v.summary}</p>
          <a href={url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold underline underline-offset-4">Watch on YouTube <ArrowUpRight className="h-4 w-4" /></a>
        </div>
        <a href={url} target="_blank" rel="noreferrer" aria-label={`Watch ${v.title} on YouTube`} className="relative order-1 block aspect-video overflow-hidden rounded-md bg-ink md:order-2">
          <iframe src={embed} title={v.title} loading="lazy" allow="autoplay; encrypted-media" className="pointer-events-none absolute inset-0 h-full w-full scale-[1.2]" />
        </a>
      </div>
    </Reveal>
  );
}

export function AlbumRow({ a, index }: { a: Album; index: number }) {
  return (
    <Reveal>
      <div className="grid gap-6 border-t border-ink/20 py-10 md:grid-cols-[1fr_1.3fr] md:items-center md:gap-14 md:py-14">
        <div className="order-2 md:order-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] opacity-50">{String(index + 1).padStart(2, "0")} · {a.category}</p>
          <h3 className="text-3xl font-semibold leading-tight md:text-4xl">{a.title}</h3>
          <p className="mt-4 max-w-md leading-relaxed opacity-70">{a.summary}</p>
          <a href={a.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold underline underline-offset-4">View album <ArrowUpRight className="h-4 w-4" /></a>
        </div>
        <a href={a.link} target="_blank" rel="noreferrer" aria-label={`Open album ${a.title}`} className="order-1 block aspect-[4/3] overflow-hidden rounded-md bg-ink md:order-2">
          <img src={a.cover} alt={a.title} loading="lazy" className="h-full w-full object-cover grayscale-[30%]" />
        </a>
      </div>
    </Reveal>
  );
}
