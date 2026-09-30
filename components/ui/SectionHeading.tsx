import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-4xl xl:max-w-5xl mb-12 lg:mb-14",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5",
            isDark
              ? "bg-blue-900/40 text-blue-300 border border-blue-500/30"
              : "bg-blue-50 text-[#1565C0] border border-blue-100"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
          {badge}
        </div>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight",
          isDark ? "text-white" : "text-[#0B2D4D]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3.5 text-base sm:text-lg leading-relaxed",
            isDark ? "text-slate-300" : "text-[#64748B]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
