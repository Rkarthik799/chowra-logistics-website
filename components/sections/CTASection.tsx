"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Search, ShieldCheck, Zap, PhoneCall } from "lucide-react";

interface CTASectionProps {
  onOpenQuoteModal: () => void;
}

export function CTASection({ onOpenQuoteModal }: CTASectionProps) {
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
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0B2D4D] via-[#0D385F] to-[#0B2D4D] text-white py-16 lg:py-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF7A00]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1565C0]/25 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-orange-300 text-xs font-semibold border border-white/15">
            <Zap className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Technical Assignment Demo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Explore the Sample Shipment Flow
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Explore this conceptual logistics service experience for the technical assignment.
            Try the tracking demo and sample pricing calculator.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="accent"
              size="lg"
              onClick={onOpenQuoteModal}
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto shadow-xl shadow-orange-500/30 text-base font-bold cursor-pointer"
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

          {/* Bottom Security / Trust Badges */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Insurance Options</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-400" />
              <span>Sample AWB Flow</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-blue-400" />
              <span>Demo Contact Details</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
