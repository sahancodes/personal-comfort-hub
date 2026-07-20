import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  Radio,
  ShieldCheck,
  Brain,
  Plug,
  Database,
  Workflow,
  Fan,
  Flame,
  Sun,
  Activity,
  ArrowRight,
} from "lucide-react";

const blocks = [
  {
    icon: Plug,
    title: "BMS / automation integration",
    desc: "Designed to work with common building automation environments including BACnet, Modbus, KNX, M-Bus and major BMS platforms such as Priva, Niagara, Siemens, Honeywell and Schneider.",
  },
  {
    icon: Radio,
    title: "Sensors + occupant feedback",
    desc: "Desk and zone sensors capture environmental conditions while a simple occupant interface adds the human comfort signal that traditional BMS logic often misses.",
  },
  {
    icon: Brain,
    title: "Local comfort model",
    desc: "Edge-based comfort intelligence learns from building signals and occupant feedback to support faster comfort response close to the building systems.",
  },
  {
    icon: Workflow,
    title: "Orchestration engine",
    desc: "Coordinates compatible personal comfort devices such as desk fans, heated chairs, radiant panels, foot warmers and local air diffusers, together with BMS advisory support.",
  },
  {
    icon: Database,
    title: "Measurement & verification",
    desc: "Pilot-based baselining and reporting support comfort evaluation, energy-impact assessment, ESG reporting and wider rollout decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy & safety by design",
    desc: "Existing BMS safety logic and operating limits remain authoritative. Deployment can begin in read-only or advisory mode before controlled optimization.",
  },
];

const devices = [
  { i: Fan, t: "Desk-level cooling" },
  { i: Flame, t: "Localized heating" },
  { i: Sun, t: "Radiant comfort" },
  { i: Activity, t: "Airflow support" },
];

