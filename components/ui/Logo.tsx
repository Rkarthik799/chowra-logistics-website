"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "mark" | "compact";
  theme?: "dark" | "light"; // dark = dark navy background (white/orange text), light = white background (navy text)
  className?: string;
  showConceptBadge?: boolean;
}

export function Logo({
  variant = "full",
  theme = "dark",
  className = "",
  showConceptBadge = false,
}: LogoProps) {
  const isDark = theme === "dark";

  return (
    <Link
      href="#home"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg p-1 ${className}`}
      aria-label="Chowra Logistics and Couriers Limited Home"
    >
      {/* Conceptual Vector Brand Mark */}
      <div className="relative flex-shrink-0">
        <svg
          width="42"
          height="42"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="chowraNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1565C0" />
              <stop offset="100%" stopColor="#0B2D4D" />
            </linearGradient>
            <linearGradient id="chowraOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF9E40" />
              <stop offset="100%" stopColor="#FF7A00" />
            </linearGradient>
            <linearGradient id="chowraRoadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glowOrange" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FF7A00" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Background Rounded Shield Container */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="22"
            fill={isDark ? "#0A2540" : "#0B2D4D"}
            stroke={isDark ? "rgba(255,255,255,0.15)" : "#1565C0"}
            strokeWidth="2.5"
          />

          {/* Dynamic "C" Outer Logistics Velocity Arc */}
          <path
            d="M 68 28 C 55 18, 32 20, 24 35 C 16 50, 18 70, 32 80 C 45 88, 62 84, 72 74"
            stroke="url(#chowraNavyGrad)"
            strokeWidth="11"
            strokeLinecap="round"
            fill="none"
          />

          {/* Inner Express Velocity Track / Road Path */}
          <path
            d="M 62 38 C 50 30, 36 34, 30 45 C 25 55, 27 68, 38 74 C 47 79, 58 75, 66 68"
            stroke="url(#chowraRoadGrad)"
            strokeWidth="4"
            strokeDasharray="6 4"
            fill="none"
          />

          {/* Forward-Movement Express Arrow / Jet-Route Chevron (Speed & Delivery) */}
          <path
            d="M 38 50 L 74 50 M 60 36 L 76 50 L 60 64"
            stroke="url(#chowraOrangeGrad)"
            strokeWidth="7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glowOrange)"
          />

          {/* Speed Indicator Dots */}
          <circle cx="82" cy="50" r="3" fill="#FF7A00" />
        </svg>
      </div>

      {/* Brand Typography Lockup */}
      {variant !== "mark" && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black text-xl tracking-tight leading-none ${
                isDark ? "text-white" : "text-[#0B2D4D]"
              }`}
            >
              CHOWRA
            </span>
            <span className="h-2 w-2 rounded-full bg-[#FF7A00]" />
            {showConceptBadge && (
              <span className="hidden sm:inline-block text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
                Concept
              </span>
            )}
          </div>
          {variant === "full" && (
            <span
              className={`text-[9.5px] font-bold uppercase tracking-[0.22em] leading-tight mt-1 ${
                isDark ? "text-slate-300" : "text-[#1565C0]"
              }`}
            >
              Logistics & Couriers Ltd
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
