"use client";

import React, { useState } from "react";
import { SERVICES_DATA } from "@/data/services";
import { ServiceItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import {
  X,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Globe,
  Truck,
  Sparkles,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export function ServicesSection({ onOpenQuoteModal }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleBookSelected = (serviceTitle: string) => {
    setSelectedService(null);
    onOpenQuoteModal(serviceTitle);
  };

  return (
    <section id="services" className="py-20 bg-white scroll-mt-20 relative">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <SectionHeading
          badge="End-to-End Capabilities"
          title="Our Logistics Solutions"
          subtitle="End-to-end delivery and logistics solutions designed for individuals, businesses and growing enterprises."
        />

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
          {SERVICES_DATA.map((service, index) => {
            // Give Corporate Logistics a featured span on large screens or keep consistent
            const isFeatured = service.id === "corporate-logistics";

            return (
              <div
                key={service.id}
                className={isFeatured ? "md:col-span-2 lg:col-span-2 xl:col-span-2" : ""}
              >
                <ServiceCard
                  service={service}
                  onSelect={handleSelectService}
                  className="h-full"
                />
              </div>
            );
          })}
        </div>

        {/* Service Explorer Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close service details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-[#1565C0]">
                  {selectedService.badge || "Core Solution"}
                </span>
                <span className="text-xs text-slate-400 font-medium">Service Overview</span>
              </div>

              <h3 className="text-2xl font-bold text-[#0B2D4D]">
                {selectedService.title}
              </h3>

              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                {selectedService.fullDesc}
              </p>

              {/* Service Highlights */}
              <div className="mt-6 border-t border-slate-100 pt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B2D4D] mb-4">
                  Key Service Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#1565C0] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Transit Insurance &amp; Live Tracking Included</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="md"
                    onClick={handleCloseModal}
                    className="w-full sm:w-auto"
                  >
                    Close
                  </Button>
                  <Button
                    variant="accent"
                    size="md"
                    onClick={() => handleBookSelected(selectedService.title)}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    Request Tariff Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
