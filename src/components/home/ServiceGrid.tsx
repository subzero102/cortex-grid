"use client";

import React from "react";
import Link from "next/link";
import {
  BrainCircuit,
  CloudCog,
  Globe,
  Mail,
  Layers,
  Headphones,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    id: "ai-operations",
    title: "AI Operations & Workflow Consulting",
    badge: "Enterprise AI & FinOps",
    badgeColor: "bg-[#F4ECE4] text-[#C75D3C] border-[#E8D8CC]",
    description:
      "Bridge the gap between experimental prototypes and cost-efficient production AI. We deploy sovereign RAG pipelines, dynamic model right-sizing, semantic caching, and strict token budgets.",
    icon: BrainCircuit,
    href: "/services/ai-operations",
    features: [
      "Semantic caching & prompt cost distillation",
      "Dynamic model routing (SLMs vs. Frontier LLMs)",
      "Zero-data-retention private VPC inference",
      "Tailored document & support workflow automation"
    ]
  },
  {
    id: "cloud",
    title: "On-Cloud Services & Hybrid Infrastructure",
    badge: "Azure • AWS • GCP",
    badgeColor: "bg-[#EAEFF5] text-[#2D5A88] border-[#D1DFEC]",
    description:
      "Resilient, well-architected multi-cloud architectures. Greenfield migrations, FinOps cost auditing, automated Terraform IaC, and bare-metal hybrid virtualization.",
    icon: CloudCog,
    href: "/services/cloud",
    features: [
      "Microsoft Azure, AWS, and GCP cloud environments",
      "Continuous FinOps to eliminate idle compute & unattached disks",
      "Zero-downtime database lift-and-shift cutovers",
      "Disaster Recovery as a Service (DRaaS) with low RTO"
    ]
  },
  {
    id: "web-solutions",
    title: "Web Solutions, DNS & Modern Digital Platforms",
    badge: "High Performance Web",
    badgeColor: "bg-[#EAF3EC] text-[#28633D] border-[#D0E5D5]",
    description:
      "Ultra-fast corporate portals and web applications. Combining Next.js server rendering, Anycast DNS routing, DMARC/SPF/DKIM domain security, and Core Web Vitals optimization.",
    icon: Globe,
    href: "/services/web-solutions",
    features: [
      "Custom Next.js & React enterprise portals",
      "DMARC email security to stop domain spoofing",
      "Cloudflare Enterprise CDN & WAF acceleration",
      "Technical SEO & 95+ Core Web Vitals compliance"
    ]
  },
  {
    id: "email-solutions",
    title: "Email & Workplace Productivity Solutions",
    badge: "M365 & Google Workspace",
    badgeColor: "bg-[#F1ECF5] text-[#5C3B78] border-[#DFD4EC]",
    description:
      "Zero-downtime mailbox migrations and secure enterprise collaboration. Tenant setup, Intune Mobile Device Management, and multi-layered anti-phishing hygiene.",
    icon: Mail,
    href: "/services/email-solutions",
    features: [
      "Microsoft 365 & Google Workspace deployment",
      "Zero data loss mailbox, calendar & contact migrations",
      "Defender for Office 365 & AI spear-phishing defense",
      "Licensing audits to eliminate redundant enterprise SKUs"
    ]
  },
  {
    id: "software-solutions",
    title: "Enterprise Software, CRM, ERP & POS",
    badge: "Business Systems",
    badgeColor: "bg-[#F7EFE5] text-[#8C581E] border-[#ECDFCE]",
    description:
      "Unifying disconnected sales, accounting, and inventory silos. Custom integrations for Salesforce, HubSpot, cloud ERPs, and resilient cloud Point-of-Sale systems.",
    icon: Layers,
    href: "/services/software-solutions",
    features: [
      "CRM pipeline design (Salesforce, HubSpot, Zoho)",
      "Centralized ERP inventory & procurement workflows",
      "Cloud POS deployment with offline caching resilience",
      "Custom bi-directional API middleware & sync queues"
    ]
  },
  {
    id: "professional-services",
    title: "Professional IT Services & 24/7 Support",
    badge: "Managed Services & vCIO",
    badgeColor: "bg-[#ECEEF5] text-[#3A4A7A] border-[#D2D7EC]",
    description:
      "Your dedicated IT command center. 24/7/365 tier 1–3 helpdesk, automated zero-day endpoint patch management, and executive Virtual CIO technology roadmaps.",
    icon: Headphones,
    href: "/services/professional-services",
    features: [
      "8-minute average helpdesk ticket response SLA",
      "Proactive 24/7 infrastructure telemetry & health checks",
      "Quarterly vCIO technology reviews & budgeting",
      "Network infrastructure, firewall & Wi-Fi deployments"
    ]
  }
];

export const ServiceGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#F3EFEA]/40 relative border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C75D3C] mb-2 block">
              Enterprise Practice Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
              Six Pillars of Modern Enterprise Operations
            </h2>
            <p className="mt-4 text-base text-[#5E5D59] leading-relaxed">
              Every practice area is led by senior architects, backed by rigorous service level agreements, and designed to integrate seamlessly into your existing technology stack.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#141413] hover:text-[#D97757] transition-colors"
          >
            <span>View Full Services Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="rounded-2xl p-7 border border-[#E5DFD5] bg-white shadow-xs hover:shadow-md hover:border-[#DCD6CD] flex flex-col justify-between group transition-all"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] group-hover:border-[#E8D8CC] group-hover:bg-[#F4ECE4] flex items-center justify-center text-[#141413] group-hover:text-[#D97757] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${service.badgeColor}`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#141413] mb-3 group-hover:text-[#D97757] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#5E5D59] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-[#5E5D59]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D97757] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link */}
                <div className="pt-4 border-t border-[#E5DFD5]">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#141413] hover:text-[#D97757] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Explore Technical Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
