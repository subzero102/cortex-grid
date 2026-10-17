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
        className="fixed inset-0 bg-black/35 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Sheet */}
      <div
        ref={drawerRef}
        className="relative w-full max-w-sm h-full bg-[#FAF8F5] border-l border-[#E5DFD5] p-6 flex flex-col justify-between overflow-y-auto shadow-2xl z-10 transition-transform duration-300 text-[#141413]"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#ECE7DE]">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-2.5 focus:outline-hidden"
            >
              <div className="w-8 h-8 rounded-lg bg-[#141413] text-white flex items-center justify-center p-1.5 shadow-sm">
                <BrainCircuit className="w-full h-full text-white" />
              </div>
              <div>
                <span className="font-extrabold text-sm tracking-widest text-[#141413] uppercase block leading-none font-mono">
                  Cortex Grid
                </span>
                <span className="text-[10px] text-[#C75D3C] tracking-wider uppercase font-semibold">
                  Consulting
                </span>
              </div>
            </Link>

            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 rounded-lg text-[#73716B] hover:text-[#141413] hover:bg-[#F0ECE5] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick AI Audit Banner in Drawer */}
          <div className="my-5 p-3.5 rounded-xl bg-[#F4ECE4] border border-[#E8D8CC]">
            <div className="flex items-center gap-2 text-[#C75D3C] text-xs font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>48-Hour AI Audit</span>
            </div>
            <p className="text-xs text-[#5E5D59] mb-2.5">
              Cut runaway LLM token bills before they scale.
            </p>
            <Link
              href="/services/ai-operations#consultation"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C75D3C] hover:text-[#B34B2C]"
            >
              Learn More <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Core Services Section */}
          <div className="mb-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#73716B] mb-3 px-2">
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
                    className="flex items-start gap-3 p-2.5 rounded-xl text-[#141413] hover:bg-[#F0ECE5] transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-white border border-[#E5DFD5] text-[#C75D3C] group-hover:bg-[#F4ECE4] transition-colors mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">{service.name}</span>
                        {service.badge && (
                          <span className="px-1.5 py-0.2 rounded-full text-[10px] font-semibold bg-[#F4ECE4] text-[#C75D3C] border border-[#E8D8CC]">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#73716B] line-clamp-1">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Core Utility Links */}
          <div className="border-t border-[#ECE7DE] pt-4 mb-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#73716B] mb-2 px-2">
              Navigation
            </p>
            <nav className="space-y-1">
              <Link
                href="/services"
                onClick={onClose}
                className="flex items-center gap-3 p-2.5 rounded-xl text-[#5E5D59] hover:bg-[#F0ECE5] hover:text-[#141413] text-sm"
              >
                <div className="p-1.5 rounded-md bg-[#F0ECE5] text-[#141413]">
                  <Layers className="w-4 h-4" />
                </div>
                <span>All Services Overview</span>
              </Link>
              <Link
                href="/about"
                onClick={onClose}
                className="flex items-center gap-3 p-2.5 rounded-xl text-[#5E5D59] hover:bg-[#F0ECE5] hover:text-[#141413] text-sm"
              >
                <div className="p-1.5 rounded-md bg-[#F0ECE5] text-[#141413]">
                  <Info className="w-4 h-4" />
                </div>
                <span>About Cortex Grid</span>
              </Link>
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center gap-3 p-2.5 rounded-xl text-[#5E5D59] hover:bg-[#F0ECE5] hover:text-[#141413] text-sm"
              >
                <div className="p-1.5 rounded-md bg-[#F0ECE5] text-[#141413]">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <span>Contact & Consultation</span>
              </Link>
            </nav>
          </div>
        </div>

        {/* Footer Actions in Drawer */}
        <div className="pt-4 border-t border-[#ECE7DE] space-y-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#141413] hover:bg-[#2C2B28] text-white font-bold text-sm shadow-xs transition-all text-center"
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="text-center space-y-1.5">
            <div>
              <a
                href="tel:+919911560093"
                className="text-xs text-[#5E5D59] hover:text-[#C75D3C] inline-flex items-center gap-1.5 transition-colors font-mono"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Phone: +919911560093
              </a>
            </div>
            <div>
              <a
                href="mailto:alliances@cortexgridconsulting.com"
                className="text-xs text-[#5E5D59] hover:text-[#C75D3C] inline-flex items-center gap-1.5 transition-colors font-mono"
              >
                <Mail className="w-3.5 h-3.5" />
                alliances@cortexgridconsulting.com
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#87867F]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C75D3C]" />
            <span>ISO 27001 & SOC2 Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};
