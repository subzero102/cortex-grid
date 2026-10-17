import { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import { QuickConsultationSection } from "@/components/home/QuickConsultationSection";

export const metadata: Metadata = {
  title: "Enterprise Practice Areas & Services Directory | Cortex Grid Consulting",
  description:
    "Explore Cortex Grid's six core consulting practices: AI Operations & FinOps, On-Cloud Infrastructure, Web Solutions, Workplace Email, Enterprise Software, and Professional IT.",
  keywords: [
    "Enterprise IT Services",
    "AI Operations Consulting",
    "Cloud Solutions",
    "M365 Migration",
    "Managed IT Services",
    "Cortex Grid"
  ]
};

export default function ServicesDirectoryPage() {
  const serviceList = Object.values(servicesData);

  return (
    <main className="pt-24 bg-slate-950">
      {/* Header Banner */}
      <section className="py-20 bg-radial-glow border-b border-slate-800/80 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-6">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Unified Enterprise Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Consulting Practice Areas & Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From reducing generative AI inference spend by up to 58% to managing zero-downtime multi-cloud migrations and 24/7 IT helpdesks.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {serviceList.map((service) => (
            <div
              key={service.id}
              className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-xs font-semibold text-cyan-400 border border-slate-700">
                    <DynamicIcon name={service.iconName} className="w-3.5 h-3.5" />
                    <span>{service.badge}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {service.title}
                  </h2>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.keyPillars.map((pillar, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-2 text-xs text-slate-400"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-300">
                          {pillar.title}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 transition-all cursor-pointer"
                    >
                      <span>Explore Technical Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Proven Outcomes:
                  </span>
                  <div className="grid grid-cols-2 gap-4">
                    {service.benefits.slice(0, 2).map((b, bIdx) => (
                      <div key={bIdx} className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                        <span className="text-2xl font-black text-cyan-400 block font-mono">
                          {b.metric}
                        </span>
                        <span className="text-xs font-semibold text-white block mt-0.5">
                          {b.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-xs text-slate-400 italic">
                    &ldquo;{service.caseStudy.challenge}&rdquo;
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Section */}
      <QuickConsultationSection />
    </main>
  );
}
