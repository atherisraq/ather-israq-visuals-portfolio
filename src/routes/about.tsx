import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import portrait from "@/assets/portrait-ather.png";
import cv from "@/assets/ather-israq-cv.pdf";
import { TopNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import { ExperienceSection } from "@/components/Experience";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ather Israq Chowdhury" },
      { name: "description", content: "About Ather Israq Chowdhury, visual and creative artist: background, experience and CV." },
      { property: "og:title", content: "About — Ather Israq Chowdhury" },
      { property: "og:description", content: "Background, experience and CV of Ather Israq." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative px-6 pb-20 pt-32 md:px-14 md:pt-44">
        <TopNav />
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-md bg-ink">
              <img src={portrait} alt="Ather Israq Chowdhury" className="w-full object-contain pt-10" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] opacity-60">About</p>
            <h1 className="font-display text-6xl leading-none md:text-8xl">Ather Israq Chowdhury</h1>
            <p className="mt-8 text-lg leading-relaxed opacity-80">I'm a visual and creative artist working across filmmaking, video editing, motion design and photography. I craft stories that feel cinematic — from the first cut to the final colour grade.</p>
            <p className="mt-4 leading-relaxed opacity-70">More about my journey, approach and the people I've worked with is coming soon.</p>
          </Reveal>
        </div>
      </section>
      <ExperienceSection />
      <section className="px-6 pb-24 md:px-14">
        <Reveal className="mx-auto flex max-w-7xl flex-col gap-8 rounded-md bg-ink p-10 text-bone md:flex-row md:items-center md:justify-between md:p-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] opacity-60">Curriculum Vitae</p>
            <h2 className="font-display text-5xl leading-none md:text-6xl">Download my CV</h2>
          </div>
          <a href={cv} download="Ather-Israq-CV.pdf" className="inline-flex items-center gap-3 self-start rounded-full bg-bone px-8 py-4 font-semibold text-ink transition hover:opacity-90"><Download className="h-5 w-5" /> CV (PDF)</a>
        </Reveal>
      </section>
    </>
  );
}