"use client";

import React from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  PhoneCall,
  CheckCircle2,
  Calendar
} from "lucide-react";

export const QuickConsultationSection: React.FC = () => {
  return (
    <section id="consultation" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block">
              Architectural Advisory
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Modernize Your Operations?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need to slash runaway LLM token bills, migrate to resilient hybrid cloud infrastructure, or secure 24/7 managed IT support, our senior consulting architects are ready to assist.
            </p>

            {/* Quick Guarantees Card */}
            <div className="rounded-2xl glass-panel p-6 border border-slate-800 bg-slate-900/60 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                What to Expect Upon Submission:
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>24-Hour Review:</strong> A senior architect (never a junior salesperson) reviews your current stack and requirements.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>NDA Protection:</strong> Mutual Non-Disclosure Agreement signed prior to detailed architecture reviews.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>No Hard Sell:</strong> Clear feasibility assessment, estimated timelines, and transparent ROI projection.
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Hotline Box */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">
                  Prefer direct phone conversation?
                </span>
                <a
                  href="tel:+18005550199"
                  className="text-sm font-bold text-white hover:text-cyan-400 transition-colors font-mono"
                >
                  +1 (800) 555-0199
                </a>
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
