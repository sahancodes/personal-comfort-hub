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
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Activity,
  Target,
  Euro,
  Layers,
  Cpu,
  Network,
  Database,
} from "lucide-react";

function SlideFrame({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`slide-content relative h-full w-full overflow-hidden ${dark ? "bg-[#0E1A23] text-white" : "bg-[#F7FAFB] text-[#0E1A23]"}`}>
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-16 pt-10">
        <img
          src={dark ? "/ace-social-preview.svg" : "/ace-logo-horizontal.svg"}
          alt="Adaptive Climate Engine"
          className={dark ? "h-20 w-auto" : "h-16 w-auto"}
        />
        <div className={`text-base font-medium ${dark ? "text-white/70" : "text-[#0E1A23]/60"}`}>
          Adaptive Climate Engine · Business Concept 2026
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-center px-28 pb-24 pt-36">{children}</div>
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
      setScale(Math.min(el.clientWidth / 1920, el.clientHeight / 1080));
    }
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

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
    <div className="font-display text-5xl font-bold text-[#0F6B75]">{value}</div>
    <p className="mt-4 text-xl leading-snug text-slate-600">{label}</p>
  </div>
);

const FeatureCard = ({ icon: Icon, title, text }: { icon: typeof Activity; title: string; text: string }) => (
  <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
    <div className="mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-[#E7F4F2] text-[#0F6B75]">
      <Icon className="h-8 w-8" />
    </div>
    <h3 className="font-display text-3xl font-semibold text-[#0E1A23]">{title}</h3>
    <p className="mt-4 text-xl leading-relaxed text-slate-600">{text}</p>
  </div>
);

