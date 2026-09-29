import React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  trend?: string;
  className?: string;
}

export function StatCard({
  value,
  label,
  description,
  icon,
  trend,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B2D4D]">
            {value}
          </span>
          <h4 className="mt-1 text-sm font-semibold text-[#172033]">{label}</h4>
          {description && (
            <p className="mt-1 text-xs text-[#64748B] leading-relaxed">{description}</p>
          )}
        </div>
        {icon && (
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1565C0]">
            {icon}
          </div>
        )}
      </div>

      {trend && (
        <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full w-fit">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {trend}
        </div>
      )}

      {/* Subtle indicator bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1565C0] to-[#FF7A00] opacity-80" />
    </div>
  );
}
