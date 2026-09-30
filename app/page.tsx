"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { TrackingSection } from "@/components/sections/TrackingSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { NetworkSection } from "@/components/sections/NetworkSection";
import { RateCalculator } from "@/components/sections/RateCalculator";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteModal } from "@/components/sections/QuoteModal";

export default function HomePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedTrackingId, setSelectedTrackingId] = useState<string | undefined>(undefined);
  const [quotePrefill, setQuotePrefill] = useState<{
    origin?: string;
    destination?: string;
    serviceType?: string;
    cost?: number;
    weight?: number;
  } | null>(null);

  const handleOpenQuoteModal = (serviceTitle?: string) => {
    if (serviceTitle) {
      setQuotePrefill({
        serviceType: serviceTitle,
      });
    } else {
      setQuotePrefill(null);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const handleQuickTrack = (trackingNumber: string) => {
    setSelectedTrackingId(trackingNumber);
    const trackingEl = document.getElementById("tracking");
    if (trackingEl) {
      trackingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookWithEstimate = (details: {
    origin: string;
    destination: string;
    serviceType: string;
    cost: number;
    weight: number;
  }) => {
    setQuotePrefill(details);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F5F8FC] selection:bg-[#FF7A00] selection:text-white overflow-x-hidden">
      {/* 1. Sticky Navigation Header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-grow w-full">
        {/* 2. Hero Section */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onQuickTrack={handleQuickTrack}
        />

        {/* 3. Quick Trust Indicators */}
        <TrustStats />

        {/* 4. Track Your Shipment */}
        <TrackingSection
          initialTrackingId={selectedTrackingId}
          onClearInitialId={() => setSelectedTrackingId(undefined)}
        />

        {/* 5. Services Section */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 6. Service Features: How It Works */}
        <HowItWorks />

        {/* 7. Service Coverage / Network */}
        <NetworkSection />

        {/* 8. Rate Calculator / Quick Quote */}
        <RateCalculator onBookWithEstimate={handleBookWithEstimate} />

        {/* 9. Why Choose Chowra Logistics */}
        <WhyChooseUs />

        {/* 10. Customer / Partner Section */}
        <PartnersSection />

        {/* 11. Testimonials */}
        <Testimonials />

        {/* 12. Interactive FAQ Accordion */}
        <FAQSection />

        {/* 13. Call-to-Action */}
        <CTASection onOpenQuoteModal={() => handleOpenQuoteModal()} />
      </main>

      {/* 14. Professional Multi-Column Footer */}
      <Footer />

      {/* Interactive Global Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        prefillData={quotePrefill}
      />
    </div>
  );
}
