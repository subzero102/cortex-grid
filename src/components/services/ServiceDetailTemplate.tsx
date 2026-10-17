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
    <div className="pt-24 pb-20 bg-[#FAF8F5]">
      {/* 1. Breadcrumb & Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-[#73716B]">
              <li>
                <Link href="/" className="hover:text-[#D97757] transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-[#D97757] transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#141413] font-medium" aria-current="page">
                {service.shortTitle}
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE4] border border-[#E8D8CC] text-xs font-semibold text-[#C75D3C] shadow-2xs">
              <DynamicIcon name={service.iconName} className="w-3.5 h-3.5 text-[#D97757]" />
              <span>{service.badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#141413] tracking-tight leading-[1.12]">
              {service.title}
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-[#D97757] font-semibold">
              {service.tagline}
            </p>

            {/* Description */}
            <p className="text-[#5E5D59] text-base sm:text-lg leading-relaxed">
              {service.description}
            </p>

            {/* Hero Highlight Box */}
            <div className="p-4 rounded-xl bg-white border border-[#E5DFD5] flex items-center gap-3 text-sm text-[#5E5D59] shadow-2xs">
              <Sparkles className="w-5 h-5 text-[#D97757] flex-shrink-0" />
              <span>
                <strong className="text-[#141413]">Architectural Guarantee:</strong> {service.heroHighlight}
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#141413] hover:bg-[#2C2B28] text-white shadow-md shadow-black/5 hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Schedule Architecture Review</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-[#F3EFEA] text-[#141413] border border-[#DCD6CD] shadow-2xs transition-all"
              >
                <span>View All Practice Areas</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Enterprise Benefits / Metric Cards */}
      <section className="py-16 bg-[#F3EFEA]/40 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 border border-[#E5DFD5] bg-white shadow-2xs"
              >
                <span className="text-3xl sm:text-4xl font-black text-[#141413] tracking-tight block">
                  {benefit.metric}
                </span>
                <span className="text-sm font-bold text-[#D97757] block mt-1">
                  {benefit.label}
                </span>
                <p className="text-xs text-[#5E5D59] mt-2 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Technical Pillars */}
      <section className="py-24 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C75D3C] mb-2 block">
              Architectural Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
              Key Capabilities & Technical Pillars
            </h2>
            <p className="mt-4 text-base text-[#5E5D59]">
              Engineered for production resilience, zero security regressions, and measurable cost control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.keyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-8 border border-[#E5DFD5] bg-white shadow-xs hover:shadow-md hover:border-[#DCD6CD] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F4ECE4] border border-[#E8D8CC] flex items-center justify-center text-[#D97757] mb-6">
                  <DynamicIcon name={pillar.iconName} className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-[#141413] mb-3">
                  {pillar.title}
                </h3>

                <p className="text-[#5E5D59] text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#E5DFD5]">
                  {pillar.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2 text-xs text-[#5E5D59]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D97757] flex-shrink-0 mt-0.5" />
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
      <section className="py-24 bg-[#F3EFEA]/40 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C75D3C] mb-2 block">
              Deployment Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
              4-Phase Implementation Methodology
            </h2>
            <p className="mt-4 text-base text-[#5E5D59]">
              Predictable, risk-mitigated delivery milestones with clear deliverables at each stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.methodology.map((m, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 border border-[#E5DFD5] bg-white shadow-2xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-black font-mono text-[#D97757] mb-3">
                    {m.step}
                  </div>
                  <h3 className="text-base font-bold text-[#141413] mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs text-[#5E5D59] leading-relaxed mb-4">
                    {m.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E5DFD5] text-[11px] text-[#73716B] font-medium flex items-start gap-1.5">
                  <FileText className="w-3.5 h-3.5 flex-shrink-0 text-[#D97757] mt-0.5" />
                  <span>Deliverable: {m.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tech Stack Ecosystem */}
      <section className="py-16 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C75D3C] mb-3 block">
            Ecosystem Integrations & Certified Tools
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#141413] mb-8">
            Technologies & Frameworks Deployed
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {service.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-white border border-[#E5DFD5] hover:border-[#D97757]/40 text-xs text-[#141413] transition-colors flex items-center gap-2 shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-[#D97757]" />
                <span className="font-semibold">{tech.name}</span>
                <span className="text-[#73716B] text-[10px]">({tech.category})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Case Study Spotlight */}
      <section className="py-20 bg-[#F3EFEA]/40 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 border border-[#E2D4C3] bg-gradient-to-br from-[#F5EFE6] via-[#FAF7F2] to-[#F0E6D8] shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C75D3C]">
                  Case Study Spotlight • {service.caseStudy.industry}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#141413]">
                  {service.caseStudy.client}
                </h3>
                <div className="space-y-3 text-sm text-[#5E5D59]">
                  <p>
                    <strong className="text-[#141413]">Challenge:</strong>{" "}
                    {service.caseStudy.challenge}
                  </p>
                  <p>
                    <strong className="text-[#D97757]">Solution:</strong>{" "}
                    {service.caseStudy.solution}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#E5DFD5] shadow-2xs space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#73716B] block mb-2">
                  Key Quantitative Outcomes:
                </span>
                {service.caseStudy.results.map((result, rIdx) => (
                  <div
                    key={rIdx}
                    className="flex items-start gap-2.5 text-xs text-[#141413]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C75D3C] mb-2 block">
              Enterprise Clarifications
            </span>
            <h2 className="text-3xl font-bold text-[#141413]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#E5DFD5] bg-white overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#141413] hover:text-[#D97757] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#73716B] transition-transform duration-200 flex-shrink-0 ml-4 ${
                      openFaq === idx ? "rotate-180 text-[#D97757]" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5E5D59] leading-relaxed border-t border-[#E5DFD5]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Dedicated Consultation Anchor Section */}
      <section id="consultation" className="py-24 bg-[#F3EFEA]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C75D3C] block">
                Practice Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
                Schedule a Consultation for {service.shortTitle}
              </h2>
              <p className="text-[#5E5D59] text-sm sm:text-base leading-relaxed">
                Connect with our senior engineering architects. We will conduct a thorough review of your current setup, discuss technical options, and draft an actionable roadmap.
              </p>

              <div className="p-4 rounded-xl bg-white border border-[#E5DFD5] shadow-2xs space-y-2 text-xs text-[#5E5D59]">
                <div className="flex items-center gap-2 text-[#C75D3C] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#D97757]" />
                  <span>Cortex Grid Enterprise Promise</span>
                </div>
                <p className="text-[#73716B]">
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
