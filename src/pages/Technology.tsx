import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Cpu, Radio, ShieldCheck, Brain, Plug, Database, Workflow,
  Gauge, Fan, Flame, Sun, Activity, Building2, Users, ArrowRight,
} from "lucide-react";

const blocks = [
  { icon: Plug, title: "BMS / automation integration", desc: "Edge gateway speaks BACnet/IP, BACnet MS/TP, Modbus TCP/RTU, KNX, M-Bus and integrates with Priva, Niagara, Siemens Desigo, Honeywell, JCI Metasys and Schneider EcoStruxure." },
  { icon: Radio, title: "Sensors + occupant feedback", desc: "Battery-powered desk and zone sensors measure temperature, humidity, CO₂, occupancy and light. A simple in-app vote, 'too cold / too warm / comfortable', captures the human signal." },
  { icon: Brain, title: "Local AI comfort model", desc: "Edge ML learns per-zone and per-occupant thermal preference from low-friction feedback. Inference runs on-device with no cloud latency, no biometric data leaving the building." },
  { icon: Workflow, title: "Orchestration engine", desc: "Coordinates personal comfort devices, smart desk fans, heated chairs, radiant panels, heated foot mats, local air diffusers, and issues advisory setpoint signals to the BMS." },
  { icon: Database, title: "Measurement & verification", desc: "IPMVP-aligned baselining. Exports for GRESB, CRREM, BREEAM and CSRD reporting. Read-only/advisory mode by default until pilot validation." },
  { icon: ShieldCheck, title: "Privacy & safety by design", desc: "On-device inference. Existing BMS safety logic and limits remain authoritative. SOC 2 / GDPR aligned. Tenants opt in per workspace." },
];

const devices = [
  { i: Fan, t: "Smart desk fans" },
  { i: Flame, t: "Heated chairs" },
  { i: Sun, t: "Radiant panels" },
  { i: Activity, t: "Heated foot mats / warmers" },
];