const slides: { title: string; render: () => ReactNode }[] = [
  {
    title: "Cover",
    render: () => (
      <div className="slide-content relative h-full w-full overflow-hidden bg-[#0E1A23] text-white">
        <div className="absolute -right-36 -top-36 h-[520px] w-[520px] rounded-full bg-[#0F6B75]/35 blur-3xl" />
        <div className="absolute -bottom-44 -left-44 h-[520px] w-[520px] rounded-full bg-[#FF8A2B]/20 blur-3xl" />
        <div className="relative z-10 flex h-full w-full flex-col justify-between px-28 py-24">
          <img src="/ace-social-preview.svg" alt="Adaptive Climate Engine" className="h-36 w-auto self-start" />
          <div>
            <p className="text-2xl font-semibold uppercase tracking-[0.35em] text-[#63B7AE]">Personal comfort. Smarter buildings.</p>
            <h1 className="mt-8 max-w-5xl font-display text-8xl font-bold leading-[1.02]">
              Edge-based comfort intelligence for legacy buildings
            </h1>
            <p className="mt-8 max-w-4xl text-3xl leading-snug text-white/78">
              Human-centric BMS middleware that combines occupant feedback, sensor data and local AI to improve comfort while reducing HVAC energy waste.
            </p>
          </div>
          <div className="flex items-end justify-between text-xl text-white/65">
            <div>Business Concept · 2026</div>
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
        <div className="grid w-full max-w-[1540px] grid-cols-2 gap-16">
          <div>
            <div className="text-xl font-bold uppercase tracking-[0.25em] text-[#0F6B75]">The problem</div>
            <h2 className="mt-5 font-display text-7xl font-bold leading-[1.05]">Legacy BMS controls zones, not people.</h2>
            <p className="mt-8 text-3xl leading-snug text-slate-600">
              Most buildings use fixed setpoints, zonal control and sensor-only logic. The result is thermal discomfort, over-conditioning and limited personalization.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <StatCard value="40–43%" label="of occupants can report thermal discomfort" />
            <StatCard value="10–15%" label="of buildings consistently meet acceptable comfort targets" />
            <StatCard value="40–60%" label="of building energy can be linked to HVAC" />
            <StatCard value="2–5%" label="potential productivity impact from poor comfort" />
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Legacy blockers",
    render: () => (
      <SlideFrame>
        <div className="w-full max-w-[1540px]">
          <div className="text-xl font-bold uppercase tracking-[0.25em] text-[#0F6B75]">Legacy blockers</div>
          <h2 className="mt-5 font-display text-7xl font-bold">Why full modernization is difficult.</h2>
          <div className="mt-12 grid grid-cols-3 gap-7">
            <FeatureCard icon={Layers} title="Zonal control" text="One HVAC zone must satisfy many occupants with different comfort preferences." />
            <FeatureCard icon={Network} title="Latency gap" text="SCADA and cloud analytics are useful for reporting, but too slow for personal real-time comfort control." />
            <FeatureCard icon={Plug} title="Retrofit friction" text="Full BMS replacement is expensive, disruptive and often locked to incumbent vendors." />
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
          <div className="text-xl font-bold uppercase tracking-[0.25em] text-[#FF8A2B]">The solution</div>
          <h2 className="mt-5 max-w-5xl font-display text-7xl font-bold leading-tight">A retrofit-friendly comfort intelligence layer.</h2>
          <p className="mt-8 max-w-5xl text-3xl leading-snug text-white/75">
            Adaptive Climate Engine sits near the building automation layer. HVAC provides the base climate, while personal comfort devices close the last-mile comfort gap.
          </p>
          <div className="mt-12 grid grid-cols-4 gap-6">
            <FeatureCard icon={Brain} title="Learns" text="Combines feedback and sensor data to understand comfort preference." />
            <FeatureCard icon={Cpu} title="Runs locally" text="Edge processing reduces dependency on cloud round trips." />
            <FeatureCard icon={Gauge} title="Optimizes" text="Supports wider HVAC deadbands where comfort can be maintained." />
            <FeatureCard icon={Leaf} title="Saves" text="Targets comfort improvement and measurable HVAC energy reduction." />
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
          <div className="text-xl font-bold uppercase tracking-[0.25em] text-[#0F6B75]">System architecture</div>
          <h2 className="mt-5 font-display text-7xl font-bold">Integrated at the practical control layer.</h2>
          <div className="mt-12 grid grid-cols-3 gap-7">
            {[
              ["01", "SCADA / Management", "Dashboards, reporting, alarms and high-level analytics."],
              ["02", "Automation layer", "BACnet, Modbus, Priva, PLC and HVAC controllers. This is where ACE connects."],
              ["03", "Field + comfort layer", "Sensors, occupants, desks and personal comfort devices."],
            ].map(([n, title, text]) => (
              <div key={n} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
                <div className="font-display text-5xl font-bold text-[#FF8A2B]">{n}</div>
                <h3 className="mt-5 font-display text-3xl font-semibold">{title}</h3>
                <p className="mt-4 text-2xl leading-snug text-slate-600">{text}</p>
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
        <div className="w-full max-w-[1540px]">
          <div className="text-xl font-bold uppercase tracking-[0.25em] text-[#0F6B75]">Business model</div>
          <h2 className="mt-5 font-display text-7xl font-bold">Pilot-first hardware-enabled SaaS.</h2>
          <div className="mt-12 grid grid-cols-3 gap-7">
            <FeatureCard icon={Target} title="Pilot project" text="3-month pilot on one zone or floor to validate comfort and energy potential." />
            <FeatureCard icon={Euro} title="Installation fee" text="Edge gateway, sensors, personal comfort devices, integration and commissioning." />
            <FeatureCard icon={Database} title="Annual subscription" text="Software, monitoring, analytics, support and optimization per building." />
          </div>
          <div className="mt-10 rounded-3xl border border-[#0F6B75]/25 bg-white p-8 text-2xl text-slate-700 shadow-soft">
            Conservative initial commercial model: paid pilots, then annual building subscriptions after measured validation.
          </div>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Go to market",
    render: () => (
      <SlideFrame dark>
        <div className="w-full max-w-[1540px]">
          <div className="text-xl font-bold uppercase tracking-[0.25em] text-[#FF8A2B]">Go to market</div>
          <h2 className="mt-5 font-display text-7xl font-bold">Start with Dutch office buildings.</h2>
          <div className="mt-12 grid grid-cols-3 gap-7">
            <FeatureCard icon={Building2} title="Target" text="Commercial offices with existing BMS and comfort or energy performance pressure." />
            <FeatureCard icon={Users} title="Pilot partners" text="Facility managers, building owners, technical service providers and innovation teams." />
            <FeatureCard icon={ShieldCheck} title="Low-risk entry" text="Start in read-only or advisory mode before controlled optimization is enabled." />
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
          <div className="text-xl font-bold uppercase tracking-[0.25em] text-[#0F6B75]">Roadmap</div>
          <h2 className="mt-5 font-display text-7xl font-bold">Build, validate, then scale.</h2>
          <div className="mt-12 grid grid-cols-3 gap-7">
            {[
              ["Year 1", "MVP + 2 pilots", "Validate one pilot in the first half and a second deployment in the second half."],
              ["Year 2", "4 buildings", "Standardize installation, support and measurement workflows."],
              ["Year 3", "6 buildings", "Scale cautiously with partners and repeatable deployment templates."],
            ].map(([n, title, text]) => (
              <div key={n} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
                <div className="font-display text-4xl font-bold text-[#FF8A2B]">{n}</div>
                <h3 className="mt-5 font-display text-3xl font-semibold">{title}</h3>
                <p className="mt-4 text-2xl leading-snug text-slate-600">{text}</p>
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
        <div className="w-full max-w-[1540px]">
          <div className="text-xl font-bold uppercase tracking-[0.25em] text-[#0F6B75]">Current status</div>
          <h2 className="mt-5 font-display text-7xl font-bold">Pre-commercial validation stage.</h2>
          <div className="mt-12 grid grid-cols-2 gap-7">
            <FeatureCard icon={CheckCircle2} title="Strong technical foundation" text="Built on EngD research in personal environmental control, IoT, user feedback and ML-based control." />
            <FeatureCard icon={Workflow} title="Next milestone" text="Secure pilot partners, complete MVP integration and generate measured comfort and energy evidence." />
          </div>
          <p className="mt-10 text-2xl leading-relaxed text-slate-600">
            No paid pilot traction is claimed. The current goal is to validate the technology and commercial model through carefully scoped Dutch building pilots.
          </p>
        </div>
      </SlideFrame>
    ),
  },
  {
    title: "Closing",
    render: () => (
      <div className="slide-content relative h-full w-full overflow-hidden bg-[#0E1A23] text-white">
        <div className="absolute -right-44 -bottom-44 h-[620px] w-[620px] rounded-full bg-[#0F6B75]/35 blur-3xl" />
        <div className="relative z-10 flex h-full w-full flex-col justify-between px-28 py-24">
          <img src="/ace-social-preview.svg" alt="Adaptive Climate Engine" className="h-36 w-auto self-start" />
          <div>
            <h2 className="max-w-5xl font-display text-8xl font-bold leading-[1.03]">Personal comfort for smarter buildings.</h2>
            <p className="mt-8 max-w-4xl text-3xl leading-snug text-white/75">
              Adaptive Climate Engine helps legacy buildings become more comfortable, more efficient and more human-centric.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-12 text-xl text-white/75">
            <div><div className="text-sm uppercase tracking-[0.25em] text-white/45">Web</div><div className="mt-2 font-semibold">adaptiveclimate.nl</div></div>
            <div><div className="text-sm uppercase tracking-[0.25em] text-white/45">Email</div><div className="mt-2 font-semibold">hello@adaptiveclimate.nl</div></div>
            <div><div className="text-sm uppercase tracking-[0.25em] text-white/45">Focus</div><div className="mt-2 font-semibold">Dutch office pilots</div></div>
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
