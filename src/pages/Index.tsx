import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Thermometer,
  Users,
  Leaf,
  Activity,
  CheckCircle2,
  Sparkles,
  Building2,
  Gauge,
  Brain,
  Plug,
  Wind,
  Flame,
  Droplets,
  Sun,
  Snowflake,
  Fan,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteLayout from "@/components/SiteLayout";
import heroImg from "@/assets/hero-office.jpg";

const liveUpdates = [
  { icon: Thermometer, zone: "Comfort layer", msg: "Comfort feedback received → localized response evaluated", saved: "Illustrative" },
  { icon: Fan, zone: "Building trend", msg: "Condition trend detected → optimization opportunity identified", saved: "Illustrative" },
  { icon: Flame, zone: "Occupant feedback", msg: "Comfort preference updated → future recommendations refined", saved: "Illustrative" },
  { icon: Droplets, zone: "Environmental signals", msg: "Building signals reviewed → comfort evaluation refreshed", saved: "Illustrative" },
  { icon: Snowflake, zone: "Advisory layer", msg: "Advisory comfort optimization prepared for validation", saved: "Illustrative" },
  { icon: Sun, zone: "Pilot scope", msg: "Local comfort response coordinated within pilot boundaries", saved: "Illustrative" },
  { icon: Wind, zone: "Edge layer", msg: "Proprietary comfort intelligence evaluates next action", saved: "Illustrative" },
  { icon: Brain, zone: "Comfort engine", msg: "Human-centric feedback included in comfort evaluation", saved: "Illustrative" },
  { icon: Gauge, zone: "Building operation", msg: "Energy-saving opportunity identified without exposing internal logic", saved: "Illustrative" },
  { icon: Leaf, zone: "Building total", msg: "Comfort and energy signals prepared for pilot-based measurement", saved: "Illustrative" },
];

const heroStats = [
  { value: "10–20%", label: "potential HVAC energy reduction", id: "energy-reduction" },
  { value: "40–43%", label: "of office occupants report thermal discomfort", id: "occupant-dissatisfaction" },
  { value: "2–5%", label: "potential productivity uplift", id: "productivity-loss" },
  { value: "No", label: "rip-and-replace of existing BMS", id: "" },
];

const features = [
  {
    icon: Plug,
    title: "Works with existing building systems",
    desc: "Retrofit-friendly middleware designed to work alongside existing building infrastructure without requiring full BMS replacement.",
  },
  {
    icon: Brain,
    title: "Proprietary comfort intelligence",
    desc: "Combines building signals and occupant feedback through a proprietary edge comfort engine while keeping the internal logic confidential.",
  },
  {
    icon: Gauge,
    title: "Supports advisory HVAC optimization",
    desc: "Provides high-level optimization support for comfort and energy performance while existing BMS safety logic remains authoritative.",
  },
  {
    icon: Leaf,
    title: "Supports ESG & future-readiness",
    desc: "Helps extend the useful life of legacy systems and supports pilot-based evaluation of comfort, energy and operational impact.",
  },
];

const steps = [
  { n: "01", title: "Sense", desc: "Building signals and human-centric feedback are used as inputs to a proprietary comfort evaluation process." },
  { n: "02", title: "Decide locally", desc: "The edge comfort engine supports local decision-making while detailed algorithms and control logic remain proprietary." },
  { n: "03", title: "Act", desc: "ACE supports localized comfort coordination and a high-level advisory layer for existing building systems." },
];

