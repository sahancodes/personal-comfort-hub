import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  TrendingUp, Globe2, Rocket, Users, Layers, Building2, Zap, Leaf, Brain, ShieldCheck,
} from "lucide-react";

const market = [
  { v: "~40%", l: "of EU energy use is from buildings", id: "hvac-energy-share" },
  { v: "$22B", l: "smart-building controls TAM by 2030", id: "tam" },
  { v: "10–20%", l: "potential HVAC energy reduction", id: "energy-reduction" },
  { v: "2×-digit", l: "CAGR — personal comfort & IEQ tech", id: "cagr" },
];

const narrative = [
  { icon: Building2, t: "Massive retrofit market", d: "Most commercial buildings are legacy. Full BMS replacement is expensive and disruptive — leaving a large gap for retrofit-friendly middleware." },
  { icon: Zap, t: "Energy-efficiency pressure", d: "Volatile energy prices push HVAC waste onto the CFO's desk. Edge optimization is a low-CAPEX path to verifiable savings." },
  { icon: Leaf, t: "ESG & smart-building demand", d: "EU EPBD, CSRD and SEC climate disclosure require defensible Scope 2 reductions and healthier workplaces." },
  { icon: Brain, t: "AI & edge computing trend", d: "Practical, on-prem AI is finally credible for mission-critical operations like HVAC and comfort." },
  { icon: Users, t: "Clear, dual pain point", d: "Tenant comfort complaints + HVAC energy waste. Two CFO-visible problems, one middleware layer." },
  { icon: Rocket, t: "Scalable hardware-enabled SaaS", d: "Pilot-to-portfolio expansion model: land on one floor, expand to building, then portfolio." },
];

const advantages = [
  { icon: Layers, t: "Retrofit-friendly middleware moat", d: "Vendor-neutral integration across BACnet, Modbus, KNX, Priva and major BMS — hard for incumbents to replicate." },
  { icon: Users, t: "Human-in-the-loop data flywheel", d: "Each occupant strengthens per-zone and per-person comfort models — a defensible, building-spanning dataset." },
  { icon: Globe2, t: "Regulatory tailwind", d: "EU EPBD, CSRD, SEC climate rules make verifiable HVAC reductions a board-level priority." },
  { icon: ShieldCheck, t: "Pilot-first credibility", d: "Read-only / advisory mode lowers buyer risk — accelerating from pilot to portfolio without contractual friction." },
];

const businessModel = [
  { t: "Pilot project fee", d: "One-time fee for site survey, baseline and pilot setup on one floor or zone." },
  { t: "Installation / integration", d: "Edge gateway, sensors and personal comfort device integration with the existing BMS." },
  { t: "Annual SaaS subscription", d: "Per-occupant or per-m² software subscription for the comfort engine and console." },
  { t: "Optional savings share", d: "Outcome-based performance component on verified HVAC energy savings (M&V)." },
  { t: "Portfolio analytics (future)", d: "Cross-building benchmarking and ESG reporting layer for asset managers and REITs." },
];

const milestones = [
  { n: "Now", t: "Pilot preparation", d: "Research-backed concept, prototype direction, founder expertise, building partners in conversation." },
  { n: "0–12 mo", t: "MVP → pilot building", d: "Edge hub + personal comfort device integration on a first pilot floor." },
  { n: "12–24 mo", t: "Floor rollout", d: "Expand across floors, validate savings, deepen integration partnerships." },
  { n: "24–36 mo", t: "Portfolio rollout", d: "Multi-building deployment, standardized rollout, ESG reporting layer." },
];

const whyNow = [
  "Rising and volatile energy costs",
  "Stronger sustainability and disclosure requirements (EPBD, CSRD)",
  "Demand for healthier, more comfortable workplaces",
  "Aging legacy buildings needing modernization without full retrofit",
  "Growing acceptance of edge AI and IoT in building operations",
];

export default function Investors() {
  return (
    <SiteLayout>
      <section className="container py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">For Investors</p>
        <h1 className="mt-2 max-w-3xl font-display text-5xl font-bold md:text-6xl">
          The <span className="text-gradient-warm">retrofit-friendly middleware</span> for legacy buildings.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Adaptive Climate Engine targets the gap between traditional BMS and expensive full
          smart-building renovation. Edge-based human-centric middleware that improves comfort,
          reduces HVAC waste and extends the life of legacy systems.
        </p>
      </section>

      <section className="container pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {market.map((m) => (
            <Link
              to={m.id ? `/research#${m.id}` : "/research"}
              key={m.l}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-elegant"
            >
              <div className="font-display text-3xl font-bold text-gradient">{m.v}</div>
              <p className="mt-2 text-sm text-muted-foreground">{m.l}</p>
              <span className="mt-3 inline-flex text-[11px] font-semibold uppercase tracking-wider text-accent">Research-backed →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Investor narrative */}
      <section className="border-y border-border/60 bg-secondary/40 py-20">
        <div className="container">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Why this is a strong startup opportunity</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {narrative.map((a) => (
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

      {/* Business model */}
      <section className="container py-20">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Business model</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Scalable hardware-enabled SaaS with a pilot-first land-and-expand motion.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businessModel.map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-display text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Defensibility */}
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

      {/* Why now */}
      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why now?</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
              A retrofit window opens.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Several structural forces are converging — making practical, edge-based retrofit
              middleware the right shape of solution at the right moment.
            </p>
          </div>
          <ul className="space-y-3">
            {whyNow.map((w) => (
              <li key={w} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
                <TrendingUp className="mt-0.5 h-4 w-4 text-accent" />
                <span className="text-sm">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Roadmap */}
      <section className="container pb-24">
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
            <Link to="/buildings#contact">Become a pilot partner</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
