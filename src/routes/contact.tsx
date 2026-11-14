import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import portrait from "@/assets/portrait-ather.png";
import { TopNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import { SOCIALS } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ather Israq" },
      { name: "description", content: "Start a project with Ather Israq — video editing, motion design, colour grading and photography." },
      { property: "og:title", content: "Contact — Ather Israq" },
      { property: "og:description", content: "Let's work together on your next film or shoot." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const SERVICES = ["Video Editing", "Motion Design", "Color Grading", "Photography", "Graphics", "Other"];

function Contact() {
  const [f, setF] = useState({ name: "", email: "", org: "", services: [] as string[], message: "" });
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${f.name}\nEmail: ${f.email}\nOrganisation: ${f.org}\nServices: ${f.services.join(", ")}\n\n${f.message}`;
    window.location.href = `mailto:${SOCIALS.email}?subject=${encodeURIComponent("Project enquiry — " + f.name)}&body=${encodeURIComponent(body)}`;
  };
  const field = "w-full border-b border-ink/30 bg-transparent py-4 text-xl outline-none placeholder:opacity-40 focus:border-ink";
  return (
    <section className="relative px-6 pb-24 pt-32 md:px-14 md:pt-44">
      <TopNav />
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex items-center gap-5">
          <img src={portrait.url} alt="" className="h-20 w-20 shrink-0 rounded-full bg-ink object-cover object-top md:h-28 md:w-28" />
          <h1 className="font-display text-5xl leading-none md:text-8xl">Let's start a<br />project together</h1>
        </Reveal>
        <div className="mt-16 grid gap-16 md:grid-cols-[1.6fr_1fr]">
          <form onSubmit={send} className="space-y-10">
            {([["01", "What's your name?", "name", "John Doe"], ["02", "What's your email?", "email", "john@doe.com"], ["03", "Organisation?", "org", "Company name"]] as const).map(([n, q, k, ph]) => (
              <Reveal key={k}><label className="block"><span className="text-sm font-semibold opacity-50">{n}</span><span className="mt-1 block text-lg font-semibold">{q}</span>
                <input required={k !== "org"} type={k === "email" ? "email" : "text"} placeholder={ph} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} className={field} /></label></Reveal>
            ))}
            <Reveal><span className="text-sm font-semibold opacity-50">04</span><span className="mt-1 mb-4 block text-lg font-semibold">What are you looking for?</span>
              <div className="flex flex-wrap gap-2">{SERVICES.map((s) => { const on = f.services.includes(s); return (
                <button type="button" key={s} onClick={() => setF({ ...f, services: on ? f.services.filter((x) => x !== s) : [...f.services, s] })} className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${on ? "border-ink bg-ink text-bone" : "border-ink/30"}`}>{s}</button>); })}</div></Reveal>
            <Reveal><label className="block"><span className="text-sm font-semibold opacity-50">05</span><span className="mt-1 block text-lg font-semibold">Your message</span>
              <textarea required rows={4} placeholder="Hello Ather, can you help me with…" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} className={field} /></label></Reveal>
            <button className="grid h-40 w-40 place-items-center rounded-full bg-ink font-semibold text-bone transition-transform hover:scale-105"><span className="flex items-center gap-2">Send it <Send className="h-4 w-4" /></span></button>
          </form>
          <aside className="space-y-10 md:sticky md:top-10 md:self-start">
            <div><p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] opacity-50">Contact details</p><a href={`mailto:${SOCIALS.email}`} className="text-lg font-semibold underline underline-offset-4">{SOCIALS.email}</a></div>
            <div><p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] opacity-50">Socials</p>
              <ul className="space-y-2">{Object.entries(SOCIALS).filter(([k]) => k !== "email").map(([k, h]) => <li key={k}><a href={h} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-lg font-semibold capitalize">{k}<ArrowUpRight className="h-4 w-4" /></a></li>)}</ul></div>
            <div className="rounded-md bg-ink p-6 text-bone"><p className="text-sm opacity-60">Availability</p><p className="mt-1 flex items-center gap-2 font-semibold"><span className="h-2 w-2 animate-pulse rounded-full bg-bone" />Open for new projects</p></div>
          </aside>
        </div>
      </div>
    </section>
  );
}
