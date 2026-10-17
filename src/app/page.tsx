import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ValueProposition } from "@/components/home/ValueProposition";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { AiAuditBanner } from "@/components/home/AiAuditBanner";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { QuickConsultationSection } from "@/components/home/QuickConsultationSection";

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Value Proposition (4 Pillars) */}
      <ValueProposition />

      {/* 3. Service Grid (6 Core Practices) */}
      <ServiceGrid />

      {/* 4. Specialized AI Audit CTA Banner */}
      <AiAuditBanner />

      {/* 5. Enterprise Testimonials & Case Studies */}
      <TestimonialsSection />

      {/* 6. Quick Consultation Booking Section */}
      <QuickConsultationSection />
    </main>
  );
}
