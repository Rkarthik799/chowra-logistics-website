"use client";

import React from "react";
import { ServiceItem } from "@/types";
import {
  Truck,
  Globe,
  Zap,
  ShoppingBag,
  Boxes,
  Home,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: ServiceItem;
  onSelect?: (service: ServiceItem) => void;
  className?: string;
}

export function ServiceCard({ service, onSelect, className }: ServiceCardProps) {
  const getIcon = (name: string) => {
    const iconProps = { className: "w-6 h-6 transition-transform duration-300 group-hover:scale-110" };
    switch (name) {
      case "Truck":
        return <Truck {...iconProps} />;
      case "Globe":
        return <Globe {...iconProps} />;
      case "Zap":
        return <Zap {...iconProps} />;
      case "ShoppingBag":
        return <ShoppingBag {...iconProps} />;
      case "Boxes":
        return <Boxes {...iconProps} />;
      case "Home":
        return <Home {...iconProps} />;
      case "Briefcase":
        return <Briefcase {...iconProps} />;
      default:
        return <Truck {...iconProps} />;
    }
  };

  return (
    <div
      onClick={() => onSelect?.(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect?.(service);
        }
      }}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1565C0]/40 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00] cursor-pointer",
        className
      )}
    >
      {/* Top row: Icon + optional badge */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1565C0] transition-colors duration-300 group-hover:bg-[#0B2D4D] group-hover:text-white">
            {getIcon(service.iconName)}
          </div>
          {service.badge && (
            <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-semibold text-[#FF7A00] border border-orange-200/60">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-[#0B2D4D] transition-colors duration-200 group-hover:text-[#1565C0]">
          {service.title}
        </h3>

        <p className="mt-2 text-sm text-[#64748B] leading-relaxed line-clamp-2">
          {service.shortDesc}
        </p>

        {/* Feature bullets */}
        <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1565C0] flex-shrink-0" />
              <span className="truncate">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-[#1565C0] group-hover:text-[#FF7A00] transition-colors">
        <span>Explore Service</span>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 transition-all duration-300 group-hover:bg-[#FF7A00] group-hover:text-white group-hover:translate-x-1">
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Accent corner highlight on hover */}
      <div className="absolute top-0 right-0 h-10 w-10 overflow-hidden rounded-tr-2xl pointer-events-none">
        <div className="absolute transform rotate-45 bg-[#FF7A00] -top-8 -right-8 w-14 h-14 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </div>
  );
}
