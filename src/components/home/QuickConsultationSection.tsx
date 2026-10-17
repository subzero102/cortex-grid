"use client";

import React from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  PhoneCall,
  Mail,
  CheckCircle2,
  Calendar
} from "lucide-react";

export const QuickConsultationSection: React.FC = () => {
  return (
    <section id="consultation" className="py-24 bg-[#F3EFEA]/40 relative border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C75D3C] block">
              Architectural Advisory
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
              Ready to Modernize Your Operations?
            </h2>

            <p className="text-[#5E5D59] text-sm sm:text-base leading-relaxed">
              Whether you need to slash runaway LLM token bills, migrate to resilient hybrid cloud infrastructure, or secure 24/7 managed IT support, our senior consulting architects are ready to assist.
            </p>

            {/* Quick Guarantees Card */}
            <div className="rounded-2xl p-6 border border-[#E5DFD5] bg-white shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-[#141413] flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#D97757]" />
                What to Expect Upon Submission:
              </h3>

              <div className="space-y-3 text-xs text-[#5E5D59]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D97757] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#141413]">24-Hour Review:</strong> A senior architect (never a junior salesperson) reviews your current stack and requirements.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D97757] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#141413]">NDA Protection:</strong> Mutual Non-Disclosure Agreement signed prior to detailed architecture reviews.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D97757] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#141413]">No Hard Sell:</strong> Clear feasibility assessment, estimated timelines, and transparent ROI projection.
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Contact Coordinates */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white border border-[#E5DFD5] shadow-2xs flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F4ECE4] border border-[#E8D8CC] flex items-center justify-center text-[#D97757] flex-shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#73716B] block">
                    Phone number:
                  </span>
                  <a
                    href="tel:+919911560093"
                    className="text-sm font-bold text-[#141413] hover:text-[#D97757] transition-colors font-mono"
                  >
                    +919911560093
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5DFD5] shadow-2xs flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F4ECE4] border border-[#E8D8CC] flex items-center justify-center text-[#D97757] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#73716B] block">
                    Direct Email Inquiries:
                  </span>
                  <a
                    href="mailto:alliances@cortexgridconsulting.com"
                    className="text-sm font-bold text-[#141413] hover:text-[#D97757] transition-colors font-mono"
                  >
                    alliances@cortexgridconsulting.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm
              sourceContext="Landing Page Quick Consultation"
              initialService="ai-operations"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
