import { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Cortex Grid Consulting",
  description:
    "Cortex Grid Consulting's Terms of Service governing technical advisory, architecture audits, and managed IT agreements."
};

export default function TermsPage() {
  return (
    <main className="pt-24 pb-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>Professional Service Terms</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-400 mb-8">
          Last Updated: October 2026 • Cortex Grid Consulting LLC
        </p>

        <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Scope of Engagement</h2>
            <p>
              These Terms of Service govern your use of the Cortex Grid Consulting website, consultation request portals, ROI calculators, and initial diagnostic audits. Formal managed services, cloud migrations, and custom AI implementations are additionally governed by individual Master Services Agreements (MSA) and Statements of Work (SOW).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Intellectual Property & Deliverables</h2>
            <p>
              All custom scripts, infrastructure as code (IaC) modules, RAG pipelines, and configuration artifacts created specifically for a client under an active SOW become the exclusive property of the client upon final invoice settlement. Cortex Grid retains ownership of pre-existing proprietary tooling, benchmarks, and generalized methodologies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Disclaimers & Warranties</h2>
            <p>
              While we guarantee high-availability multi-cloud designs and rigorous cybersecurity practices, third-party cloud infrastructure (e.g., Microsoft Azure, AWS, Google Cloud, OpenAI, Anthropic) is subject to the respective service level agreements and terms of those providers. Calculations produced by our online AI ROI Calculator are estimates based on standard enterprise benchmarks and user-provided parameters.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Contact Information</h2>
            <p>
              For legal inquiries regarding these terms or master service contracts:
            </p>
            <p className="text-white font-mono">
              alliances@cortexgridconsulting.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
