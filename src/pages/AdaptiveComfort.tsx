import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Building2,
  CheckCircle2,
  Cpu,
  Fan,
  Gauge,
  Leaf,
  LineChart,
  Radio,
  Thermometer,
  Users,
  Wind,
} from "lucide-react";

const comfortDrivers = [
  {
    icon: Thermometer,
    title: "Thermal comfort is multi-factorial",
    text: "ASHRAE 55 frames comfort as the result of indoor environmental factors and personal factors acting together: temperature, radiation, humidity, air speed, activity and clothing.",
  },
  {
    icon: Users,
    title: "People adapt differently",
    text: "Adaptive comfort research shows that comfort is influenced by behaviour, expectation, outdoor climate, perceived control and personal preference, not only by a fixed indoor setpoint.",
  },
  {
    icon: Wind,
    title: "Air movement can expand comfort",
    text: "The ASHRAE adaptive method and CBE comfort tools show that air movement can raise the upper acceptable operative-temperature boundary under defined conditions.",
  },
  {
    icon: Gauge,
    title: "ACE operationalizes adaptation",
    text: "ACE converts adaptive comfort from a passive design principle into an active control strategy using feedback, local sensing, edge intelligence and personal comfort devices.",
  },
];

const evidenceMetrics = [
  {
    value: "80%+",
    label: "ASHRAE Standard 55 is built around thermal conditions acceptable to a majority of occupants, commonly expressed as 80% or more acceptability.",
  },
  {
    value: "2 methods",
    label: "ASHRAE 55-2023 consolidates thermal-comfort evaluation into two main methods: the standard method and the adaptive method.",
  },
  {
    value: "60,000+",
    label: "CBE researchers re-examined adaptive comfort using the Global Thermal Comfort Database II with more than 60,000 comfort measurements.",
  },
  {
    value: "150+",
    label: "A major review of Personal Comfort Systems synthesized results from more than 150 published PCS studies.",
  },
  {
    value: "< 50%",
    label: "PCS typically require less than half the energy of conventional HVAC operation because they condition the occupied micro-environment instead of the full room volume.",
  },
  {
    value: "8.9–20.4%",
    label: "Simulated smart controls using adaptive setpoints and occupancy-informed operation showed total electricity-saving potential in small offices across climates.",
  },
  {
    value: "~6%",
    label: "The business-plan energy model uses a research-backed rule of thumb that a 1°C setpoint/deadband shift can reduce HVAC energy demand by about 6%.",
  },
  {
    value: "10–15%",
    label: "The ACE business case targets deadband expansion enabled by localized comfort, with a 2°C expansion modelled as 10–15% HVAC energy-saving potential.",
  },
];

const aceLeverage = [
  {
    icon: Radio,
    title: "Subjective comfort feedback",
    text: "ACE adds the missing human signal: occupants can express whether the condition feels cold, warm or acceptable. This gives the control layer information that zone sensors alone cannot capture.",
  },
  {
    icon: Cpu,
    title: "Edge-based local control",
    text: "Instead of depending on cloud or SCADA-level analytics, ACE places comfort intelligence close to the building automation layer for faster, local response.",
  },
  {
    icon: Fan,
    title: "Personal comfort devices",
    text: "PCS such as desk fans, heated chairs, foot warmers or radiant panels provide localized adaptive opportunity without requiring the entire HVAC zone to change.",
  },
  {
    icon: Leaf,
    title: "Relaxed HVAC base climate",
    text: "Once local comfort is supported at the workstation, the central HVAC system can operate with a wider deadband and lower over-conditioning risk.",
  },
];

const researchCards = [
  {
    title: "ASHRAE Standard 55",
    text: "Provides the formal thermal-comfort framework. The 2023 edition simplified the core compliance pathway into standard and adaptive methods and clarifies how to determine satisfactory thermal environments.",
  },
  {
    title: "de Dear & Brager adaptive model",
    text: "The adaptive comfort model was developed from field evidence showing that occupants in naturally conditioned buildings accept different indoor temperatures depending on outdoor climate and adaptive opportunity.",
  },
  {
    title: "CBE adaptive comfort research",
    text: "CBE describes the adaptive comfort model as part of ASHRAE 55 and has continued to test its relevance using large global comfort datasets.",
  },
  {
    title: "PCS literature",
    text: "Personal Comfort Systems research supports the central ACE idea: individual-level conditioning can improve comfort while reducing the amount of energy spent conditioning unoccupied or over-conditioned room volume.",
  },
  {
    title: "Occupant-centric control",
    text: "AI and occupant-centric control reviews show that building control is moving toward comfort-energy optimization, but real-world data quality, latency and integration remain barriers in existing buildings.",
  },
  {
    title: "Adaptive setpoint studies",
    text: "Adaptive setpoints, occupancy-informed control and smart local devices have been shown in simulation and control studies to reduce energy use while protecting comfort outcomes.",
  },
];

