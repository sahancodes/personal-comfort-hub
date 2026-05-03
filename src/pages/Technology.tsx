import SiteLayout from "@/components/SiteLayout";
import { Cpu, Radio, ShieldCheck, Brain, Plug, Wifi, Database, Workflow } from "lucide-react";

const blocks = [
  { icon: Plug, title: "BMS gateway", desc: "Edge appliance speaks BACnet/IP, Modbus TCP and KNX. Reads zone telemetry; writes setpoint deltas inside safety bounds you define." },
  { icon: Radio, title: "Personal sensing", desc: "Battery-powered desk pucks measure operative temperature, humidity, CO₂ and light. Optional wearable + smartphone signals for skin temp and activity." },
  { icon: Brain, title: "Per-person comfort model", desc: "Bayesian thermal-preference model trained per occupant from low-friction in-app feedback (👍 / 👎 / a touch warmer)." },
  { icon: Workflow, title: "Orchestration engine", desc: "Negotiates between widening BMS deadbands and triggering personal devices — heated chairs, desk fans, radiant panels — to satisfy each occupant at lowest energy cost." },
  { icon: Database, title: "Measurement & verification", desc: "Continuous IPMVP-aligned baselining. Exports ready for GRESB, CRREM, BREEAM and CSRD reporting." },
  { icon: ShieldCheck, title: "Privacy by design", desc: "On-device inference. No raw biometric data leaves the building. SOC 2 and GDPR aligned. Tenants opt in per workspace." },
];

export default function Technology() {
  return (
    <SiteLayout>
      <section className="container py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Technology</p>
        <h1 className="mt-2 max-w-3xl font-display text-5xl font-bold md:text-6xl">
          The architecture of <span className="text-gradient">personal comfort</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          ACE sits between your BMS and the people in the building. It senses, learns, and orchestrates —
          all while leaving your existing controls and safety logic in charge.
        </p>
      </section>

      <section className="border-y border-border/60 bg-secondary/40 py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            <h2 className="font-display text-3xl font-bold md:text-4xl">Why a hardware plug-in?</h2>
            <p className="mt-4 text-muted-foreground">
              Software-only retrofits hit a wall: most BMS expose limited APIs, polling is slow, and
              writing to setpoints requires deterministic latency. The ACE gateway provides a
              real-time, vendor-neutral path — and runs the comfort model locally so the building
              keeps working even when the cloud doesn't.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h3 className="font-display text-xl font-semibold">Compatibility</h3>
            <ul className="mt-4 grid gap-3 text-sm">
              {[
                "BACnet/IP, BACnet MS/TP, Modbus TCP/RTU, KNX, M-Bus",
                "Niagara, Siemens Desigo, Honeywell, JCI Metasys, Schneider EcoStruxure",
                "MQTT/REST north-bound for digital-twin platforms",
                "WELL, Fitwel and LEED IEQ credits supported",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <Cpu className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
