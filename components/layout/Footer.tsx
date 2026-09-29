"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  Shield,
  FileText,
  ExternalLink,
  ChevronRight,
  Info,
} from "lucide-react";

export function Footer() {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#071E34] text-slate-300 border-t border-slate-800 relative z-10" id="contact">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Information & Technical Assignment Disclaimer */}
          <div className="lg:col-span-2 space-y-4">
            <Logo theme="dark" variant="full" />

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              CHOWRA LOGISTICS AND COURIERS LIMITED delivers multi-modal supply chain, express parcel,
              and enterprise freight transport solutions engineered for speed, safety, and transparency.
            </p>

            {/* Technical Round Notice Box */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-1.5 text-orange-400 font-semibold">
                <Info className="w-3.5 h-3.5" />
                <span>Technical Assignment Disclaimer</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                This website and conceptual branding were developed specifically as a technical-round assignment
                for <strong>SAC Info Tech Solutions</strong> by <strong>Karthik Ramanadham</strong>. All addresses, phone numbers,
                rates, and client names are illustrative sample content.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-slate-400">Network Operational:</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                All 18 Hubs Active
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#FF7A00] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#tracking" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Track Consignment
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Logistics Services
                </a>
              </li>
              <li>
                <a href="#network" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Hub Coverage Network
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Rate Calculator
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Why Choose Chowra
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Core Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#1565C0] pl-2.5">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Domestic Express Courier
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  International Air Courier
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Time-Critical Express
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  E-Commerce Logistics &amp; COD
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Heavy Freight &amp; Cargo
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Door-to-Door Pickup
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Corporate Logistics SLAs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Sample Contact & Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#FF7A00] pl-2.5">
              Contact &amp; Support
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>
                  Chowra Central Hub (Sample): Aero-Logistics Corridor, Shamshabad, Hyderabad 500108
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>1800-200-2469 / +91 40 2999 8800 (Demo)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>support@chowralogistics.sample.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>24/7 Shipment Operations &amp; Support</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800">
              <a
                href="#tracking"
                className="inline-flex items-center justify-center w-full px-3 py-2 rounded-lg bg-[#1565C0] text-white text-xs font-semibold hover:bg-blue-600 transition-colors"
              >
                Track Live Package
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer / Copyright Row */}
      <div className="bg-[#051626] border-t border-slate-800/80 py-5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>
              &copy; 2026 <strong>Chowra Logistics and Couriers Limited</strong>. All rights reserved.
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-400">
              Developed by <strong>Karthik Ramanadham</strong>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal("privacy")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModal("terms")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-orange-400 hover:text-orange-300 font-semibold cursor-pointer"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-150">
          <div className="bg-white text-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-slate-200">
            <h3 className="text-lg font-bold text-[#0B2D4D] mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#1565C0]" />
              {legalModal === "privacy" ? "Privacy Policy (Demonstration Notice)" : "Terms & Conditions (Demonstration Notice)"}
            </h3>
            <div className="text-sm text-slate-600 space-y-2.5 max-h-72 overflow-y-auto pr-2 leading-relaxed">
              <p>
                <strong>Demonstration &amp; Assignment Purpose:</strong> This website is built exclusively as an evaluated
                technical assignment for <em>SAC Info Tech Solutions</em> to demonstrate advanced frontend engineering,
                responsive UI architecture, and modern Next.js implementations.
              </p>
              <p>
                <strong>Data Handling:</strong> All tracking queries, rate calculations, and quote submissions entered into
                this homepage are processed entirely in the browser memory for demo simulation. No private data is persisted
                or transmitted to third-party endpoints.
              </p>
              <p>
                <strong>Brand Notice:</strong> The name <em>Chowra Logistics and Couriers Limited</em>, the visual identity,
                and simulated metrics are conceptual assets prepared for the technical round test.
              </p>
            </div>
            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-lg bg-[#0B2D4D] text-white text-sm font-semibold hover:bg-[#134575] transition-colors"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
