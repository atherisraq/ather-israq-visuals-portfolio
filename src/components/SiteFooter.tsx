import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SOCIALS } from "@/lib/site-data";

export function SiteFooter() {
  const links = [["YouTube", SOCIALS.youtube], ["Instagram", SOCIALS.instagram], ["Facebook", SOCIALS.facebook], ["Behance", SOCIALS.behance], ["LinkedIn", SOCIALS.linkedin]];
  return (
    <footer className="bg-ink px-6 pb-32 pt-20 text-bone md:px-14 md:pb-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-display text-5xl leading-none md:text-8xl">Let's create<br />something.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={`mailto:${SOCIALS.email}`} className="rounded-full bg-bone px-6 py-3 font-semibold text-ink transition hover:opacity-90">{SOCIALS.email}</a>
          <Link to="/contact" className="rounded-full border border-bone/30 px-6 py-3 font-semibold transition hover:bg-bone hover:text-ink">Contact page</Link>
        </div>
        <div className="mt-16 flex flex-col gap-6 border-t border-bone/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm opacity-60">&any, all rights reserved by Ather Israq Chowdhury</p>
          <div className="flex flex-wrap gap-5 text-sm">
            {links.map(([l, h]) => <a key={l} href={h} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 opacity-80 hover:opacity-100">{l}<ArrowUpRight className="h-3.5 w-3.5" /></a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
