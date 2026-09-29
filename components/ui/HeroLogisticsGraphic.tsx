"use client";

import React from "react";
import { ShieldCheck, Zap, Navigation, Clock, CheckCircle } from "lucide-react";

export function HeroLogisticsGraphic() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background glow behind graphic */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-orange-500/20 to-blue-400/10 rounded-3xl blur-2xl transform -rotate-1 pointer-events-none" />

      {/* Main Glassmorphic Showcase Card */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#0B2D4D]/90 to-[#071E34]/95 border border-white/15 p-6 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Live Fleet Telemetry &bull; Active Route
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold border border-orange-500/30">
            <Zap className="w-3.5 h-3.5" />
            <span>EXPRESS LINEHAUL</span>
          </div>
        </div>

        {/* Central Vector Logistics Scene */}
        <div className="relative h-64 sm:h-72 w-full flex items-center justify-center overflow-hidden rounded-xl bg-[#051829]/70 border border-white/5 p-4">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `radial-gradient(#1565C0 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Dynamic SVG Animated Route Map & Modern Express Truck */}
          <svg
            viewBox="0 0 500 260"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1565C0" />
                <stop offset="50%" stopColor="#FF7A00" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
              <linearGradient id="truckBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E88E5" />
                <stop offset="100%" stopColor="#0B2D4D" />
              </linearGradient>
              <linearGradient id="cabGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>
              <filter id="glowRoute" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#FF7A00" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* Simulated Road Horizon & Elevation */}
            <path
              d="M 20 210 Q 180 200, 320 215 T 480 210"
              stroke="#1E3A5F"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M 20 210 Q 180 200, 320 215 T 480 210"
              stroke="#64748B"
              strokeWidth="1.5"
              strokeDasharray="12 12"
            />

            {/* Flight / Express Air Cargo Curve */}
            <path
              d="M 40 160 C 130 50, 300 40, 460 110"
              stroke="url(#routeGrad)"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              className="animate-route-dash"
              filter="url(#glowRoute)"
            />

            {/* Waypoint Nodes */}
            {/* Hub 1: Origin */}
            <circle cx="50" cy="160" r="7" fill="#1565C0" stroke="#FFFFFF" strokeWidth="2.5" />
            <text x="30" y="185" fill="#94A3B8" fontSize="11" fontWeight="700">HYD (Origin)</text>

            {/* Hub 2: Mid Zonal */}
            <circle cx="250" cy="55" r="8" fill="#FF7A00" stroke="#FFFFFF" strokeWidth="3" />
            <text x="225" y="40" fill="#FF9E40" fontSize="11" fontWeight="800">PUN (Hub)</text>

            {/* Hub 3: Destination */}
            <circle cx="450" cy="115" r="7" fill="#10B981" stroke="#FFFFFF" strokeWidth="2.5" />
            <text x="420" y="140" fill="#34D399" fontSize="11" fontWeight="700">BOM (Arrival)</text>

            {/* Modern Aerodynamic Express Cargo Truck */}
            <g transform="translate(145, 128)">
              {/* Truck Shadow */}
              <ellipse cx="105" cy="74" rx="95" ry="6" fill="#000000" opacity="0.45" />

              {/* Cargo Container Body */}
              <rect x="15" y="10" width="115" height="52" rx="6" fill="url(#truckBody)" stroke="#1565C0" strokeWidth="1.5" />
              
              {/* Container Ribs / Architectural Details */}
              <line x1="38" y1="12" x2="38" y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="62" y1="12" x2="62" y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="86" y1="12" x2="86" y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="110" y1="12" x2="110" y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

              {/* Chowra Accent Stripe on Trailer */}
              <rect x="15" y="38" width="115" height="7" fill="#FF7A00" />
              
              {/* Chowra Logistics Wordmark on Trailer */}
              <text x="24" y="30" fill="#FFFFFF" fontSize="11" fontWeight="900" letterSpacing="1">CHOWRA</text>
              <text x="74" y="30" fill="#90CAF9" fontSize="7" fontWeight="700" letterSpacing="0.8">EXPRESS</text>

              {/* Cab / Tractor Unit */}
              <path
                d="M 130 24 L 152 24 C 160 24, 168 32, 172 40 L 176 62 L 130 62 Z"
                fill="url(#cabGrad)"
              />
              
              {/* Windshield Glass */}
              <path
                d="M 148 28 L 163 28 C 166 28, 170 33, 172 38 L 174 46 L 148 46 Z"
                fill="#0B2D4D"
              />

              {/* Headlight with forward beam glow */}
              <circle cx="175" cy="54" r="3.5" fill="#FFE082" />
              <polygon points="178,52 230,46 230,62 178,56" fill="url(#routeGrad)" opacity="0.25" />

              {/* Wheels */}
              {/* Trailer Rear Wheels */}
              <circle cx="34" cy="65" r="9" fill="#172033" stroke="#94A3B8" strokeWidth="2.5" />
              <circle cx="34" cy="65" r="3.5" fill="#CBD5E1" />

              <circle cx="58" cy="65" r="9" fill="#172033" stroke="#94A3B8" strokeWidth="2.5" />
              <circle cx="58" cy="65" r="3.5" fill="#CBD5E1" />

              {/* Cab Front Wheels */}
              <circle cx="156" cy="65" r="9" fill="#172033" stroke="#94A3B8" strokeWidth="2.5" />
              <circle cx="156" cy="65" r="3.5" fill="#CBD5E1" />
            </g>
          </svg>

          {/* Floating Live Badge 1: Speed & GPS */}
          <div className="absolute top-4 left-4 flex items-center gap-2 rounded-lg bg-[#071E34]/85 border border-white/10 px-3 py-1.5 backdrop-blur-md shadow-lg">
            <Navigation className="w-3.5 h-3.5 text-blue-400" />
            <div className="text-[11px] text-white">
              <span className="text-slate-400">Current Speed: </span>
              <span className="font-bold text-orange-400">72 km/h</span>
            </div>
          </div>

          {/* Floating Live Badge 2: On-Time Status */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg bg-emerald-950/80 border border-emerald-500/40 px-3 py-1.5 backdrop-blur-md shadow-lg">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] font-bold text-emerald-300">Transit Status: On Schedule</span>
          </div>
        </div>

        {/* Bottom Details Grid */}
        <div className="mt-4 grid grid-cols-3 gap-3 text-center border-t border-white/10 pt-4">
          <div className="rounded-lg bg-white/5 p-2">
            <div className="text-[11px] text-slate-400">Shipment ID</div>
            <div className="text-xs font-bold text-white mt-0.5">CHW10001</div>
          </div>
          <div className="rounded-lg bg-white/5 p-2">
            <div className="text-[11px] text-slate-400">Destination</div>
            <div className="text-xs font-bold text-orange-400 mt-0.5">Mumbai Hub</div>
          </div>
          <div className="rounded-lg bg-white/5 p-2">
            <div className="text-[11px] text-slate-400">ETA Window</div>
            <div className="text-xs font-bold text-emerald-400 mt-0.5">Tomorrow, 10 AM</div>
          </div>
        </div>
      </div>
    </div>
  );
}
