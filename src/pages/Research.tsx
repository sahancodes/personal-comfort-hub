import SiteLayout from "@/components/SiteLayout";
import { ExternalLink, BookOpen, FileText, Microscope } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Citation = {
  authors: string;
  year: string;
  title: string;
  venue: string;
  url: string;
};

type StatEntry = {
  id: string;
  stat: string;
  shownAs: string;
  context: string;
  explanation: string;
  citations: Citation[];
};

const entries: StatEntry[] = [
  {
    id: "ashrae-55",
    stat: "ASHRAE Standard 55: thermal comfort framework and 80%+ acceptability basis",
    shownAs: "Adaptive comfort page · Knowledge menu",
    context: "ASHRAE 55 is the main thermal comfort standard referenced by the adaptive comfort page.",
    explanation:
      "ASHRAE Standard 55 defines methods for assessing thermal environmental conditions for human occupancy. It frames comfort around environmental and personal factors and is commonly used with an 80% or greater occupant acceptability target. The 2023 edition consolidates the main compliance routes into the standard method and the adaptive method. ACE references ASHRAE 55 to explain why comfort must be treated as a human-environment interaction rather than a fixed temperature target.",
    citations: [
      {
        authors: "ASHRAE",
        year: "2023",
        title: "ANSI/ASHRAE Standard 55-2023: Thermal Environmental Conditions for Human Occupancy",
        venue: "ASHRAE Bookstore",
        url: "https://www.ashrae.org/technical-resources/bookstore/standard-55-thermal-environmental-conditions-for-human-occupancy",
      },
      {
        authors: "ANSI Webstore",
        year: "2023",
        title: "ANSI/ASHRAE Standard 55-2023 summary and scope",
        venue: "ANSI Webstore",
        url: "https://webstore.ansi.org/standards/ashrae/ansiashraestandard552023",
      },
      {
        authors: "Center for the Built Environment, UC Berkeley",
        year: "ongoing",
        title: "CBE Thermal Comfort Tool: ASHRAE 55 documentation",
        venue: "CBE Thermal Comfort Tool",
        url: "https://cbe-berkeley.gitbook.io/thermal-comfort-tool/documentation/ashrae-55",
      },
    ],
  },
  {
    id: "adaptive-comfort-model",
    stat: "Adaptive comfort: people accept different temperatures when they have adaptive opportunity",
    shownAs: "Adaptive comfort page",
    context: "The adaptive comfort model explains why comfort is affected by outdoor climate, expectation, behaviour and perceived control.",
    explanation:
      "The adaptive comfort model was developed from field studies showing that occupants in naturally conditioned buildings accept indoor temperatures that vary with outdoor conditions and adaptive opportunity. The formal ASHRAE adaptive method has specific applicability limits, particularly for naturally conditioned spaces. ACE uses this carefully: it is inspired by adaptive comfort principles and extends the underlying idea of occupant adaptation into mechanically conditioned legacy offices through local feedback, edge intelligence and personal comfort devices.",
    citations: [
      {
        authors: "de Dear, R., Brager, G.",
        year: "2002",
        title: "Thermal comfort in naturally ventilated buildings: revisions to ASHRAE Standard 55",
        venue: "Energy and Buildings, 34(6), 549–561",
        url: "https://doi.org/10.1016/S0378-7788(02)00005-1",
      },
      {
        authors: "ASHRAE",
        year: "2017",
        title: "Standard 55-2017 addenda and adaptive model applicability text",
        venue: "ASHRAE standards resources",
        url: "https://www.ashrae.org/technical-resources/standards-and-guidelines",
      },
      {
        authors: "Center for the Built Environment, UC Berkeley",
        year: "ongoing",
        title: "Adaptive Comfort Model research category",
        venue: "CBE Research",
        url: "https://cbe.berkeley.edu/research-category/facade-systems/adaptive-comfort/",
      },
    ],
  },
  {
    id: "global-comfort-database",
    stat: "60,000+ thermal comfort measurements in Global Thermal Comfort Database II",
    shownAs: "Adaptive comfort page",
    context: "Large comfort datasets are used to test and refine adaptive comfort assumptions.",
    explanation:
      "CBE researchers and collaborators have re-examined adaptive comfort using the Global Thermal Comfort Database II, which includes more than 60,000 comfort measurements. This supports the claim that adaptive comfort is grounded in large-scale field evidence rather than only laboratory assumptions. ACE references this evidence to show that occupant comfort is variable, contextual and data-driven.",
    citations: [
      {
        authors: "Földváry Ličina, V. et al.",
        year: "2018",
        title: "Development of the ASHRAE Global Thermal Comfort Database II",
        venue: "Building and Environment, 142, 502–512",
        url: "https://doi.org/10.1016/j.buildenv.2018.06.022",
      },
      {
        authors: "Center for the Built Environment, UC Berkeley",
        year: "2020",
        title: "Nudging the Adaptive Thermal Comfort Model",
        venue: "CBE Centerline",
        url: "https://cbe.berkeley.edu/centerline/nudging-the-adaptive-thermal-comfort-model/",
      },
    ],
  },
  {
    id: "pcs-review",
    stat: "Personal Comfort Systems: 150+ studies and less than half the energy of conventional HVAC in many cases",
    shownAs: "Adaptive comfort page · For Buildings · Pitch deck",
    context: "Personal comfort systems provide local heating/cooling at the occupied micro-environment rather than conditioning the entire zone.",
    explanation:
      "Personal Comfort Systems (PCS) research shows that local devices such as heated/cooled chairs, foot warmers, desk fans and radiant panels can improve comfort while using substantially less energy than conventional HVAC. A major review synthesized more than 150 PCS studies and reported that PCS can often operate at less than half the energy required by whole-room HVAC conditioning. ACE uses PCS as the practical mechanism for giving occupants adaptive control inside legacy zonal HVAC environments.",
    citations: [
      {
        authors: "Zhang, H., Arens, E., Pasut, W.",
        year: "2015",
        title: "Air temperature thresholds and energy savings for personal comfort systems",
        venue: "Building and Environment, 91, 15–41 / related PCS work",
        url: "https://doi.org/10.1016/j.buildenv.2015.03.013",
      },
      {
        authors: "Zhang, H. et al.",
        year: "2020",
        title: "Personal comfort systems: A review on comfort, energy, and economics",
        venue: "Energy and Buildings, 214, 109858",
        url: "https://doi.org/10.1016/j.enbuild.2020.109858",
      },
      {
        authors: "Pasut, W., Zhang, H., Arens, E., Zhai, Y.",
        year: "2015",
        title: "Energy-efficient comfort with a heated/cooled chair: Results from human subject tests",
        venue: "Building and Environment, 84, 10–21",
        url: "https://doi.org/10.1016/j.buildenv.2014.10.026",
      },
    ],
  },
  {
    id: "adaptive-setpoints",
    stat: "8.9–20.4% electricity-saving potential from adaptive setpoints and occupancy-informed control",
    shownAs: "Adaptive comfort page",
    context: "Adaptive setpoints and occupancy-informed operation can reduce electricity use while maintaining acceptable comfort.",
    explanation:
      "Simulation studies on small offices show that adaptive thermal comfort and occupancy-informed control can reduce total electricity use in the range of 8.9–20.4%, depending on climate, operation and control assumptions. ACE uses this type of evidence to support its focus on adaptive setpoints, local comfort support and measured pilot validation.",
    citations: [
      {
        authors: "Chen, Y., Yin, R.",
        year: "2022",
        title: "Estimating electricity saving-potential in small offices using adaptive thermal comfort",
        venue: "arXiv preprint",
        url: "https://arxiv.org/abs/2205.10324",
      },
      {
        authors: "CBE, UC Berkeley",
        year: "ongoing",
        title: "Setpoint Energy Savings Calculator",
        venue: "Center for the Built Environment online tool",
        url: "https://cbe.berkeley.edu/research/setpoint-energy-savings-calculator/",
      },
    ],
  },
  {
    id: "occupant-centric-control",
    stat: "Occupant-centric control links comfort, energy efficiency and control intelligence",
    shownAs: "Adaptive comfort page · Technology page",
    context: "Occupant-centric control literature supports the move from sensor-only BMS logic to human-in-the-loop building control.",
    explanation:
      "Recent reviews of AI-assisted and occupant-centric building control show that advanced building control is moving toward comfort-energy optimization. However, they also highlight barriers in real buildings, including data quality, integration difficulty, latency and uncertainty in occupant behaviour. ACE is positioned as an edge-based retrofit layer that can make occupant feedback and personal comfort control operational without depending entirely on cloud-level or SCADA-level optimization.",
    citations: [
      {
        authors: "Merabet, G. H. et al.",
        year: "2020",
        title: "AI-assisted energy and thermal comfort control for sustainable buildings: systematic review",
        venue: "arXiv preprint",
        url: "https://arxiv.org/abs/2006.12559",
      },
      {
        authors: "Merabet, G. H. et al.",
        year: "2021",
        title: "Intelligent building control systems for thermal comfort and energy-efficiency: systematic review",
        venue: "arXiv preprint",
        url: "https://arxiv.org/abs/2104.02214",
      },
      {
        authors: "Quintana, M. et al.",
        year: "2022",
        title: "Cohort comfort models: using occupants' similarity to predict personal thermal preference with less data",
        venue: "arXiv preprint",
        url: "https://arxiv.org/abs/2208.03078",
      },
    ],
  },
  {
    id: "personal-comfort-prediction",
    stat: "Personal comfort prediction uses subjective feedback to improve comfort control",
    shownAs: "Adaptive comfort page · Technology page",
    context: "Personal comfort models use occupant feedback and local context to predict individual comfort preference.",
    explanation:
      "Personal comfort research shows that subjective feedback can help estimate individual thermal sensation and preference more accurately than fixed zone setpoints alone. This supports ACE's use of human feedback as an operational control signal rather than treating comfort surveys as passive reports after discomfort has already occurred.",
    citations: [
      {
        authors: "Lopez, G. et al.",
        year: "2020",
        title: "Model for thermal comfort and energy saving based on individual sensation estimation",
        venue: "arXiv preprint",
        url: "https://arxiv.org/abs/2003.04311",
      },
      {
        authors: "Kim, Y. et al.",
        year: "2025",
        title: "Evaluation of thermal control based on spatial thermal comfort with reconstructed environmental data",
        venue: "arXiv preprint",
        url: "https://arxiv.org/abs/2505.00468",
      },
      {
        authors: "Quintana, M. et al.",
        year: "2022",
        title: "Cohort comfort models: using occupants' similarity to predict personal thermal preference with less data",
        venue: "arXiv preprint",
        url: "https://arxiv.org/abs/2208.03078",
      },
    ],
  },
  {
    id: "energy-reduction",
    stat: "10–20% potential HVAC energy reduction",
    shownAs: "Home · For Buildings · Pitch deck · Adaptive comfort page",
    context: "Energy savings range when HVAC deadbands are safely widened and personal comfort devices maintain individual comfort.",
    explanation:
      "Field studies and DOE-reference simulations show that extending heating/cooling setpoints by 1–2 °C, paired with personal comfort devices so individual comfort is preserved, yields roughly 10–20% net HVAC energy savings in typical commercial offices. Higher figures can appear in favourable climates and aggressive PCS adoption studies. ACE quotes the conservative 10–20% band as a research-backed benchmark; actual savings depend on building type, climate, operation and occupancy.",
    citations: [
      {
        authors: "Hoyt, T., Arens, E., Zhang, H.",
        year: "2015",
        title: "Extending air temperature setpoints: Simulated energy savings and design considerations for new and retrofit buildings",
        venue: "Building and Environment, 88, 89–96",
        url: "https://doi.org/10.1016/j.buildenv.2014.09.010",
      },
      {
        authors: "Ghahramani, A., Zhang, K., Dutta, K., Yang, Z., Becerik-Gerber, B.",
        year: "2016",
        title: "Energy savings from temperature setpoints and deadband: Quantifying the influence of building and system properties on savings",
        venue: "Applied Energy, 165, 930–942",
        url: "https://doi.org/10.1016/j.apenergy.2015.12.115",
      },
      {
        authors: "Zhang, H., Arens, E., Zhai, Y.",
        year: "2015",
        title: "A review of the corrective power of personal comfort systems in non-neutral ambient environments",
        venue: "Building and Environment, 91, 15–41",
        url: "https://doi.org/10.1016/j.buildenv.2015.03.013",
      },
    ],
  },
  {
    id: "deadband",
    stat: "1 °C wider deadband ≈ 6–10% HVAC savings",
    shownAs: "Home · Problem section · Adaptive comfort page",
    context: "Marginal HVAC energy effect of expanding the heating–cooling deadband by one degree Celsius.",
    explanation:
      "Hoyt, Arens & Zhang (2015) simulated DOE reference offices across 6 U.S. climates and found mean HVAC source-energy savings of around 10% per 1 °C of setpoint extension on the cooling side and around 7% on the heating side. Ghahramani et al. (2016) confirmed the 6–10% per °C range across building archetypes. Research suggests this is a robust benchmark, though results vary with climate and building operation.",
    citations: [
      {
        authors: "Hoyt, T., Arens, E., Zhang, H.",
        year: "2015",
        title: "Extending air temperature setpoints: Simulated energy savings and design considerations",
        venue: "Building and Environment, 88, 89–96",
        url: "https://doi.org/10.1016/j.buildenv.2014.09.010",
      },
      {
        authors: "Ghahramani, A. et al.",
        year: "2016",
        title: "Energy savings from temperature setpoints and deadband",
        venue: "Applied Energy, 165, 930–942",
        url: "https://doi.org/10.1016/j.apenergy.2015.12.115",
      },
      {
        authors: "CBE, UC Berkeley",
        year: "ongoing",
        title: "Setpoint Energy Savings Calculator",
        venue: "Center for the Built Environment online tool",
        url: "https://cbe.berkeley.edu/research/setpoint-energy-savings-calculator/",
      },
    ],
  },
  {
    id: "occupant-dissatisfaction",
    stat: "~40–43% of office occupants report thermal discomfort",
    shownAs: "Home · Problem section",
    context: "Share of office workers expressing thermal dissatisfaction in large indoor environmental quality surveys.",
    explanation:
      "ASHRAE Standard 55 nominally targets at least 80% satisfaction, but Karmann, Schiavon & Arens (2018) analysed CBE's database of more than 50,000 occupant surveys across 351 buildings and found that only a very small share of buildings actually meet that target. Overall thermal dissatisfaction averages around 40% in air-conditioned offices, with several studies reporting up to around 43%.",
    citations: [
      {
        authors: "Karmann, C., Schiavon, S., Arens, E.",
        year: "2018",
        title: "Percentage of commercial buildings showing at least 80% occupant satisfied with their thermal comfort",
        venue: "Windsor Conference / CBE eScholarship",
        url: "https://escholarship.org/uc/item/89m0z34x",
      },
      {
        authors: "Arens, E., Zagreus, L., Huizenga, C., Abbaszadeh, S.",
        year: "2006",
        title: "Air quality and thermal comfort in office buildings: Results of a large indoor environmental quality survey",
        venue: "Healthy Buildings 2006, Lisbon",
        url: "https://escholarship.org/uc/item/7897g2f8",
      },
      {
        authors: "Parkinson, T., Schiavon, S., de Dear, R., Brager, G.",
        year: "2021",
        title: "Overcooling of offices reveals gender inequity in thermal comfort",
        venue: "Scientific Reports 11, 23961",
        url: "https://doi.org/10.1038/s41598-021-03121-1",
      },
    ],
  },
  {
    id: "acceptable-comfort-share",
    stat: "Only ~10–15% of buildings consistently achieve acceptable thermal comfort",
    shownAs: "Home · Problem section",
    context: "Share of commercial buildings whose occupant surveys regularly meet accepted thermal comfort targets.",
    explanation:
      "Karmann, Schiavon & Arens (2018) found only a very small share of buildings in the CBE database reach the 80% satisfied threshold. Broader analyses using more permissive comfort criteria put the share of consistently comfortable buildings in the 10–15% range. This gap is one of the strongest reasons for human-centric, occupant-aware comfort control.",
    citations: [
      {
        authors: "Karmann, C., Schiavon, S., Arens, E.",
        year: "2018",
        title: "Percentage of commercial buildings showing at least 80% occupant satisfied",
        venue: "CBE eScholarship",
        url: "https://escholarship.org/uc/item/89m0z34x",
      },
      {
        authors: "REHVA",
        year: "2017",
        title: "Indoor Climate and Productivity in Offices, Guidebook 6",
        venue: "Federation of European Heating, Ventilation and Air Conditioning Associations",
        url: "https://www.rehva.eu/eshop/detail/no-6-indoor-climate-and-productivity-in-offices",
      },
    ],
  },
  {
    id: "hvac-energy-share",
    stat: "Buildings ≈ 40% of energy use in Europe; HVAC ≈ 40–60% of building energy",
    shownAs: "Home · Problem section",
    context: "Share of total energy used by buildings, and HVAC's share within that.",
    explanation:
      "The European Commission's Energy Performance of Buildings Directive reports that buildings account for around 40% of EU energy consumption. Within commercial buildings, HVAC typically represents 40–60% of total energy use depending on building type, climate and operation. ACE rounds these official figures conservatively.",
    citations: [
      {
        authors: "European Commission",
        year: "2024",
        title: "Energy Performance of Buildings Directive (EPBD), recast",
        venue: "European Commission",
        url: "https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficient-buildings/energy-performance-buildings-directive_en",
      },
      {
        authors: "International Energy Agency",
        year: "2023",
        title: "Buildings, Tracking Clean Energy Progress",
        venue: "IEA, Paris",
        url: "https://www.iea.org/energy-system/buildings",
      },
      {
        authors: "U.S. Energy Information Administration",
        year: "2022",
        title: "2018 Commercial Buildings Energy Consumption Survey (CBECS)",
        venue: "EIA / U.S. DOE",
        url: "https://www.eia.gov/consumption/commercial/data/2018/",
      },
    ],
  },
  {
    id: "productivity-loss",
    stat: "Poor thermal comfort can reduce productivity by ~2–5%",
    shownAs: "Home · For Buildings · Pitch deck",
    context: "Productivity penalty associated with sub-optimal indoor thermal conditions in offices.",
    explanation:
      "Seppänen, Fisk & Lei (2006) and Wargocki & Wyon (2017) show measurable performance penalties outside the neutral comfort band, with total productivity impact commonly estimated in the 2–5% range for typical offices. Even small productivity gains can exceed the energy savings in monetary terms, but actual results depend on task type, building and occupants.",
    citations: [
      {
        authors: "Seppänen, O., Fisk, W. J., Lei, Q. H.",
        year: "2006",
        title: "Effect of temperature on task performance in office environment",
        venue: "Lawrence Berkeley National Laboratory, LBNL-60946",
        url: "https://escholarship.org/uc/item/45g4n3rv",
      },
      {
        authors: "Wargocki, P., Wyon, D. P.",
        year: "2017",
        title: "Ten questions concerning thermal and indoor air quality effects on the performance of office work and schoolwork",
        venue: "Building and Environment, 112, 359–366",
        url: "https://doi.org/10.1016/j.buildenv.2016.11.020",
      },
      {
        authors: "Fisk, W. J.",
        year: "2000",
        title: "Health and productivity gains from better indoor environments",
        venue: "Annual Review of Energy and the Environment, 25, 537–566",
        url: "https://doi.org/10.1146/annurev.energy.25.1.537",
      },
    ],
  },
  {
    id: "comfort-uplift",
    stat: "Personal comfort devices substantially improve individual comfort",
    shownAs: "Home hero · For Buildings · Pitch deck",
    context: "Improvement in subjective thermal-comfort votes when occupants are given personal heating/cooling devices.",
    explanation:
      "Reviews and field studies show that personal comfort systems can meaningfully improve comfort at widened ambient setpoints. Results vary with device type, climate and adoption, so ACE treats these as research-backed potential benefits to be verified during pilots.",
    citations: [
      {
        authors: "Zhang, H., Arens, E., Zhai, Y.",
        year: "2015",
        title: "A review of the corrective power of personal comfort systems in non-neutral ambient environments",
        venue: "Building and Environment, 91, 15–41",
        url: "https://doi.org/10.1016/j.buildenv.2015.03.013",
      },
      {
        authors: "Pasut, W., Zhang, H., Arens, E., Zhai, Y.",
        year: "2015",
        title: "Energy-efficient comfort with a heated/cooled chair: Results from human subject tests",
        venue: "Building and Environment, 84, 10–21",
        url: "https://doi.org/10.1016/j.buildenv.2014.10.026",
      },
      {
        authors: "He, Y., Li, N., Wang, X., He, M., He, D.",
        year: "2017",
        title: "Comfort, energy efficiency and adoption of personal cooling systems in warm environments",
        venue: "International Journal of Environmental Research and Public Health, 14(11), 1408",
        url: "https://doi.org/10.3390/ijerph14111408",
      },
    ],
  },
  {
    id: "payback",
    stat: "Pilot-validated payback in months, not years",
    shownAs: "Home · For Buildings",
    context: "Potential time for HVAC savings and avoided retrofit cost to recover ACE deployment, when validated through a pilot.",
    explanation:
      "Under the published energy-savings curves and measurement and verification methodology, a typical mid-sized office can potentially recover edge-middleware deployment cost from energy savings within months rather than years. Avoided full BMS retrofit cost can further improve the business case. ACE presents this as a potential benefit to be confirmed by pilot measurement.",
    citations: [
      {
        authors: "EVO (Efficiency Valuation Organization)",
        year: "2022",
        title: "International Performance Measurement and Verification Protocol (IPMVP) Core Concepts",
        venue: "EVO 10000, 1:2022",
        url: "https://evo-world.org/en/products-services-mainmenu-en/protocols/ipmvp",
      },
      {
        authors: "U.S. DOE",
        year: "2022",
        title: "Better Buildings Solution Center, HVAC and Controls case studies",
        venue: "U.S. Department of Energy",
        url: "https://betterbuildingssolutioncenter.energy.gov/",
      },
    ],
  },
  {
    id: "tam",
    stat: "$22B smart-building controls TAM by 2030",
    shownAs: "For Investors · Pitch deck",
    context: "Projected global market for intelligent building automation and controls.",
    explanation:
      "Triangulated market reports suggest that the ACE-relevant slice of smart buildings, including controls, IEQ sensing, edge middleware and analytics, is a significant multi-billion-euro opportunity. Market reports should be treated as directional rather than exact sizing for ACE until the Dutch beachhead market is validated.",
    citations: [
      {
        authors: "MarketsandMarkets",
        year: "2024",
        title: "Smart Building Market, Global Forecast to 2029",
        venue: "MarketsandMarkets Research Report",
        url: "https://www.marketsandmarkets.com/Market-Reports/smart-building-market-1169.html",
      },
      {
        authors: "Memoori",
        year: "2024",
        title: "The Global Market for Smart Buildings 2024–2029",
        venue: "Memoori Research",
        url: "https://memoori.com/portfolio/the-global-market-for-smart-buildings-2024-to-2029/",
      },
    ],
  },
  {
    id: "cagr",
    stat: "Strong double-digit CAGR for personal comfort & IEQ tech",
    shownAs: "For Investors",
    context: "Growth of the personal comfort / indoor environmental quality technology segment.",
    explanation:
      "Market research on indoor environmental quality, wearable sensors and smart building technologies suggests strong growth through 2030, driven by IEQ awareness, ESG disclosure pressure and retrofit demand for legacy buildings.",
    citations: [
      {
        authors: "Grand View Research",
        year: "2024",
        title: "Indoor Air Quality (IAQ) Monitor Market Size & Share Report",
        venue: "Grand View Research",
        url: "https://www.grandviewresearch.com/industry-analysis/indoor-air-quality-monitor-market",
      },
      {
        authors: "Allied Market Research",
        year: "2023",
        title: "Wearable Sensors Market, Global Opportunity Analysis 2023–2032",
        venue: "Allied Market Research",
        url: "https://www.alliedmarketresearch.com/wearable-sensors-market",
      },
    ],
  },
];

