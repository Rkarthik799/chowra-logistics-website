"use client";

import React from "react";
import { PackageCheck, MapPin, CheckCircle, Headphones, Info } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";

export function TrustStats() {
  const stats = [
    {
      value: "10K+",
      label: "Shipments Delivered",
      description: "Successfully processed through our multi-modal dispatch network.",
      icon: <PackageCheck className="w-5 h-5" />,
      trend: "Consistent Monthly Growth",
    },
    {
      value: "50+",
      label: "Cities Covered",
      description: "Direct linehaul connectivity spanning key industrial & consumer hubs.",
      icon: <MapPin className="w-5 h-5" />,
      trend: "Tier 1 & Tier 2 Grid",
    },
    {
      value: "98%",
      label: "On-Time Delivery",
      description: "Consistently meeting scheduled delivery SLAs across domestic routes.",
      icon: <CheckCircle className="w-5 h-5" />,
      trend: "High Reliability SLA",
    },
    {
      value: "24/7",
      label: "Tracking Support",
      description: "Live GPS telemetry updates and dedicated shipment support specialists.",
      icon: <Headphones className="w-5 h-5" />,
      trend: "Real-Time Telemetry",
    },
  ];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <strong>Sample Marketing Figures:</strong> Provided for technical evaluation purposes.
            </span>
          </div>
          <span className="text-slate-600">Continuous Service Quality Monitoring</span>
        </div>
      </div>
    </section>
  );
}
