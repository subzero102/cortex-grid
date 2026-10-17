"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  X,
  BrainCircuit,
  CloudCog,
  Globe,
  Mail,
  Layers,
  Headphones,
  Calculator,
  Info,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  {
    name: "AI Operations & FinOps",
    href: "/services/ai-operations",
    description: "Token optimization, sovereign RAG & guardrails",
    icon: BrainCircuit,
    badge: "Hot"
  },
  {
    name: "On-Cloud Services",
    href: "/services/cloud",
    description: "Azure, AWS, GCP & Hybrid virtualization",
    icon: CloudCog
  },
  {
    name: "Web Solutions & DNS",
    href: "/services/web-solutions",
    description: "Next.js portals, edge CDN, DMARC & SEO",
    icon: Globe
  },
  {
    name: "Workplace & Email",
    href: "/services/email-solutions",
    description: "Microsoft 365, Google Workspace & migration",
    icon: Mail
  },
  {
    name: "Enterprise Software",
    href: "/services/software-solutions",
    description: "CRM, ERP & connected retail POS systems",
    icon: Layers
  },
  {
    name: "Professional IT Services",
    href: "/services/professional-services",
    description: "24/7 helpdesk, vCIO advisory & infrastructure audits",
    icon: Headphones
  }
];

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key press and manage focus
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Set focus inside the drawer
    closeBtnRef.current?.focus();

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Sheet */}
      <div
        ref={drawerRef}
        className="relative w-full max-w-sm h-full bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl z-10 transition-transform duration-300"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-2.5 focus:outline-hidden"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center p-1.5 shadow-md shadow-cyan-500/20">
                <BrainCircuit className="w-full h-full text-slate-950" />
              </div>
              <div>
                <span className="font-extrabold text-sm tracking-widest text-white uppercase block leading-none">
                  Cortex Grid
                </span>
                <span className="text-[10px] text-cyan-400 tracking-wider uppercase font-semibold">
                  Consulting
                </span>
              </div>
            </Link>

            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick AI Audit Banner in Drawer */}
          <div className="my-5 p-3.5 rounded-xl bg-gradient-to-br from-cyan-950/60 to-slate-900 border border-cyan-500/30">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>48-Hour AI Audit</span>
            </div>
            <p className="text-xs text-slate-300 mb-2.5">
              Cut runaway LLM token bills before they scale.
            </p>
            <Link
              href="/services/ai-operations#consultation"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200"
            >
              Learn More <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Core Services Section */}
          <div className="mb-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 px-2">
              Practice Areas
            </p>
            <nav className="space-y-1">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={onClose}
                    className="flex items-start gap-3 p-2.5 rounded-xl text-slate-200 hover:bg-slate-800 hover:text-white transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{service.name}</span>
                        {service.badge && (
                          <span className="px-1.5 py-0.2 rounded-full text-[10px] font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Core Utility Links */}
          <div className="border-t border-slate-800 pt-4 mb-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
              Navigation
            </p>
            <nav className="space-y-1">
              <Link
                href="/services"
                onClick={onClose}
                className="flex items-center gap-3 p-2.5 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white text-sm"
              >
                <div className="p-1.5 rounded-md bg-slate-800 text-slate-300">
                  <Layers className="w-4 h-4" />
                </div>
                <span>All Services Overview</span>
              </Link>
              <Link
                href="/roi-calculator"
                onClick={onClose}
                className="flex items-center gap-3 p-2.5 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white text-sm"
              >
                <div className="p-1.5 rounded-md bg-slate-800 text-slate-300">
                  <Calculator className="w-4 h-4" />
                </div>
                <span>AI ROI & FinOps Calculator</span>
              </Link>
              <Link
                href="/about"
                onClick={onClose}
                className="flex items-center gap-3 p-2.5 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white text-sm"
              >
                <div className="p-1.5 rounded-md bg-slate-800 text-slate-300">
                  <Info className="w-4 h-4" />
                </div>
                <span>About Cortex Grid</span>
              </Link>
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center gap-3 p-2.5 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white text-sm"
              >
                <div className="p-1.5 rounded-md bg-slate-800 text-slate-300">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <span>Contact & Consultation</span>
              </Link>
            </nav>
          </div>
        </div>

        {/* Footer Actions in Drawer */}
        <div className="pt-4 border-t border-slate-800 space-y-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold text-sm shadow-md transition-all text-center"
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="text-center">
            <a
              href="tel:+18005550199"
              className="text-xs text-slate-400 hover:text-cyan-400 inline-flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Direct Support: +1 (800) 555-0199
            </a>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>ISO 27001 & SOC2 Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};
