"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import {
  BrainCircuit,
  PhoneCall,
  Mail,
  MapPin,
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
      className="bg-slate-950 border-t border-slate-800/80 text-slate-400 relative z-20 pt-16 pb-12"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand & Certifications Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus:outline-hidden"
              aria-label="Cortex Grid Consulting Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-cyan-400 to-blue-600 flex items-center justify-center p-2 shadow-lg shadow-cyan-500/20">
                <BrainCircuit className="w-full h-full text-slate-950" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-widest text-white uppercase leading-none font-mono">
                  CORTEX GRID
                </span>
                <span className="text-[11px] text-cyan-400 tracking-wider uppercase font-semibold mt-0.5">
                  Consulting
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Architecting future-ready IT infrastructure and cost-effective AI operations for mid-market and enterprise organizations. Predictable cloud expenditure, zero-downtime migrations, and enterprise data governance.
            </p>

            {/* Enterprise Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> ISO 27001 Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> SOC 2 Type II
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                AWS & Microsoft Partner
              </span>
            </div>

            {/* Live Uptime Status Indicator */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-emerald-400 font-medium">All Systems Operational</span>
              <span className="text-slate-600">•</span>
              <span>99.99% Uptime Guarantee</span>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Core Practice Areas
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/ai-operations"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between group"
                >
                  <span>AI Operations & FinOps</span>
                  <span className="text-[10px] text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between group"
                >
                  <span>On-Cloud Services</span>
                  <span className="text-[10px] text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-solutions"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between group"
                >
                  <span>Web Solutions & DNS</span>
                  <span className="text-[10px] text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/email-solutions"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between group"
                >
                  <span>Workplace & Email</span>
                  <span className="text-[10px] text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software-solutions"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between group"
                >
                  <span>Enterprise Software</span>
                  <span className="text-[10px] text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/professional-services"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between group"
                >
                  <span>Professional IT Support</span>
                  <span className="text-[10px] text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Tools */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Tools & Navigation
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/roi-calculator"
                  className="hover:text-cyan-400 transition-colors"
                >
                  AI ROI & FinOps Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-operations#audit"
                  className="hover:text-cyan-400 transition-colors"
                >
                  48-Hour AI Efficiency Audit
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  About Cortex Grid
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Coordinates & Newsletter */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Enterprise Support
            </p>

            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <PhoneCall className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+18005550199"
                  className="hover:text-cyan-400 transition-colors font-mono"
                >
                  +1 (800) 555-0199 (Toll Free)
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@cortexgrid.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  advisory@cortexgrid.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>100 Innovation Way, Suite 400, Austin, TX 78701</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>24/7/365 Proactive NOC & Helpdesk</span>
              </li>
            </ul>

            {/* Newsletter Dispatch */}
            <div className="pt-2">
              <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Enterprise AI & FinOps Dispatch
              </p>
              {isSubscribed ? (
                <div className="flex items-center gap-1.5 text-xs text-cyan-400 bg-cyan-950/40 p-2.5 rounded-lg border border-cyan-500/30">
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
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-hidden focus:border-cyan-400"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="p-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 Cortex Grid Consulting LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/services" className="hover:text-slate-300 transition-colors">
              Services Directory
            </Link>
            <a
              href="#top"
              className="hover:text-cyan-400 transition-colors"
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
