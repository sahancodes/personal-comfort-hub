import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Maximize2, Minimize2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Activity,
  BarChart3,
  Brain,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Cpu,
  Database,
  Euro,
  Fan,
  Gauge,
  Globe2,
  Handshake,
  Leaf,
  LineChart,
  Plug,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Thermometer,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

const logo = "/ace-logo-horizontal.png";

type IconType = typeof Activity;

function SlideShell({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const update = () => {
      const parent = wrapRef.current?.parentElement;
      if (!parent) return;
      setScale(Math.min(parent.clientWidth / 1920, parent.clientHeight / 1080));
    };
    update();
    const ro = new ResizeObserver(update);
    if (wrapRef.current?.parentElement) ro.observe(wrapRef.current.parentElement);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
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

function DeckLogo({ light = false }: { light?: boolean }) {
  return (
    <img
      src={logo}
      alt="Adaptive Climate Engine"
      className={`h-12 w-auto rounded-lg px-3 py-2 object-contain ${light ? "bg-white/95" : "bg-white/90 shadow-soft"}`}
    />
  );
}

function SlideFrame({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${dark ? "bg-primary text-primary-foreground" : "bg-background text-foreground"}`}>
      <div className="absolute -right-32 -top-32 h-[430px] w-[430px] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-36 -left-36 h-[430px] w-[430px] rounded-full bg-primary-glow/15 blur-3xl" />
      <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-20 pt-10">
        <DeckLogo light={dark} />
        <div className={`text-sm font-medium ${dark ? "text-white/60" : "text-muted-foreground"}`}>Adaptive Climate Engine · Pitch 2026</div>
      </header>
      <main className="relative z-10 h-full px-24 pb-20 pt-32">{children}</main>
    </div>
  );
}

function Kicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`text-base font-bold uppercase tracking-[0.22em] ${light ? "text-accent" : "text-accent"}`}>{children}</div>;
}

function SlideTitle({ children, light = false, narrow = false }: { children: ReactNode; light?: boolean; narrow?: boolean }) {
  return (
    <h2 className={`mt-3 font-display text-[54px] font-bold leading-[1.06] tracking-tight ${narrow ? "max-w-[1040px]" : "max-w-[1320px]"} ${light ? "text-white" : "text-foreground"}`}>
      {children}
    </h2>
  );
}

function SlideText({ children, light = false, narrow = false }: { children: ReactNode; light?: boolean; narrow?: boolean }) {
  return <p className={`mt-5 text-[25px] leading-snug ${narrow ? "max-w-[900px]" : "max-w-[1120px]"} ${light ? "text-white/78" : "text-muted-foreground"}`}>{children}</p>;
}

function SourceNote({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`mt-6 text-[13px] leading-relaxed ${light ? "text-white/55" : "text-muted-foreground"}`}>{children}</p>;
}

function MetricCard({ value, label, source, dark = false }: { value: string; label: string; source?: string; dark?: boolean }) {
  return (
    <div className={`min-h-[190px] rounded-2xl border p-7 shadow-soft ${dark ? "border-white/15 bg-white/8" : "border-border bg-card"}`}>
      <div className="font-display text-[50px] font-bold leading-none text-gradient">{value}</div>
      <p className={`mt-4 text-[20px] leading-snug ${dark ? "text-white/78" : "text-muted-foreground"}`}>{label}</p>
      {source && <p className={`mt-4 text-[12px] ${dark ? "text-white/45" : "text-muted-foreground"}`}>{source}</p>}
    </div>
  );
}

function FeatureCard({ icon: Icon, title, text, dark = false }: { icon: IconType; title: string; text: string; dark?: boolean }) {
  return (
    <div className={`min-h-[220px] rounded-2xl border p-7 shadow-soft ${dark ? "border-white/15 bg-white/8" : "border-border bg-card"}`}>
      <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${dark ? "bg-accent text-accent-foreground" : "bg-accent-soft text-accent"}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className={`font-display text-[26px] font-semibold leading-tight ${dark ? "text-white" : "text-foreground"}`}>{title}</h3>
      <p className={`mt-3 text-[18px] leading-snug ${dark ? "text-white/75" : "text-muted-foreground"}`}>{text}</p>
    </div>
  );
}

function StepCard({ n, icon: Icon, title, text, dark = false }: { n: string; icon: IconType; title: string; text: string; dark?: boolean }) {
  return (
    <div className={`rounded-2xl border p-7 ${dark ? "border-white/15 bg-white/8" : "border-border bg-card"}`}>
      <div className="flex items-center justify-between">
        <div className="font-display text-[34px] font-bold text-accent">{n}</div>
        <div className={`grid h-12 w-12 place-items-center rounded-xl ${dark ? "bg-accent text-accent-foreground" : "bg-accent-soft text-accent"}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <h3 className={`mt-5 font-display text-[27px] font-semibold ${dark ? "text-white" : "text-foreground"}`}>{title}</h3>
      <p className={`mt-3 text-[18px] leading-snug ${dark ? "text-white/76" : "text-muted-foreground"}`}>{text}</p>
    </div>
  );
}

const slides: { title: string; render: () => ReactNode }[] = [
  {
    title: "Cover",
    render: () => (
      <div className="relative h-full w-full overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute -right-44 -top-44 h-[620px] w-[620px] rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-44 -left-44 h-[560px] w-[560px] rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="relative z-10 flex h-full flex-col justify-between px-28 py-24">
          <DeckLogo light />
          <section>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 px-4 py-2 text-sm font-semibold">
              <Sparkles className="h-4 w-4 text-accent" /> Personal comfort for smarter buildings
            </div>
            <h1 className="mt-8 max-w-[1050px] font-display text-[70px] font-bold leading-[1.04] tracking-tight">
              Adaptive Climate Engine
            </h1>
            <p className="mt-6 max-w-[900px] text-[28px] leading-snug text-white/82">
              Edge-based human-centric BMS middleware for legacy commercial buildings.
            </p>
          </section>
          <div className="flex items-end justify-between text-[18px] text-white/68">
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
        <div className="grid h-full grid-cols-[0.92fr_1.08fr] items-center gap-14">
          <section>
            <Kicker>The problem</Kicker>
            <SlideTitle narrow>Legacy BMS controls zones, not people.</SlideTitle>
            <SlideText narrow>
              Existing systems optimize schedules, zones and sensor readings. They rarely capture individual comfort needs across the people inside the building.
            </SlideText>
          </section>
          <section className="grid grid-cols-2 gap-5">
            <MetricCard value="~40%" label="of EU energy use comes from buildings" source="Source: EU EPBD / Reuters, 2024" />
            <MetricCard value="~40%" label="commercial-building energy cost often linked to HVAC" source="Source: HVAC optimization literature" />
            <MetricCard value="40–43%" label="occupants can still report thermal discomfort" source="Source: thermal comfort literature" />
            <MetricCard value="2–5%" label="potential productivity impact from poor comfort" source="Source: comfort/productivity literature" />
          </section>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Why now",
    render: () => (
      <SlideFrame>
        <section className="pt-8">
          <Kicker>Why now</Kicker>
          <SlideTitle>Energy rules, costs and tenant expectations are pushing retrofit modernization.</SlideTitle>
          <div className="mt-10 grid grid-cols-4 gap-5">
            <FeatureCard icon={Globe2} title="EU pressure" text="Energy performance rules are raising expectations for non-residential buildings." />
            <FeatureCard icon={Euro} title="Operating costs" text="Energy volatility keeps HVAC efficiency high on the building-owner agenda." />
            <FeatureCard icon={Users} title="Tenant experience" text="Hybrid work makes comfort and workplace quality harder to ignore." />
            <FeatureCard icon={Building2} title="Retrofit reality" text="Most existing buildings need practical upgrades, not full replacement." />
          </div>
          <SourceNote>Source anchor: EU EPBD recast / Reuters, 2024; building renovation agenda and energy-performance pressure.</SourceNote>
        </section>
      </SlideFrame>
    ),
  },
  {
    title: "Market opportunity",
    render: () => (
      <SlideFrame>
        <section className="pt-8">
          <Kicker>Market opportunity</Kicker>
          <SlideTitle>Dutch office buildings are the first beachhead.</SlideTitle>
          <div className="mt-10 grid grid-cols-4 gap-5">
            <FeatureCard icon={Target} title="Initial segment" text="Medium and large Dutch offices with existing BMS infrastructure." />
            <FeatureCard icon={Users} title="Buyer group" text="Building owners, facility managers and technical service providers." />
            <FeatureCard icon={SearchCheck} title="Entry motion" text="Start with one floor or zone, then expand after validation." />
            <FeatureCard icon={CircleDollarSign} title="Revenue logic" text="Pilot fee, integration fee and annual building subscription." />
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-secondary/45 p-6 text-[20px] text-muted-foreground">
            <span className="font-semibold text-foreground">Conservative framing:</span> focus first on BMS-enabled offices where comfort complaints and energy performance both matter.
          </div>
        </section>
      </SlideFrame>
    ),
  },
  {
    title: "Solution",
    render: () => (
      <SlideFrame>
        <section className="pt-8">
          <Kicker>Solution</Kicker>
          <SlideTitle>ACE adds the human-centric comfort layer missing from existing BMS.</SlideTitle>
          <SlideText>
            A retrofit layer that connects building data, occupant feedback and edge comfort intelligence into practical comfort support.
          </SlideText>
          <div className="mt-10 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4">
            <FeatureCard icon={Database} title="Building data + feedback" text="Environmental signals and occupant comfort input." />
            <div className="flex items-center text-4xl text-accent">→</div>
            <FeatureCard icon={Brain} title="Edge comfort intelligence" text="Local evaluation close to building systems." />
            <div className="flex items-center text-4xl text-accent">→</div>
            <FeatureCard icon={Workflow} title="Comfort support" text="Localized comfort plus BMS/HVAC advisory support." />
          </div>
        </section>
      </SlideFrame>
    ),
  },
  {
    title: "How it works",
    render: () => (
      <SlideFrame dark>
        <section className="pt-8">
          <Kicker light>How it works</Kicker>
          <SlideTitle light>Sense. Decide locally. Support comfort.</SlideTitle>
          <div className="mt-12 grid grid-cols-3 gap-7">
            <StepCard dark n="01" icon={Activity} title="Sense" text="Building data and occupant feedback create a clearer view of comfort." />
            <StepCard dark n="02" icon={Cpu} title="Decide locally" text="Edge-based comfort intelligence evaluates local conditions near automation systems." />
            <StepCard dark n="03" icon={Fan} title="Support comfort" text="ACE supports personal comfort devices and BMS/HVAC advisory recommendations." />
          </div>
        </section>
      </SlideFrame>
    ),
  },
  {
    title: "Differentiation",
    render: () => (
      <SlideFrame>
        <section className="pt-8">
          <Kicker>Why ACE is different</Kicker>
          <SlideTitle>Not a dashboard. Not a full BMS replacement.</SlideTitle>
          <div className="mt-10 grid grid-cols-4 gap-5">
            <FeatureCard icon={Building2} title="Traditional BMS" text="Zone-based control and fixed operational logic." />
            <FeatureCard icon={BarChart3} title="SCADA dashboard" text="Monitoring, reporting and operational visibility." />
            <FeatureCard icon={LineChart} title="Cloud analytics" text="Portfolio insights, benchmarking and reporting." />
            <FeatureCard icon={Sparkles} title="ACE" text="Edge-based, human-centric comfort support alongside existing BMS." />
          </div>
        </section>
      </SlideFrame>
    ),
  },
  {
    title: "Evidence base",
    render: () => (
      <SlideFrame>
        <section className="pt-8">
          <Kicker>Evidence base</Kicker>
          <SlideTitle>The logic is research-backed. The product will be pilot-validated.</SlideTitle>
          <div className="mt-10 grid grid-cols-3 gap-6">
            <FeatureCard icon={Thermometer} title="Comfort gap" text="Personal comfort systems can bridge centralized HVAC and individual comfort needs." />
            <FeatureCard icon={Leaf} title="Energy potential" text="Smart and adaptive HVAC control research indicates significant saving potential." />
            <FeatureCard icon={Gauge} title="Flexible operation" text="Occupant-centric and zone-level flexibility are credible smart-building directions." />
          </div>
          <SourceNote>
            Source anchors: Kalaimani et al., Personal Comfort Systems, 2017; HVAC optimization literature, 2023. ACE results will be measured during pilots.
          </SourceNote>
        </section>
      </SlideFrame>
    ),
  },
  {
    title: "Business model",
    render: () => (
      <SlideFrame>
        <section className="pt-8">
          <Kicker>Business model</Kicker>
          <SlideTitle>Pilot fee + integration fee + annual subscription.</SlideTitle>
          <div className="mt-10 grid grid-cols-3 gap-6">
            <FeatureCard icon={Target} title="Paid pilot" text="Validate comfort, operational feasibility and energy-saving potential." />
            <FeatureCard icon={Euro} title="Integration fee" text="Edge hub, sensors, selected devices, integration support and commissioning." />
            <FeatureCard icon={Database} title="Annual subscription" text="Software, analytics, reporting, support and optimization services." />
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-secondary/45 p-6 text-[20px] text-muted-foreground">
            <span className="font-semibold text-foreground">Optional later:</span> performance-based component after measured pilot evidence.
          </div>
        </section>
      </SlideFrame>
    ),
  },
  {
    title: "Go-to-market",
    render: () => (
      <SlideFrame>
        <section className="pt-8">
          <Kicker>Go-to-market</Kicker>
          <SlideTitle>Start small, validate, then scale through partners.</SlideTitle>
          <div className="mt-10 grid grid-cols-4 gap-5">
            <StepCard n="01" icon={SearchCheck} title="Find pilot" text="Dutch office floor or zone with existing BMS." />
            <StepCard n="02" icon={Plug} title="Deploy" text="Set up a controlled pilot with facility-team input." />
            <StepCard n="03" icon={LineChart} title="Measure" text="Assess comfort, feasibility and energy potential." />
            <StepCard n="04" icon={Handshake} title="Convert" text="Move validated pilots into subscriptions." />
          </div>
        </section>
      </SlideFrame>
    ),
  },
  {
    title: "Roadmap",
    render: () => (
      <SlideFrame dark>
        <section className="pt-8">
          <Kicker light>Roadmap</Kicker>
          <SlideTitle light>Build, validate, then scale cautiously.</SlideTitle>
          <div className="mt-12 grid grid-cols-3 gap-7">
            <StepCard dark n="Y1" icon={Cpu} title="MVP + initial pilots" text="Complete MVP integration and validate first Dutch office pilots." />
            <StepCard dark n="Y2" icon={TrendingUp} title="Early deployments" text="Convert validated pilots and standardize installation workflows." />
            <StepCard dark n="Y3" icon={Building2} title="Cautious scale-up" text="Scale with partners, templates and support processes." />
          </div>
        </section>
      </SlideFrame>
    ),
  },
  {
    title: "Current status",
    render: () => (
      <SlideFrame>
        <section className="pt-8">
          <Kicker>Current status</Kicker>
          <SlideTitle>Pre-commercial validation stage.</SlideTitle>
          <div className="mt-10 grid grid-cols-2 gap-6">
            <FeatureCard icon={ShieldCheck} title="Technical foundation" text="Smart buildings, personal comfort, IoT and occupant-feedback research." />
            <FeatureCard icon={CheckCircle2} title="Business foundation" text="Business plan, website and pilot positioning prepared." />
            <FeatureCard icon={Cpu} title="Build focus" text="MVP and integration work are the immediate execution priority." />
            <FeatureCard icon={Target} title="Next step" text="Secure pilot partner and generate measured validation evidence." />
          </div>
        </section>
      </SlideFrame>
    ),
  },
  {
    title: "The ask",
    render: () => (
      <SlideFrame>
        <section className="pt-8">
          <Kicker>The ask</Kicker>
          <SlideTitle>Seeking pilot access, technical partners and early-stage capital.</SlideTitle>
          <div className="mt-10 grid grid-cols-3 gap-6">
            <FeatureCard icon={Building2} title="Pilot site" text="Dutch office floor or zone with existing BMS infrastructure." />
            <FeatureCard icon={Handshake} title="Technical partner" text="BMS/HVAC integration support and facility-team input." />
            <FeatureCard icon={Euro} title="Funding" text="Early-stage capital to complete MVP, pilots and validation." />
          </div>
        </section>
      </SlideFrame>
    ),
  },
  {
    title: "Closing",
    render: () => (
      <div className="relative h-full w-full overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute -right-44 -bottom-44 h-[620px] w-[620px] rounded-full bg-accent/30 blur-3xl" />
        <div className="relative z-10 flex h-full flex-col justify-between px-28 py-24">
          <DeckLogo light />
          <section>
            <h2 className="max-w-[1050px] font-display text-[68px] font-bold leading-[1.05] tracking-tight">
              Personal comfort for smarter buildings.
            </h2>
            <p className="mt-7 max-w-[900px] text-[28px] leading-snug text-white/80">
              A practical retrofit layer for comfort, efficiency and human-centric building operation.
            </p>
          </section>
          <div className="grid grid-cols-3 gap-12 text-[20px] text-white/72">
            <div><div className="text-sm uppercase tracking-wider text-white/45">Web</div><div className="mt-2 font-semibold">adaptiveclimate.nl</div></div>
            <div><div className="text-sm uppercase tracking-wider text-white/45">Email</div><div className="mt-2 font-semibold">hello@adaptiveclimate.nl</div></div>
            <div><div className="text-sm uppercase tracking-wider text-white/45">Focus</div><div className="mt-2 font-semibold">Dutch office pilots</div></div>
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
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        setI((v) => Math.min(slides.length - 1, v + 1));
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        setI((v) => Math.max(0, v - 1));
      }
      if (e.key.toLowerCase() === "f") toggleFs();
      if (e.key === "Escape" && document.fullscreenElement) document.exitFullscreen();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onChange() {
      setFs(!!document.fullscreenElement);
    }
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
          <Button size="sm" variant="outline" onClick={toggleFs}>
            {fs ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            <span className="ml-2 hidden sm:inline">Present</span>
          </Button>
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
