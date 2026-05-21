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
  { icon: Thermometer, zone: "Zone 4 · Maya", msg: "Feels cold → heated chair on, HVAC setpoint held at 21.5 °C", saved: "+0.8 kWh saved" },
  { icon: Fan, zone: "Zone 7 · Daniel", msg: "Feels warm → smart desk fan engaged, deadband widened +1.2 °C", saved: "+1.4 kWh saved" },
  { icon: Flame, zone: "Zone 2 · Aiko", msg: "Cold feet feedback → heated foot mat on, HVAC unchanged", saved: "+0.6 kWh saved" },
  { icon: Droplets, zone: "Zone 9 · Lab wing", msg: "Humidity 38% → reducing dehumidifier load", saved: "+2.1 kWh saved" },
  { icon: Snowflake, zone: "Zone 1 · Priya", msg: "Comfort optimal → advisory: reduce cooling 12% on AHU-3", saved: "+1.9 kWh saved" },
  { icon: Sun, zone: "Zone 5 · Atrium", msg: "Solar gain rising → preemptive setpoint nudge to BMS", saved: "+3.2 kWh saved" },
  { icon: Wind, zone: "Zone 6 · Lucas", msg: "Stuffy feedback → boosting fresh air to 8 L/s/person", saved: "CO₂ −180 ppm" },
  { icon: Brain, zone: "Zone 8 · Floor 4", msg: "Comfort model retrained on 1,284 new feedback points", saved: "Accuracy 94%" },
  { icon: Gauge, zone: "Zone 3 · Sara", msg: "Predicted discomfort in 6 min → radiant panel pre-warmed", saved: "+0.9 kWh saved" },
  { icon: Leaf, zone: "Building total", msg: "Today's HVAC load 18% below baseline forecast", saved: "412 kg CO₂ avoided" },
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
    title: "Works with your existing BMS",
    desc: "Retrofit-friendly middleware that connects to BACnet, Modbus, KNX, Priva and PLC layers. No rip-and-replace, no vendor lock-in.",
  },
  {
    icon: Brain,
    title: "Local AI comfort optimization",
    desc: "Edge intelligence combines sensor data and occupant feedback to learn comfort preferences per zone and per person, without cloud latency.",
  },
  {
    icon: Gauge,
    title: "Safely widens HVAC deadbands",
    desc: "Advisory setpoint optimization for the BMS, while personal comfort devices, heated chairs, desk fans, radiant panels, foot warmers, close the last-mile gap.",
  },
  {
    icon: Leaf,
    title: "Supports ESG & future-readiness",
    desc: "Helps extend the useful life of legacy systems, lowers carbon intensity and produces M&V-aligned data for GRESB, CRREM and CSRD reporting.",
  },
];

const steps = [
  { n: "01", title: "Sense", desc: "Sensors and an opt-in occupant feedback app capture temperature, humidity, CO₂, occupancy and 'too cold / too warm / comfortable' votes." },
  { n: "02", title: "Decide locally", desc: "The Smart Edge Comfort Hub runs AI inference on-site, with no cloud dependency for real-time decisions." },
  { n: "03", title: "Act", desc: "Direct control of personal comfort devices + advisory setpoint signals to the existing HVAC/BMS." },
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
      {/* Hero */}
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
              It connects to your existing BMS and combines sensor data, occupant feedback
              and local AI to deliver personal comfort and reduce HVAC energy waste without
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
              </div>
            </div>
            <div className="absolute -right-6 -top-6 hidden h-28 w-28 rounded-full bg-gradient-warm opacity-30 blur-2xl md:block" />
            <div className="absolute -left-6 bottom-12 hidden h-32 w-32 rounded-full bg-gradient-cool opacity-30 blur-2xl md:block" />
          </div>
        </div>
      </section>

      {/* Core idea band */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-10 text-center">
          <p className="font-display text-2xl md:text-3xl">
            HVAC provides the base climate.{" "}
            <span className="text-accent">Adaptive Climate Engine delivers personal comfort.</span>
          </p>
        </div>
      </section>

      {/* Problem */}
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
                { v: "6–10% / °C", l: "potential HVAC savings per °C of wider deadband", id: "deadband" },
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

      {/* Solution */}
      <section className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">The solution</p>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
            A retrofit-friendly edge intelligence layer.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Adaptive Climate Engine sits next to your existing BMS at the building automation layer.
            It senses, learns, and orchestrates personal comfort devices and advisory HVAC setpoints,
            making any legacy building human-centric without replacing it.
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
              <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Sense. Decide locally. Act.</h2>
              <p className="mt-4 max-w-md text-primary-foreground/80">
                Sensors and occupant feedback feed the Smart Edge Comfort Hub. Local AI orchestrates
                personal comfort devices and sends advisory signals to the HVAC/BMS.
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

      {/* CTA */}
      <section className="container pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-hero p-12 text-primary-foreground shadow-elegant md:p-16">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              Book a Pilot for your building.
            </h2>
            <p className="mt-4 text-primary-foreground/85">
              Start with one floor or zone. Integrate with your existing BMS in read-only/advisory mode.
              Validate comfort and energy impact before scaling, with no rip-and-replace.
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
                { i: Users, t: "Human feedback + sensor data" },
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
