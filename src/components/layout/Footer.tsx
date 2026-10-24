"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PhoneCall,
  Mail,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2
} from "lucide-react";

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes("@")) {
      setIsSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer
      className="bg-[#F3EFEA] border-t border-[#E5DFD5] text-[#5E5D59] relative z-20 pt-16 pb-12"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#E5DFD5]">
          {/* Brand & Certifications Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center focus:outline-hidden"
              aria-label="Cortex Grid Consulting Home"
            >
              <Image
                src="/images/cortex-grid-website-logo.png"
                alt="Cortex Grid Consulting"
                width={210}
                height={52}
                className="h-10 sm:h-11 w-auto object-contain hover:opacity-90 transition-opacity"
              />
            </Link>

            <p className="text-[#5E5D59] text-sm leading-relaxed max-w-sm">
              Architecting future-ready IT infrastructure and cost-effective AI operations for mid-market and enterprise organizations. Predictable cloud expenditure, zero-downtime migrations, and enterprise data governance.
            </p>

            {/* Enterprise Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#5E5D59]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#E5DFD5] text-[#141413] font-medium shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D97757]" /> ISO 27001 Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#E5DFD5] text-[#141413] font-medium shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D97757]" /> SOC 2 Type II
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#E5DFD5] text-[#141413] font-medium shadow-2xs">
                AWS & Microsoft Partner
              </span>
            </div>

            {/* Live Uptime Status Indicator */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#5E5D59]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="font-mono text-emerald-700 font-medium">All Systems Operational</span>
              <span className="text-[#B5B0A6]">•</span>
              <span>99.99% Uptime Guarantee</span>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#141413] mb-4">
              Core Practice Areas
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/ai-operations"
                  className="hover:text-[#D97757] transition-colors flex items-center justify-between group"
                >
                  <span>AI Operations & FinOps</span>
                  <span className="text-[10px] text-[#D97757] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud"
                  className="hover:text-[#D97757] transition-colors flex items-center justify-between group"
                >
                  <span>On-Cloud Services</span>
                  <span className="text-[10px] text-[#D97757] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-solutions"
                  className="hover:text-[#D97757] transition-colors flex items-center justify-between group"
                >
                  <span>Web Solutions & DNS</span>
                  <span className="text-[10px] text-[#D97757] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/email-solutions"
                  className="hover:text-[#D97757] transition-colors flex items-center justify-between group"
                >
                  <span>Workplace & Email</span>
                  <span className="text-[10px] text-[#D97757] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software-solutions"
                  className="hover:text-[#D97757] transition-colors flex items-center justify-between group"
                >
                  <span>Enterprise Software</span>
                  <span className="text-[10px] text-[#D97757] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/professional-services"
                  className="hover:text-[#D97757] transition-colors flex items-center justify-between group"
                >
                  <span>Professional IT Support</span>
                  <span className="text-[10px] text-[#D97757] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Tools */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#141413] mb-4">
              Tools & Navigation
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/ai-operations#audit"
                  className="hover:text-[#D97757] transition-colors"
                >
                  48-Hour AI Efficiency Audit
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#D97757] transition-colors"
                >
                  About Cortex Grid
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#D97757] transition-colors"
                >
                  Schedule Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#D97757] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#D97757] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Coordinates & Newsletter */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#141413] mb-4">
              Enterprise Support
            </p>

            <ul className="space-y-2.5 text-xs text-[#5E5D59]">
              <li className="flex items-start gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#D97757] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+971585507745"
                  className="hover:text-[#D97757] transition-colors font-mono"
                >
                  Phone: +971585507745
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D97757] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:alliances@cortexgridconsulting.com"
                  className="hover:text-[#D97757] transition-colors"
                >
                  alliances@cortexgridconsulting.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D97757] flex-shrink-0 mt-0.5" />
                <span>24/7/365 Proactive NOC & Helpdesk</span>
              </li>
            </ul>

            {/* Newsletter Dispatch */}
            <div className="pt-2">
              <p className="text-[11px] font-semibold text-[#141413] uppercase tracking-wider mb-2">
                Enterprise AI & FinOps Dispatch
              </p>
              {isSubscribed ? (
                <div className="flex items-center gap-1.5 text-xs text-[#C75D3C] bg-[#F4ECE4] p-2.5 rounded-lg border border-[#E8D8CC]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Check your inbox for our latest briefing.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address for AI dispatch
                  </label>
                  <input
                    type="email"
                    id="newsletter-email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="architect@company.com"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-[#DCD6CD] text-[#141413] placeholder-[#87867F] focus:outline-hidden focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757]/30 transition-all shadow-2xs"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="p-2 rounded-lg bg-[#141413] hover:bg-[#2C2B28] text-white transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#73716B]">
          <p>
            © 2026 Cortex Grid Consulting LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#141413] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#141413] transition-colors">
              Terms of Service
            </Link>
            <Link href="/services" className="hover:text-[#141413] transition-colors">
              Services Directory
            </Link>
            <a
              href="#top"
              className="hover:text-[#D97757] transition-colors"
              aria-label="Scroll to top of page"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
