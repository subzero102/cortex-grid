"use client";

import React from "react";
import {
  Coins,
  CloudCog,
  ShieldCheck,
  Headphones,
  CheckCircle2
} from "lucide-react";

const valueProps = [
  {
    icon: Coins,
    title: "Cost-Governed AI Operations",
    metric: "Up to 58%",
    metricLabel: "Token Spend Reduction",
    description:
      "Avoid astronomical API invoices. We implement semantic caching layers, dynamic model right-sizing (SLMs for fast classification, frontier LLMs for deep reasoning), and private self-hosted inference.",
    highlights: [
      "Semantic caching with vector similarity",
      "Dynamic model router between open-weights & frontier",
      "Real-time token quotas and department chargebacks"
    ]
  },
  {
    icon: CloudCog,
    title: "Multi-Cloud & FinOps Resiliency",
    metric: "99.99%",
    metricLabel: "Infrastructure SLA",
    description:
      "Enterprise cloud architecture designed across Azure, AWS, and GCP. We eliminate single points of failure, enforce Infrastructure as Code (Terraform), and actively hunt down idle cloud compute.",
    highlights: [
      "Multi-AZ high availability & automated failover",
      "FinOps audits eliminating orphaned storage & idle VMs",
      "Bare-metal hybrid virtualization (Proxmox/VMware)"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Zero-Leakage Data Governance",
    metric: "100%",
    metricLabel: "Data Sovereignty",
    description:
      "Adopt AI without surrendering corporate IP. We enforce zero data retention policies with cloud foundation providers, automate PII/PHI redaction, and deploy private VPC inference boundaries.",
    highlights: [
      "No customer data used for model training",
      "Automated PII scrubbing before LLM ingestion",
      "Role-based access control (RBAC) mapped to Entra ID"
    ]
  },
  {
    icon: Headphones,
    title: "24/7 Managed IT & vCIO Command",
    metric: "8 Min",
    metricLabel: "Avg. Helpdesk Response",
    description:
      "Proactive infrastructure telemetry paired with certified Tier 1–3 engineers. We combine immediate frontline support with strategic quarterly technology roadmaps from our Virtual CIOs.",
    highlights: [
      "24/7/365 proactive endpoint & network monitoring",
      "Automated patch management & zero-day remediation",
      "Quarterly executive reviews & technology budgeting"
    ]
  }
];

export const ValueProposition: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF8F5] relative border-t border-[#E5DFD5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C75D3C] mb-2 block">
            The Cortex Grid Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
            Engineering Enterprise Trust & Predictable Cloud Economics
          </h2>
          <p className="mt-4 text-base text-[#5E5D59] leading-relaxed">
            Most businesses suffer from fragmented IT vendors and experimental AI prototypes with runaway billing. We provide unified architectural rigor, security compliance, and guaranteed SLAs.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-8 border border-[#E5DFD5] bg-white shadow-xs hover:shadow-md hover:border-[#DCD6CD] transition-all relative overflow-hidden"
              >
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4ECE4]/40 rounded-bl-full pointer-events-none" />

                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F4ECE4] border border-[#E8D8CC] flex items-center justify-center text-[#D97757]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-[#141413] tracking-tight block">
                      {prop.metric}
                    </span>
                    <span className="text-xs text-[#73716B] font-medium">
                      {prop.metricLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#141413] mb-3">
                  {prop.title}
                </h3>
                <p className="text-[#5E5D59] text-sm leading-relaxed mb-6">
                  {prop.description}
                </p>

                <div className="pt-4 border-t border-[#E5DFD5] space-y-2">
                  {prop.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-center gap-2 text-xs text-[#5E5D59]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D97757] flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
