"use client";

import React from "react";
import { PackageCheck, MapPin, CheckCircle, Headphones, Info } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";

export function TrustStats() {
  const stats = [
    {
      value: "10K+",
      label: "Shipments Delivered",
      description: "Illustrative figure for technical evaluation.",
      icon: <PackageCheck className="w-5 h-5" />,
      trend: "Sample Metric",
    },
    {
      value: "50+",
      label: "Cities Covered",
      description: "Illustrative figure for technical evaluation.",
      icon: <MapPin className="w-5 h-5" />,
      trend: "Sample Metric",
    },
    {
      value: "98%",
      label: "On-Time Delivery",
      description: "Illustrative figure for technical evaluation.",
      icon: <CheckCircle className="w-5 h-5" />,
      trend: "Sample Metric",
    },
    {
      value: "24/7",
      label: "Tracking Demo",
      description: "Illustrative support figure for technical evaluation.",
      icon: <Headphones className="w-5 h-5" />,
      trend: "Sample Metric",
    },
  ];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      {/* Container with shadow & subtle border */}
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200/80 p-5 sm:p-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              icon={stat.icon}
              trend={stat.trend}
            />
          ))}
        </div>

        {/* Conceptual Assignment Notice */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-[11px] text-slate-600">
          <div className="flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-[#1565C0]" />
            <span>
              <strong>Sample Metrics:</strong> Illustrative figures for technical evaluation.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
