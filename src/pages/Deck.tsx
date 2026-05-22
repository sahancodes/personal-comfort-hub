import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Maximize2, Minimize2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Thermometer,
  Users,
  Brain,
  Plug,
  Gauge,
  Leaf,
  Building2,
  Sparkles,
  TrendingUp,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Database,
  Activity,
  Target,
  Euro,
} from "lucide-react";

const logo = "/ace-logo-horizontal.png";

function SlideFrame({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`slide-content relative h-full w-full overflow-hidden ${dark ? "bg-primary text-primary-foreground" : "bg-background text-foreground"}`}>
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-16 pt-10 text-sm opacity-80">
        <img src={logo} alt="Adaptive Climate Engine" className="h-14 w-auto rounded-lg bg-white/90 px-3 py-2 object-contain" />
        <div className="text-base">Adaptive Climate Engine · Pitch 2026</div>
      </div>
      <div className="flex h-full w-full items-center justify-center px-32 py-32">{children}</div>
    </div>
  );
}

function SlideShell({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useLayoutEffect(() => {
    function update() {
      const el = wrapRef.current?.parentElement;
      if (!el) return;
      const sx = el.clientWidth / 1920;
      const sy = el.clientHeight / 1080;
      setScale(Math.min(sx, sy));
    }
    update();
    const ro = new ResizeObserver(update);
    if (wrapRef.current?.parentElement) ro.observe(wrapRef.current.parentElement);
    window.addEventListener("resize", update);
    return () => { ro.disconnect(); window.removeEventListener("resize", update); };
  }, []);
  return (
    <div
      ref={wrapRef}
      style={{ width: 1920, height: 1080, transform: `scale(${scale})` }}
      className="absolute left-1/2 top-1/2 -ml-[960px] -mt-[540px] origin-center overflow-hidden rounded-2xl border border-border bg-background shadow-elegant"
    >
      {children}
    </div>
  );
}

const slides: { title: string; render: () => ReactNode }[] = [
  {
    title: "Cover",
    render: () => (
      <div className="slide-content relative h-full w-full overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="relative z-10 flex h-full w-full flex-col justify-between px-32 py-28">
          <img src={logo} alt="Adaptive Climate Engine" className="h-24 w-auto self-start rounded-xl bg-white/95 px-5 py-3 object-contain" />
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-accent" /> Personal comfort for smarter buildings
            </div>
            <h1 className="mt-8 font-display text-7xl font-bold leading-[1.05]">
              Comfort that is<br /><span className="text-accent">truly personal.</span>
            </h1>
            <p className="mt-8 max-w-4xl text-2xl opacity-85">
              Edge-based human-centric BMS middleware for legacy buildings, combining building data and occupant feedback to support comfort and HVAC energy optimization.
            </p>
          </div>
          <div className="flex items-end justify-between text-base opacity-80">
            <div>Pre-commercial validation · 2026</div>
            <div>adaptiveclimate.nl</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Problem",
    render: () => (
      <SlideFrame>
        <div className="grid w-full max-w-[1500px] grid-cols-2 gap-20">
          <div>
            <div className="text-base font-semibold uppercase tracking-wider text-accent">The problem</div>
            <h2 className="mt-3 font-display text-6xl font-bold leading-[1.05]">One zone.<br />Many comfort needs.</h2>
            <p className="mt-8 text-2xl text-muted-foreground">
              Legacy BMS systems usually optimize zones, schedules and sensor readings. They rarely understand individual comfort differences across the people inside the building.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              ["40-43%", "occupant discomfort can still occur in offices"],
              ["40-60%", "of building energy can be linked to HVAC"],
              ["2-5%", "potential productivity impact from poor comfort"],
              ["No", "full BMS replacement should be required for a pilot"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-2xl border border-border bg-card p-7">
                <div className="font-display text-5xl font-bold text-gradient">{v}</div>
                <p className="mt-3 text-lg text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Why now",
    render: () => (
      <SlideFrame>
        <div className="w-full max-w-[1500px]">
          <div className="text-base font-semibold uppercase tracking-wider text-accent">Why now</div>
          <h2 className="mt-3 font-display text-6xl font-bold">Legacy buildings need a practical modernization layer.</h2>
          <div className="mt-12 grid grid-cols-3 gap-8 text-lg">
            {[
              { i: Globe2, t: "Regulatory pressure", d: "Energy performance, ESG reporting and smart-building expectations are increasing across Europe." },
              { i: Building2, t: "Retrofit reality", d: "Most commercial buildings cannot justify disruptive full BMS replacement for comfort improvement alone." },
              { i: TrendingUp, t: "Energy and workplace pressure", d: "Owners need comfort, lower operating waste and better tenant experience from existing assets." },
            ].map((c) => (
              <div key={c.t} className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/40 p-7">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground"><c.i className="h-6 w-6" /></span>
                <div>
                  <div className="font-display text-2xl font-semibold">{c.t}</div>
                  <div className="mt-2 text-muted-foreground">{c.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Solution",
    render: () => (
      <SlideFrame>
        <div className="w-full max-w-[1500px]">
          <div className="text-base font-semibold uppercase tracking-wider text-accent">Our solution</div>
          <h2 className="mt-3 font-display text-6xl font-bold">A comfort layer your BMS was missing.</h2>
          <p className="mt-6 max-w-4xl text-2xl text-muted-foreground">
            ACE works alongside existing BMS infrastructure and adds edge-based comfort intelligence that combines building data, occupant feedback and localized comfort support.
          </p>
          <div className="mt-12 grid grid-cols-4 gap-6">
            {[
              { i: Plug, t: "Retrofit-friendly", d: "Designed for legacy commercial buildings and common automation environments." },
              { i: Brain, t: "Human-centric", d: "Adds occupant feedback to building operation." },
              { i: Gauge, t: "BMS advisory", d: "Supports high-level HVAC optimization while existing safety logic stays in place." },
              { i: Leaf, t: "Energy-aware", d: "Targets comfort improvement and HVAC energy optimization together." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-border bg-card p-7">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <f.i className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-semibold">{f.t}</h3>
                <p className="mt-3 text-lg text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "How it works",
    render: () => (
      <SlideFrame dark>
        <div className="w-full max-w-[1500px]">
          <div className="text-base font-semibold uppercase tracking-wider text-accent">How it works</div>
          <h2 className="mt-3 font-display text-6xl font-bold">Sense. Decide locally. Support comfort.</h2>
          <div className="mt-14 grid grid-cols-3 gap-8">
            {[
              { n: "01", i: Activity, t: "Sense", d: "Building data and occupant feedback create a clearer view of comfort in the space." },
              { n: "02", i: Brain, t: "Decide locally", d: "Edge comfort intelligence evaluates local conditions close to the automation layer." },
              { n: "03", i: Workflow, t: "Support comfort", d: "ACE coordinates localized comfort support and BMS/HVAC advisory recommendations." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8">
                <div className="font-display text-4xl font-bold text-accent">{s.n}</div>
                <div className="mt-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <s.i className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-3xl font-semibold">{s.t}</h3>
                <p className="mt-3 text-lg opacity-80">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Product",
    render: () => (
      <SlideFrame>
        <div className="w-full max-w-[1500px]">
          <div className="text-base font-semibold uppercase tracking-wider text-accent">The product</div>
          <h2 className="mt-3 font-display text-6xl font-bold">Three things, working as one.</h2>
          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              { i: Plug, t: "ACE Edge Hub", d: "A local building-side module for integration, data handling and comfort intelligence." },
              { i: Thermometer, t: "ACE Sense", d: "Building signals, environmental data and occupant feedback for pilot validation." },
              { i: Database, t: "ACE Console", d: "A building dashboard for comfort visibility, pilot measurement and operational reporting." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-border bg-gradient-surface p-8 shadow-soft">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-cool text-primary-foreground">
                  <c.i className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold">{c.t}</h3>
                <p className="mt-3 text-lg text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Target market",
    render: () => (
      <SlideFrame>
        <div className="w-full max-w-[1500px]">
          <div className="text-base font-semibold uppercase tracking-wider text-accent">Target market</div>
          <h2 className="mt-3 font-display text-6xl font-bold">Dutch office buildings first.</h2>
          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              ["Segment", "Medium and large offices with existing BMS infrastructure"],
              ["Buyer", "Building owners, facility managers and technical service providers"],
              ["Entry", "Pilot-first validation on one floor or zone before wider rollout"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
                <div className="font-display text-4xl font-bold text-gradient">{t}</div>
                <p className="mt-4 text-xl text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Business model",
    render: () => (
      <SlideFrame>
        <div className="w-full max-w-[1500px]">
          <div className="text-base font-semibold uppercase tracking-wider text-accent">Business model</div>
          <h2 className="mt-3 font-display text-6xl font-bold">Pilot fee + integration + annual subscription.</h2>
          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              { i: Target, t: "Pilot project", v: "Paid pilot", d: "Validate comfort, integration feasibility and energy-saving potential." },
              { i: Euro, t: "Installation", v: "One-time fee", d: "Edge hub, sensors, selected devices, integration support and commissioning." },
              { i: Database, t: "Subscription", v: "Annual fee", d: "Software, analytics, reporting, support and optimization services." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-border bg-card p-8 shadow-soft">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent"><c.i className="h-6 w-6" /></div>
                <h3 className="mt-5 font-display text-2xl font-semibold">{c.t}</h3>
                <div className="mt-4 font-display text-4xl font-bold text-gradient-warm">{c.v}</div>
                <p className="mt-4 text-lg text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-border bg-secondary/40 p-8 text-xl">
            <span className="font-semibold">Commercial logic:</span>{" "}
            <span className="text-muted-foreground">
              Start small, validate results, then convert successful pilots into annual building subscriptions.
            </span>
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Roadmap",
    render: () => (
      <SlideFrame dark>
        <div className="w-full max-w-[1500px]">
          <div className="text-base font-semibold uppercase tracking-wider text-accent">Roadmap</div>
          <h2 className="mt-3 font-display text-6xl font-bold">Build, validate, then scale carefully.</h2>
          <div className="mt-14 grid grid-cols-3 gap-8">
            {[
              ["Year 1", "MVP + initial pilots", "Complete MVP integration and validate first Dutch office pilots."],
              ["Year 2", "Early deployments", "Convert validated pilots and standardize installation workflows."],
              ["Year 3", "Cautious scale-up", "Scale with partners, repeatable deployment templates and support processes."],
            ].map(([v, l, d]) => (
              <div key={l} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8">
                <div className="font-display text-5xl font-bold text-accent">{v}</div>
                <h3 className="mt-5 font-display text-3xl font-semibold">{l}</h3>
                <p className="mt-4 text-lg opacity-80">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Current status",
    render: () => (
      <SlideFrame>
        <div className="w-full max-w-[1500px]">
          <div className="text-base font-semibold uppercase tracking-wider text-accent">Current status</div>
          <h2 className="mt-3 font-display text-6xl font-bold">Pre-commercial validation stage.</h2>
          <div className="mt-12 grid grid-cols-2 gap-8">
            {[
              { i: ShieldCheck, t: "Technical foundation", d: "Based on EngD work in personal environmental control, IoT, occupant feedback and smart-building systems." },
              { i: CheckCircle2, t: "Next milestone", d: "Secure pilot partners, complete MVP integration and produce measured comfort and energy evidence." },
              { i: Plug, t: "Pilot approach", d: "Begin with one floor or zone, then expand only after operational validation." },
              { i: Users, t: "Market validation", d: "Continue conversations with building owners, service providers and industry stakeholders." },
            ].map((c) => (
              <div key={c.t} className="flex items-start gap-6 rounded-2xl border border-border bg-card p-7 shadow-soft">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <c.i className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{c.t}</h3>
                  <p className="mt-2 text-lg text-muted-foreground">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "The ask",
    render: () => (
      <SlideFrame>
        <div className="w-full max-w-[1500px]">
          <div className="text-base font-semibold uppercase tracking-wider text-accent">Pilot ask</div>
          <h2 className="mt-3 font-display text-6xl font-bold">Seeking pilot buildings and technical partners.</h2>
          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              { t: "01", l: "Pilot site", d: "A Dutch office zone or floor with existing BMS infrastructure." },
              { t: "02", l: "Access", d: "Building data, facility-team input and occupant participation for validation." },
              { t: "03", l: "Outcome", d: "Measured comfort impact, operational feasibility and energy-saving potential." },
            ].map((c) => (
              <div key={c.l} className="rounded-2xl border border-border bg-gradient-surface p-8 shadow-soft">
                <div className="font-display text-6xl font-bold text-gradient-warm">{c.t}</div>
                <div className="mt-3 font-display text-2xl font-semibold">{c.l}</div>
                <p className="mt-3 text-lg text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Closing",
    render: () => (
      <div className="slide-content relative h-full w-full overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute -right-40 -bottom-40 h-[700px] w-[700px] rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="relative z-10 flex h-full w-full flex-col justify-between px-32 py-28">
          <img src={logo} alt="Adaptive Climate Engine" className="h-24 w-auto self-start rounded-xl bg-white/95 px-5 py-3 object-contain" />
          <div>
            <h2 className="font-display text-7xl font-bold leading-[1.05]">
              Personal comfort for<br /><span className="text-accent">smarter buildings.</span>
            </h2>
            <p className="mt-8 max-w-4xl text-2xl opacity-85">
              Adaptive Climate Engine helps legacy buildings become more comfortable, energy-aware and human-centric without full BMS replacement.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-12 text-xl">
            <div><div className="opacity-60 text-base uppercase tracking-wider">Email</div><div className="mt-2 font-semibold">hello@adaptiveclimate.nl</div></div>
            <div><div className="opacity-60 text-base uppercase tracking-wider">Web</div><div className="mt-2 font-semibold">adaptiveclimate.nl</div></div>
            <div><div className="opacity-60 text-base uppercase tracking-wider">Focus</div><div className="mt-2 font-semibold">Dutch office pilots</div></div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Deck() {
  const [i, setI] = useState(0);
  const [fs, setFs] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); setI((v) => Math.min(slides.length - 1, v + 1)); }
      if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); setI((v) => Math.max(0, v - 1)); }
      if (e.key.toLowerCase() === "f") toggleFs();
      if (e.key === "Escape" && document.fullscreenElement) document.exitFullscreen();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onChange() { setFs(!!document.fullscreenElement); }
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  function toggleFs() {
    if (!document.fullscreenElement) containerRef.current?.requestFullscreen();
    else document.exitFullscreen();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {!fs && (
        <header className="flex items-center justify-between border-b border-border/60 bg-background/80 px-6 py-3 backdrop-blur">
          <Link to="/" className="flex items-center gap-2 font-display font-bold">
            <Home className="h-4 w-4" /> Back to site
          </Link>
          <div className="text-sm text-muted-foreground">
            ACE · Pitch Deck · <span className="font-semibold text-foreground">{i + 1}</span> / {slides.length} · <span className="hidden sm:inline">{slides[i].title}</span>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={toggleFs}>
              {fs ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              <span className="ml-2 hidden sm:inline">Present</span>
            </Button>
          </div>
        </header>
      )}

      <div ref={containerRef} className={`relative flex-1 ${fs ? "bg-black" : "bg-secondary/40"}`}>
        <div className="relative h-full min-h-[60vh] w-full overflow-hidden">
          <SlideShell>{slides[i].render()}</SlideShell>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
          <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-border bg-card/90 px-3 py-2 shadow-soft backdrop-blur">
            <Button size="icon" variant="ghost" disabled={i === 0} onClick={() => setI((v) => Math.max(0, v - 1))}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="px-2 text-xs tabular-nums text-muted-foreground">{i + 1} / {slides.length}</div>
            <Button size="icon" variant="ghost" disabled={i === slides.length - 1} onClick={() => setI((v) => Math.min(slides.length - 1, v + 1))}>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <div className="mx-2 h-5 w-px bg-border" />
            <Button size="icon" variant="ghost" onClick={toggleFs}>
              {fs ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {!fs && (
        <div className="border-t border-border/60 bg-background">
          <div className="flex gap-3 overflow-x-auto p-3">
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`group relative h-[90px] w-[160px] shrink-0 overflow-hidden rounded-md border ${idx === i ? "border-primary ring-2 ring-primary/40" : "border-border"}`}
              >
                <div className="absolute inset-0">
                  <div className="relative h-full w-full">
                    <div style={{ width: 1920, height: 1080, transform: "scale(0.0833)", transformOrigin: "top left" }} className="origin-top-left">
                      {s.render()}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-1 left-1 rounded bg-background/80 px-1.5 py-0.5 text-[10px] font-medium">{idx + 1}. {s.title}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
