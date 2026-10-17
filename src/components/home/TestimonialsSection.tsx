"use client";

import React from "react";
import { Star, TrendingDown, Clock, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    quote:
      "Cortex Grid transformed our AI infrastructure. We were facing runaway OpenAI bills exceeding $40,000 every month. By deploying their semantic caching layer and routing triage queries to fine-tuned Llama 3 models, our monthly inference costs dropped by 62% while query latency plummeted.",
    author: "David Chen",
    role: "VP of Engineering",
    company: "Apex Global FinTech",
    metric: "62% Cost Reduction",
    metricIcon: TrendingDown,
    tag: "AI Operations & FinOps"
  },
  {
    quote:
      "When we consolidated our regional clinics to Microsoft 365 and hybrid Azure infrastructure, Cortex Grid executed the entire migration over a weekend with zero dropped emails or HIPAA compliance hiccups. Their 24/7 response team has been flawless.",
    author: "Elena Rostova",
    role: "Director of IT Operations",
    company: "CareMatrix Health System",
    metric: "Zero Downtime",
    metricIcon: ShieldCheck,
    tag: "Cloud & Workplace Migration"
  },
  {
    quote:
      "Our logistics team was sinking 200+ hours weekly manually reading multi-page freight bills and customs declarations. Cortex Grid's custom RAG pipeline automated 94% of our intake workflow with 99.4% field accuracy. It completely revolutionized our margin profile.",
    author: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "TransPacific Logistics",
    metric: "18m to 9s Processing",
    metricIcon: Clock,
    tag: "Enterprise AI Workflow"
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF8F5] relative border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C75D3C] mb-2 block">
            Proven Business Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
            Trusted by Engineering Leaders & Operations Executives
          </h2>
          <p className="mt-4 text-base text-[#5E5D59] leading-relaxed">
            Real-world results delivered across finance, healthcare, logistics, and professional services.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => {
            const MetricIcon = t.metricIcon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-8 border border-[#E5DFD5] bg-white shadow-xs hover:shadow-md hover:border-[#DCD6CD] flex flex-col justify-between relative group transition-all"
              >
                <div>
                  {/* Top Bar with Tag & Metric */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F4ECE4] text-[#C75D3C] border border-[#E8D8CC]">
                      {t.tag}
                    </span>
                    <div className="flex items-center gap-1 text-emerald-700 text-xs font-bold font-mono">
                      <MetricIcon className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{t.metric}</span>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[#5E5D59] text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#E5DFD5] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-center font-bold text-[#141413] text-sm">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#141413]">
                      {t.author}
                    </h4>
                    <p className="text-xs text-[#73716B]">
                      {t.role} • {t.company}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
