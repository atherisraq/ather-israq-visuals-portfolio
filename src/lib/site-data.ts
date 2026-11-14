// Replace placeholder links/IDs with your real content.
export const SOCIALS = {
  email: "hello@atherisraq.com",
  youtube: "https://www.youtube.com/@atherisraqphotosgraphy",
  facebook: "https://www.instagram.com/@atherisraqphotosgraphy",
  instagram: "https://www.instagram.com/atherisraqphotosgraphy/",
  behance: "https://behance.net/atherisraq",
  linkedin: "https://linkedin.com/in/atherisraq",
};

export type Video = { id: string; title: string; summary: string; category: string };
export const VIDEOS: Video[] = [
  { id: "NN9Tsv7mHuQ", title: "Promo Video 01", category: "Promo", summary: "Promotional video by Ather Israq Chowdhury." },
  { id: "aqz-KE-bpKQ", title: "Lakeview Residence", category: "Real Estate Promo", summary: "A cinematic walkthrough of a modern residence — slow camera moves, warm grade and an ambient score to sell the space." },
  { id: "aqz-KE-bpKQ", title: "Kinetic Type Reel", category: "Motion Design", summary: "Typography in motion: a study of timing, easing and composition across thirty seconds of pure design." },
  { id: "aqz-KE-bpKQ", title: "Behind the Lens", category: "YouTube", summary: "A YouTube documentary-style episode on how a single frame gets made, from location scouting to final colour." },
  { id: "aqz-KE-bpKQ", title: "Festival Aftermovie", category: "Promo", summary: "Three days condensed into three minutes — energy-driven editing with layered sound design and punchy colour." },
];

export const PHOTO_CATEGORIES = ["Portrait", "Wedding", "Sports", "Fashion", "Architecture", "Landscape", "Street"] as const;
export const VIDEO_CATEGORIES = ["Promo", "Real Estate Promo", "Motion Design", "YouTube"] as const;

const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=70`;
export type Album = { title: string; summary: string; cover: string; link: string; category: string };
export const ALBUMS: Album[] = [
  { title: "Portrait 01", category: "Portrait", summary: "Portrait photography by Ather Israq Chowdhury.", cover: u("1500648767791-00dcc994a43e"), link: "https://www.instagram.com/p/DbiI7kGGNNX/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==" },
  { title: "Vows in Gold", category: "Wedding", summary: "A traditional Bengali wedding, documented with candid warmth.", cover: u("1519741497674-611481863552"), link: SOCIALS.facebook },
  { title: "Match Point", category: "Sports", summary: "Peak-action moments frozen at the edge of motion.", cover: u("1461896836934-ffe607ba8211"), link: SOCIALS.instagram },
  { title: "Noir Couture", category: "Fashion", summary: "Editorial fashion story with hard light and bold silhouettes.", cover: u("1509631179647-0177331693ae"), link: SOCIALS.behance },
  { title: "Concrete Lines", category: "Architecture", summary: "Geometry, symmetry and the quiet drama of built spaces.", cover: u("1487958449943-2429e8be8625"), link: SOCIALS.behance },
  { title: "Dhaka After Dark", category: "Street", summary: "Night walks through the city — neon, rain and strangers.", cover: u("1477959858617-67f85cf4f1df"), link: SOCIALS.instagram },
  { title: "Tea Hills", category: "Landscape", summary: "Morning mist rolling over the hills of Sylhet.", cover: u("1500530855697-b586d89ba3ee"), link: SOCIALS.instagram },
];

export const SKILLS = ["Video Editing", "Graphics Design", "Motion Design", "Color Grading", "Sound Design"];
export const SOFTWARE = [
  { name: "DaVinci Resolve", note: "Edit · Colour · Fairlight" },
  { name: "Adobe Creative Apps", note: "Premiere · After Effects · Photoshop · Illustrator" },
  { name: "Blender", note: "3D · Modelling · Rendering" },
  { name: "Unreal Engine", note: "Real-time · Virtual Production" },
];

export const EXPERIENCE = [
  { role: "Lead Video Editor", org: "Studio Name", period: "2023 — Present", detail: "Leading post-production for brand campaigns and YouTube channels." },
  { role: "Motion Designer", org: "Agency Name", period: "2021 — 2023", detail: "Motion graphics, title design and social content for clients." },
  { role: "Freelance Photographer", org: "Self-employed", period: "2019 — Present", detail: "Portrait, wedding and commercial photography." },
];

export const GREETINGS = ["Hello", "Assalamu' Alaikum", "Adab", "Bonjour", "Hola", "Ciao", "Hallo", "こんにちは"];
