import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Globe2, LineChart, Rocket, Users, Layers } from "lucide-react";

const market = [
  { v: "$22B", l: "Global smart-building controls TAM by 2030" },
  { v: "$6.4B", l: "SAM — commercial real estate with BMS" },
  { v: "$480M", l: "SOM — premium offices in EU + NA over 5y" },
  { v: "37% CAGR", l: "Personal comfort & IEQ tech segment" },
];

const advantages = [
  { icon: Layers, t: "Hardware moat", d: "BMS-grade gateway is hard to replicate without commercial property access and certifications." },
  { icon: Users, t: "Data flywheel", d: "Each occupant strengthens our per-person thermal models — defensible, building-spanning data asset." },
  { icon: Globe2, t: "Regulatory tailwind", d: "EU EPBD, SEC climate disclosure and CSRD make verifiable HVAC reductions a board-level priority." },
  { icon: Rocket, t: "Outcome-based pricing", d: "We capture a share of measured savings + per-seat SaaS — high gross margin, sticky multi-year contracts." },
];

const milestones = [
  { n: "Now", t: "Seed round", d: "$3.5M to scale 6 paying pilots into multi-site rollouts and finalize CE/UL certification." },
  { n: "12 mo", t: "20+ buildings live", d: "Across EU + NA with verified avg. 28% HVAC reduction and 92% tenant NPS." },
  { n: "24 mo", t: "Series A", d: "Channel partnerships with 2 of the top 5 BMS vendors. ARR > $10M." },
  { n: "36 mo", t: "Category leader", d: "Reference layer for personal comfort across REITs and Fortune 500 occupiers." },
];

export default function Investors() {
  return (
    <SiteLayout>
      <section className="container py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">For Investors</p>
        <h1 className="mt-2 max-w-3xl font-display text-5xl font-bold md:text-6xl">
          The <span className="text-gradient-warm">comfort layer</span> for the built world.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          ACE owns the missing intelligence between buildings and the bodies inside them — a
          high-margin, regulation-tailwind play across $22B of smart-building infrastructure.
        </p>
      </section>

      <section className="container pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {market.map((m) => (
            <div key={m.l} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="font-display text-3xl font-bold text-gradient">{m.v}</div>
              <p className="mt-2 text-sm text-muted-foreground">{m.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40 py-20">
        <div className="container">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Why ACE wins</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {advantages.map((a) => (
              <div key={a.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{a.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Roadmap</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m) => (
            <div key={m.n} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">{m.n}</div>
              <h3 className="mt-2 font-display text-lg font-semibold">{m.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-gradient-warm text-accent-foreground hover:opacity-90">
            <Link to="/deck">View pitch deck</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="mailto:investors@ace.energy">Email the founders</a>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
