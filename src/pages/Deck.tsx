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

function DeckLogo({ variant = "standard" }: { variant?: "standard" | "large" }) {
  return (
    <div className={`${variant === "large" ? "w-[340px]" : "w-[220px]"} rounded-xl bg-white/95 px-4 py-3 shadow-soft`}>
      <img src={logo} alt="Adaptive Climate Engine" className="block h-auto w-full object-contain" />
    </div>
  );
}

function SlideFrame({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${dark ? "bg-primary text-primary-foreground" : "bg-background text-foreground"}`}>
      <div className="absolute -right-32 -top-32 h-[430px] w-[430px] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-36 -left-36 h-[430px] w-[430px] rounded-full bg-primary-glow/15 blur-3xl" />
      <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-20 pt-10">
        <DeckLogo />
        <div className={`text-sm font-medium ${dark ? "text-white/60" : "text-muted-foreground"}`}>Adaptive Climate Engine · Pitch 2026</div>
      </header>
      <main className="relative z-10 flex h-full items-center px-24 pb-16 pt-32">
        <div className="mx-auto w-full max-w-[1500px]">{children}</div>
      </main>
    </div>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return <div className="text-[16px] font-bold uppercase tracking-[0.22em] text-accent">{children}</div>;
}

function SlideTitle({ children, light = false, narrow = false }: { children: ReactNode; light?: boolean; narrow?: boolean }) {
  return (
    <h2 className={`mt-3 font-display text-[52px] font-bold leading-[1.08] tracking-tight ${narrow ? "max-w-[980px]" : "max-w-[1320px]"} ${light ? "text-white" : "text-foreground"}`}>
      {children}
    </h2>
  );
}

function SlideText({ children, light = false, narrow = false }: { children: ReactNode; light?: boolean; narrow?: boolean }) {
  return <p className={`mt-5 text-[24px] leading-snug ${narrow ? "max-w-[880px]" : "max-w-[1120px]"} ${light ? "text-white/78" : "text-muted-foreground"}`}>{children}</p>;
}

function SourceNote({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`mt-5 text-[13px] leading-relaxed ${light ? "text-white/55" : "text-muted-foreground"}`}>{children}</p>;
}

function MetricCard({ value, label, source, dark = false }: { value: string; label: string; source?: string; dark?: boolean }) {
  return (
    <div className={`min-h-[190px] rounded-2xl border p-7 shadow-soft ${dark ? "border-white/15 bg-white/8" : "border-border bg-card"}`}>
      <div className="font-display text-[48px] font-bold leading-none text-gradient">{value}</div>
      <p className={`mt-4 text-[19px] leading-snug ${dark ? "text-white/78" : "text-muted-foreground"}`}>{label}</p>
      {source && <p className={`mt-4 text-[12px] ${dark ? "text-white/45" : "text-muted-foreground"}`}>{source}</p>}
    </div>
  );
}

function FeatureCard({ icon: Icon, title, text, dark = false, tall = false }: { icon: IconType; title: string; text: string; dark?: boolean; tall?: boolean }) {
  return (
    <div className={`${tall ? "min-h-[250px]" : "min-h-[215px]"} rounded-2xl border p-7 shadow-soft ${dark ? "border-white/15 bg-white/8" : "border-border bg-card"}`}>
      <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${dark ? "bg-accent text-accent-foreground" : "bg-accent-soft text-accent"}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className={`font-display text-[25px] font-semibold leading-tight ${dark ? "text-white" : "text-foreground"}`}>{title}</h3>
      <p className={`mt-3 text-[18px] leading-snug ${dark ? "text-white/75" : "text-muted-foreground"}`}>{text}</p>
    </div>
  );
}

function StepCard({ n, icon: Icon, title, text, dark = false }: { n: string; icon: IconType; title: string; text: string; dark?: boolean }) {
  return (
    <div className={`rounded-2xl border p-7 ${dark ? "border-white/15 bg-white/8" : "border-border bg-card"}`}>
      <div className="flex items-center justify-between">
        <div className="font-display text-[33px] font-bold text-accent">{n}</div>
        <div className={`grid h-12 w-12 place-items-center rounded-xl ${dark ? "bg-accent text-accent-foreground" : "bg-accent-soft text-accent"}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <h3 className={`mt-5 font-display text-[26px] font-semibold ${dark ? "text-white" : "text-foreground"}`}>{title}</h3>
      <p className={`mt-3 text-[18px] leading-snug ${dark ? "text-white/76" : "text-muted-foreground"}`}>{text}</p>
    </div>
  );
}

