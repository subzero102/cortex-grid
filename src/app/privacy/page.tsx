import { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Sovereignty | Cortex Grid Consulting",
  description:
    "Cortex Grid Consulting's enterprise privacy policy, data sovereignty pledge, zero third-party AI training retention, and compliance with GDPR, CCPA, and HIPAA."
};

export default function PrivacyPage() {
  return (
    <main className="pt-24 pb-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>Enterprise Data Sovereignty Pledge</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Privacy Policy & Data Governance
        </h1>
        <p className="text-xs text-slate-400 mb-8">
          Last Updated: October 2026 • Governed by SOC 2 Type II & ISO 27001 Standards
        </p>

        <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Executive Overview</h2>
            <p>
              At Cortex Grid Consulting LLC (&quot;Cortex Grid&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we operate at the highest standards of data security, confidentiality, and data sovereignty. This Privacy Policy outlines how we handle client data, telemetry, and communications across our website, audits, and enterprise consulting engagements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Our AI Data Sovereignty Pledge</h2>
            <p>
              We firmly uphold that <strong>no client code, proprietary business documentation, customer records, prompts, or API payloads are ever used to train public or foundational artificial intelligence models</strong>.
            </p>
            <p>
              When architecting generative AI workflows, we strictly enforce:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Enterprise zero-data-retention (ZDR) agreements with vetted providers (e.g., Azure OpenAI Service, AWS Bedrock).</li>
              <li>Customer-managed private VPC deployments for self-hosted inference clusters (vLLM, Ollama, TensorRT-LLM).</li>
              <li>Automated PII and PHI sanitization layers prior to vector embedding generation.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Information Collected via Website Inquiries</h2>
            <p>
              When you submit a consultation request or schedule an AI Efficiency Audit, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Full Name, Corporate Email Address, Direct Phone Number, and Organization Name.</li>
              <li>Selected Practice Area, Estimated Scope/Budget, and Project Description.</li>
              <li>Technical telemetry and error logs necessary to ensure website performance and prevent spam abuse.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Non-Disclosure & Confidentiality</h2>
            <p>
              All technical evaluations, cloud infrastructure blueprints, and log reviews are conducted under mutual Non-Disclosure Agreements (NDA). We do not monetize, rent, or distribute any prospective or existing client information to third-party marketing entities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Compliance & Regulatory Alignment</h2>
            <p>
              Our data management practices conform to the EU General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), Health Insurance Portability and Accountability Act (HIPAA), and AICPA SOC 2 standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Inquiries & Data Privacy Officer</h2>
            <p>
              To request a copy of your records, initiate data deletion, or discuss our security posture, please contact our Data Protection Office at:
            </p>
            <p className="text-white font-mono">
              privacy@cortexgrid.com • 100 Innovation Way, Suite 400, Austin, TX 78701
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