export default function Research() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.classList.add("ring-2", "ring-accent");
        setTimeout(() => el.classList.remove("ring-2", "ring-accent"), 2200);
      }
    }, 60);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <SiteLayout>
      <section className="container py-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
          <Microscope className="h-3.5 w-3.5 text-accent" />
          Evidence base · standards · research-backed benchmarks
        </div>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold md:text-6xl">
          Every benchmark is <span className="text-gradient">backed by research.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Numbers and research statements shown across this site are linked to peer-reviewed journals,
          standards, government datasets and industry reports. They are potential benefits. Actual
          results depend on building type, climate, operation and occupancy, and are validated through pilots.
        </p>
      </section>

      <section className="container pb-24">
        <ol className="space-y-8">
          {entries.map((e, i) => (
            <li
              key={e.id}
              id={e.id}
              className="scroll-mt-24 rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow md:p-10"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-display text-sm font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl font-bold md:text-3xl">{e.stat}</h2>
              </div>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                Shown on: {e.shownAs}
              </p>

              <div className="mt-5 grid gap-5 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <FileText className="h-3.5 w-3.5" /> What it means
                  </div>
                  <p className="mt-2 text-sm font-medium text-foreground">{e.context}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {e.explanation}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" /> Sources
                  </div>
                  <ul className="mt-2 space-y-3">
                    {e.citations.map((c) => (
                      <li key={c.url} className="text-sm">
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-start gap-1 font-semibold text-foreground hover:text-primary"
                        >
                          <span>
                            {c.authors} ({c.year}).
                          </span>
                          <ExternalLink className="mt-1 h-3 w-3 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
                        </a>
                        <div className="text-muted-foreground">
                          <span className="italic">{c.title}</span>. {c.venue}.
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-3xl border border-border bg-secondary/40 p-8 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">A note on methodology</p>
          <p className="mt-2">
            Where ACE quotes a range, the lower bound reflects conservative simulation or field results
            under typical commercial-office assumptions; the upper bound corresponds to favourable
            climates and stronger personal comfort device adoption. Where a single number is shown,
            it is rounded from the cited dataset to keep copy concise without overstating the evidence.
            Numbers are research-backed benchmarks, not guaranteed outcomes. Every deployment is validated through a pilot.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