const references = [
  {
    label: "ASHRAE. ANSI/ASHRAE Standard 55-2023: Thermal Environmental Conditions for Human Occupancy.",
    href: "https://www.ashrae.org/technical-resources/bookstore/standard-55-thermal-environmental-conditions-for-human-occupancy",
  },
  {
    label: "ANSI Webstore. ANSI/ASHRAE Standard 55-2023 summary and scope.",
    href: "https://webstore.ansi.org/standards/ashrae/ansiashraestandard552023",
  },
  {
    label: "Center for the Built Environment. CBE Thermal Comfort Tool: ASHRAE 55 documentation.",
    href: "https://cbe-berkeley.gitbook.io/thermal-comfort-tool/documentation/ashrae-55",
  },
  {
    label: "Center for the Built Environment. Adaptive Comfort Model research category.",
    href: "https://cbe.berkeley.edu/research-category/facade-systems/adaptive-comfort/",
  },
  {
    label: "Center for the Built Environment. Nudging the Adaptive Thermal Comfort Model.",
    href: "https://cbe.berkeley.edu/centerline/nudging-the-adaptive-thermal-comfort-model/",
  },
  {
    label: "de Dear, R. & Brager, G. Thermal comfort in naturally ventilated buildings: revisions to ASHRAE Standard 55. Energy and Buildings, 2002.",
    href: "https://www.sciencedirect.com/science/article/pii/S0378778802000051",
  },
  {
    label: "Zhang, H. et al. Personal comfort systems: A review on comfort, energy, and economics. Energy and Buildings, 2020.",
    href: "https://www.sciencedirect.com/science/article/pii/S0378778819316111",
  },
  {
    label: "Merabet, G. H. et al. AI-assisted energy and thermal comfort control for sustainable buildings: systematic review.",
    href: "https://arxiv.org/abs/2006.12559",
  },
  {
    label: "Merabet, G. H. et al. Intelligent building control systems for thermal comfort and energy-efficiency: systematic review.",
    href: "https://arxiv.org/abs/2104.02214",
  },
  {
    label: "Quintana, M. et al. Cohort comfort models: using occupants' similarity to predict personal thermal preference with less data.",
    href: "https://arxiv.org/abs/2208.03078",
  },
  {
    label: "Chen, Y. & Yin, R. Estimating electricity saving-potential in small offices using adaptive thermal comfort.",
    href: "https://arxiv.org/abs/2205.10324",
  },
  {
    label: "Lopez, G. et al. Model for thermal comfort and energy saving based on individual sensation estimation.",
    href: "https://arxiv.org/abs/2003.04311",
  },
  {
    label: "Kim, Y. et al. Evaluation of thermal control based on spatial thermal comfort with reconstructed environmental data.",
    href: "https://arxiv.org/abs/2505.00468",
  },
];