export default function Index() {
  const [updateIdx, setUpdateIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setUpdateIdx((i) => {
          let next = Math.floor(Math.random() * liveUpdates.length);
          if (next === i) next = (next + 1) % liveUpdates.length;
          return next;
        });
        setVisible(true);
      }, 280);
    }, 3200);
    return () => clearInterval(interval);
  }, []);
  const update = liveUpdates[updateIdx];
  const UpdateIcon = update.icon;
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-surface" />
        <div className="absolute inset-0 -z-10 opacity-[0.07] [background-image:radial-gradient(hsl(var(--primary))_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="container grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur animate-fade-in">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Edge-based human-centric BMS middleware
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
              Make legacy buildings
              <span className="block text-gradient">smarter, greener, more comfortable.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground animate-fade-up [animation-delay:120ms]">
              Adaptive Climate Engine is human-centric AI middleware for legacy buildings.
              It connects to existing building systems and combines building signals, occupant feedback
              and proprietary edge intelligence to support personal comfort and reduce HVAC energy waste without
              expensive BMS replacement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up [animation-delay:240ms]">
              <Button asChild size="lg" className="bg-gradient-cool text-primary-foreground shadow-glow hover:opacity-90">
                <Link to="/buildings#contact">
                  Book a Pilot <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/technology">View Technology</Link>
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {heroStats.map((s) =>
                s.id ? (
                  <Link
                    key={s.label}
                    to={`/research#${s.id}`}
                    className="group block rounded-lg outline-none transition hover:bg-secondary/60 focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <dt className="font-display text-2xl font-bold text-foreground md:text-3xl group-hover:text-primary">
                      {s.value}
                    </dt>
                    <dd className="mt-1 text-xs text-muted-foreground">
                      {s.label} <span className="underline decoration-dotted">source</span>
                    </dd>
                  </Link>
                ) : (
                  <div key={s.label}>
                    <dt className="font-display text-2xl font-bold text-foreground md:text-3xl">{s.value}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                  </div>
                ),
              )}
            </dl>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
              <img
                src={heroImg}
                alt="Open-plan office with personalized thermal comfort zones"
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-6 pt-16">
                <div
                  key={updateIdx}
                  className={`flex items-center gap-3 rounded-2xl border border-border bg-card/90 p-5 backdrop-blur transition-all duration-300 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                  style={{ minHeight: "88px" }}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground animate-pulse-glow">
                    <UpdateIcon className="h-5 w-5" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                      </span>
                      {update.zone}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">{update.msg}</div>
                  </div>
                  <span className="text-xs font-semibold text-primary whitespace-nowrap">{update.saved}</span>
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
                  Illustrative simulation. Actual control behaviour, algorithms and integration logic are proprietary and validated during pilot deployment.
                </p>
              </div>
            </div>
            <div className="absolute -right-6 -top-6 hidden h-28 w-28 rounded-full bg-gradient-warm opacity-30 blur-2xl md:block" />
            <div className="absolute -left-6 bottom-12 hidden h-32 w-32 rounded-full bg-gradient-cool opacity-30 blur-2xl md:block" />
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container py-10 text-center">
          <p className="font-display text-2xl md:text-3xl">
            HVAC provides the base climate.{" "}
            <span className="text-accent">Adaptive Climate Engine delivers personal comfort.</span>
          </p>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="container py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">The problem</p>
              <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
                Legacy buildings: zonal control, average comfort, wasted energy.
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                Legacy BMS use zonal HVAC control, sensor-only logic and fixed setpoints. The result
                is overcooling, overheating, occupant complaints and unnecessary HVAC energy waste,
                and most full BMS replacements are too expensive and disruptive to justify.
              </p>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                Research-backed benchmarks (
                <Link to="/research" className="underline decoration-dotted hover:text-primary">
                  see sources
                </Link>
                ). Actual figures depend on building type, climate, operation and occupancy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "40–43%", l: "of occupants report thermal discomfort", id: "occupant-dissatisfaction" },
                { v: "~40%", l: "of EU energy use is from buildings", id: "hvac-energy-share" },
                { v: "40–60%", l: "of building energy goes to HVAC", id: "hvac-energy-share" },
                { v: "6–10% / °C", l: "potential HVAC savings per °C of wider operating range", id: "deadband" },
              ].map((s) => (
                <Link
                  to={`/research#${s.id}`}
                  key={s.l}
                  className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-elegant"
                >
                  <div className="font-display text-3xl font-bold text-gradient">{s.v}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                    Research-backed <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">The solution</p>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
            A retrofit-friendly proprietary comfort layer.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Adaptive Climate Engine works alongside existing building systems as a human-centric comfort intelligence layer.
            It supports localized comfort and high-level HVAC optimization while keeping the underlying methods proprietary.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-muted-foreground">{f.desc}</p>
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-cool opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">How it works</p>
              <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Sense. Decide locally. Support comfort.</h2>
              <p className="mt-4 max-w-md text-primary-foreground/80">
                Building signals and occupant feedback feed a proprietary edge comfort engine. The public site shows the concept only; internal logic remains confidential.
              </p>
            </div>
            <div className="grid gap-6 lg:col-span-7 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur">
                  <div className="font-display text-3xl font-bold text-accent">{s.n}</div>
                  <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/75">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="grid gap-6 md:grid-cols-2">
          <Link to="/buildings" className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-cool p-10 text-primary-foreground shadow-elegant transition-transform hover:-translate-y-1">
            <Building2 className="h-10 w-10" />
            <h3 className="mt-6 font-display text-3xl font-bold">For Building Owners</h3>
            <p className="mt-2 max-w-sm text-primary-foreground/85">
              Improve comfort, cut HVAC waste and extend the life of your existing BMS with a pilot-first,
              low-risk deployment.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
              See the pilot path <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
          <Link to="/investors" className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-warm p-10 text-accent-foreground shadow-elegant transition-transform hover:-translate-y-1">
            <Activity className="h-10 w-10" />
            <h3 className="mt-6 font-display text-3xl font-bold">For Investors</h3>
            <p className="mt-2 max-w-sm text-accent-foreground/90">
              A practical retrofit play at the intersection of edge AI, IoT and the legacy building
              modernization wave.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
              See market & model <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

      <section className="container pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-hero p-12 text-primary-foreground shadow-elegant md:p-16">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              Book a Pilot for your building.
            </h2>
            <p className="mt-4 text-primary-foreground/85">
              Start with one floor or zone. Validate comfort and energy impact before scaling,
              with no rip-and-replace and without exposing proprietary implementation details.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link to="/buildings#contact">Book a Pilot</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/technology">View Technology</Link>
              </Button>
            </div>
            <ul className="mt-8 grid gap-2 text-sm text-primary-foreground/80 sm:grid-cols-2">
              {[
                { i: ShieldCheck, t: "No BMS replacement required" },
                { i: CheckCircle2, t: "Pilot-first, low-risk deployment" },
                { i: Users, t: "Human feedback + building signals" },
                { i: Leaf, t: "Supports ESG & smart-building modernization" },
              ].map((i) => (
                <li key={i.t} className="flex items-center gap-2"><i.i className="h-4 w-4 text-accent" /> {i.t}</li>
              ))}
            </ul>
          </div>
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
        </div>
      </section>
    </SiteLayout>
  );
}
