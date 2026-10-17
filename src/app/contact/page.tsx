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
    <main className="pt-24 pb-20 bg-[#FAF8F5]">
      {/* Header */}
      <section className="py-16 bg-[#FAF8F5] border-b border-[#E5DFD5] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE4] border border-[#E8D8CC] text-xs font-semibold text-[#C75D3C] mb-6 shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-[#D97757]" />
            <span>Senior Architectural Advisory</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#141413] tracking-tight">
            Schedule an Architectural Consultation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#5E5D59] max-w-2xl mx-auto leading-relaxed">
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
              <div className="rounded-2xl p-6 border border-[#E5DFD5] bg-white shadow-xs space-y-4">
                <h2 className="text-lg font-bold text-[#141413]">
                  Direct Enterprise Touchpoints
                </h2>

                <ul className="space-y-4 text-sm text-[#5E5D59]">
                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#F4ECE4] text-[#D97757] mt-0.5">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-[#73716B] block">Phone number:</span>
                      <a
                        href="tel:+919911560093"
                        className="font-bold text-[#141413] hover:text-[#D97757] transition-colors font-mono"
                      >
                        +919911560093
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#F4ECE4] text-[#D97757] mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-[#73716B] block">Alliances & Inquiries:</span>
                      <a
                        href="mailto:alliances@cortexgridconsulting.com"
                        className="font-bold text-[#141413] hover:text-[#D97757] transition-colors"
                      >
                        alliances@cortexgridconsulting.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#F4ECE4] text-[#D97757] mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-[#73716B] block">Operations Center (NOC):</span>
                      <span className="text-[#141413] font-medium">
                        24/7/365 Proactive Monitoring & Escalation
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Consultation Guarantees */}
              <div className="rounded-2xl p-6 border border-[#E5DFD5] bg-white shadow-2xs space-y-3 text-xs text-[#5E5D59]">
                <div className="flex items-center gap-2 text-[#C75D3C] font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#D97757]" />
                  <span>The Cortex Grid Engagement Standard</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D97757] mt-0.5 flex-shrink-0" />
                  <span>24-Hour initial response SLA by a certified senior architect.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D97757] mt-0.5 flex-shrink-0" />
                  <span>Mutual NDA executed before exchanging any architecture diagrams or logs.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D97757] mt-0.5 flex-shrink-0" />
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
