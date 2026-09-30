"use client";

import React from "react";
import { PROCESS_STEPS } from "@/data/howItWorks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  FileText,
  PackageCheck,
  Navigation,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export function HowItWorks() {
  const getIcon = (name: string) => {
    switch (name) {
      case "FileText":
        return <FileText className="w-6 h-6 text-[#1565C0]" />;
      case "PackageCheck":
        return <PackageCheck className="w-6 h-6 text-[#1565C0]" />;
      case "Navigation":
        return <Navigation className="w-6 h-6 text-[#1565C0]" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#1565C0]" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/60 relative">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <SectionHeading
          badge="Seamless Delivery Workflow"
          title="How It Works"
          subtitle="A simplified 4-step logistics journey designed for transparency, speed, and absolute reliability from origin to destination."
        />

        {/* 4 Steps Container: Desktop Horizontal Grid, Mobile Vertical Stack */}
        <div className="relative mt-12">
          {/* Desktop Connecting Line behind cards */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-blue-200 via-orange-300 to-emerald-300 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Top Row: Number Badge + Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B2D4D] text-white font-mono text-sm font-black group-hover:bg-[#FF7A00] transition-colors">
                    {step.stepNumber}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    {getIcon(step.iconName)}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FF7A00]">
                    {step.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B2D4D] mt-1 group-hover:text-[#1565C0] transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>Step {idx + 1} of 4</span>
                  {idx < 3 ? (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-[#FF7A00] transition-all" />
                  ) : (
                    <span className="text-emerald-600 font-bold">Delivery Completed</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
