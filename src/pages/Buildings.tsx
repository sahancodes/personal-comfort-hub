import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { CheckCircle2, Building2, Leaf, Users, TrendingUp } from "lucide-react";

const outcomes = [
  { icon: Leaf, t: "20–40% HVAC energy reduction", d: "Wider safe deadbands + smarter scheduling driven by real occupancy comfort, not assumptions." },
  { icon: Users, t: "+38% occupant satisfaction", d: "Personalized comfort drives WELL/Fitwel scores and tenant retention." },
  { icon: TrendingUp, t: "6–9 month payback", d: "Energy savings alone typically recover hardware + subscription within a year." },
  { icon: Building2, t: "ESG-grade reporting", d: "M&V data exports for GRESB, CRREM, CSRD and Scope 2 disclosures." },
];

const phases = [
  { n: "Week 0–2", t: "Site survey & baseline", d: "We profile your BMS, audit zones, and establish an IPMVP-aligned energy baseline." },
  { n: "Week 3–4", t: "Plug-in install", d: "ACE gateway + sensor mesh deployed during normal operating hours. Zero HVAC downtime." },
  { n: "Week 5–8", t: "Learning phase", d: "Comfort models train per occupant. Deadbands widen progressively under safety guardrails." },
  { n: "Week 9–12", t: "Verified savings report", d: "Signed M&V report with energy, comfort, and ESG impact — ready for tenants and regulators." },
];

export default function Buildings() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({ title: "Thanks!", description: "We'll be in touch within one business day to scope your pilot." });
    }, 600);
  }

  return (
    <SiteLayout>
      <section className="container py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">For building owners & facility teams</p>
        <h1 className="mt-2 max-w-3xl font-display text-5xl font-bold md:text-6xl">
          Smarter HVAC. <span className="text-gradient">Happier tenants.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          ACE deploys onto your existing BMS in days, not months. You keep every safety policy,
          every vendor relationship, and every line of capex you've already spent.
        </p>
      </section>

      <section className="container pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o) => (
            <div key={o.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <o.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{o.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40 py-20">
        <div className="container">
          <h2 className="font-display text-3xl font-bold md:text-4xl">A 90-day path to verified savings</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {phases.map((p) => (
              <div key={p.n} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">{p.n}</div>
                <h3 className="mt-2 font-display text-lg font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="container py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Book a pilot</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Tell us about a building and we'll come back with a tailored pilot scope, expected
              savings, and an installation plan — usually within one business day.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {["No upfront capex options", "Outcome-based pricing available", "Multi-site rollouts supported"].map((i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> {i}</li>
              ))}
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" name="name" required className="mt-1" />
              </div>
              <div>
                <label htmlFor="company" className="text-sm font-medium">Company</label>
                <Input id="company" name="company" required className="mt-1" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="text-sm font-medium">Work email</label>
                <Input id="email" name="email" type="email" required className="mt-1" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="building" className="text-sm font-medium">Building details</label>
                <Textarea id="building" name="building" placeholder="Approx. floor area, BMS vendor, location…" className="mt-1" />
              </div>
            </div>
            <Button type="submit" disabled={submitting} className="mt-6 w-full bg-gradient-cool text-primary-foreground hover:opacity-90">
              {submitting ? "Sending…" : "Request pilot scope"}
            </Button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
