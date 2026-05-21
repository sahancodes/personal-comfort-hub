import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import {
  CheckCircle2, Building2, Leaf, Users, TrendingUp, ShieldCheck, Plug, Gauge,
} from "lucide-react";

const concerns = [
  { icon: TrendingUp, t: "High HVAC energy bills", d: "Wider deadbands and reduced overconditioning lower HVAC energy use, while personal comfort devices preserve individual comfort." },
  { icon: Users, t: "Tenant comfort complaints", d: "Per-person comfort signals reduce 'too cold / too warm' complaints and improve tenant satisfaction and retention." },
  { icon: Leaf, t: "ESG & carbon pressure", d: "M&V-aligned data supports GRESB, CRREM, BREEAM and CSRD reporting and a credible Scope 2 reduction story." },
  { icon: Plug, t: "Expensive BMS retrofit", d: "Edge middleware avoids full rip-and-replace, lowers CAPEX and works with your existing BMS vendor." },
  { icon: ShieldCheck, t: "Downtime & disruption", d: "Installs during normal operating hours. Starts in read-only / advisory mode, while your BMS safety logic stays authoritative." },
  { icon: Building2, t: "Vendor lock-in", d: "Vendor-neutral middleware: BACnet, Modbus, KNX, Priva, Niagara, Siemens, Honeywell, JCI, Schneider." },
];

const pilotSteps = [
  { n: "01", t: "Start small", d: "Begin with one floor or a selected zone, typically 1–2 floors." },
  { n: "02", t: "Connect to existing BMS", d: "Integrate in read-only / advisory mode. No safety changes." },
  { n: "03", t: "Deploy personal comfort devices", d: "Smart desk fans, heated chairs, radiant panels and foot warmers, selected for the space." },
  { n: "04", t: "Baseline comfort + energy", d: "Capture pre-deployment thermal comfort and HVAC energy data." },
  { n: "05", t: "Validate impact", d: "Measure comfort improvement and energy-saving potential against the baseline." },
  { n: "06", t: "Scale", d: "Roll out floor-by-floor, then portfolio-wide, only after measurable results." },
];

export default function Buildings() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Thank you",
        description: "We will review your building details and contact you to discuss pilot suitability.",
      });
    }, 600);
  }

  return (
    <SiteLayout>
      <section className="container py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">For building owners, asset managers & facility teams</p>
        <h1 className="mt-2 max-w-3xl font-display text-5xl font-bold md:text-6xl">
          Improve comfort and energy performance without replacing your BMS.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Adaptive Climate Engine is retrofit-friendly middleware for legacy commercial buildings.
          It works with your existing BMS, helps reduce HVAC energy waste through deadband expansion,
          and improves tenant comfort with personal comfort devices, pilot-first and low-risk.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-gradient-cool text-primary-foreground hover:opacity-90">
            <a href="#contact">Book a Pilot</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/technology">View Technology</Link>
          </Button>
        </div>
      </section>

      {/* Concerns */}
      <section className="border-y border-border/60 bg-secondary/40 py-20">
        <div className="container">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Built around what building owners actually worry about</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {concerns.map((o) => (
              <div key={o.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <o.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{o.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits with research-backed stats */}
      <section className="container py-20">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Research-backed benchmarks</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          These are potential benefits from peer-reviewed research and industry reports. Actual
          results depend on building type, climate, operation and occupancy, and are validated
          through pilots.{" "}
          <Link to="/research" className="underline decoration-dotted hover:text-primary">See sources</Link>.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { v: "10–20%", l: "potential HVAC energy reduction", id: "energy-reduction", i: Leaf },
            { v: "2–5%", l: "potential productivity uplift", id: "productivity-loss", i: TrendingUp },
            { v: "40–43%", l: "of occupants currently report thermal discomfort", id: "occupant-dissatisfaction", i: Users },
            { v: "6–10% / °C", l: "potential HVAC savings per °C of wider deadband", id: "deadband", i: Gauge },
          ].map((s) => (
            <Link
              to={`/research#${s.id}`}
              key={s.l}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-elegant"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <s.i className="h-5 w-5" />
              </div>
              <div className="font-display text-3xl font-bold text-gradient">{s.v}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
              <span className="mt-3 inline-flex text-[11px] font-semibold uppercase tracking-wider text-accent">Research-backed →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Pilot-first deployment */}
      <section className="border-y border-border/60 bg-secondary/40 py-20">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Pilot-first, low-risk deployment</p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Start small. Validate. Scale only after measurable results.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pilotSteps.map((p) => (
              <div key={p.n} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">{p.n}</div>
                <h3 className="mt-2 font-display text-lg font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="container py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Book a Pilot</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Tell us about a building. We will review your details and contact you to discuss
              pilot suitability, usually within one business day.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                "Pilot-first, low-risk deployment",
                "Works with your existing BMS",
                "No rip-and-replace",
                "Outcome-based pricing options",
              ].map((i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> {i}</li>
              ))}
            </ul>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-accent/40 bg-accent-soft/40 p-8 shadow-soft">
              <h3 className="font-display text-2xl font-semibold">Thank you.</h3>
              <p className="mt-3 text-muted-foreground">
                We will review your building details and contact you to discuss pilot suitability.
              </p>
              <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
                Submit another building
              </Button>
            </div>
          ) : (
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
                <div>
                  <label htmlFor="email" className="text-sm font-medium">Work email</label>
                  <Input id="email" name="email" type="email" required className="mt-1" />
                </div>
                <div>
                  <label htmlFor="role" className="text-sm font-medium">Role</label>
                  <Input id="role" name="role" placeholder="e.g. Facility Manager" className="mt-1" />
                </div>
                <div>
                  <label htmlFor="location" className="text-sm font-medium">Building location / city</label>
                  <Input id="location" name="location" className="mt-1" />
                </div>
                <div>
                  <label htmlFor="buildingType" className="text-sm font-medium">Building type</label>
                  <Select name="buildingType">
                    <SelectTrigger className="mt-1"><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="office">Office</SelectItem>
                      <SelectItem value="mixed">Mixed-use</SelectItem>
                      <SelectItem value="education">Education / campus</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="area" className="text-sm font-medium">Approx. floor area (m²)</label>
                  <Input id="area" name="area" type="number" min={0} placeholder="e.g. 5000" className="mt-1" />
                </div>
                <div>
                  <label htmlFor="bms" className="text-sm font-medium">Existing BMS vendor / system</label>
                  <Input id="bms" name="bms" placeholder="e.g. Priva, Siemens, Honeywell…" className="mt-1" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="problem" className="text-sm font-medium">Main problem to solve</label>
                  <Select name="problem">
                    <SelectTrigger className="mt-1"><SelectValue placeholder="Select the most important one" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="comfort">Comfort complaints</SelectItem>
                      <SelectItem value="energy">High HVAC energy bills</SelectItem>
                      <SelectItem value="esg">ESG / carbon targets</SelectItem>
                      <SelectItem value="legacy">Old / legacy BMS</SelectItem>
                      <SelectItem value="pilot">Pilot interest / R&D</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium">Message / details</label>
                  <Textarea id="message" name="message" placeholder="Anything else useful for pilot scoping…" className="mt-1" />
                </div>
              </div>
              <Button type="submit" disabled={submitting} className="mt-6 w-full bg-gradient-cool text-primary-foreground hover:opacity-90">
                {submitting ? "Sending…" : "Request Pilot Discussion"}
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">
                By submitting you agree to be contacted about pilot suitability. No marketing emails.
              </p>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
