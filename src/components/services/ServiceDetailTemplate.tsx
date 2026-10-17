"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServiceData } from "@/data/servicesData";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  FileText
} from "lucide-react";

interface ServiceDetailTemplateProps {
  service: ServiceData;
}

export const ServiceDetailTemplate: React.FC<ServiceDetailTemplateProps> = ({
  service
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-950">
      {/* 1. Breadcrumb & Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-radial-glow border-b border-slate-800/80">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-cyan-400 font-medium" aria-current="page">
                {service.shortTitle}
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
              <DynamicIcon name={service.iconName} className="w-3.5 h-3.5 text-cyan-400" />
              <span>{service.badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              {service.title}
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-cyan-300 font-medium">
              {service.tagline}
            </p>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {service.description}
            </p>

            {/* Hero Highlight Box */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 text-sm text-slate-200">
              <Sparkles className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span>
                <strong>Architectural Guarantee:</strong> {service.heroHighlight}
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <span>Schedule Architecture Review</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <Link
                href="/roi-calculator"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all"
              >
                <span>Calculate Cost Savings</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Enterprise Benefits / Metric Cards */}
      <section className="py-16 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 border border-slate-800 bg-slate-900/60"
              >
                <span className="text-3xl sm:text-4xl font-black text-cyan-400 tracking-tight block">
                  {benefit.metric}
                </span>
                <span className="text-sm font-bold text-white block mt-1">
                  {benefit.label}
                </span>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Technical Pillars */}
      <section className="py-24 bg-slate-900/40 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
              Architectural Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Key Capabilities & Technical Pillars
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Engineered for production resilience, zero security regressions, and measurable cost control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.keyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-8 border border-slate-800 bg-slate-900/80 hover:border-slate-700 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                  <DynamicIcon name={pillar.iconName} className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-800">
                  {pillar.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Implementation Methodology */}
      <section className="py-24 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
              Deployment Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              4-Phase Implementation Methodology
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Predictable, risk-mitigated delivery milestones with clear deliverables at each stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.methodology.map((m, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 border border-slate-800 bg-slate-900/50 relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-black font-mono text-cyan-400 mb-3">
                    {m.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {m.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800 text-[11px] text-cyan-300 font-medium flex items-start gap-1.5">
                  <FileText className="w-3.5 h-3.5 flex-shrink-0 text-cyan-400 mt-0.5" />
                  <span>Deliverable: {m.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tech Stack Ecosystem */}
      <section className="py-16 bg-slate-900/30 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 block">
            Ecosystem Integrations & Certified Tools
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
            Technologies & Frameworks Deployed
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {service.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-xs text-slate-200 transition-colors flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="font-semibold">{tech.name}</span>
                <span className="text-slate-400 text-[10px]">({tech.category})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Case Study Spotlight */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/80 to-cyan-950/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Case Study Spotlight • {service.caseStudy.industry}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {service.caseStudy.client}
                </h3>
                <div className="space-y-3 text-sm text-slate-300">
                  <p>
                    <strong className="text-white">Challenge:</strong>{" "}
                    {service.caseStudy.challenge}
                  </p>
                  <p>
                    <strong className="text-cyan-400">Solution:</strong>{" "}
                    {service.caseStudy.solution}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Key Quantitative Outcomes:
                </span>
                {service.caseStudy.results.map((result, rIdx) => (
                  <div
                    key={rIdx}
                    className="flex items-start gap-2.5 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
              Enterprise Clarifications
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ml-4 ${
                      openFaq === idx ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Dedicated Consultation Anchor Section */}
      <section id="consultation" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block">
                Practice Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Schedule a Consultation for {service.shortTitle}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with our senior engineering architects. We will conduct a thorough review of your current setup, discuss technical options, and draft an actionable roadmap.
              </p>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Cortex Grid Enterprise Promise</span>
                </div>
                <p className="text-slate-400">
                  Direct engagement with specialized engineers, zero aggressive sales scripts, and strict mutual non-disclosure agreement protection.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm
                initialService={service.id}
                sourceContext={`Service Page: ${service.title}`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
