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
    <main className="pt-24 bg-[#FAF8F5]">
      {/* Header Banner */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E5DFD5] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE4] border border-[#E8D8CC] text-xs font-semibold text-[#C75D3C] mb-6 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#D97757]" />
            <span>Unified Enterprise Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#141413] tracking-tight">
            Consulting Practice Areas & Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#5E5D59] max-w-2xl mx-auto leading-relaxed">
            From reducing generative AI inference spend by up to 58% to managing zero-downtime multi-cloud migrations and 24/7 IT helpdesks.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {serviceList.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl p-8 sm:p-12 border border-[#E5DFD5] bg-white shadow-xs hover:shadow-md hover:border-[#DCD6CD] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4ECE4] text-xs font-semibold text-[#C75D3C] border border-[#E8D8CC]">
                    <DynamicIcon name={service.iconName} className="w-3.5 h-3.5 text-[#D97757]" />
                    <span>{service.badge}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#141413]">
                    {service.title}
                  </h2>

                  <p className="text-[#5E5D59] text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.keyPillars.map((pillar, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-2 text-xs text-[#5E5D59]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D97757] flex-shrink-0 mt-0.5" />
                        <span className="font-medium text-[#141413]">
                          {pillar.title}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#141413] hover:bg-[#2C2B28] text-white transition-all cursor-pointer shadow-xs"
                    >
                      <span>Explore Technical Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl border border-[#E5DFD5] space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#73716B] block">
                    Proven Outcomes:
                  </span>
                  <div className="grid grid-cols-2 gap-4">
                    {service.benefits.slice(0, 2).map((b, bIdx) => (
                      <div key={bIdx} className="p-3 rounded-xl bg-white border border-[#E5DFD5] shadow-2xs">
                        <span className="text-2xl font-black text-[#141413] block font-mono">
                          {b.metric}
                        </span>
                        <span className="text-xs font-semibold text-[#D97757] block mt-0.5">
                          {b.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-xs text-[#5E5D59] italic">
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
