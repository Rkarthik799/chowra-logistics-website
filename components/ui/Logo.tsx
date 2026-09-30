"use client";

import React from "react";
import Link from "next/link";

export interface LogoProps {
  variant?: "full" | "compact" | "mark" | "app-icon";
  theme?: "dark" | "light" | "mono";
  className?: string;
  showConceptBadge?: boolean;
  tagline?: boolean;
  href?: string;
}

/**
 * Chowra Logistics & Couriers Limited - Official Vector Brand Emblem
 * Features:
 * - Sweeping orange roadway with dashed lane markings (#FF7A00)
 * - Upper velocity arc transitioning into an ascending aircraft (#083091 / #1E6BD6)
 * - Speeding linehaul truck with horizontal acceleration speed lines
 * - Signature "CHOWRA™" typography with custom upward orange triangle in letter "A"
 * - Supporting tagline: "— Connecting People. Delivering Possibilities. —"
 */
export function ChowraEmblem({
  theme = "dark",
  size = 46,
  className = "",
}: {
  theme?: "dark" | "light" | "mono";
  size?: number;
  className?: string;
}) {
  const isDark = theme === "dark";
  const isMono = theme === "mono";

  // Color tokens
  const blueColor = isMono ? "#4B5563" : isDark ? "#38BDF8" : "#083091";
  const roadColor = isMono ? "#374151" : "#FF7A00";
  const truckColor = isMono ? "#1F2937" : isDark ? "#FFFFFF" : "#083091";
  const speedLineColor = isMono ? "#9CA3AF" : isDark ? "#E2E8F0" : "#1E6BD6";
  const roadStripeColor = isMono ? "#E5E7EB" : "#FFFFFF";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 110 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`blueArcGrad-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isMono ? "#6B7280" : isDark ? "#60A5FA" : "#1E6BD6"} />
          <stop offset="100%" stopColor={isMono ? "#374151" : isDark ? "#0284C7" : "#083091"} />
        </linearGradient>
        <linearGradient id={`roadGrad-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isMono ? "#4B5563" : "#FF9A3D"} />
          <stop offset="100%" stopColor={isMono ? "#1F2937" : "#FF7A00"} />
        </linearGradient>
      </defs>

      {/* 1. Upper Blue Arc sweeping into top right */}
      <path
        d="M 23 44 C 21 24, 38 10, 62 10 C 74 10, 85 15, 92 23 C 94 25, 93 28, 90 28 C 76 28, 62 23, 48 27 C 34 31, 26 40, 23 44 Z"
        fill={`url(#blueArcGrad-${theme})`}
      />

      {/* 2. Ascending Airplane at top-right */}
      <g transform="translate(68, 8) rotate(-10)">
        {/* Fuselage & Wings */}
        <path
          d="M 12 14 L 20 7 C 22 5, 25 5, 26 7 L 27 10 L 37 13 C 38 13.5, 38 15, 36.5 15.5 L 26.5 15.5 L 21 24 C 20.5 24.5, 19.5 24.5, 19.5 23.5 L 20.5 16.5 L 13.5 17 L 11 20 C 10.5 20.5, 9.8 20.3, 9.8 19.7 L 10.5 16.5 L 8.5 15.5 C 7.5 15, 7.5 14, 8.5 13.5 L 12 14 Z"
          fill={blueColor}
        />
      </g>

      {/* 3. Sweeping Highway / Road at bottom */}
      <path
        d="M 16 48 C 12 66, 26 88, 54 90 C 70 91, 84 84, 94 72 C 90 73, 80 77, 68 76 C 45 74, 31 62, 28 47 Z"
        fill={`url(#roadGrad-${theme})`}
      />

      {/* White Broken Lane Markings (Highway divider dashes) */}
      <path
        d="M 22 56 C 21 68, 32 82, 54 84 C 64 85, 76 81, 86 75"
        stroke={roadStripeColor}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeDasharray="6 6"
        fill="none"
      />

      {/* 4. Speed Lines behind the logistics truck */}
      <line x1="20" y1="41" x2="38" y2="41" stroke={speedLineColor} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="16" y1="46" x2="36" y2="46" stroke={speedLineColor} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="21" y1="51" x2="39" y2="51" stroke={speedLineColor} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="26" y1="56" x2="41" y2="56" stroke={speedLineColor} strokeWidth="2.2" strokeLinecap="round" />

      {/* 5. Speeding Delivery Truck (Container Box + Cabin + Wheels) */}
      <g transform="translate(37, 36)">
        {/* Cargo Container Box */}
        <rect
          x="4"
          y="0"
          width="26"
          height="16"
          rx="1.5"
          fill={truckColor}
        />
        {/* Container corrugated panel lines */}
        <line x1="10" y1="2" x2="10" y2="14" stroke={isDark ? "#0B2D4D" : "#FFFFFF"} strokeWidth="1" opacity="0.4" />
        <line x1="16" y1="2" x2="16" y2="14" stroke={isDark ? "#0B2D4D" : "#FFFFFF"} strokeWidth="1" opacity="0.4" />
        <line x1="22" y1="2" x2="22" y2="14" stroke={isDark ? "#0B2D4D" : "#FFFFFF"} strokeWidth="1" opacity="0.4" />

        {/* Truck Cabin */}
        <path
          d="M 30 5 L 37 5 C 38.5 5, 40 6.5, 41 8.5 L 43 12.5 C 43.5 13.5, 43.5 16, 42.5 16 L 30 16 Z"
          fill={truckColor}
        />

        {/* Windshield Window */}
        <path
          d="M 33 7 L 37 7 C 37.8 7, 38.8 7.8, 39.4 9 L 40.5 11.5 L 33 11.5 Z"
          fill={isDark ? "#0B2D4D" : "#60A5FA"}
        />

        {/* Front Bumper / Headlight */}
        <rect x="42" y="13.5" width="2" height="2" rx="0.5" fill="#FF7A00" />

        {/* Front & Rear Wheels */}
        <circle cx="11" cy="16.5" r="3.8" fill={isDark ? "#071E34" : "#172033"} stroke={truckColor} strokeWidth="1.2" />
        <circle cx="11" cy="16.5" r="1.5" fill="#FFFFFF" />

        <circle cx="36" cy="16.5" r="3.8" fill={isDark ? "#071E34" : "#172033"} stroke={truckColor} strokeWidth="1.2" />
        <circle cx="36" cy="16.5" r="1.5" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

