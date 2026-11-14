import { Link } from "@tanstack/react-router";
import { Home, User, Clapperboard, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/about", label: "About", Icon: User },
  { to: "/work", label: "Work", Icon: Clapperboard },
  { to: "/contact", label: "Contact", Icon: Mail },
] as const;

export function TopNav({ dark = false }: { dark?: boolean }) {
  return (
    <header className={cn("absolute inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-6 md:px-14 md:py-10", dark ? "text-bone" : "text-ink")}>
      <Link to="/" className="text-sm font-semibold md:text-lg">© Ather Israq Visuals</Link>
      <nav className="hidden gap-10 text-lg font-semibold md:flex">
        {ITEMS.slice(1).map(({ to, label }) => (
          <Link key={to} to={to} className="group relative" activeProps={{ className: "opacity-100" }}>
            {label}
            <span className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 scale-0 rounded-full bg-current transition-transform group-hover:scale-100" />
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function BottomTabBar() {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-4 rounded-2xl border border-bone/10 bg-ink/95 p-1.5 text-bone shadow-2xl backdrop-blur md:hidden" style={{ paddingBottom: "max(0.375rem, env(safe-area-inset-bottom))" }}>
      {ITEMS.map(({ to, label, Icon }) => (
        <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className="flex flex-col items-center gap-1 rounded-xl py-2 text-[11px] font-medium opacity-60 transition"
          activeProps={{ className: "bg-bone/10 !opacity-100" }}>
          <Icon className="h-5 w-5" />{label}
        </Link>
      ))}
    </nav>
  );
}
