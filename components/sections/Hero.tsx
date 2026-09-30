"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { HeroLogisticsGraphic } from "@/components/ui/HeroLogisticsGraphic";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Clock,
  MapPin,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface HeroProps {
  onOpenQuoteModal: () => void;
  onQuickTrack: (trackingNumber: string) => void;
}

export function Hero({ onOpenQuoteModal, onQuickTrack }: HeroProps) {
  const scrollToTracking = () => {
    const el = document.getElementById("tracking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const input = document.getElementById("tracking-input");
      if (input) {
        setTimeout(() => input.focus(), 400);
      }
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#0B2D4D] via-[#08233C] to-[#071E34] text-white pt-10 pb-20 lg:pt-16 lg:pb-28"
    >
      {/* Background Decorative Gradient Flares */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1565C0]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#FF7A00] animate-ping" />
              <span>Conceptual Logistics Network</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
              Moving What Matters,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#FF7A00] to-amber-300">
                Delivering What Counts.
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl xl:max-w-3xl font-normal leading-relaxed mx-auto lg:mx-0">
              Explore a conceptual courier and logistics experience with sample service details,
              demo tracking records, and illustrative pricing.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="accent"
                size="lg"
                onClick={onOpenQuoteModal}
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto shadow-xl shadow-orange-500/25 cursor-pointer text-base"
              >
                Get a Quote
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToTracking}
                leftIcon={<Search className="w-5 h-5 text-orange-400" />}
                className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40 cursor-pointer text-base"
              >
                Track Shipment
              </Button>
            </div>

            {/* Quick Demo Chips for Instant Testing */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Quick Demo AWB:</span>
              {["CHW10001", "CHW10002", "CHW10003"].map((id) => (
                <button
                  key={id}
                  onClick={() => onQuickTrack(id)}
                  className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-orange-500/30 text-orange-300 border border-white/10 hover:border-orange-400/50 transition-all font-mono font-medium cursor-pointer"
                  title={`Track ${id}`}
                >
                  {id}
                </button>
              ))}
            </div>

            {/* Mini Trust Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-slate-300 text-xs sm:text-sm">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Secure Shipment Handling</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Clock className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>Sample Pickup Flow</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Sample Network Model</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Interactive Graphic */}
          <div className="lg:col-span-5">
            <HeroLogisticsGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
