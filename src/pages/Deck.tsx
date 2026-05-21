import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Maximize2, Minimize2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Brain,
  Building2,
  CheckCircle2,
  Cpu,
  Database,
  Euro,
  Gauge,
  Layers,
  Leaf,
  Network,
  Plug,
  ShieldCheck,
  Target,
  Thermometer,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

const logo = "/ace-logo-horizontal.png";

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
      className="absolute left-1/2 top-1/2 -ml-[960px] -mt-[540px] origin-center overflow-hidden rounded-2xl bg-[#F7FAFB] shadow-elegant"
    >
      {children}
    </div>
  );
}

function SlideFrame({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${dark ? "bg-[#0E1A23] text-white" : "bg-[#F7FAFB] text-[#0E1A23]"}`}>
      <div className="absolute -right-32 -top-32 h-[430px] w-[430px] rounded-full bg-[#0F6B75]/25 blur-3xl" />
      <div className="absolute -bottom-36 -left-36 h-[430px] w-[430px] rounded-full bg-[#FF8A2B]/20 blur-3xl" />
      <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-16 pt-10">
        <img src={logo} alt="Adaptive Climate Engine" className="h-16 w-auto object-contain" />
        <div className={`text-base font-semibold ${dark ? "text-white/65" : "text-[#0E1A23]/55"}`}>Business Concept · 2026</div>
      </header>
      <main className="relative z-10 flex h-full w-full items-center justify-center px-24 pb-20 pt-36">{children}</main>
    </div>
  );
}

function Kicker({ children, orange = false }: { children: ReactNode; orange?: boolean }) {
  return <div className={`text-xl font-extrabold uppercase tracking-[0.28em] ${orange ? "text-[#FF8A2B]" : "text-[#0F6B75]"}`}>{children}</div>;
}

function Title({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <h2 className={`mt-5 max-w-[1320px] font-display text-7xl font-black leading-[1.03] tracking-tight ${light ? "text-white" : "text-[#0E1A23]"}`}>{children}</h2>;
}

function Text({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`mt-7 max-w-[1180px] text-3xl leading-snug ${light ? "text-white/78" : "text-slate-600"}`}>{children}</p>;
}

function Card({ icon: Icon, title, text, dark = false }: { icon: typeof Activity; title: string; text: string; dark?: boolean }) {
  return (
    <div className={`rounded-[34px] border p-8 shadow-soft ${dark ? "border-white/15 bg-white/8" : "border-slate-200 bg-white"}`}>
      <div className={`mb-6 grid h-16 w-16 place-items-center rounded-2xl ${dark ? "bg-[#FF8A2B] text-[#0E1A23]" : "bg-[#E7F4F2] text-[#0F6B75]"}`}>
        <Icon className="h-8 w-8" />
      </div>
      <h3 className={`font-display text-3xl font-extrabold leading-tight ${dark ? "text-white" : "text-[#0E1A23]"}`}>{title}</h3>
      <p className={`mt-4 text-xl leading-snug ${dark ? "text-white/75" : "text-slate-600"}`}>{text}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[34px] bg-white p-8 shadow-soft ring-1 ring-slate-200">
      <div className="font-display text-6xl font-black text-[#0F6B75]">{value}</div>
      <p className="mt-4 text-xl leading-snug text-slate-600">{label}</p>
    </div>
  );
}

const slides: { title: string; render: () => ReactNode }[] = [
  {
    title: "Cover",
    render: () => (
      <div className="relative h-full w-full overflow-hidden bg-[#0E1A23] text-white">
        <div className="absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full bg-[#0F6B75]/35 blur-3xl" />
        <div className="absolute -bottom-44 -left-44 h-[600px] w-[600px] rounded-full bg-[#FF8A2B]/25 blur-3xl" />
        <div className="relative z-10 flex h-full flex-col justify-between px-28 py-24">
          <img src={logo} alt="Adaptive Climate Engine" className="h-24 w-auto self-start rounded-xl bg-white/95 px-5 py-3" />
          <section>
            <p className="text-2xl font-bold uppercase tracking-[0.38em] text-[#FF8A2B]">Personal comfort · smarter buildings</p>
            <h1 className="mt-8 max-w-[1320px] font-display text-8xl font-black leading-[1.02] tracking-tight">
              Edge-based comfort intelligence for legacy buildings
            </h1>
            <p className="mt-8 max-w-[1100px] text-3xl leading-snug text-white/80">
              Human-centric BMS middleware that combines occupant feedback, sensor data and local AI to improve comfort while reducing HVAC energy waste.
            </p>
          </section>
          <div className="flex justify-between text-xl text-white/65">
            <span>Business Concept · 2026</span>
            <span>adaptiveclimate.nl</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Problem",
    render: () => (
      <SlideFrame>
        <div className="grid w-full max-w-[1540px] grid-cols-2 gap-16">
          <section>
            <Kicker>The problem</Kicker>
            <Title>Legacy BMS controls zones, not people.</Title>
            <Text>Buildings still rely on fixed setpoints, sensor-only logic and average comfort assumptions. That creates discomfort complaints and unnecessary HVAC energy use.</Text>
          </section>
          <section className="grid grid-cols-2 gap-6">
            <Stat value="40–43%" label="of occupants can report thermal discomfort" />
            <Stat value="10–15%" label="of buildings consistently meet acceptable comfort targets" />
            <Stat value="40–60%" label="of building energy can be linked to HVAC" />
            <Stat value="2–5%" label="potential productivity impact from poor comfort" />
          </section>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Blockers",
    render: () => (
      <SlideFrame>
        <div className="w-full max-w-[1540px]">
          <Kicker>Legacy blockers</Kicker>
          <Title>Why personalization is difficult in existing buildings.</Title>
          <div className="mt-12 grid grid-cols-3 gap-7">
            <Card icon={Layers} title="Zonal hardware" text="A single HVAC zone has to serve many people with different preferences, locations and clothing levels." />
            <Card icon={Network} title="Slow control path" text="SCADA and cloud analytics are useful for monitoring, but not ideal for fast local comfort response." />
            <Card icon={Plug} title="Retrofit friction" text="Full BMS replacement is expensive, disruptive and often tied to incumbent vendors." />
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Solution",
    render: () => (
      <SlideFrame dark>
        <div className="w-full max-w-[1540px]">
          <Kicker orange>The solution</Kicker>
          <Title light>A retrofit comfort layer between the BMS and the people inside.</Title>
          <Text light>Adaptive Climate Engine keeps HVAC as the base climate system, then uses edge intelligence and personal comfort devices to close the last-mile comfort gap.</Text>
          <div className="mt-12 grid grid-cols-4 gap-6">
            <Card dark icon={Brain} title="Learns" text="Combines occupant feedback and sensor data." />
            <Card dark icon={Cpu} title="Runs locally" text="Edge processing reduces cloud dependency." />
            <Card dark icon={Gauge} title="Optimizes" text="Supports safer deadband expansion." />
            <Card dark icon={Leaf} title="Saves" text="Targets comfort and HVAC energy impact together." />
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Architecture",
    render: () => (
      <SlideFrame>
        <div className="w-full max-w-[1540px]">
          <Kicker>Architecture</Kicker>
          <Title>Sense. Decide locally. Act.</Title>
          <div className="mt-12 grid grid-cols-3 gap-7">
            <Card icon={Thermometer} title="Sense" text="Zone sensors, occupant feedback, occupancy, CO₂, temperature and personal comfort device status." />
            <Card icon={Workflow} title="Decide locally" text="Smart edge hub processes comfort logic close to the automation layer, not only in the cloud." />
            <Card icon={Activity} title="Act" text="Controls personal comfort devices and sends advisory optimization signals to the existing BMS." />
          </div>
          <div className="mt-10 rounded-[34px] bg-[#0E1A23] p-8 text-2xl font-semibold text-white shadow-soft">
            HVAC provides the base climate. Adaptive Climate Engine delivers personal comfort.
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Business model",
    render: () => (
      <SlideFrame>
        <div className="w-full max-w-[1540px]">
          <Kicker>Business model</Kicker>
          <Title>Pilot-first hardware-enabled SaaS.</Title>
          <div className="mt-12 grid grid-cols-3 gap-7">
            <Card icon={Target} title="Paid pilot" text="Start with one zone or floor to validate comfort and energy potential before scaling." />
            <Card icon={Euro} title="Installation fee" text="Edge hub, sensors, personal comfort devices, BMS integration and commissioning." />
            <Card icon={Database} title="Annual subscription" text="Software, analytics, optimization, reporting and support per building." />
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Market entry",
    render: () => (
      <SlideFrame dark>
        <div className="w-full max-w-[1540px]">
          <Kicker orange>Go to market</Kicker>
          <Title light>Start with Dutch office buildings where comfort and energy both matter.</Title>
          <div className="mt-12 grid grid-cols-3 gap-7">
            <Card dark icon={Building2} title="Initial segment" text="Medium-large office buildings with existing BMS infrastructure and retrofit needs." />
            <Card dark icon={Users} title="Buying group" text="Building owners, facility managers, service providers and sustainability teams." />
            <Card dark icon={ShieldCheck} title="Low-risk entry" text="Begin in read-only or advisory mode, then move to controlled optimization after validation." />
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Roadmap",
    render: () => (
      <SlideFrame>
        <div className="w-full max-w-[1540px]">
          <Kicker>Roadmap</Kicker>
          <Title>Build, validate, then scale carefully.</Title>
          <div className="mt-12 grid grid-cols-3 gap-7">
            <Card icon={CheckCircle2} title="Year 1: MVP + 2 pilots" text="Validate the first pilot, then complete a second controlled deployment." />
            <Card icon={TrendingUp} title="Year 2: 4 buildings" text="Standardize installation, support, measurement and partner workflows." />
            <Card icon={Leaf} title="Year 3: 6 buildings" text="Scale cautiously with repeatable deployment templates and service partnerships." />
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Current status",
    render: () => (
      <SlideFrame>
        <div className="grid w-full max-w-[1540px] grid-cols-2 gap-16">
          <section>
            <Kicker>Current status</Kicker>
            <Title>Pre-commercial validation stage.</Title>
            <Text>No paid pilot traction is claimed. The next step is securing pilot partners and generating measured comfort and energy evidence.</Text>
          </section>
          <section className="grid gap-7">
            <Card icon={Brain} title="Strong technical foundation" text="Based on EngD work in PECS, occupant feedback, IoT, ML-based control and BMS integration." />
            <Card icon={Target} title="Immediate milestone" text="Complete MVP integration and validate the offer in Dutch office-building pilots." />
          </section>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Closing",
    render: () => (
      <div className="relative h-full w-full overflow-hidden bg-[#0E1A23] text-white">
        <div className="absolute -right-40 -bottom-40 h-[620px] w-[620px] rounded-full bg-[#0F6B75]/35 blur-3xl" />
        <div className="relative z-10 flex h-full flex-col justify-between px-28 py-24">
          <img src={logo} alt="Adaptive Climate Engine" className="h-24 w-auto self-start rounded-xl bg-white/95 px-5 py-3" />
          <section>
            <h2 className="max-w-[1180px] font-display text-8xl font-black leading-[1.02] tracking-tight">Personal comfort for smarter buildings.</h2>
            <p className="mt-8 max-w-[1040px] text-3xl leading-snug text-white/78">A practical retrofit layer for human-centric, energy-efficient legacy buildings.</p>
          </section>
          <div className="grid grid-cols-3 gap-12 text-xl text-white/70">
            <div><div className="text-sm uppercase tracking-[0.28em] text-white/45">Web</div><div className="mt-2 font-bold">adaptiveclimate.nl</div></div>
            <div><div className="text-sm uppercase tracking-[0.28em] text-white/45">Email</div><div className="mt-2 font-bold">hello@adaptiveclimate.nl</div></div>
            <div><div className="text-sm uppercase tracking-[0.28em] text-white/45">Focus</div><div className="mt-2 font-bold">Dutch office pilots</div></div>
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
