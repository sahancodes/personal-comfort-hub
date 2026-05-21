import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Maximize2, Minimize2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Wind, Thermometer, Users, Brain, Plug, Gauge, Leaf, Building2, Sparkles,
  TrendingUp, Globe2, Rocket, ShieldCheck, CheckCircle2, Workflow, Database, Activity,
} from "lucide-react";

/* ---------- Slide chrome ---------- */

function SlideFrame({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`slide-content relative h-full w-full overflow-hidden ${dark ? "bg-primary text-primary-foreground" : "bg-background text-foreground"}`}>
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-16 pt-10 text-sm opacity-70">
        <div className="flex items-center gap-2 font-display font-bold">
          <span className={`grid h-9 w-9 place-items-center rounded-lg ${dark ? "bg-accent text-accent-foreground" : "bg-gradient-cool text-primary-foreground"}`}>
            <Wind className="h-5 w-5" />
          </span>
          ACE
        </div>
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

/* ---------- Slide content ---------- */

const slides: { title: string; render: () => ReactNode }[] = [
  {
    title: "Cover",
    render: () => (
      <div className="slide-content relative h-full w-full overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="relative z-10 flex h-full w-full flex-col justify-between px-32 py-28">
          <div className="flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-accent text-accent-foreground">
              <Wind className="h-8 w-8" />
            </span>
            <div>
              <div className="font-display text-3xl font-bold">ACE</div>
              <div className="text-base opacity-80">Adaptive Climate Engine</div>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-accent" /> Personal comfort for smart buildings
            </div>
            <h1 className="mt-8 font-display text-7xl font-bold leading-[1.05]">
              Comfort that is<br /><span className="text-accent">truly personal.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-2xl opacity-85">
              The plug-in intelligence layer that makes any BMS aware of every body in the building,
              and cuts HVAC energy 20–40% in the process.
            </p>
          </div>
          <div className="flex items-end justify-between text-base opacity-80">
            <div>Seed round · 2026</div>
            <div>hello@ace.energy</div>
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
            <h2 className="mt-3 font-display text-6xl font-bold leading-[1.05]">One thermostat.<br />Hundreds of bodies.</h2>
            <p className="mt-8 text-2xl text-muted-foreground">
              BMS optimize for an "average" occupant who doesn't exist. The result: dissatisfied
              tenants, over-conditioned floors, and HVAC bills that dominate operating cost.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              ["40%", "of office workers dissatisfied with thermal comfort"],
              ["39%", "of building energy consumed by HVAC"],
              ["$28B", "lost yearly to comfort-driven productivity drops (US)"],
              ["1°C", "wider deadband ≈ 6–10% HVAC savings"],
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
    title: "Solution",
    render: () => (
      <SlideFrame>
        <div className="w-full max-w-[1500px]">
          <div className="text-base font-semibold uppercase tracking-wider text-accent">Our solution</div>
          <h2 className="mt-3 font-display text-6xl font-bold">A comfort layer your BMS was missing.</h2>
          <p className="mt-6 max-w-3xl text-2xl text-muted-foreground">
            ACE is a plug-in hardware + software layer that learns each occupant's comfort and orchestrates
            HVAC and personal devices to satisfy them at the lowest possible energy cost.
          </p>
          <div className="mt-12 grid grid-cols-4 gap-6">
            {[
              { i: Plug, t: "Plugs into any BMS", d: "BACnet, Modbus, KNX. No rip-and-replace." },
              { i: Brain, t: "Per-person comfort", d: "On-device ML learns each occupant." },
              { i: Gauge, t: "Widens setpoints safely", d: "Personal devices close last-mile gap." },
              { i: Leaf, t: "Verifiable savings", d: "M&V exports for ESG reporting." },
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
          <h2 className="mt-3 font-display text-6xl font-bold">Sense. Learn. Adapt.</h2>
          <div className="mt-14 grid grid-cols-3 gap-8">
            {[
              { n: "01", i: Activity, t: "Sense", d: "Zone sensors + occupant feedback ('too cold / too warm / OK') capture temperature, humidity, CO₂ and the human signal." },
              { n: "02", i: Brain, t: "Decide locally", d: "Edge AI learns per-zone and per-occupant comfort preference with no cloud latency." },
              { n: "03", i: Workflow, t: "Act", d: "Advisory setpoints widen BMS deadbands while personal comfort devices (fans, heated chairs, radiant panels, foot warmers) close the gap." },
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
              { i: Plug, t: "ACE Gateway", d: "Edge appliance speaks every major BMS protocol. Runs comfort models locally, with no cloud dependency." },
              { i: Thermometer, t: "ACE Sense", d: "Battery-powered desk/zone sensors + an opt-in occupant feedback app. Mesh installs in days." },
              { i: Database, t: "ACE Console", d: "Building dashboard for FMs. Live comfort heatmap, energy savings, and ESG-ready exports." },
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
    title: "Market",
    render: () => (
      <SlideFrame>
        <div className="w-full max-w-[1500px]">
          <div className="text-base font-semibold uppercase tracking-wider text-accent">Market</div>
          <h2 className="mt-3 font-display text-6xl font-bold">A category at the intersection of three tailwinds.</h2>
          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              ["TAM · $22B", "Smart building controls by 2030"],
              ["SAM · $6.4B", "Commercial RE with installed BMS"],
              ["SOM · $480M", "Premium offices, EU + NA, 5y"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
                <div className="font-display text-5xl font-bold text-gradient">{t}</div>
                <p className="mt-4 text-xl text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 text-lg">
            {[
              { i: Globe2, t: "Climate disclosure", d: "EU CSRD, SEC climate rules force verifiable Scope 2 cuts." },
              { i: Building2, t: "Hybrid-work pressure", d: "Tenants demand premium IEQ to bring people back to office." },
              { i: TrendingUp, t: "Energy prices", d: "Volatile costs make every kWh of HVAC saved board-level material." },
            ].map((c) => (
              <div key={c.t} className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/40 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground"><c.i className="h-6 w-6" /></span>
                <div>
                  <div className="font-display text-xl font-semibold">{c.t}</div>
                  <div className="mt-1 text-muted-foreground">{c.d}</div>
                </div>
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
          <h2 className="mt-3 font-display text-6xl font-bold">Hardware + SaaS + savings share.</h2>
          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              { t: "Gateway & sensors", v: "$8–18 / m² one-time", d: "Hardware capex, financeable through partner channel." },
              { t: "ACE Console SaaS", v: "$1.20 / seat / mo", d: "Per-occupant subscription. Multi-year contracts, 90%+ gross margin." },
              { t: "Savings share", v: "15% of verified kWh", d: "Optional outcome-based tier that aligns incentives and removes capex friction." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-border bg-card p-8 shadow-soft">
                <h3 className="font-display text-2xl font-semibold">{c.t}</h3>
                <div className="mt-4 font-display text-4xl font-bold text-gradient-warm">{c.v}</div>
                <p className="mt-4 text-lg text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-border bg-secondary/40 p-8 text-xl">
            <span className="font-semibold">Unit economics:</span>{" "}
            <span className="text-muted-foreground">
              Avg. 50,000 m² building → ~$520K initial + $360K ARR · payback to customer in 6–9 months · LTV/CAC &gt; 6×.
            </span>
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Traction",
    render: () => (
      <SlideFrame dark>
        <div className="w-full max-w-[1500px]">
          <div className="text-base font-semibold uppercase tracking-wider text-accent">Traction</div>
          <h2 className="mt-3 font-display text-6xl font-bold">Proof, in the field.</h2>
          <div className="mt-14 grid grid-cols-4 gap-8">
            {[
              ["6", "paying pilot buildings"],
              ["28%", "avg. verified HVAC reduction"],
              ["92", "tenant comfort NPS"],
              ["3", "BMS vendor partners in talks"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 text-center">
                <div className="font-display text-6xl font-bold text-accent">{v}</div>
                <p className="mt-4 text-lg opacity-80">{l}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 text-2xl italic">
            "ACE found 31% in HVAC savings on a building we'd already optimized twice, and tenants
            stopped complaining about temperature. It's a category we didn't know we needed."
            <div className="mt-4 text-base not-italic opacity-70">Head of Sustainability, Tier-1 European REIT</div>
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Why ACE wins",
    render: () => (
      <SlideFrame>
        <div className="w-full max-w-[1500px]">
          <div className="text-base font-semibold uppercase tracking-wider text-accent">Defensibility</div>
          <h2 className="mt-3 font-display text-6xl font-bold">A moat that compounds.</h2>
          <div className="mt-12 grid grid-cols-2 gap-8">
            {[
              { i: ShieldCheck, t: "Hardware certifications", d: "BMS-grade gateway with CE, UL, BTL listings, with months of regulatory work for any new entrant." },
              { i: Brain, t: "Per-occupant data flywheel", d: "Each user makes the next building deploy faster and cheaper. Cross-tenant generalization compounds." },
              { i: Plug, t: "Vendor-neutral integration", d: "We work with every BMS, which no incumbent will. Our distribution is structural, not contractual." },
              { i: Workflow, t: "Outcome-aligned pricing", d: "We win when buildings save energy. CFOs sign multi-year deals because risk is on us." },
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
          <div className="text-base font-semibold uppercase tracking-wider text-accent">The ask</div>
          <h2 className="mt-3 font-display text-6xl font-bold">$3.5M seed to scale to 20 buildings.</h2>
          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              { t: "40%", l: "Engineering & ML", d: "Multi-tenant model platform, Console v2." },
              { t: "35%", l: "Go-to-market", d: "EU + NA channel partnerships and pilots." },
              { t: "25%", l: "Hardware & certification", d: "Next-gen gateway + UL/BTL listings." },
            ].map((c) => (
              <div key={c.l} className="rounded-2xl border border-border bg-gradient-surface p-8 shadow-soft">
                <div className="font-display text-6xl font-bold text-gradient-warm">{c.t}</div>
                <div className="mt-3 font-display text-2xl font-semibold">{c.l}</div>
                <p className="mt-3 text-lg text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 text-lg">
            {[
              "18-month runway to Series A",
              "Co-investors: climate-tech & proptech specialists",
              "Lead check: $1.5–2.5M, board seat available",
            ].map((i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-card p-5">
                <CheckCircle2 className="h-5 w-5 text-accent" /> {i}
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
          <div className="flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-accent text-accent-foreground">
              <Wind className="h-8 w-8" />
            </span>
            <div className="font-display text-3xl font-bold">ACE</div>
          </div>
          <div>
            <h2 className="font-display text-7xl font-bold leading-[1.05]">
              Buildings that <br /><span className="text-accent">feel like home.</span>
            </h2>
            <p className="mt-8 max-w-3xl text-2xl opacity-85">
              Join us in building the comfort layer for every smart building on earth.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-12 text-xl">
            <div><div className="opacity-60 text-base uppercase tracking-wider">Email</div><div className="mt-2 font-semibold">hello@ace.energy</div></div>
            <div><div className="opacity-60 text-base uppercase tracking-wider">Web</div><div className="mt-2 font-semibold">ace.energy</div></div>
            <div><div className="opacity-60 text-base uppercase tracking-wider">Investors</div><div className="mt-2 font-semibold">investors@ace.energy</div></div>
          </div>
        </div>
      </div>
    ),
  },
];

/* ---------- Deck page ---------- */

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

        {/* Nav pills */}
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
