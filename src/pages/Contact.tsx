import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Building2, Mail, MapPin, FileText, ArrowRight } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@adaptiveclimate.nl",
    href: "mailto:hello@adaptiveclimate.nl",
  },
  {
    icon: MapPin,
    label: "Business address",
    value: "Hurksestraat 64, 5652 AL Eindhoven, The Netherlands",
  },
  {
    icon: Building2,
    label: "Business name",
    value: "InfraSense Systems",
  },
  {
    icon: FileText,
    label: "KvK number",
    value: "42060932",
  },
];

export default function Contact() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Contact</p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Let’s discuss a pilot, partnership or investment conversation.
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/78 md:text-xl">
              Adaptive Climate Engine is currently preparing for Dutch office pilot validation. For pilot access, technical partnerships, investment discussions or general enquiries, please contact us directly.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="mailto:hello@adaptiveclimate.nl">
                Email us <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {contactCards.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">{item.label}</p>
                  <p className="mt-3 text-xl font-semibold text-foreground">{item.value}</p>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-secondary/40 p-8">
            <h2 className="font-display text-2xl font-bold">What to include in your message</h2>
            <div className="mt-5 grid gap-4 text-muted-foreground md:grid-cols-3">
              <p>For pilot sites, mention the building type, approximate floor area, BMS/HVAC context and whether facility access is possible.</p>
              <p>For technical partners, describe your BMS, HVAC, controls, installation or commissioning background.</p>
              <p>For investors or funding partners, mention the type of support, ticket size or programme you would like to discuss.</p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
