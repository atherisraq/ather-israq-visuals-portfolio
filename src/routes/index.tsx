import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import portrait from "@/assets/portrait-ather.png";
import { TopNav } from "@/components/SiteNav";
import { Reveal, SectionTitle } from "@/components/Reveal";
import { VideoRow, AlbumRow } from "@/components/WorkRows";
import { HorizontalCards } from "@/components/HorizontalCards";
import { ExperienceSection } from "@/components/Experience";
import { ALBUMS, SKILLS, SOFTWARE, VIDEOS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ather Israq — Visual & Creative Artist" },
      { name: "description", content: "Filmmaker, video editor, motion designer and photographer. Explore Ather Israq's best work." },
      { property: "og:title", content: "Ather Israq — Visual & Creative Artist" },
      { property: "og:description", content: "Filmmaker, video editor, motion designer and photographer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function AnimatedName({ text }: { text: string }) {
  return (
    <span aria-label={text} className="inline-flex flex-wrap gap-x-[0.25em]">
      {text.split(" ").map((w, wi) => (
        <span key={wi} aria-hidden className="inline-flex whitespace-nowrap">
          {w.split("").map((c, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
              <span className="animate-letter inline-block" style={{ animationDelay: `${2.6 + (wi * 6 + i) * 0.06}s` }}>{c}</span>
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}

function Hero() {
  return (
    <section className="portfolio-hero relative overflow-hidden bg-ink text-bone">
      <TopNav dark />
      <img src={portrait} alt="Portrait of Ather Israq" className="hero-portrait absolute object-contain object-bottom" />
      <div className="hero-heading absolute z-10 min-w-0">
        <h1 className="hero-name font-display leading-[0.95]"><AnimatedName text="ATHER ISRAQ" /></h1>
        <p className="mt-4 text-base font-semibold md:text-xl animate-in fade-in slide-in-from-bottom-2 fill-mode-both delay-[3300ms] duration-700">Visual &amp; Creative Artist</p>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <section className="px-6 py-24 md:px-14 md:py-36">
        <Reveal className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[2fr_1fr]">
          <p className="text-2xl font-medium leading-snug md:text-4xl">Helping brands and stories stand out through film, motion and photography. Every frame cut, graded and sound-designed with intention.</p>
          <div className="flex flex-col items-start justify-between gap-6">
            <p className="opacity-70">Based in Bangladesh, working worldwide. Editor, colourist and photographer.</p>
            <Link to="/about" className="grid h-36 w-36 place-items-center rounded-full bg-ink font-semibold text-bone transition-transform hover:scale-105">About me</Link>
          </div>
        </Reveal>
      </section>

      <section className="px-6 md:px-14">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Best Work · 01" title="Films & Videos" />
          {VIDEOS.map((v, i) => <VideoRow key={i} v={v} index={i} />)}
        </div>
      </section>

      <section className="px-6 pt-24 md:px-14 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Best Work · 02" title="Photography" />
          {ALBUMS.slice(0, 6).map((a, i) => <AlbumRow key={a.title} a={a} index={i} />)}
          <div className="border-t border-ink/20 pt-10">
            <Link to="/work" className="inline-flex items-center gap-3 rounded-full border border-ink px-8 py-4 font-semibold transition hover:bg-ink hover:text-bone">All work <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <HorizontalCards eyebrow="What I do" title="Skills" items={SKILLS.map((name) => ({ name }))} />
      <HorizontalCards eyebrow="Toolkit" title="Editing Software" items={SOFTWARE} />
      <ExperienceSection />
    </>
  );
}