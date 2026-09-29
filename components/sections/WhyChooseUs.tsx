"use client";

import React from "react";
import { WHY_CHOOSE_ITEMS } from "@/data/whyChooseUs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ShieldCheck,
  Activity,
  Network,
  Lock,
  Building2,
  Headphones,
  CheckCircle,
} from "lucide-react";

export function WhyChooseUs() {
  const getIcon = (name: string) => {
    const props = { className: "w-6 h-6 text-[#1565C0] group-hover:text-white transition-colors" };
    switch (name) {
      case "ShieldCheck":
        return <ShieldCheck {...props} />;
      case "Activity":
        return <Activity {...props} />;
      case "Network":
        return <Network {...props} />;
      case "Lock":
        return <Lock {...props} />;
      case "Building2":
        return <Building2 {...props} />;
      case "Headphones":
        return <Headphones {...props} />;
      default:
        return <CheckCircle {...props} />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-white scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Operational Advantages"
          title="Why Choose Chowra Logistics?"
          subtitle="Engineered from the ground up for dependable shipment transit, state-of-the-art telemetry, and scalable enterprise supply chain adaptability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#1565C0]/40 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 group-hover:bg-[#0B2D4D] transition-colors duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-[#FF7A00] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200/50">
                    {item.highlightText}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B2D4D] group-hover:text-[#1565C0] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#1565C0]">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Verified Operational Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
