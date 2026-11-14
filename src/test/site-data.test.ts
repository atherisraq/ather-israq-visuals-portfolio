import { describe, expect, it } from "vitest";
import { ALBUMS, GREETINGS, SOCIALS, VIDEOS } from "@/lib/site-data";

describe("Supplied portfolio content", () => {
  it("excludes Nomoskar while keeping the requested greetings", () => {
    expect(GREETINGS).not.toContain("নমস্কার");
    expect(GREETINGS).not.toContain("Nomoskar");
    expect(GREETINGS).toContain("Assalamu' Alaikum");
    expect(GREETINGS).toContain("Adab");
  });
  it("uses the supplied first promo video", () => {
    expect(VIDEOS[0]?.id).toBe("NN9Tsv7mHuQ");
  });
  it("uses the supplied first portrait post", () => {
    expect(ALBUMS[0]?.link).toBe("https://www.instagram.com/p/DbiI7kGGNNX/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==");
  });
  it("preserves the supplied social URLs exactly", () => {
    expect(SOCIALS.instagram).toBe("https://www.instagram.com/atherisraqphotosgraphy/");
    expect(SOCIALS.facebook).toBe("https://www.instagram.com/@atherisraqphotosgraphy");
    expect(SOCIALS.youtube).toBe("https://www.youtube.com/@atherisraqphotosgraphy");
  });
});