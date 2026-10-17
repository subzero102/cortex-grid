"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  BrainCircuit,
  ChevronDown,
  Menu,
  PhoneCall,
  Sparkles,
  CloudCog,
  Globe,
  Mail,
  Layers,
  Headphones,
  ArrowRight
} from "lucide-react";
import { MobileDrawer } from "./MobileDrawer";

const services = [
  {
    name: "AI Operations & FinOps",
    href: "/services/ai-operations",
    description: "Semantic caching, model right-sizing, guardrails & private RAG",
    icon: BrainCircuit,
    badge: "Trending"
  },
  {
    name: "On-Cloud Services",
    href: "/services/cloud",
    description: "Azure, AWS & GCP enterprise architecture, cost governance",
    icon: CloudCog
  },
  {
    name: "Web Solutions & DNS",
    href: "/services/web-solutions",
    description: "Next.js platforms, CDN acceleration, DMARC security & SEO",
    icon: Globe
  },
  {
    name: "Workplace & Email",
    href: "/services/email-solutions",
    description: "Microsoft 365, Google Workspace & zero-downtime migration",
    icon: Mail
  },
  {
    name: "Enterprise Software",
    href: "/services/software-solutions",
    description: "Custom CRM, ERP architectures & omnichannel cloud POS",
    icon: Layers
  },
  {
    name: "Professional IT Services",
    href: "/services/professional-services",
    description: "24/7 helpdesk, vCIO advisory & infrastructure security",
    icon: Headphones
  }
];

export const Header: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detect scroll for dynamic border/shadow enhancement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isServicesOpen) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isServicesOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DFD5] shadow-xs"
            : "bg-[#FAF8F5]/80 backdrop-blur-sm border-b border-[#E5DFD5]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-hidden"
              aria-label="Cortex Grid Consulting Home"
            >
              <div className="w-10 h-10 rounded-xl bg-[#141413] flex items-center justify-center p-2 shadow-sm text-white group-hover:bg-[#C75D3C] transition-colors">
                <BrainCircuit className="w-full h-full text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-widest text-[#141413] uppercase leading-none font-mono">
                  CORTEX GRID
                </span>
                <span className="text-[11px] text-[#C75D3C] tracking-wider uppercase font-semibold mt-0.5">
                  Consulting
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1.5"
              aria-label="Main Navigation"
            >
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium text-[#5E5D59] hover:text-[#141413] hover:bg-[#F0ECE5] transition-colors cursor-pointer"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#87867F] transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180 text-[#C75D3C]" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Panel */}
                {isServicesOpen && (
                  <div
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 w-[520px] mt-2 p-4 rounded-2xl bg-white border border-[#E5DFD5] shadow-xl z-50 animate-in fade-in zoom-in-95 duration-150"
                  >
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#ECE7DE] px-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#73716B]">
                        Enterprise Practice Areas
                      </span>
                      <Link
                        href="/services"
                        onClick={() => setIsServicesOpen(false)}
                        className="text-xs font-semibold text-[#C75D3C] hover:text-[#B34B2C] flex items-center gap-1"
                      >
                        All Services Directory <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {services.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl text-left hover:bg-[#FAF8F5] border border-transparent hover:border-[#EAE5DC] transition-colors group"
                          >
                            <div className="p-2 rounded-lg bg-[#F4ECE4] text-[#C75D3C] group-hover:bg-[#EDDFD2] transition-colors mt-0.5 flex-shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm font-semibold text-[#141413] group-hover:text-[#C75D3C] transition-colors">
                                  {item.name}
                                </span>
                                {item.badge && (
                                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#F4ECE4] text-[#C75D3C] border border-[#E8D8CC]">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-[#73716B] line-clamp-1 leading-snug mt-0.5">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Dropdown Footer CTA */}
                    <div className="mt-3 pt-3 border-t border-[#ECE7DE] bg-[#FAF8F5] -mx-4 -mb-4 p-3 rounded-b-2xl flex items-center justify-between px-5">
                      <div className="flex items-center gap-2 text-xs text-[#5E5D59]">
                        <Sparkles className="w-3.5 h-3.5 text-[#C75D3C]" />
                        <span>Ready to audit your AI token or cloud bills?</span>
                      </div>
                      <Link
                        href="/services/ai-operations"
                        onClick={() => setIsServicesOpen(false)}
                        className="text-xs font-bold text-[#C75D3C] hover:text-[#B34B2C]"
                      >
                        Book 48-Hour AI Audit →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* About */}
              <Link
                href="/about"
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-[#5E5D59] hover:text-[#141413] hover:bg-[#F0ECE5] transition-colors"
              >
                About Us
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-[#5E5D59] hover:text-[#141413] hover:bg-[#F0ECE5] transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Section */}
            <div className="flex items-center gap-4">
              {/* Direct Support Phone */}
              <a
                href="tel:+919911560093"
                className="hidden xl:inline-flex items-center gap-2 text-xs text-[#141413] hover:text-[#C75D3C] transition-colors py-2 px-3 rounded-lg border border-[#DCD6CD] hover:border-[#141413] bg-white font-mono shadow-xs"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#C75D3C]" />
                <span>+919911560093</span>
              </a>

              {/* Consultation CTA */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wide uppercase bg-[#141413] hover:bg-[#2C2B28] text-[#FAF8F5] shadow-xs transition-all cursor-pointer"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Drawer Trigger */}
              <button
                type="button"
                onClick={() => setIsMobileDrawerOpen(true)}
                aria-label="Open mobile navigation menu"
                aria-expanded={isMobileDrawerOpen}
                aria-controls="mobile-navigation-drawer"
                className="lg:hidden p-2 rounded-xl text-[#141413] hover:bg-[#F0ECE5] focus:outline-hidden transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
      />
    </>
  );
};
