"use client";

import React from "react";
import { PARTNER_CATEGORIES, SAMPLE_CLIENT_BADGES } from "@/data/partners";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ShoppingBag,
  Store,
  Factory,
  HeartPulse,
  Cpu,
  Sparkles,
  Shield,
  Info,
} from "lucide-react";

export function PartnersSection() {
  const getIcon = (name: string) => {
    const props = { className: "w-5 h-5 text-[#1565C0]" };
    switch (name) {
      case "ShoppingBag":
        return <ShoppingBag {...props} />;
      case "Store":
        return <Store {...props} />;
      case "Factory":
        return <Factory {...props} />;
      case "HeartPulse":
        return <HeartPulse {...props} />;
      case "Cpu":
        return <Cpu {...props} />;
      case "Sparkles":
        return <Sparkles {...props} />;
      default:
        return <Shield {...props} />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60 relative">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <SectionHeading
          badge="Enterprise &amp; Industry Categories"
          title="Trusted by Businesses"
          subtitle="Delivering purpose-built linehaul transit, automated fulfillment workflows, and dependable logistics support across key commercial sectors."
        />

        {/* 6 Industry Sector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {PARTNER_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all hover:border-[#1565C0]/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                    {getIcon(cat.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-[#1565C0] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {cat.metric}
                  </span>
                </div>

                <h4 className="text-base font-bold text-[#0B2D4D]">{cat.name}</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                Custom SLA &amp; Volume Tariffs Available
              </div>
            </div>
          ))}
        </div>

        {/* Conceptual Enterprise Badges Marquee / Strip */}
        <div className="mt-12 rounded-2xl bg-white border border-slate-200 p-6">
          <div className="text-center mb-5">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Sample Conceptual Enterprise Clients (Demonstration Portfolio)
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {SAMPLE_CLIENT_BADGES.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#0B2D4D] hover:bg-blue-50 transition-colors"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#1565C0]" />
                <span>{badge}</span>
              </div>
            ))}
          </div>

          {/* Explicit Conceptual Assignment Rule */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
            <Info className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span>
              <strong>Recruitment Requirement:</strong> All company client marks and categories are illustrative sample placeholders created for the technical assignment.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
