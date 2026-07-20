import SiteLayout from "@/components/SiteLayout";
import { Mail, ShieldCheck } from "lucide-react";

const sections = [
  {
    title: "1. Who we are",
    body: "This website is operated for Adaptive Climate Engine by InfraSense Systems, registered with the Dutch Chamber of Commerce under KvK number 42060932. Business address: Hurksestraat 64, 5652 AL Eindhoven, The Netherlands.",
  },
  {
    title: "2. What personal data we collect",
    body: "We may collect personal data that you voluntarily provide when contacting us, such as your name, email address, organisation, role, message content and any information you choose to share about a potential pilot, partnership or investment discussion.",
  },
  {
    title: "3. How we use your information",
    body: "We use your information to respond to enquiries, discuss potential pilots or partnerships, manage business communication, improve the website and prepare relevant follow-up where appropriate.",
  },
  {
    title: "4. Legal basis",
    body: "We process contact and enquiry information based on legitimate business interests, your consent when you voluntarily contact us, and where needed to take steps before entering into a potential business relationship.",
  },
  {
    title: "5. Website analytics and cookies",
    body: "The website may use basic analytics or technical cookies to understand website performance and improve the user experience. Where required, analytics and non-essential cookies should be managed through appropriate consent settings.",
  },
  {
    title: "6. Data sharing",
    body: "We do not sell personal data. We may share limited information with trusted service providers where necessary for website hosting, email communication, analytics, legal compliance or business operations.",
  },
  {
    title: "7. Data retention",
    body: "We keep enquiry and business-contact information only for as long as reasonably necessary for the purpose for which it was provided, unless a longer retention period is required for legal or administrative reasons.",
  },
  {
    title: "8. Your rights",
    body: "Depending on applicable law, you may have the right to access, correct, delete, restrict or object to the processing of your personal data. You may also request a copy of the personal data we hold about you.",
  },
  {
    title: "9. Contact",
    body: "For privacy-related questions or requests, contact us at hello@adaptiveclimate.nl.",
  },
];

export default function PrivacyPolicy() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Privacy policy</p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/78">
              This policy explains how we handle personal information submitted through the Adaptive Climate Engine website.
            </p>
            <p className="mt-4 text-sm text-primary-foreground/60">Last updated: May 2026</p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            {sections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground">{section.title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{section.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-secondary/40 p-7">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-xl font-bold">Privacy questions</h2>
                <p className="mt-2 text-muted-foreground">Contact us for privacy-related enquiries or data requests.</p>
              </div>
              <a href="mailto:hello@adaptiveclimate.nl" className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                <Mail className="mr-2 h-4 w-4" /> hello@adaptiveclimate.nl
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
