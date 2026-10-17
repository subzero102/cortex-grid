import { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Cortex Grid Consulting",
  description:
    "Cortex Grid Consulting's Terms of Service governing technical advisory, architecture audits, and managed IT agreements."
};

export default function TermsPage() {
  return (
    <main className="pt-24 pb-20 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE4] border border-[#E8D8CC] text-xs font-semibold text-[#C75D3C] mb-6 shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-[#D97757]" />
          <span>Professional Service Terms</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#141413] mb-4">
          Terms of Service
        </h1>
        <p className="text-xs text-[#73716B] mb-8">
          Last Updated: October 2026 • Cortex Grid Consulting LLC
        </p>

        <div className="space-y-8 text-sm text-[#5E5D59] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#141413]">1. Scope of Engagement</h2>
            <p>
              These Terms of Service govern your use of the Cortex Grid Consulting website, consultation request portals, ROI calculators, and initial diagnostic audits. Formal managed services, cloud migrations, and custom AI implementations are additionally governed by individual Master Services Agreements (MSA) and Statements of Work (SOW).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#141413]">2. Intellectual Property & Deliverables</h2>
            <p>
              All custom scripts, infrastructure as code (IaC) modules, RAG pipelines, and configuration artifacts created specifically for a client under an active SOW become the exclusive property of the client upon final invoice settlement. Cortex Grid retains ownership of pre-existing proprietary tooling, benchmarks, and generalized methodologies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#141413]">3. Disclaimers & Warranties</h2>
            <p>
              While we guarantee high-availability multi-cloud designs and rigorous cybersecurity practices, third-party cloud infrastructure (e.g., Microsoft Azure, AWS, Google Cloud, OpenAI, Anthropic) is subject to the respective service level agreements and terms of those providers. Calculations produced by our online AI ROI Calculator are estimates based on standard enterprise benchmarks and user-provided parameters.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#141413]">4. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#141413]">5. Contact Information</h2>
            <p>
              For legal inquiries regarding these terms or master service contracts:
            </p>
            <p className="text-[#141413] font-mono font-semibold">
              alliances@cortexgridconsulting.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
