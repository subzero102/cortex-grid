import { Metadata } from "next";
import {
  ShieldCheck,
  TrendingDown,
  Award,
  Users,
  Building2
} from "lucide-react";
import { QuickConsultationSection } from "@/components/home/QuickConsultationSection";

export const metadata: Metadata = {
  title: "About Us | Cortex Grid Consulting - Enterprise IT & AI Operations",
  description:
    "Learn about Cortex Grid Consulting: our mission, architectural philosophy, security certifications, and leadership team dedicated to future-ready IT and cost-governed AI operations.",
  keywords: [
    "About Cortex Grid",
    "Enterprise IT Consulting",
    "Enterprise AI Operations",
    "Cloud Architecture Firm",
    "ISO 27001 IT Advisory"
  ]
};

export default function AboutPage() {
  return (
    <main className="pt-24 bg-[#FAF8F5]">
      {/* Hero */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E5DFD5] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE4] border border-[#E8D8CC] text-xs font-semibold text-[#C75D3C] mb-6 shadow-2xs">
            <Building2 className="w-3.5 h-3.5 text-[#D97757]" />
            <span>Company Overview & Philosophy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#141413] tracking-tight">
            Engineering Enterprise Trust in the Era of AI & Cloud
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#5E5D59] max-w-2xl mx-auto leading-relaxed">
            Cortex Grid Consulting was founded to resolve a critical enterprise failure: companies being sold high-cost, experimental AI and unmanaged cloud architectures with zero financial accountability or data protection.
          </p>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="py-24 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C75D3C] mb-2 block">
              Architectural Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#141413]">
              The Four Pillars of Our Practice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8 border border-[#E5DFD5] bg-white shadow-xs hover:shadow-md hover:border-[#DCD6CD] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#F4ECE4] border border-[#E8D8CC] flex items-center justify-center text-[#D97757] mb-6">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#141413] mb-3">
                1. Empirical FinOps Over Hype
              </h3>
              <p className="text-[#5E5D59] text-sm leading-relaxed">
                We measure success in tangible balance sheet numbers: lower API invoices, reduced cloud waste, and quantifiable hours saved. If an AI model or cloud service doesn&apos;t provide clear return on investment, we don&apos;t recommend it.
              </p>
            </div>

            <div className="rounded-2xl p-8 border border-[#E5DFD5] bg-white shadow-xs hover:shadow-md hover:border-[#DCD6CD] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#F4ECE4] border border-[#E8D8CC] flex items-center justify-center text-[#D97757] mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#141413] mb-3">
                2. Absolute Data Sovereignty
              </h3>
              <p className="text-[#5E5D59] text-sm leading-relaxed">
                Your intellectual property is sacred. We mandate enterprise zero-data-retention agreements with cloud providers, deploy self-hosted models in private VPCs, and implement automated PII/PHI scrubbing before LLM ingestion.
              </p>
            </div>

            <div className="rounded-2xl p-8 border border-[#E5DFD5] bg-white shadow-xs hover:shadow-md hover:border-[#DCD6CD] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#F4ECE4] border border-[#E8D8CC] flex items-center justify-center text-[#D97757] mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#141413] mb-3">
                3. Senior Architect Direct Access
              </h3>
              <p className="text-[#5E5D59] text-sm leading-relaxed">
                No junior handoffs or aggressive commission-driven salespeople. Every consultation, audit, and deployment is led directly by certified senior cloud architects, security engineers, and AI practitioners.
              </p>
            </div>

            <div className="rounded-2xl p-8 border border-[#E5DFD5] bg-white shadow-xs hover:shadow-md hover:border-[#DCD6CD] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#F4ECE4] border border-[#E8D8CC] flex items-center justify-center text-[#D97757] mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#141413] mb-3">
                4. Relentless 24/7 Support SLAs
              </h3>
              <p className="text-[#5E5D59] text-sm leading-relaxed">
                Production systems do not keep standard business hours. Our operations center monitors infrastructure 24/7/365 with an average 8-minute ticket response time and proactive health telemetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Framework Section */}
      <section className="py-20 bg-[#F3EFEA]/40 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 border border-[#E5DFD5] bg-white shadow-xs">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C75D3C] block mb-2">
                Certified Assurance
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#141413]">
                Enterprise Compliance Standards
              </h2>
              <p className="text-[#5E5D59] text-xs sm:text-sm mt-2">
                Our practices align with the world&apos;s most stringent cybersecurity and operational standards.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                <span className="text-lg font-bold text-[#141413] block">ISO/IEC 27001</span>
                <span className="text-xs text-[#D97757] font-semibold mt-1 block">Information Security Management</span>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                <span className="text-lg font-bold text-[#141413] block">SOC 2 Type II</span>
                <span className="text-xs text-[#D97757] font-semibold mt-1 block">Trust Services Criteria</span>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                <span className="text-lg font-bold text-[#141413] block">HIPAA / HITECH</span>
                <span className="text-xs text-[#D97757] font-semibold mt-1 block">Healthcare Data Protection</span>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                <span className="text-lg font-bold text-[#141413] block">GDPR & CCPA</span>
                <span className="text-xs text-[#D97757] font-semibold mt-1 block">Privacy & Data Governance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Consultation Section */}
      <QuickConsultationSection />
    </main>
  );
}
