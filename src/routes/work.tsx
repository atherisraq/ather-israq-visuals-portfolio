import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TopNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import { AlbumRow, VideoRow } from "@/components/WorkRows";
import { ALBUMS, PHOTO_CATEGORIES, VIDEO_CATEGORIES, VIDEOS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Ather Israq | Photography & Film" },
      { name: "description", content: "Photography and filmmaking work by Ather Israq: portrait, wedding, promo, real estate, motion design and more." },
      { property: "og:title", content: "Work — Ather Israq" },
      { property: "og:description", content: "Photography and filmmaking portfolio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Work,
});

function Chips({ items, value, onChange }: { items: readonly string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="no-scrollbar -mx-6 mb-6 flex gap-2 overflow-x-auto px-6 md:mx-0 md:flex-wrap md:px-0">
      {["All", ...items].map((c) => (
        <button key={c} onClick={() => onChange(c)} className={cn("shrink-0 rounded-full border border-ink/30 px-5 py-2 text-sm font-semibold transition", value === c ? "bg-ink text-bone" : "hover:border-ink")}>{c}</button>
      ))}
    </div>
  );
}

function Work() {
  const [tab, setTab] = useState<"video" | "photo">("video");
  const [vc, setVc] = useState("All");
  const [pc, setPc] = useState("All");
  const vids = VIDEOS.filter((v) => vc === "All" || v.category === vc);
  const albums = ALBUMS.filter((a) => pc === "All" || a.category === pc);
  return (
    <section className="relative px-6 pb-24 pt-32 md:px-14 md:pt-44">
      <TopNav />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h1 className="font-display text-6xl leading-none md:text-9xl">Work</h1>
          <div className="mt-10 inline-flex rounded-full bg-ink/10 p-1">
            {(["video", "photo"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)} className={cn("rounded-full px-6 py-3 text-sm font-semibold transition", tab === t ? "bg-ink text-bone" : "opacity-70")}>
                {t === "video" ? "Filmmaking / Video" : "Photography"}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-10">
          {tab === "video" ? (
            <>
              <Chips items={VIDEO_CATEGORIES} value={vc} onChange={setVc} />
              {vids.length ? vids.map((v, i) => <VideoRow key={v.title} v={v} index={i} />) : <Empty />}
            </>
          ) : (
            <>
              <Chips items={PHOTO_CATEGORIES} value={pc} onChange={setPc} />
              {albums.length ? albums.map((a, i) => <AlbumRow key={a.title} a={a} index={i} />) : <Empty />}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Empty() {
  return <p className="border-t border-ink/20 py-16 opacity-60">New work in this category is coming soon.</p>;
}