function ArchitectureDiagram() {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10">
      <div className="rounded-2xl border border-border bg-primary/5 p-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">1</span>
          <div>
            <div className="font-display text-lg font-semibold">SCADA / supervisory layer</div>
            <div className="text-xs text-muted-foreground">Dashboards, monitoring, reporting and operational visibility</div>
          </div>
        </div>
      </div>

      <div className="my-2 flex items-center justify-center text-muted-foreground text-xs">
        <span className="rounded border border-dashed border-border px-2 py-0.5">Building data flow</span>
      </div>

      <div className="rounded-2xl border-2 border-accent bg-accent-soft/40 p-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-accent-foreground text-sm font-bold">2</span>
          <div>
            <div className="font-display text-lg font-semibold">Building automation layer</div>
            <div className="text-xs text-muted-foreground">Where Adaptive Climate Engine works alongside existing BMS and HVAC control infrastructure</div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          <div className="grid gap-3">
            <div className="rounded-xl border border-border bg-card p-4 text-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Input group A</div>
              <div className="mt-2 font-medium">Building and environmental data</div>
              <p className="mt-1 text-muted-foreground">
                Temperature, humidity, occupancy, CO₂ and other available building signals.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Input group B</div>
              <div className="mt-2 font-medium">Occupant comfort feedback</div>
              <p className="mt-1 text-muted-foreground">
                Simple comfort feedback helps the system understand how people experience the space.
              </p>
            </div>
          </div>

          <div className="rounded-xl border-2 border-accent bg-gradient-cool p-5 text-primary-foreground shadow-glow">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-foreground/90">
              <Brain className="h-4 w-4" /> Adaptive Climate Engine
            </div>
            <div className="mt-2 font-display text-lg font-semibold">Edge comfort intelligence</div>
            <ul className="mt-3 space-y-1.5 text-sm text-primary-foreground/90">
              <li>✓ Building data + occupant feedback</li>
              <li>✓ Human-centric comfort evaluation</li>
              <li>✓ Local comfort coordination</li>
              <li>✓ BMS / HVAC advisory support</li>
              <li>✓ Pilot-based learning and validation</li>
            </ul>
          </div>

          <div className="grid gap-3">
            <div className="rounded-xl border border-border bg-card p-4 text-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Output group A</div>
              <div className="mt-2 font-medium">BMS / HVAC advisory support</div>
              <p className="mt-1 text-muted-foreground">
                Supports high-level comfort and energy optimization recommendations while existing BMS safety logic remains in place.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Output group B</div>
              <div className="mt-2 font-medium">Personal comfort device coordination</div>
              <p className="mt-1 text-muted-foreground">
                Coordinates compatible localized comfort devices depending on the building and pilot setup.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-2 flex items-center justify-center text-muted-foreground text-xs">
        <span className="rounded border border-dashed border-border px-2 py-0.5">Comfort response flow</span>
      </div>

      <div className="rounded-2xl border border-border bg-secondary/60 p-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-foreground text-background text-sm font-bold">3</span>
          <div>
            <div className="font-display text-lg font-semibold">Field / occupant environment layer</div>
            <div className="text-xs text-muted-foreground">Sensors, occupants, workspace conditions and localized comfort technologies</div>
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
          Adaptive Climate Engine is retrofit-friendly human-centric middleware for legacy commercial buildings.
          It works alongside existing BMS infrastructure to support personal comfort and HVAC energy optimization.
        </p>
      </section>

      <section className="container pb-20">
        <h2 className="mb-3 font-display text-3xl font-bold md:text-4xl">Conceptual System Overview</h2>
        <p className="mb-6 max-w-5xl whitespace-nowrap text-sm text-muted-foreground max-lg:whitespace-normal">
          A high-level view of how Adaptive Climate Engine fits alongside existing building systems. Final project configuration is defined during pilot scoping.
        </p>
        <ArchitectureDiagram />
      </section>

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

      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why edge-based control matters</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
              Analytics can live in the cloud. Comfort benefits from local intelligence.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cloud platforms are excellent for dashboards, analytics and portfolio reporting. Comfort response
              benefits from intelligence closer to the building systems, where local conditions and occupant feedback
              can be evaluated quickly. Adaptive Climate Engine adds this edge-based comfort layer without requiring full BMS replacement.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><Cpu className="mt-0.5 h-4 w-4 text-accent" /> Local comfort intelligence</li>
              <li className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 text-accent" /> Works alongside existing BMS safety logic</li>
              <li className="flex gap-2"><Workflow className="mt-0.5 h-4 w-4 text-accent" /> Pilot-first validation before wider rollout</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">From zonal to human-centric</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">
              From zone-level assumptions to human-centric comfort support.
            </h3>
            <p className="mt-3 text-muted-foreground">
              Legacy HVAC is normally designed around zones and averaged comfort assumptions. ACE adds a
              human-centric layer that supports localized comfort responses based on building data and occupant feedback.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-border bg-secondary/60 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Before</div>
                <div className="mt-1 font-medium">Zone-level comfort assumptions</div>
                <div className="text-muted-foreground">Centralized HVAC operation with limited personalization.</div>
              </div>
              <div className="rounded-xl border border-accent/40 bg-accent-soft/50 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">After</div>
                <div className="mt-1 font-medium">Human-centric comfort support</div>
                <div className="text-muted-foreground">Localized comfort support helps widen operating flexibility while keeping occupants comfortable.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft lg:col-span-2">
            <h3 className="font-display text-xl font-semibold">Compatibility</h3>
            <ul className="mt-4 grid gap-3 text-sm md:grid-cols-2">
              {[
                "BACnet/IP, BACnet MS/TP, Modbus TCP/RTU, KNX and M-Bus",
                "Priva, Niagara, Siemens Desigo, Honeywell, Johnson Controls and Schneider EcoStruxure",
                "MQTT / REST integration contexts for higher-level platforms",
                "Supports pilot evaluation for comfort, energy and IEQ reporting",
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
