"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  TrendingDown,
  Clock,
  ShieldCheck,
  Coins,
  CheckCircle2
} from "lucide-react";

export const AiAuditBanner: React.FC = () => {
  return (
    <section id="ai-audit" className="py-20 relative bg-[#FAF8F5] overflow-hidden border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E2D4C3] bg-gradient-to-br from-[#F5EFE6] via-[#FAF7F2] to-[#F0E6D8] shadow-[0_8px_30px_rgba(20,20,19,0.04)] overflow-hidden">
          {/* Subtle background decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D97757]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#E2D4C3] text-xs font-semibold text-[#C75D3C] shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D97757]" />
                <span>Specialized Enterprise FinOps Assessment</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141413] tracking-tight leading-[1.15]">
                Want to adopt AI without{" "}
                <span className="text-[#D97757]">
                  skyrocketing cloud bills?
                </span>
              </h2>

              <p className="text-[#5E5D59] text-base sm:text-lg leading-relaxed max-w-2xl">
                Book a comprehensive <strong>48-Hour AI Efficiency Audit</strong>. We evaluate your current LLM API logs, token consumption patterns, and architecture to identify immediate 40–60% cost reductions while boosting latency and accuracy.
              </p>

              {/* 4 Deliverables Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E5DFD5] shadow-2xs">
                  <div className="p-1.5 rounded-lg bg-[#F4ECE4] text-[#D97757] mt-0.5">
                    <TrendingDown className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#141413] block">
                      Token Spend Breakdown
                    </span>
                    <p className="text-xs text-[#73716B] mt-0.5">
                      Identify runaway prompt bloat and redundant queries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E5DFD5] shadow-2xs">
                  <div className="p-1.5 rounded-lg bg-[#F4ECE4] text-[#D97757] mt-0.5">
                    <Coins className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#141413] block">
                      Model Right-Sizing Matrix
                    </span>
                    <p className="text-xs text-[#73716B] mt-0.5">
                      Route routine jobs to SLMs; reserve frontier LLMs for reasoning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E5DFD5] shadow-2xs">
                  <div className="p-1.5 rounded-lg bg-[#F4ECE4] text-[#D97757] mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#141413] block">
                      Semantic Caching Plan
                    </span>
                    <p className="text-xs text-[#73716B] mt-0.5">
                      Sub-second response caching for repeat employee queries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E5DFD5] shadow-2xs">
                  <div className="p-1.5 rounded-lg bg-[#F4ECE4] text-[#D97757] mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#141413] block">
                      IP & Privacy Verification
                    </span>
                    <p className="text-xs text-[#73716B] mt-0.5">
                      Ensure zero internal data leaks into third-party training corpuses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action Card */}
            <div className="lg:col-span-4">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2D4C3] shadow-md text-center space-y-6">
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C75D3C] block mb-1">
                    Turnaround SLA
                  </span>
                  <div className="text-3xl font-black text-[#141413]">
                    Under 48 Hours
                  </div>
                  <p className="text-xs text-[#73716B] mt-1">
                    Delivered directly by Senior AI Architects
                  </p>
                </div>

                <div className="space-y-2 text-xs text-[#5E5D59] text-left bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E5DFD5]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Non-Disclosure Agreement signed upfront</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Read-only or anonymized log review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Clear ROI guarantee or full refund</span>
                  </div>
                </div>

                <Link
                  href="/contact?service=ai-efficiency-audit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#141413] hover:bg-[#2C2B28] text-white shadow-md transition-all cursor-pointer"
                >
                  <span>Book AI Efficiency Audit</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <p className="text-[11px] text-[#73716B]">
                  Limited to 5 enterprise audits per month to maintain senior architect quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
