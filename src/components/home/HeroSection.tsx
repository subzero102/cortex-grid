"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingDown,
  Sparkles,
  Layers,
  Terminal,
  Activity,
  CheckCircle2
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-radial-glow">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />

      {/* Decorative gradient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-indigo-500/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-semibold text-cyan-300 shadow-sm shadow-cyan-500/10">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Enterprise IT & Cost-Effective AI Operations</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Future-Ready IT &{" "}
              <span className="text-gradient-cyan">
                Cost-Effective AI Operations
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We help mid-market and enterprise organizations modernize IT infrastructure, optimize multi-cloud expenditure, and operationalize generative AI workflows with predictable token economics and zero IP leakage.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/services/ai-operations#audit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 shadow-xl shadow-cyan-500/25 transition-all cursor-pointer"
              >
                <span>Book 48-Hr AI Efficiency Audit</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all cursor-pointer"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Explore Practice Areas</span>
              </Link>
            </div>

            {/* Quick Proof Checklist */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Zero Data Retention AI Tenancy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Up to 58% Token Spend Reduction</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>99.99% Uptime Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Enterprise Telemetry Terminal */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 opacity-70 blur-xl" />

              <div className="relative rounded-2xl glass-panel bg-slate-900/95 border border-slate-700/80 p-5 sm:p-6 shadow-2xl font-mono text-xs">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-slate-400 text-[11px] font-sans">
                      cortex-grid-telemetry.sys
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-sans">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>LIVE CLUSTER</span>
                  </div>
                </div>

                {/* Telemetry Metrics */}
                <div className="py-4 space-y-3.5">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">
                        Semantic Caching Hit Ratio
                      </span>
                      <span className="text-cyan-400 text-base font-bold">
                        71.4%
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-emerald-400 font-semibold block">
                        +14.2% this week
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Sub-second retrieval
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">
                        Token Expenditure Optimization
                      </span>
                      <span className="text-emerald-400 text-base font-bold flex items-center gap-1">
                        <TrendingDown className="w-4 h-4" /> -58.2%
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-300 font-semibold block">
                        $18,400 saved/mo
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Model Right-Sizing
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">
                        Multi-Cloud Infrastructure Uptime
                      </span>
                      <span className="text-white text-base font-bold">
                        99.994%
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-cyan-400 font-semibold block">
                        Azure • AWS • GCP
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Zero incident alerts
                      </span>
                    </div>
                  </div>
                </div>

                {/* Terminal Log Console */}
                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-1 font-mono">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>cortex-orchestrator@cluster-prod:~$</span>
                  </div>
                  <p className="text-slate-300 pl-5">
                    &gt; RAG query routed to Llama-3-70B via private VPC... OK (142ms)
                  </p>
                  <p className="text-emerald-400 pl-5">
                    &gt; Semantic cache hit: 0 frontier tokens billed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Trust Logos Bar */}
        <div className="mt-20 pt-10 border-t border-slate-800/80">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Trusted Frameworks, Cloud Providers & Enterprise Standards
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-slate-400">
            <span className="font-semibold text-sm tracking-wide hover:text-cyan-400 transition-colors">
              Microsoft Solutions Partner
            </span>
            <span className="font-semibold text-sm tracking-wide hover:text-cyan-400 transition-colors">
              AWS Advanced Tier
            </span>
            <span className="font-semibold text-sm tracking-wide hover:text-cyan-400 transition-colors">
              Google Cloud Partner
            </span>
            <span className="font-semibold text-sm tracking-wide hover:text-cyan-400 transition-colors">
              ISO 27001 Certified
            </span>
            <span className="font-semibold text-sm tracking-wide hover:text-cyan-400 transition-colors">
              SOC 2 Type II
            </span>
            <span className="font-semibold text-sm tracking-wide hover:text-cyan-400 transition-colors">
              HIPAA Compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