export function Logo({
  variant = "full",
  theme = "dark",
  className = "",
  showConceptBadge = false,
  tagline = true,
  href = "#home",
}: LogoProps) {
  const isDark = theme === "dark";
  const isMono = theme === "mono";

  // Wordmark colors
  const primaryTextColor = isMono ? "text-slate-800" : isDark ? "text-white" : "text-[#083091]";
  const subTextColor = isMono ? "text-slate-600" : isDark ? "text-slate-200" : "text-[#172033]";
  const taglineTextColor = isMono ? "text-slate-500" : isDark ? "text-slate-300" : "text-[#64748B]";
  const ruleColor = isMono ? "bg-slate-400" : "bg-[#FF7A00]";
  const aTriangleColor = isMono ? "#4B5563" : "#FF7A00";

  // App Icon variant (standalone squircle card from the brand guide)
  if (variant === "app-icon") {
    return (
      <Link
        href={href}
        className={`group inline-flex items-center justify-center p-2 rounded-2xl bg-white shadow-md border border-slate-200/80 hover:shadow-lg transition-all ${className}`}
        aria-label="Chowra Logistics and Couriers App Icon"
      >
        <ChowraEmblem theme="light" size={44} className="group-hover:scale-105 transition-transform" />
      </Link>
    );
  }

  // Standalone Mark
  if (variant === "mark") {
    return (
      <Link
        href={href}
        className={`group inline-flex items-center justify-center transition-opacity hover:opacity-95 ${className}`}
        aria-label="Chowra Logistics and Couriers Brand Mark"
      >
        <ChowraEmblem theme={theme} size={42} className="group-hover:scale-105 transition-transform" />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00] rounded-xl p-1 ${className}`}
      aria-label="Chowra Logistics and Couriers Limited Home"
    >
      {/* Brand Emblem */}
      <div className="relative flex-shrink-0">
        <ChowraEmblem
          theme={theme}
          size={variant === "full" ? 48 : 40}
          className="transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Brand Wordmark & Typography */}
      <div className="flex flex-col justify-center">
        {/* Main Brand Title: CHOWR[A] with Orange Triangle in A */}
        <div className="flex items-center gap-1.5 leading-none">
          <div className="flex items-center font-black tracking-tight select-none">
            <span className={`text-xl sm:text-2xl font-black ${primaryTextColor}`}>
              CHOWR
            </span>

            {/* Letter 'A' with custom upward orange triangle counter */}
            <div className="relative inline-flex items-center justify-center">
              <span className={`text-xl sm:text-2xl font-black ${primaryTextColor}`}>
                A
              </span>
              {/* Geometric Orange Accent Triangle inside the 'A' */}
              <svg
                viewBox="0 0 16 16"
                className="absolute inset-0 w-full h-full pointer-events-none"
                fill="none"
              >
                <polygon
                  points="8,5.2 4.4,12.2 11.6,12.2"
                  fill={aTriangleColor}
                />
              </svg>
            </div>

            <span className="text-[10px] font-bold text-slate-400 align-super ml-0.5 -mt-2">
              TM
            </span>
          </div>

          {showConceptBadge && (
            <span className="hidden sm:inline-block text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-orange-500/20 text-[#FF7A00] border border-orange-500/30">
              Official
            </span>
          )}
        </div>

        {/* Subtitle: LOGISTICS AND COURIERS LIMITED */}
        <div
          className={`text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-[0.16em] sm:tracking-[0.18em] leading-tight mt-1 ${subTextColor}`}
        >
          Logistics and Couriers Limited
        </div>

        {/* Brand Tagline: — Connecting People. Delivering Possibilities. — */}
        {variant === "full" && tagline && (
          <div className="hidden md:flex items-center gap-1.5 mt-1">
            <span className={`h-[1px] w-3 ${ruleColor}`} />
            <span className={`text-[8px] sm:text-[8.5px] font-medium tracking-tight ${taglineTextColor}`}>
              Connecting People. Delivering Possibilities.
            </span>
            <span className={`h-[1px] w-3 ${ruleColor}`} />
          </div>
        )}
      </div>
    </Link>
  );
}

