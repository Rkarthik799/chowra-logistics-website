"use client";

import React, { useState } from "react";
import {
  NETWORK_HUBS,
  NETWORK_STATS,
  NETWORK_PILLARS,
} from "@/data/network";
import { NetworkHub } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MapPin,
  Building,
  Globe2,
  Navigation,
  CheckCircle,
  Truck,
  Activity,
  Layers,
  Info,
} from "lucide-react";

export function NetworkSection() {
  const [selectedHub, setSelectedHub] = useState<NetworkHub>(NETWORK_HUBS[0]);
  const [activeRegion, setActiveRegion] = useState<string>("All");

  const regions = ["All", "South", "North", "West", "East"];

  const filteredHubs =
    activeRegion === "All"
      ? NETWORK_HUBS
      : NETWORK_HUBS.filter((h) => h.region === activeRegion);

  return (
    <section id="network" className="py-20 bg-white scroll-mt-20">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <SectionHeading
          badge="Pan-India Logistics Infrastructure"
          title="Connecting Businesses and People Across Destinations"
          subtitle="Our strategically located regional sorting hubs, express airport cargo gateways, and last-mile dispatch centers form an integrated multi-modal supply network."
        />

        {/* 4 Pillars Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {NETWORK_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#1565C0]/40 transition-colors"
            >
              <h4 className="text-base font-bold text-[#0B2D4D] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00]" />
                {pillar.title}
              </h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Network Interactive Exploration Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Backlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column: Interactive Map Grid & Hub Selector */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Region Filter Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Select Regional Corridor:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {regions.map((region) => (
                    <button
                      key={region}
                      onClick={() => setActiveRegion(region)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        activeRegion === region
                          ? "bg-[#FF7A00] text-white shadow-sm"
                          : "bg-white/10 text-slate-300 hover:bg-white/20"
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>

              {/* Conceptual Interactive Route Map Canvas (Stylized Vector Network Map) */}
              <div className="relative h-72 sm:h-80 lg:h-96 xl:h-[420px] w-full rounded-2xl bg-[#071E34] border border-white/10 p-4 flex items-center justify-center overflow-hidden">
                {/* Visual Grid Lines */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(#1565C0 1px, transparent 1px), linear-gradient(90deg, #1565C0 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* SVG Route Interconnect Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {/* National Backbone Lines */}
                  {/* Delhi to Mumbai */}
                  <line x1="38%" y1="28%" x2="28%" y2="54%" stroke="#1565C0" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                  {/* Delhi to Hyderabad */}
                  <line x1="38%" y1="28%" x2="44%" y2="58%" stroke="#1565C0" strokeWidth="2.5" opacity="0.8" />
                  {/* Delhi to Kolkata */}
                  <line x1="38%" y1="28%" x2="74%" y2="46%" stroke="#1565C0" strokeWidth="2" opacity="0.6" />
                  {/* Mumbai to Hyderabad */}
                  <line x1="28%" y1="54%" x2="44%" y2="58%" stroke="#FF7A00" strokeWidth="3" opacity="0.85" />
                  {/* Mumbai to Bengaluru */}
                  <line x1="28%" y1="54%" x2="42%" y2="72%" stroke="#1565C0" strokeWidth="2" opacity="0.7" />
                  {/* Hyderabad to Bengaluru */}
                  <line x1="44%" y1="58%" x2="42%" y2="72%" stroke="#1565C0" strokeWidth="2.5" opacity="0.8" />
                  {/* Hyderabad to Chennai */}
                  <line x1="44%" y1="58%" x2="50%" y2="76%" stroke="#1565C0" strokeWidth="2" opacity="0.8" />
                  {/* Hyderabad to Kolkata */}
                  <line x1="44%" y1="58%" x2="74%" y2="46%" stroke="#1565C0" strokeWidth="2" opacity="0.7" />
                  {/* Bengaluru to Chennai */}
                  <line x1="42%" y1="72%" x2="50%" y2="76%" stroke="#FF7A00" strokeWidth="2" opacity="0.8" />
                  {/* Mumbai to Pune */}
                  <line x1="28%" y1="54%" x2="32%" y2="60%" stroke="#FF7A00" strokeWidth="2" opacity="0.9" />
                  {/* Mumbai to Ahmedabad */}
                  <line x1="28%" y1="54%" x2="25%" y2="44%" stroke="#1565C0" strokeWidth="2" opacity="0.8" />
                </svg>

                {/* Hub Map Nodes */}
                {filteredHubs.map((hub) => {
                  const isSelected = selectedHub.id === hub.id;
                  const isHQ = hub.role.includes("Headquarters");

                  return (
                    <button
                      key={hub.id}
                      onClick={() => setSelectedHub(hub)}
                      style={{
                        left: `${hub.coordinates.x}%`,
                        top: `${hub.coordinates.y}%`,
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none cursor-pointer"
                      title={`${hub.city} Hub`}
                    >
                      {/* Pulse Ring if selected or HQ */}
                      {(isSelected || isHQ) && (
                        <span
                          className={`absolute -inset-2 rounded-full animate-ping opacity-75 ${
                            isHQ ? "bg-orange-500" : "bg-blue-400"
                          }`}
                        />
                      )}

                      {/* Main Node Point */}
                      <div
                        className={`relative flex h-7 w-7 items-center justify-center rounded-full border-2 transition-transform duration-200 ${
                          isSelected
                            ? "bg-[#FF7A00] border-white scale-125 shadow-lg shadow-orange-500/50"
                            : isHQ
                            ? "bg-[#1565C0] border-orange-400"
                            : "bg-[#0B2D4D] border-blue-400 hover:bg-[#1565C0]"
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 text-white" />
                      </div>

                      {/* City Label Tag */}
                      <span
                        className={`absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-1.5 py-0.5 text-[10px] font-bold transition-all ${
                          isSelected
                            ? "bg-[#FF7A00] text-white shadow"
                            : "bg-slate-900/90 text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {hub.city}
                      </span>
                    </button>
                  );
                })}

                {/* Legend indicator */}
                <div className="absolute bottom-3 left-3 flex items-center gap-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] text-slate-400 border border-white/10">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-orange-400" />
                    <span>HQ / Mega Hub</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>Zonal Hub</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Hub Buttons Carousel/Grid */}
            <div className="mt-4 flex flex-wrap gap-2">
              {filteredHubs.map((hub) => (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedHub.id === hub.id
                      ? "bg-white text-[#0B2D4D] font-bold shadow"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {hub.city}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Selected Hub Details Dossier */}
          <div className="lg:col-span-5 bg-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-orange-400 font-bold">
                    Hub Dossier
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">
                    {selectedHub.city}
                  </h3>
                  <span className="text-xs text-slate-300">{selectedHub.state}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {selectedHub.role}
                </span>
              </div>

              {/* Data attributes */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 text-xs block">Operational Facility</span>
                  <p className="text-slate-200 font-medium mt-0.5">
                    {selectedHub.addressPlaceholder}
                  </p>
                </div>

                <div>
                  <span className="text-slate-400 text-xs block">Coverage Footprint</span>
                  <p className="text-slate-200 font-medium mt-0.5">
                    {selectedHub.coveragePoints}
                  </p>
                </div>

                <div>
                  <span className="text-slate-400 text-xs block">Daily Sorting Capacity</span>
                  <p className="text-orange-400 font-bold text-base mt-0.5">
                    {selectedHub.dailyShipmentCapacity}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white/5 p-2.5 rounded-lg">
                    <span className="text-slate-400">Sorting Type:</span>
                    <strong className="block text-white mt-0.5">Automated High-Speed</strong>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-lg">
                    <span className="text-slate-400">Airport Access:</span>
                    <strong className="block text-white mt-0.5">Air Cargo Gateway</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Conceptual Notice Banner inside dossier */}
            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-slate-400 flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Sample Network Data:</strong> Hub locations and capacity figures represent conceptual demonstration models for the recruitment evaluation.
              </span>
            </div>
          </div>
        </div>

        {/* 4 Large Network Metrics Row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {NETWORK_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0B2D4D]">
                {stat.value}
              </span>
              <h5 className="text-xs sm:text-sm font-bold text-[#172033] mt-1">
                {stat.label}
              </h5>
              <p className="text-[11px] text-slate-500 mt-0.5">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
