import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Thermometer,
  Cpu,
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
} from "lucide-react";

const liveUpdates = [
  { icon: Thermometer, zone: "Zone 4 · Maya", msg: "Feels cold → heated chair on, setpoint held at 21.5°C", saved: "+0.8 kWh saved" },
  { icon: Fan, zone: "Zone 7 · Daniel", msg: "Feels warm → desk fan engaged, deadband widened +1.2°C", saved: "+1.4 kWh saved" },
  { icon: Flame, zone: "Zone 2 · Aiko", msg: "Cold feet detected → foot radiator on, HVAC unchanged", saved: "+0.6 kWh saved" },
  { icon: Droplets, zone: "Zone 9 · Lab wing", msg: "Humidity 38% → reducing dehumidifier load", saved: "+2.1 kWh saved" },
  { icon: Snowflake, zone: "Zone 1 · Priya", msg: "Comfort optimal → cooling reduced 12% on AHU-3", saved: "+1.9 kWh saved" },
  { icon: Sun, zone: "Zone 5 · Atrium", msg: "Solar gain rising → preemptive shading + setpoint nudge", saved: "+3.2 kWh saved" },
  { icon: Wind, zone: "Zone 6 · Lucas", msg: "Stuffy feedback → boosting fresh air to 8 L/s/person", saved: "CO₂ −180 ppm" },
  { icon: Brain, zone: "Zone 8 · Floor 4", msg: "Comfort model retrained on 1,284 new feedback points", saved: "Accuracy 94%" },
  { icon: Gauge, zone: "Zone 3 · Sara", msg: "Predicted discomfort in 6 min → pre-cool initiated", saved: "+0.9 kWh saved" },
  { icon: Leaf, zone: "Building total", msg: "Today's HVAC load 27% below baseline forecast", saved: "412 kg CO₂ avoided" },
];
import { Button } from "@/components/ui/button";
import SiteLayout from "@/components/SiteLayout";
import heroImg from "@/assets/hero-office.jpg";

const stats = [
  { value: "20–40%", label: "HVAC energy reduction" },
  { value: "+38%", label: "occupant comfort score" },
  { value: "<48h", label: "BMS plug-in install" },
  { value: "6–9 mo", label: "typical payback" },
];

const features = [
  {
    icon: Plug,
    title: "Plugs into any BMS",
    desc: "BACnet, Modbus, KNX. Sits next to the existing controller — no rip-and-replace, no vendor lock-in.",
  },
  {
    icon: Brain,
    title: "Learns each person",
    desc: "Per-occupant comfort models combine wearables, in-app feedback and zone sensors to predict thermal preference.",
  },
  {
    icon: Gauge,
    title: "Relaxes setpoints safely",
    desc: "ACE widens HVAC deadbands while personal devices — heated chairs, desk fans, radiators — close the last-mile gap.",
  },
  {
    icon: Leaf,
    title: "Verifiable ESG impact",
    desc: "Every kWh saved is logged and exportable for GRESB, CRREM and Scope 2 reporting.",
  },
];

const steps = [
  { n: "01", title: "Sense", desc: "Mesh of low-power sensors + opt-in wearables capture temperature, humidity, CO₂ and personal thermal state." },
  { n: "02", title: "Learn", desc: "On-device ML builds a comfort fingerprint per occupant from continuous, low-friction feedback." },
  { n: "03", title: "Adapt", desc: "ACE negotiates with the BMS to widen deadbands and triggers personal devices only where needed." },
];

