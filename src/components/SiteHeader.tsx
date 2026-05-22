import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/technology", label: "Technology" },
  { to: "/buildings", label: "For Buildings" },
  { to: "/investors", label: "For Investors" },
  { to: "/research", label: "Research" },
  { to: "/deck", label: "Pitch Deck" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <div className="container flex min-h-24 items-center justify-between gap-5 py-3">
        <Link to="/" className="flex shrink-0 items-center overflow-visible" aria-label="Adaptive Climate Engine home">
          <img
            src="/brand/ace-logo-horizontal.svg?v=9"
            alt="Adaptive Climate Engine"
            className="block h-auto w-[240px] max-w-[58vw] object-contain sm:w-[300px] lg:w-[340px]"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                  isActive && "bg-secondary text-foreground",
                )
              }
            >
              {l.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-gradient-cool text-primary-foreground hover:opacity-90">
            <Link to="/buildings#contact">Book a pilot</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="container flex flex-col gap-1 py-3">
            {links.map((l) => (
              <RouterNavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary",
                    isActive && "bg-secondary text-foreground",
                  )
                }
              >
                {l.label}
              </RouterNavLink>
            ))}
            <Button asChild className="mt-2 bg-gradient-cool text-primary-foreground">
              <Link to="/buildings#contact" onClick={() => setOpen(false)}>Book a pilot</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
