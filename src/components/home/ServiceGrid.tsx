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
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
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
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
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
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
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
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
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
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
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
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
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
    <section id="services" className="py-24 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
              Enterprise Practice Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Six Pillars of Modern Enterprise Operations
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Every practice area is led by senior architects, backed by rigorous service level agreements, and designed to integrate seamlessly into your existing technology stack.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
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
                className="glass-panel glass-panel-hover rounded-2xl p-7 border border-slate-800 bg-slate-900/90 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 group-hover:border-cyan-500/40 flex items-center justify-center text-cyan-400 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${service.badgeColor}`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-slate-400"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link */}
                <div className="pt-4 border-t border-slate-800">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-200"
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
