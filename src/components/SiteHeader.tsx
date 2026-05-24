import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { to: "/", label: "Home" },
  { to: "/deck", label: "Pitch Deck" },
  { to: "/contact", label: "Contact" },
];

const technologyLinks = [
  { to: "/technology", label: "Technology" },
  { to: "/research", label: "Research" },
];

const stakeholderLinks = [
  { to: "/buildings", label: "For Buildings" },
  { to: "/investors", label: "For Investors" },
];

function NavGroup({ label, links }: { label: string; links: { to: string; label: string }[] }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
        {label}
        <ChevronDown className="h-4 w-4" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 min-w-48 translate-y-2 rounded-xl border border-border bg-card p-2 opacity-0 shadow-elegant transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {links.map((l) => (
          <RouterNavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              cn(
                "block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                isActive && "bg-secondary text-foreground",
              )
            }
          >
            {l.label}
          </RouterNavLink>
        ))}
      </div>
    </div>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <div className="container flex min-h-24 items-center justify-between gap-5 py-3">
        <Link to="/" className="flex shrink-0 items-center overflow-visible" aria-label="Adaptive Climate Engine home">
          <img
            src="/brand/horizontal-lockup-transparent.svg?v=9"
            alt="Adaptive Climate Engine"
            className="block h-auto w-[240px] max-w-[58vw] object-contain sm:w-[300px] lg:w-[340px]"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <RouterNavLink
            to="/"
            end
            className={({ isActive }) =>
              cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                isActive && "bg-secondary text-foreground",
              )
            }
          >
            Home
          </RouterNavLink>
          <NavGroup label="Technology" links={technologyLinks} />
          <NavGroup label="Stakeholders" links={stakeholderLinks} />
          {primaryLinks.slice(1).map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
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
            <Link to="/contact">Book a pilot</Link>
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
            <RouterNavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn("rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary", isActive && "bg-secondary text-foreground")
              }
            >
              Home
            </RouterNavLink>
            <div className="px-3 pt-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Technology</div>
            {technologyLinks.map((l) => (
              <RouterNavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn("rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary", isActive && "bg-secondary text-foreground")
                }
              >
                {l.label}
              </RouterNavLink>
            ))}
            <div className="px-3 pt-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Stakeholders</div>
            {stakeholderLinks.map((l) => (
              <RouterNavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn("rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary", isActive && "bg-secondary text-foreground")
                }
              >
                {l.label}
              </RouterNavLink>
            ))}
            {primaryLinks.slice(1).map((l) => (
              <RouterNavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn("rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary", isActive && "bg-secondary text-foreground")
                }
              >
                {l.label}
              </RouterNavLink>
            ))}
            <Button asChild className="mt-2 bg-gradient-cool text-primary-foreground">
              <Link to="/contact" onClick={() => setOpen(false)}>Book a pilot</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