export default function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-surface" />
        <div className="absolute inset-0 -z-10 opacity-[0.07] [background-image:radial-gradient(hsl(var(--primary))_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="container grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur animate-fade-in">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              The missing layer between BMS and the human body
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
              Comfort that is
              <span className="block text-gradient">truly personal.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground animate-fade-up [animation-delay:120ms]">
              ACE is a plug-in intelligence layer for building management systems. It learns
              each occupant's comfort, then orchestrates HVAC and personal devices to deliver
              individual comfort while cutting energy 20–40%.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up [animation-delay:240ms]">
              <Button asChild size="lg" className="bg-gradient-cool text-primary-foreground shadow-glow hover:opacity-90">
                <Link to="/buildings#contact">
                  Book a pilot <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/deck">View pitch deck</Link>
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-bold text-foreground md:text-3xl">{s.value}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                </div>
              ))}
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
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/90 p-4 backdrop-blur">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground animate-pulse-glow">
                    <Thermometer className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">Zone 4 · Maya</div>
                    <div className="text-xs text-muted-foreground">Feels cold → heated chair on, setpoint held at 21.5°C</div>
                  </div>
                  <span className="text-xs font-semibold text-primary">+0.8 kWh saved</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-6 -top-6 hidden h-28 w-28 rounded-full bg-gradient-warm opacity-30 blur-2xl md:block" />
            <div className="absolute -left-6 bottom-12 hidden h-32 w-32 rounded-full bg-gradient-cool opacity-30 blur-2xl md:block" />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="container py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">The problem</p>
              <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
                One thermostat. Hundreds of bodies.
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                BMS today optimize for an average occupant who doesn't exist. The result:
                40% of office workers are dissatisfied with thermal comfort, productivity
                drops, and HVAC over-conditions entire floors to satisfy a vocal few.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "40%", l: "of occupants dissatisfied with comfort" },
                { v: "39%", l: "of building energy goes to HVAC" },
                { v: "$28B", l: "lost annually to thermal-comfort productivity drops (US)" },
                { v: "1°C", l: "wider deadband ≈ 6–10% HVAC savings" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="font-display text-3xl font-bold text-gradient">{s.v}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">The solution</p>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">A comfort layer your BMS was missing</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ACE adds a thin, intelligent layer that turns aggregate HVAC control into personalized,
            measurable comfort — without replacing what's already installed.
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

      {/* How it works */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">How it works</p>
              <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Sense. Learn. Adapt.</h2>
              <p className="mt-4 max-w-md text-primary-foreground/80">
                A closed loop between people, sensors and the building — running 24/7 without requiring
                anyone to touch a thermostat.
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

      {/* Audience strip */}
      <section className="container py-24">
        <div className="grid gap-6 md:grid-cols-2">
          <Link to="/buildings" className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-cool p-10 text-primary-foreground shadow-elegant transition-transform hover:-translate-y-1">
            <Building2 className="h-10 w-10" />
            <h3 className="mt-6 font-display text-3xl font-bold">For Buildings</h3>
            <p className="mt-2 max-w-sm text-primary-foreground/85">
              Cut HVAC energy, raise tenant satisfaction, and unlock measurable ESG credit on the assets you already operate.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
              Explore the deployment story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
          <Link to="/investors" className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-warm p-10 text-accent-foreground shadow-elegant transition-transform hover:-translate-y-1">
            <Activity className="h-10 w-10" />
            <h3 className="mt-6 font-display text-3xl font-bold">For Investors</h3>
            <p className="mt-2 max-w-sm text-accent-foreground/90">
              A category-defining play at the intersection of climate tech, IoT and the workplace experience economy.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
              See market & traction <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-hero p-12 text-primary-foreground shadow-elegant md:p-16">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              Pilot ACE in your building this quarter.
            </h2>
            <p className="mt-4 text-primary-foreground/85">
              Two-week site survey. 90-day measurable savings report. Zero downtime to your existing BMS.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link to="/buildings#contact">Request a pilot</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/deck">Watch the deck</Link>
              </Button>
            </div>
            <ul className="mt-8 grid gap-2 text-sm text-primary-foreground/80 sm:grid-cols-2">
              {["No BMS replacement required", "Works with existing personal devices", "GDPR-grade privacy by design", "Outcome-based pricing available"].map((i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> {i}</li>
              ))}
            </ul>
          </div>
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
        </div>
      </section>
    </SiteLayout>
  );
}
