import { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  PhoneCall,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Schedule Consultation | Cortex Grid Consulting",
  description:
    "Get in touch with Cortex Grid Consulting. Schedule a 48-Hour AI Efficiency Audit or speak with our senior multi-cloud architects and IT advisors.",
  keywords: [
    "Contact Cortex Grid",
    "Schedule IT Consultation",
    "Book AI Audit",
    "Enterprise IT Consulting",
    "Enterprise Cloud Support"
  ]
};

export default function ContactPage() {
  return (
    <main className="pt-24 pb-20 bg-slate-950">
      {/* Header */}
      <section className="py-16 bg-radial-glow border-b border-slate-800/80 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-6">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>Senior Architectural Advisory</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Schedule an Architectural Consultation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connect directly with our senior cloud architects, security practitioners, and AI operations engineers. All discussions are protected under mutual NDA.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Coordinates & Guarantees */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl glass-panel p-6 border border-slate-800 bg-slate-900/60 space-y-4">
                <h2 className="text-lg font-bold text-white">
                  Direct Enterprise Touchpoints
                </h2>

                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">Phone number:</span>
                      <a
                        href="tel:+919911560093"
                        className="font-bold text-white hover:text-cyan-400 transition-colors font-mono"
                      >
                        +919911560093
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">Alliances & Inquiries:</span>
                      <a
                        href="mailto:alliances@cortexgridconsulting.com"
                        className="font-bold text-white hover:text-cyan-400 transition-colors"
                      >
                        alliances@cortexgridconsulting.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">Operations Center (NOC):</span>
                      <span className="text-white font-medium">
                        24/7/365 Proactive Monitoring & Escalation
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Consultation Guarantees */}
              <div className="rounded-2xl p-6 border border-slate-800 bg-slate-900/40 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>The Cortex Grid Engagement Standard</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>24-Hour initial response SLA by a certified senior architect.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Mutual NDA executed before exchanging any architecture diagrams or logs.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Transparent scoping, estimated timelines, and quantitative ROI projection.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm
                sourceContext="Dedicated Contact Page"
                initialService="ai-operations"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