export default function AdaptiveComfort() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Technology · Adaptive comfort</p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Adaptive comfort theory explains why ACE is more than a better thermostat.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-primary-foreground/78 md:text-xl">
              Comfort is not a fixed setpoint. It is a dynamic interaction between the building, the outdoor climate, the occupant, personal preference, perceived control and the ability to adapt. ACE uses that principle to help legacy buildings deliver better comfort without forcing the whole HVAC zone to satisfy every person in the same way.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="#ace-method">
                  How ACE applies it <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/25 bg-white/10 text-white hover:bg-white/15">
                <a href="#references">View references</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {comfortDrivers.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="font-display text-xl font-bold">{item.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary/35 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Evidence base</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">The data supports a shift from static zones to adaptive occupants.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              These figures should be read as a research-backed basis for the ACE concept and as pilot-validation targets, not as completed ACE field results.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {evidenceMetrics.map((metric) => (
              <article key={metric.value + metric.label} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="font-display text-4xl font-bold text-gradient">{metric.value}</div>
                <p className="mt-4 leading-7 text-muted-foreground">{metric.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ace-method" className="bg-background py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">ACE interpretation</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
                ACE extends adaptive comfort into mechanically conditioned legacy offices.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                The formal ASHRAE adaptive method is mainly intended for naturally conditioned spaces under specific applicability rules. ACE does not claim that a mechanically conditioned office automatically falls inside that formal model. Instead, ACE applies the underlying adaptive comfort principle: people are more comfortable across a wider range of conditions when they have meaningful, local ways to adapt.
              </p>
              <div className="mt-8 rounded-3xl border border-accent/30 bg-accent-soft/40 p-6">
                <p className="font-display text-2xl font-bold text-foreground">Core thesis</p>
                <p className="mt-3 text-lg leading-8 text-muted-foreground">
                  ACE converts adaptive comfort from a passive design principle into an active real-time control strategy for legacy buildings.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-elegant">
              <div className="grid gap-4">
                <div className="rounded-2xl border border-border bg-secondary/45 p-5">
                  <p className="font-semibold text-foreground">Traditional BMS logic</p>
                  <p className="mt-2 text-muted-foreground">Outdoor conditions + zone sensor → fixed HVAC setpoint → average zone comfort</p>
                </div>
                <div className="flex justify-center text-3xl text-accent">↓</div>
                <div className="rounded-2xl border border-border bg-secondary/45 p-5">
                  <p className="font-semibold text-foreground">ACE adaptive comfort logic</p>
                  <p className="mt-2 text-muted-foreground">Outdoor context + zone data + local sensors + occupant feedback → edge comfort intelligence</p>
                </div>
                <div className="flex justify-center text-3xl text-accent">↓</div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-accent/30 bg-accent-soft/40 p-5">
                    <p className="font-semibold text-foreground">HVAC</p>
                    <p className="mt-2 text-muted-foreground">Relaxed base-climate deadband</p>
                  </div>
                  <div className="rounded-2xl border border-accent/30 bg-accent-soft/40 p-5">
                    <p className="font-semibold text-foreground">PCS</p>
                    <p className="mt-2 text-muted-foreground">Individual adaptive comfort</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 text-center">
                  <p className="font-display text-xl font-bold text-foreground">Better comfort + lower over-conditioning risk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">How ACE leverages adaptive comfort</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">A practical adaptive layer for zonal HVAC buildings.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aceLeverage.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-3xl border border-white/15 bg-white/8 p-7 shadow-soft">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/75">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Research alignment</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">ACE is positioned where comfort science and retrofit reality meet.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {researchCards.map((item) => (
              <article key={item.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/35 py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Business relevance</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Why this supports the ACE business case.</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Adaptive comfort theory helps explain why a retrofit layer can be valuable even when the central BMS is technically working. The problem is not only equipment performance; it is the mismatch between zone-level HVAC and individual human comfort.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <Building2 className="h-9 w-9 text-accent" />
                <h3 className="mt-5 font-display text-xl font-bold">Legacy-friendly modernization</h3>
                <p className="mt-3 leading-7 text-muted-foreground">ACE improves adaptive capacity without requiring a full HVAC or BMS replacement.</p>
              </article>
              <article className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <Brain className="h-9 w-9 text-accent" />
                <h3 className="mt-5 font-display text-xl font-bold">Human-in-the-loop intelligence</h3>
                <p className="mt-3 leading-7 text-muted-foreground">Subjective comfort feedback becomes a useful operational signal, not a disconnected survey result.</p>
              </article>
              <article className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <LineChart className="h-9 w-9 text-accent" />
                <h3 className="mt-5 font-display text-xl font-bold">Measurable pilot outcomes</h3>
                <p className="mt-3 leading-7 text-muted-foreground">Pilots can measure comfort response, PCS usage, deadband feasibility and HVAC energy-saving potential.</p>
              </article>
              <article className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <Leaf className="h-9 w-9 text-accent" />
                <h3 className="mt-5 font-display text-xl font-bold">Comfort-energy trade-off</h3>
                <p className="mt-3 leading-7 text-muted-foreground">Localized adaptation can reduce the need to overcool or overheat the whole zone for a minority of occupants.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="references" className="bg-background py-20">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">References</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Research and standards supporting this page.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              The page intentionally separates formal ASHRAE adaptive-method scope from the ACE application: ACE is inspired by adaptive comfort principles and applies them through localized control in mechanically conditioned legacy buildings.
            </p>
          </div>
          <div className="mt-10 grid gap-4">
            {references.map((reference, index) => (
              <a
                key={reference.href}
                href={reference.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-elegant"
              >
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-sm font-bold text-accent">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-muted-foreground group-hover:text-foreground">{reference.label}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
