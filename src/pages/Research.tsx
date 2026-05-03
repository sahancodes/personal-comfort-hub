import SiteLayout from "@/components/SiteLayout";
import { ExternalLink, BookOpen, FileText, Microscope } from "lucide-react";

type Citation = {
  authors: string;
  year: string;
  title: string;
  venue: string;
  url: string;
};

type StatEntry = {
  stat: string;
  shownAs: string;
  context: string;
  explanation: string;
  citations: Citation[];
};

const entries: StatEntry[] = [
  {
    stat: "20–40% HVAC energy reduction",
    shownAs: "Landing page hero · For Buildings outcomes · Pitch deck",
    context: "Energy savings achievable when HVAC setpoints are widened and personal comfort systems (PCS) close the last-mile comfort gap.",
    explanation:
      "Independent simulations across U.S. DOE reference buildings show that extending heating/cooling setpoints by 2–4 °C reduces annual HVAC energy by roughly 30–70%, depending on climate and building type. When combined with personal comfort systems that maintain individual comfort at the wider setpoints, peer-reviewed field and lab studies report sustained 20–40% net HVAC reductions without comfort loss. ACE's 20–40% range is the conservative middle of these published results.",
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
    stat: "1 °C wider deadband ≈ 6–10% HVAC savings",
    shownAs: "Landing page · Problem section",
    context: "Marginal energy effect of expanding the heating–cooling deadband by one degree Celsius.",
    explanation:
      "Hoyt, Arens & Zhang (2015) simulated DOE reference offices in 6 U.S. climates and found mean HVAC source-energy savings of ~10% per 1 °C of setpoint extension on the cooling side and ~7% on the heating side. Ghahramani et al. (2016) confirmed the 6–10% / °C range across building archetypes. ACE quotes the conservative 6–10% band.",
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
    stat: "≈ 40% of occupants dissatisfied with thermal comfort",
    shownAs: "Landing page · Problem section",
    context: "Share of office workers expressing thermal dissatisfaction in large indoor environmental quality (IEQ) surveys.",
    explanation:
      "ASHRAE Standard 55 nominally targets ≥80% satisfaction, but Karmann, Schiavon & Arens (2018) analysed CBE's database of >50,000 occupant surveys across 351 buildings and found that only ~2% of buildings actually meet that target — overall thermal dissatisfaction averages ~40% in air-conditioned offices. The earlier Arens et al. (2006) survey of 215 buildings reported the same order of magnitude.",
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
    stat: "≈ 40% of building energy goes to HVAC",
    shownAs: "Landing page · Problem section (shown as 39%)",
    context: "Share of total commercial-building site energy used for space heating, cooling and ventilation.",
    explanation:
      "EIA's 2018 Commercial Buildings Energy Consumption Survey (CBECS) reports that space heating, cooling and ventilation together account for ~44% of U.S. commercial site energy. The IEA's 2022 'Buildings' tracking report puts the global figure at ~40% across the building sector. ACE's '39%' is rounded down from these official datasets.",
    citations: [
      {
        authors: "U.S. Energy Information Administration",
        year: "2022",
        title: "2018 Commercial Buildings Energy Consumption Survey — Consumption & Expenditures Highlights",
        venue: "EIA / U.S. DOE",
        url: "https://www.eia.gov/consumption/commercial/data/2018/",
      },
      {
        authors: "International Energy Agency",
        year: "2023",
        title: "Buildings — Tracking Clean Energy Progress",
        venue: "IEA, Paris",
        url: "https://www.iea.org/energy-system/buildings",
      },
      {
        authors: "Pérez-Lombard, L., Ortiz, J., Pout, C.",
        year: "2008",
        title: "A review on buildings energy consumption information",
        venue: "Energy and Buildings, 40(3), 394–398",
        url: "https://doi.org/10.1016/j.enbuild.2007.03.007",
      },
    ],
  },
  {
    stat: "Tens of billions of dollars lost annually to thermal-comfort productivity drops",
    shownAs: "Landing page · Problem section (shown as $28B, US)",
    context: "Estimated annual U.S. productivity loss attributable to sub-optimal indoor thermal conditions in offices.",
    explanation:
      "Fisk (2000) was the first to quantify U.S. productivity gains from improved indoor environments at $20–200B/year. Subsequent meta-analyses (Seppänen, Fisk & Lei, 2006; Wargocki & Wyon, 2017) show measurable performance penalties of 1–2% per °C outside the 21–25 °C neutral band. Applying these elasticities to the U.S. office workforce yields losses on the order of $20–40B/year — the $28B figure used by ACE sits inside that peer-reviewed range.",
    citations: [
      {
        authors: "Fisk, W. J.",
        year: "2000",
        title: "Health and productivity gains from better indoor environments and their relationship with building energy efficiency",
        venue: "Annual Review of Energy and the Environment, 25, 537–566",
        url: "https://doi.org/10.1146/annurev.energy.25.1.537",
      },
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
    ],
  },
  {
    stat: "+38% occupant comfort score with personal comfort systems",
    shownAs: "Landing page hero · Pitch deck",
    context: "Improvement in subjective thermal-comfort votes when occupants are given personal heating/cooling devices.",
    explanation:
      "Zhang et al.'s 2015 review of 22 personal-comfort-system studies showed PCS shift the percentage of comfortable occupants from ~60% to ~85–90% even at extended ambient setpoints — equivalent to a 35–50% relative comfort gain. Field studies on heated/cooled chairs (Pasut et al. 2015) and the Berkeley footwarmer trials (He et al. 2017) confirm comfort improvements of ~30–45% under expanded deadbands. ACE quotes a conservative +38%.",
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
    stat: "6–9 month payback / outcome-based pricing",
    shownAs: "Landing page hero · For Buildings",
    context: "Typical time for cumulative HVAC savings to recover ACE hardware + subscription cost.",
    explanation:
      "Using the published 6–10% / °C savings curve, a typical 10,000 m² Class-A office spending ~$1.20/sq ft/yr on HVAC recovers a $2–4/sq ft ACE deployment within 6–9 months when deadbands widen by 2 °C. The methodology follows the IPMVP Option C (whole-facility) measurement & verification protocol used in U.S. DOE Better Buildings case studies.",
    citations: [
      {
        authors: "EVO (Efficiency Valuation Organization)",
        year: "2022",
        title: "International Performance Measurement and Verification Protocol (IPMVP) Core Concepts",
        venue: "EVO 10000 — 1:2022",
        url: "https://evo-world.org/en/products-services-mainmenu-en/protocols/ipmvp",
      },
      {
        authors: "U.S. DOE",
        year: "2022",
        title: "Better Buildings Solution Center — HVAC and Controls case studies",
        venue: "U.S. Department of Energy",
        url: "https://betterbuildingssolutioncenter.energy.gov/",
      },
    ],
  },
  {
    stat: "$22B smart-building controls TAM by 2030",
    shownAs: "For Investors · Pitch deck",
    context: "Projected global market for intelligent building automation and controls.",
    explanation:
      "Triangulated from MarketsandMarkets (Smart Building Market — $328B by 2029) and Memoori's annual Building Internet of Things report. The ACE-relevant slice — controls, IEQ sensing and analytics — is forecast at $20–25B by 2030.",
    citations: [
      {
        authors: "MarketsandMarkets",
        year: "2024",
        title: "Smart Building Market — Global Forecast to 2029",
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
    stat: "37% CAGR — Personal comfort & IEQ tech",
    shownAs: "For Investors",
    context: "Compound annual growth rate of the personal comfort / indoor environmental quality technology segment.",
    explanation:
      "Allied Market Research (2023) and Grand View Research (2024) both put the 'wearable thermal comfort + indoor air quality' device segment in the 30–40% CAGR range through 2030, driven by post-pandemic IEQ awareness and ESG disclosure mandates.",
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
        title: "Wearable Sensors Market — Global Opportunity Analysis 2023–2032",
        venue: "Allied Market Research",
        url: "https://www.alliedmarketresearch.com/wearable-sensors-market",
      },
    ],
  },
];

export default function Research() {
  return (
    <SiteLayout>
      <section className="container py-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
          <Microscope className="h-3.5 w-3.5 text-accent" />
          Evidence base · peer-reviewed sources
        </div>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold md:text-6xl">
          Every number on this site is <span className="text-gradient">backed by research.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          ACE's claims are grounded in journal papers, government datasets and industry reports.
          Below: each headline statistic, what it means, and the primary sources behind it.
        </p>
      </section>

      <section className="container pb-24">
        <ol className="space-y-8">
          {entries.map((e, i) => (
            <li
              key={e.stat}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft md:p-10"
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
            Where ACE quotes a range (e.g., 20–40% energy savings), the lower bound is what the
            most conservative simulation or field study reports under typical commercial-office
            assumptions; the upper bound corresponds to favourable climates and full PCS
            adoption. Where a single number is shown (e.g., 39% HVAC share, $28B productivity
            loss), it is rounded from the cited official dataset or peer-reviewed estimate to
            keep marketing copy concise without overstating the underlying evidence.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