function ArchitectureBlock({ title, text, icon: Icon }: { title: string; text: string; icon: IconType }) {
  return (
    <div className="flex min-h-[205px] flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-display text-[24px] font-semibold">{title}</h3>
      <p className="mt-2 max-w-[260px] text-[17px] leading-snug text-muted-foreground">{text}</p>
    </div>
  );
}

function Milestone({ step, title, points }: { step: string; title: string; points: string[] }) {
  return (
    <div className="relative flex min-h-[285px] flex-col rounded-2xl border border-white/15 bg-white/10 p-6 shadow-soft backdrop-blur">
      <div className="flex min-h-[58px] items-center gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent font-display text-xl font-bold text-accent-foreground">{step}</span>
        <h3 className="font-display text-[24px] font-semibold leading-tight text-white">{title}</h3>
      </div>
      <ul className="mt-5 space-y-2 text-[18px] leading-snug text-white/78">
        {points.map((p) => <li key={p}>• {p}</li>)}
      </ul>
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
          <DeckLogo variant="large" />
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
        <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-14">
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
        <Kicker>Why now</Kicker>
        <SlideTitle>Energy rules, costs and tenant expectations are pushing retrofit modernization.</SlideTitle>
        <div className="mt-9 grid grid-cols-2 gap-6">
          <FeatureCard icon={Globe2} title="EU pressure" text="Buildings represent roughly 40% of EU energy use, making efficiency upgrades a policy priority." />
          <FeatureCard icon={Euro} title="Operating costs" text="Energy volatility keeps HVAC efficiency high on the building-owner agenda." />
          <FeatureCard icon={Users} title="Tenant experience" text="Hybrid work makes comfort and workplace quality harder to ignore." />
          <FeatureCard icon={Building2} title="Retrofit reality" text="Most existing buildings need practical upgrades, not full BMS replacement." />
        </div>
        <SourceNote>Source anchor: EU EPBD recast / Reuters, 2024; building renovation agenda and energy-performance pressure.</SourceNote>
      </SlideFrame>
    ),
  },
  {
    title: "Market opportunity",
    render: () => (
      <SlideFrame>
        <Kicker>Market opportunity</Kicker>
        <SlideTitle>Dutch BMS-enabled offices are the first beachhead.</SlideTitle>
        <SlideText>Market sizing is based on conservative business-plan assumptions and will be refined during pilot validation.</SlideText>
        <div className="mt-8 grid grid-cols-2 gap-6">
          <MetricCard value="TAM" label="Dutch office buildings with potential for smart comfort and HVAC optimization." source="Dutch office market / business-plan estimate" />
          <MetricCard value="SAM" label="Medium and large offices with existing BMS infrastructure and retrofit potential." source="Business-plan estimate" />
          <MetricCard value="SOM" label="Initial reachable market: first 2–6 pilot-ready buildings across the validation phase." source="Conservative entry assumption" />
          <MetricCard value="ARR" label="Pilot fee → integration fee → annual subscription per validated building." source="Business-model assumption" />
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Solution",
    render: () => (
      <SlideFrame>
        <Kicker>Solution</Kicker>
        <SlideTitle>ACE adds the human-centric comfort layer missing from existing BMS.</SlideTitle>
        <div className="mt-9 rounded-3xl border border-border bg-secondary/35 p-7 shadow-soft">
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-5">
            <ArchitectureBlock icon={Database} title="Building data + feedback" text="Environmental signals and occupant comfort input." />
            <div className="flex items-center text-4xl font-bold text-accent">→</div>
            <ArchitectureBlock icon={Brain} title="ACE edge layer" text="Local comfort intelligence near the automation layer." />
            <div className="flex items-center text-4xl font-bold text-accent">→</div>
            <div className="grid gap-4">
              <ArchitectureBlock icon={Fan} title="Localized comfort" text="Compatible personal comfort devices." />
              <ArchitectureBlock icon={Gauge} title="BMS/HVAC advisory" text="High-level comfort and energy recommendations." />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-4 text-center text-[15px] text-muted-foreground">
            <div className="rounded-xl border border-border bg-card px-4 py-3">SCADA / supervisory layer</div>
            <div className="rounded-xl border border-accent/40 bg-accent-soft/40 px-4 py-3">Building automation layer</div>
            <div className="rounded-xl border border-border bg-card px-4 py-3">Field / occupant environment</div>
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "How it works",
    render: () => (
      <SlideFrame dark>
        <Kicker>How it works</Kicker>
        <SlideTitle light>Sense. Decide locally. Support comfort.</SlideTitle>
        <div className="mt-12 grid grid-cols-3 gap-7">
          <StepCard dark n="01" icon={Activity} title="Sense" text="Building data and occupant feedback create a clearer view of comfort." />
          <StepCard dark n="02" icon={Cpu} title="Decide locally" text="Edge-based comfort intelligence evaluates local conditions near automation systems." />
          <StepCard dark n="03" icon={Fan} title="Support comfort" text="ACE supports personal comfort devices and BMS/HVAC advisory recommendations." />
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Differentiation",
    render: () => (
      <SlideFrame>
        <Kicker>Why ACE is different</Kicker>
        <SlideTitle>Not a dashboard. Not a full BMS replacement.</SlideTitle>
        <div className="mt-9 grid grid-cols-2 gap-6">
          <FeatureCard icon={Building2} title="Traditional BMS" text="Zone-based control and fixed operational logic." />
          <FeatureCard icon={BarChart3} title="SCADA dashboard" text="Monitoring, reporting and operational visibility." />
          <FeatureCard icon={LineChart} title="Cloud analytics" text="Portfolio insights, benchmarking and reporting." />
          <FeatureCard icon={Sparkles} title="ACE" text="Edge-based, human-centric comfort support alongside existing BMS." />
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Evidence base",
    render: () => (
      <SlideFrame>
        <Kicker>Evidence base</Kicker>
        <SlideTitle>The logic is research-backed. The product will be pilot-validated.</SlideTitle>
        <div className="mt-9 grid grid-cols-3 gap-6">
          <FeatureCard tall icon={Thermometer} title="Comfort gap" text="Personal comfort systems can bridge centralized HVAC and individual comfort needs." />
          <FeatureCard tall icon={Leaf} title="Energy potential" text="Smart and adaptive HVAC control research indicates significant saving potential." />
          <FeatureCard tall icon={Gauge} title="Flexible operation" text="Occupant-centric and zone-level flexibility are credible smart-building directions." />
        </div>
        <SourceNote>
          Source anchors: Personal Comfort Systems research; HVAC optimization literature, 2023. ACE results will be measured during pilots.
        </SourceNote>
      </SlideFrame>
    ),
  },
  {
    title: "Business model",
    render: () => (
      <SlideFrame>
        <Kicker>Business model</Kicker>
        <SlideTitle>Validate → convert → expand.</SlideTitle>
        <div className="mt-9 grid grid-cols-3 gap-6">
          <FeatureCard icon={Target} title="Paid pilot" text="Validate comfort, operational feasibility and energy-saving potential." />
          <FeatureCard icon={Euro} title="Integration fee" text="Edge hub, sensors, selected devices, integration support and commissioning." />
          <FeatureCard icon={Database} title="Annual subscription" text="Software, analytics, reporting, support and optimization services." />
        </div>
        <div className="mt-7 rounded-2xl border border-border bg-secondary/45 p-6 text-[20px] text-muted-foreground">
          <span className="font-semibold text-foreground">Commercial logic:</span> begin with a paid pilot, convert validated buildings into subscriptions and expand across portfolios.
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Go-to-market",
    render: () => (
      <SlideFrame>
        <Kicker>Go-to-market</Kicker>
        <SlideTitle>Investor logic: small pilots can become recurring building revenue.</SlideTitle>
        <div className="mt-9 grid grid-cols-2 gap-6">
          <FeatureCard icon={SearchCheck} title="Pilot wedge" text="Start with one office floor or zone to reduce buyer risk." />
          <FeatureCard icon={Plug} title="Partner channel" text="Work through BMS/HVAC service providers and facility teams." />
          <FeatureCard icon={LineChart} title="Measured proof" text="Use pilot data to build a building-level business case." />
          <FeatureCard icon={Handshake} title="Subscription conversion" text="Convert validated pilots into recurring software and support revenue." />
        </div>
        <SourceNote>Market data anchors: EU building energy pressure; Dutch office market reports; smart building market reports; business-plan assumptions.</SourceNote>
      </SlideFrame>
    ),
  },
  {
    title: "Roadmap",
    render: () => (
      <SlideFrame dark>
        <Kicker>Roadmap</Kicker>
        <SlideTitle light>Build, validate, repeat, then scale.</SlideTitle>
        <div className="relative mt-10">
          <div className="absolute left-10 right-10 top-[39px] h-1 rounded-full bg-white/20" />
          <div className="grid grid-cols-5 gap-4">
            <Milestone step="1" title="MVP completion" points={["Edge hub setup", "Core software workflow", "Measurement framework"]} />
            <Milestone step="2" title="Pilot 1" points={["One office zone/floor", "Comfort feedback", "Measured validation"]} />
            <Milestone step="3" title="Pilot 2" points={["Repeat deployment", "Standard checklist", "Refine business case"]} />
            <Milestone step="4" title="Early deployments" points={["Convert validated pilots", "Partner installation", "Subscription model"]} />
            <Milestone step="5" title="Cautious scale-up" points={["Repeatable templates", "Service partners", "Support and analytics"]} />
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Current status",
    render: () => (
      <SlideFrame>
        <Kicker>Current status</Kicker>
        <SlideTitle>Credible early-stage company preparing for validation.</SlideTitle>
        <div className="mt-9 grid grid-cols-2 gap-6">
          <FeatureCard icon={ShieldCheck} title="Pre-commercial stage" text="No paid pilot is claimed; the company is preparing for measured validation." />
          <FeatureCard icon={CheckCircle2} title="Business foundation" text="Business plan, website, positioning and pilot offer are prepared." />
          <FeatureCard icon={Cpu} title="Technical foundation" text="Smart buildings, BMS/HVAC, IoT, occupant comfort and energy systems." />
          <FeatureCard icon={Target} title="Next step" text="Secure pilot partner, complete MVP integration and generate measured evidence." />
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "The ask",
    render: () => (
      <SlideFrame>
        <Kicker>The ask</Kicker>
        <SlideTitle>Seeking pilot access, technical partners and early-stage capital.</SlideTitle>
        <div className="mt-9 grid grid-cols-3 gap-6">
          <FeatureCard tall icon={Building2} title="Pilot site" text="Dutch office floor or zone with BMS/HVAC infrastructure, facility support and occupant participation." />
          <FeatureCard tall icon={Handshake} title="Technical partner" text="BMS/HVAC integration support, building-data access, commissioning review and pilot installation support." />
          <FeatureCard tall icon={Euro} title="Funding" text="MVP completion, pilot hardware/software, integration testing, validation and early sales development." />
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Closing",
    render: () => (
      <div className="relative h-full w-full overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute -right-44 -bottom-44 h-[620px] w-[620px] rounded-full bg-accent/30 blur-3xl" />
        <div className="relative z-10 flex h-full flex-col justify-between px-28 py-24">
          <DeckLogo variant="large" />
          <section>
            <h2 className="max-w-[1050px] font-display text-[68px] font-bold leading-[1.05] tracking-tight">
              Personal comfort for smarter buildings.
            </h2>
            <p className="mt-7 max-w-[900px] text-[28px] leading-snug text-white/80">
              A practical retrofit layer for comfort, efficiency and human-centric building operation.
            </p>
          </section>
          <div className="grid grid-cols-3 gap-12 text-[20px] text-white/72">
            <div className="text-left"><div className="text-sm uppercase tracking-wider text-white/45">Web</div><div className="mt-2 font-semibold">adaptiveclimate.nl</div></div>
            <div className="text-center"><div className="text-sm uppercase tracking-wider text-white/45">Email</div><div className="mt-2 font-semibold">hello@adaptiveclimate.nl</div></div>
            <div className="text-right"><div className="text-sm uppercase tracking-wider text-white/45">Focus</div><div className="mt-2 font-semibold">Dutch office pilots</div></div>
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