/* ------------ 3-layer architecture diagram ------------ */
function ArchitectureDiagram() {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10">
      {/* Layer 1 - SCADA */}
      <div className="rounded-2xl border border-border bg-primary/5 p-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">1</span>
          <div>
            <div className="font-display text-lg font-semibold">SCADA / supervisory layer</div>
            <div className="text-xs text-muted-foreground">Monitoring, analytics, reporting · slower decision layer (minutes–hours)</div>
          </div>
          <div className="ml-auto flex flex-wrap gap-2 text-xs">
            {["Dashboards", "Trends", "Alarms", "Energy reports"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-background px-3 py-1 text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* arrows */}
      <div className="my-2 flex items-center justify-center text-muted-foreground text-xs">
        <span className="rounded border border-dashed border-border px-2 py-0.5">read / advisory ⇅</span>
      </div>

      {/* Layer 2 - Automation + ACE */}
      <div className="rounded-2xl border-2 border-accent bg-accent-soft/40 p-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-accent-foreground text-sm font-bold">2</span>
          <div>
            <div className="font-display text-lg font-semibold">Building automation layer · where ACE lives</div>
            <div className="text-xs text-muted-foreground">PLC · Priva · BACnet · Modbus · HVAC controllers (seconds layer)</div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {/* Inputs */}
          <div className="rounded-xl border border-border bg-card p-4 text-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Inputs</div>
            <ul className="mt-2 space-y-1.5">
              <li>• Temperature, humidity, CO₂</li>
              <li>• Occupancy & energy data</li>
              <li>• Occupant feedback (too cold / warm / OK)</li>
              <li>• Personal device status</li>
            </ul>
          </div>

          {/* ACE hub */}
          <div className="rounded-xl border-2 border-accent bg-gradient-cool p-5 text-primary-foreground shadow-glow">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-foreground/90">
              <Brain className="h-4 w-4" /> Smart Edge Comfort Hub
            </div>
            <div className="mt-2 font-display text-lg font-semibold">Adaptive Climate Engine</div>
            <ul className="mt-3 space-y-1.5 text-sm text-primary-foreground/90">
              <li>✓ Local AI / ML inference</li>
              <li>✓ Comfort preference learning</li>
              <li>✓ HVAC deadband optimization</li>
              <li>✓ Advisory setpoint control</li>
              <li>✓ No cloud latency</li>
            </ul>
          </div>

          {/* Outputs */}
          <div className="grid gap-3">
            <div className="rounded-xl border border-border bg-card p-4 text-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">→ HVAC / BMS</div>
              <ul className="mt-2 space-y-1">
                <li>• Wider, safer deadband</li>
                <li>• Setpoint advisory</li>
                <li>• Fewer cycles</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">→ Personal comfort devices</div>
              <ul className="mt-2 space-y-1">
                <li>• Smart desk fans</li>
                <li>• Heated chairs · foot mats</li>
                <li>• Radiant panels · diffusers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="my-2 flex items-center justify-center text-muted-foreground text-xs">
        <span className="rounded border border-dashed border-border px-2 py-0.5">sensing · actuation ⇅</span>
      </div>

      {/* Layer 3 - Field */}
      <div className="rounded-2xl border border-border bg-secondary/60 p-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-foreground text-background text-sm font-bold">3</span>
          <div>
            <div className="font-display text-lg font-semibold">Field layer</div>
            <div className="text-xs text-muted-foreground">Sensors, actuators, occupants, desks, personal comfort devices (real-time)</div>
          </div>
          <div className="ml-auto flex flex-wrap gap-2 text-xs">
            {devices.map((d) => (
              <span key={d.t} className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1 text-muted-foreground">
                <d.i className="h-3.5 w-3.5 text-accent" /> {d.t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">HVAC provides the base climate.</span>{" "}
        Adaptive Climate Engine delivers personal comfort at the edge.
      </p>
    </div>
  );
}

export default function Technology() {
  return (
    <SiteLayout>
      <section className="container py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Technology</p>
        <h1 className="mt-2 max-w-3xl font-display text-5xl font-bold md:text-6xl">
          Edge intelligence between your{" "}
          <span className="text-gradient">BMS and the people inside.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Adaptive Climate Engine is a retrofit-friendly middleware that operates at the building
          automation layer, not just the SCADA dashboard. It senses, learns and orchestrates while
          your existing BMS and safety logic stay in charge.
        </p>
      </section>

      {/* Architecture */}
      <section className="container pb-20">
        <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">A three-layer architecture</h2>
        <ArchitectureDiagram />
      </section>

      {/* Modules */}
      <section className="border-y border-border/60 bg-secondary/40 py-20">
        <div className="container">
          <h2 className="font-display text-3xl font-bold md:text-4xl">What's inside</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blocks.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why edge */}
      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why edge-based control matters</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
              Cloud is great for analytics. Comfort needs the edge.
            </h2>
            <p className="mt-4 text-muted-foreground">
              SCADA platforms and cloud dashboards are excellent for monitoring, trending and
              reporting. But real-time comfort optimization needs sub-second decisions that don't
              depend on internet connectivity or distant servers. ACE runs locally on the edge so
              the building keeps working and keeps people comfortable, even when the cloud
              doesn't.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><Cpu className="mt-0.5 h-4 w-4 text-accent" /> Local inference, no cloud latency</li>
              <li className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 text-accent" /> Existing BMS safety logic remains authoritative</li>
              <li className="flex gap-2"><Workflow className="mt-0.5 h-4 w-4 text-accent" /> Start in read-only / advisory mode, move to controlled optimization after pilot validation</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">From zonal to human-centric</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">
              From zonal control to human-centric control.
            </h3>
            <p className="mt-3 text-muted-foreground">
              Legacy HVAC controls <em>zones</em> with one temperature for many people. ACE adds a
              layer of <em>micro-comfort</em> around each occupant, driven by personal comfort
              devices and informed by what people actually feel.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-border bg-secondary/60 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Before</div>
                <div className="mt-1 font-medium">One zone, one setpoint</div>
                <div className="text-muted-foreground">Average comfort, ±0.5 °C deadband, frequent cycling</div>
              </div>
              <div className="rounded-xl border border-accent/40 bg-accent-soft/50 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">After</div>
                <div className="mt-1 font-medium">Per-person comfort</div>
                <div className="text-muted-foreground">Wider deadband (±2 °C), personal devices close the gap, less waste</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility + CTA */}
      <section className="container pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft lg:col-span-2">
            <h3 className="font-display text-xl font-semibold">Compatibility</h3>
            <ul className="mt-4 grid gap-3 text-sm md:grid-cols-2">
              {[
                "BACnet/IP, BACnet MS/TP, Modbus TCP/RTU, KNX, M-Bus",
                "Priva, Niagara, Siemens Desigo, Honeywell, JCI Metasys, Schneider EcoStruxure",
                "MQTT / REST north-bound for digital-twin platforms",
                "Supports WELL, Fitwel and LEED IEQ credits",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <Plug className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-cool p-8 text-primary-foreground shadow-elegant">
            <h3 className="font-display text-xl font-semibold">Ready to evaluate ACE on a real building?</h3>
            <p className="mt-2 text-sm text-primary-foreground/85">
              Pilot-first, low-risk deployment. Start with one floor or zone.
            </p>
            <Button asChild className="mt-6 bg-background text-foreground hover:bg-background/90">
              <Link to="/buildings#contact">
                Book a Pilot <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
