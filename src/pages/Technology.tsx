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
  Gauge,
  Activity,
  Building2,
  Users,
  ArrowRight,
} from "lucide-react";

const blocks = [
  {
    icon: Plug,
    title: "Existing building integration",
    desc: "Designed as a retrofit-friendly layer that can work alongside existing building systems without requiring full BMS replacement.",
  },
  {
    icon: Radio,
    title: "Human-centric feedback layer",
    desc: "Uses occupant comfort feedback as one input into a proprietary comfort evaluation process.",
  },
  {
    icon: Brain,
    title: "Proprietary edge comfort engine",
    desc: "Processes building and comfort signals locally to support responsive comfort decisions without exposing the underlying logic.",
  },
  {
    icon: Workflow,
    title: "Localized comfort coordination",
    desc: "Supports coordination of compatible personal comfort technologies where appropriate for the building and pilot scope.",
  },
  {
    icon: Database,
    title: "Pilot-based measurement",
    desc: "Uses pilot data to evaluate comfort improvement, operational feasibility, and energy-saving potential.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy and safety by design",
    desc: "Keeps existing BMS safety logic authoritative and limits public disclosure of internal control methods.",
  },
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
        <span className="rounded border border-dashed border-border px-2 py-0.5">conceptual information flow</span>
      </div>

      <div className="rounded-2xl border-2 border-accent bg-accent-soft/40 p-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-accent-foreground text-sm font-bold">2</span>
          <div>
            <div className="font-display text-lg font-semibold">Building automation layer</div>
            <div className="text-xs text-muted-foreground">Conceptual position of the Adaptive Climate Engine near existing building systems</div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          <div className="grid gap-3">
            <div className="rounded-xl border border-border bg-card p-4 text-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Input group A</div>
              <div className="mt-2 font-medium">Building and environmental signals</div>
              <p className="mt-1 text-muted-foreground">
                Examples include temperature, humidity, occupancy and other available building signals.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Input group B</div>
              <div className="mt-2 font-medium">Human-centric subjective feedback</div>
              <p className="mt-1 text-muted-foreground">
                Occupant comfort feedback is used as part of the proprietary comfort evaluation process.
              </p>
            </div>
          </div>

          <div className="rounded-xl border-2 border-accent bg-gradient-cool p-5 text-primary-foreground shadow-glow">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-foreground/90">
              <Brain className="h-4 w-4" /> Adaptive Climate Engine
            </div>
            <div className="mt-2 font-display text-lg font-semibold">Proprietary edge comfort intelligence</div>
            <ul className="mt-3 space-y-1.5 text-sm text-primary-foreground/90">
              <li>✓ Proprietary comfort evaluation</li>
              <li>✓ Edge-based decision support</li>
              <li>✓ Localized comfort coordination</li>
              <li>✓ High-level HVAC advisory layer</li>
              <li>✓ Privacy-conscious operation</li>
            </ul>
          </div>

          <div className="grid gap-3">
            <div className="rounded-xl border border-border bg-card p-4 text-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Output group A</div>
              <div className="mt-2 font-medium">BMS / HVAC advisory layer</div>
              <p className="mt-1 text-muted-foreground">
                Provides high-level optimization recommendations to support comfort and energy performance while existing BMS safety logic remains authoritative.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Output group B</div>
              <div className="mt-2 font-medium">Personal comfort device coordination</div>
              <p className="mt-1 text-muted-foreground">
                Coordinates compatible localized comfort devices where applicable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-2 flex items-center justify-center text-muted-foreground text-xs">
        <span className="rounded border border-dashed border-border px-2 py-0.5">conceptual occupant environment layer</span>
      </div>

      <div className="rounded-2xl border border-border bg-secondary/60 p-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-foreground text-background text-sm font-bold">3</span>
          <div>
            <div className="font-display text-lg font-semibold">Field / occupant environment layer</div>
            <div className="text-xs text-muted-foreground">The lived environment where comfort is experienced and validated during pilots</div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">Simplified conceptual view.</span>{" "}
        Detailed implementation, algorithms, control logic and integration methods are proprietary.
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
          <span className="text-gradient">building systems and the people inside.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Adaptive Climate Engine is a retrofit-friendly, human-centric middleware concept for legacy buildings.
          It supports comfort improvement and HVAC energy optimization while keeping the detailed implementation proprietary.
        </p>
      </section>

      <section className="container pb-20">
        <h2 className="mb-3 font-display text-3xl font-bold md:text-4xl">Conceptual System Overview</h2>
        <p className="mb-6 max-w-3xl text-sm text-muted-foreground">
          This diagram is a simplified conceptual view for communication purposes. Detailed implementation, algorithms,
          control logic and integration methods are proprietary.
        </p>
        <ArchitectureDiagram />
      </section>

      <section className="border-y border-border/60 bg-secondary/40 py-20">
        <div className="container">
          <h2 className="font-display text-3xl font-bold md:text-4xl">What's inside</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The public overview below describes the commercial building blocks only. The internal methods, algorithms and integration workflow remain confidential.
          </p>
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
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why edge-based comfort intelligence matters</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
              Analytics can live in the cloud. Comfort benefits from local intelligence.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cloud platforms are useful for dashboards, analytics and reporting. Comfort response, however,
              benefits from local processing close to the building systems. Adaptive Climate Engine is designed
              as an edge-based comfort intelligence layer that supports responsive local decision-making while
              keeping detailed algorithms and integration methods proprietary.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><Cpu className="mt-0.5 h-4 w-4 text-accent" /> Local comfort intelligence</li>
              <li className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 text-accent" /> Existing BMS safety logic remains authoritative</li>
              <li className="flex gap-2"><Workflow className="mt-0.5 h-4 w-4 text-accent" /> Pilot-first deployment with controlled validation</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">From zonal to human-centric</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">
              From zone-level assumptions to human-centric comfort support.
            </h3>
            <p className="mt-3 text-muted-foreground">
              Legacy HVAC is normally designed around zones and averaged comfort assumptions. ACE adds a
              human-centric layer that supports localized comfort responses based on building signals and occupant feedback.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-border bg-secondary/60 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Before</div>
                <div className="mt-1 font-medium">Zone-level comfort assumptions</div>
                <div className="text-muted-foreground">Centralized operation with limited personalization</div>
              </div>
              <div className="rounded-xl border border-accent/40 bg-accent-soft/50 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">After</div>
                <div className="mt-1 font-medium">Human-centric comfort support</div>
                <div className="text-muted-foreground">Supports wider operating ranges where occupant comfort can be maintained through localized comfort support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft lg:col-span-2">
            <h3 className="font-display text-xl font-semibold">Integration approach</h3>
            <ul className="mt-4 grid gap-3 text-sm md:grid-cols-2">
              {[
                "Designed for retrofit-friendly integration with existing building automation environments",
                "Can be evaluated alongside common BMS and HVAC control infrastructures",
                "Supports pilot-first validation before deeper integration",
                "Integration details are assessed case-by-case and kept confidential during project scoping",
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
