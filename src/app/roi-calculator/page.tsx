"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  TrendingDown,
  ArrowRight,
  Sliders,
  CheckCircle2
} from "lucide-react";

export default function RoiCalculatorPage() {
  // Input parameters
  const [teamSize, setTeamSize] = useState<number>(50);
  const [queriesPerUserDay, setQueriesPerUserDay] = useState<number>(20);
  const [avgTokensPerQuery, setAvgTokensPerQuery] = useState<number>(2000);
  const [cacheHitRate, setCacheHitRate] = useState<number>(45); // percentage
  const [slmRoutingRatio, setSlmRoutingRatio] = useState<number>(55); // percentage routed to cheaper SLM

  // Economics constants (blended rates per 1,000,000 tokens)
  const frontierModelCostPerM = 15.0; // e.g. GPT-4o / Claude 3.5 Sonnet
  const slmModelCostPerM = 0.5; // e.g. Llama 3 8B / Mistral or fine-tuned self-hosted
  const semanticCacheCostPerM = 0.05; // vector retrieval cost

  // Monthly requests calculation (assuming 22 business days)
  const monthlyTotalQueries = teamSize * queriesPerUserDay * 22;
  const monthlyTotalTokens = (monthlyTotalQueries * avgTokensPerQuery);
  const monthlyTokensInMillions = monthlyTotalTokens / 1_000_000;

  // Unoptimized cost (100% of tokens hit frontier models with no caching)
  const unoptimizedCostMonthly = monthlyTokensInMillions * frontierModelCostPerM;

  // Optimized cost with Cortex Grid:
  // 1. Cached queries (cost is near zero)
  const cachedFraction = cacheHitRate / 100;
  const nonCachedFraction = 1 - cachedFraction;
  const nonCachedTokensM = monthlyTokensInMillions * nonCachedFraction;

  // 2. Of non-cached, slmRoutingRatio goes to SLMs, rest to frontier
  const slmFraction = slmRoutingRatio / 100;
  const frontierFraction = 1 - slmFraction;

  const slmTokensM = nonCachedTokensM * slmFraction;
  const frontierTokensM = nonCachedTokensM * frontierFraction;

  const cacheMonthlyCost = (monthlyTokensInMillions * cachedFraction) * semanticCacheCostPerM;
  const slmMonthlyCost = slmTokensM * slmModelCostPerM;
  const frontierMonthlyCost = frontierTokensM * frontierModelCostPerM;

  const optimizedCostMonthly = cacheMonthlyCost + slmMonthlyCost + frontierMonthlyCost;
  const monthlySavings = Math.max(0, unoptimizedCostMonthly - optimizedCostMonthly);
  const annualSavings = monthlySavings * 12;
  const percentageSavings = unoptimizedCostMonthly > 0
    ? Math.round((monthlySavings / unoptimizedCostMonthly) * 100)
    : 0;

  return (
    <main className="pt-24 pb-20 bg-slate-950">
      {/* Hero Header */}
      <section className="py-16 bg-radial-glow border-b border-slate-800/80 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-6">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive FinOps Forecasting Tool</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            AI Operations & Token Cost ROI Calculator
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Estimate how much your enterprise can save on recurring OpenAI / Anthropic / Bedrock API invoices using semantic caching and model right-sizing.
          </p>
        </div>
      </section>

      {/* Main Calculator Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Sliders & Controls */}
            <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 bg-slate-900/80 space-y-8">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-cyan-400" />
                  Your Organization&apos;s Usage Parameters
                </h2>
                <span className="text-xs text-slate-400 font-mono">
                  {(monthlyTotalQueries).toLocaleString()} queries/mo
                </span>
              </div>

              {/* Slider 1: Team Size */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="team-size" className="font-semibold text-slate-200">
                    Active AI Users / Employees
                  </label>
                  <span className="font-mono text-cyan-400 font-bold px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800">
                    {teamSize} users
                  </span>
                </div>
                <input
                  id="team-size"
                  type="range"
                  min="5"
                  max="1000"
                  step="5"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>5 users</span>
                  <span>250</span>
                  <span>500</span>
                  <span>1,000+ users</span>
                </div>
              </div>

              {/* Slider 2: Daily Queries Per User */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="queries-per-user" className="font-semibold text-slate-200">
                    Daily AI Queries Per Employee
                  </label>
                  <span className="font-mono text-cyan-400 font-bold px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800">
                    {queriesPerUserDay} requests/day
                  </span>
                </div>
                <input
                  id="queries-per-user"
                  type="range"
                  min="2"
                  max="100"
                  step="1"
                  value={queriesPerUserDay}
                  onChange={(e) => setQueriesPerUserDay(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>2 (Occasional)</span>
                  <span>20 (Standard Workflow)</span>
                  <span>100 (Power Users / Support)</span>
                </div>
              </div>

              {/* Slider 3: Average Tokens Per Prompt + Completion */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="tokens-per-query" className="font-semibold text-slate-200">
                    Average Tokens Per Query (Prompt + Output + RAG context)
                  </label>
                  <span className="font-mono text-cyan-400 font-bold px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800">
                    {avgTokensPerQuery.toLocaleString()} tokens
                  </span>
                </div>
                <input
                  id="tokens-per-query"
                  type="range"
                  min="500"
                  max="12000"
                  step="250"
                  value={avgTokensPerQuery}
                  onChange={(e) => setAvgTokensPerQuery(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>500 (Short QA)</span>
                  <span>4,000 (RAG Documents)</span>
                  <span>12,000 (Long Docs & Code)</span>
                </div>
              </div>

              {/* Slider 4: Semantic Caching Hit Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="cache-hit-rate" className="font-semibold text-slate-200">
                    Target Semantic Cache Hit Ratio
                  </label>
                  <span className="font-mono text-emerald-400 font-bold px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800">
                    {cacheHitRate}%
                  </span>
                </div>
                <input
                  id="cache-hit-rate"
                  type="range"
                  min="20"
                  max="80"
                  step="5"
                  value={cacheHitRate}
                  onChange={(e) => setCacheHitRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <p className="text-[11px] text-slate-400">
                  Identifies semantically identical questions from employees and serves instant sub-millisecond cached answers.
                </p>
              </div>

              {/* Slider 5: SLM Routing Ratio */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="slm-routing-ratio" className="font-semibold text-slate-200">
                    Queries Routed to Small Language Models (SLMs)
                  </label>
                  <span className="font-mono text-cyan-400 font-bold px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800">
                    {slmRoutingRatio}%
                  </span>
                </div>
                <input
                  id="slm-routing-ratio"
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={slmRoutingRatio}
                  onChange={(e) => setSlmRoutingRatio(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <p className="text-[11px] text-slate-400">
                  Routable classification, extraction, and formatting tasks sent to Llama 3 / Mistral at 95% lower cost.
                </p>
              </div>
            </div>

            {/* Right Column: Projected Savings Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl p-8 sm:p-10 border border-cyan-500/40 bg-gradient-to-b from-slate-900 via-slate-900 to-cyan-950/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
                  Projected Financial Impact
                </span>

                <div className="mb-6">
                  <span className="text-xs text-slate-400 block">
                    Estimated Annual Savings
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight font-mono text-gradient-cyan">
                    ${Math.round(annualSavings).toLocaleString()}
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold inline-flex items-center gap-1 mt-1">
                    <TrendingDown className="w-3.5 h-3.5" />
                    {percentageSavings}% Overall Spend Reduction
                  </span>
                </div>

                {/* Comparison Breakdown */}
                <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-400">Current Unoptimized Monthly Spend:</span>
                    <span className="font-mono font-bold text-red-400 text-sm">
                      ${Math.round(unoptimizedCostMonthly).toLocaleString()} /mo
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-400">Optimized with Cortex Grid Architecture:</span>
                    <span className="font-mono font-bold text-emerald-400 text-sm">
                      ${Math.round(optimizedCostMonthly).toLocaleString()} /mo
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
                    <span className="text-cyan-300 font-semibold">Net Monthly Operational Savings:</span>
                    <span className="font-mono font-bold text-cyan-300 text-sm">
                      +${Math.round(monthlySavings).toLocaleString()} /mo
                    </span>
                  </div>
                </div>

                {/* Proof Notes */}
                <div className="pt-6 space-y-2 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Based on standard enterprise LLM pricing benchmarks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Includes vector store indexing & caching overhead</span>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href={`/contact?service=ai-operations&budget=$${Math.round(annualSavings).toLocaleString()}+savings`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-500/20 transition-all text-center"
                  >
                    <span>Claim Your 48-Hour AI Efficiency Audit</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
