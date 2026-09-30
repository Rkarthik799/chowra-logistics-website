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
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-16 pb-12">
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

          {/* Col 2: Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#FF7A00] pl-2.5">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Services
                </a>
              </li>
              <li>
                <a href="#network" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Network
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#1565C0] pl-2.5">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Domestic Courier
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  International Courier
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Express Delivery
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  E-commerce Logistics
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Freight &amp; Cargo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#FF7A00] pl-2.5">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#tracking" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Track Shipment
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Help Center
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#1565C0] pl-2.5">
              Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>
                  Chowra Central Hub: Aero-Logistics Corridor, Shamshabad, Hyderabad 500108
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>1800-200-2469 / +91 40 2999 8800</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>support@chowralogistics.sample.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>24/7 Operations &amp; Support</span>
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

      {/* Official Brand Identity Showcase (Featuring the 4 Logo Types & Color Palette) */}
      <div className="border-t border-slate-800/80 bg-[#051728] py-8">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00]" />
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  Official Brand Assets &amp; Logo Types
                </h4>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Approved corporate lockups across dark navy, light backgrounds, dispatch monochrome, and app icon.
              </p>
            </div>

            {/* 4 Brand Logo Variants */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
              {/* Type 1: Dark Navy */}
              <div className="p-3 rounded-xl bg-[#083091] border border-blue-400/20 shadow-sm flex flex-col justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200 mb-2">Dark Navy Type</span>
                <Logo theme="dark" variant="compact" tagline={false} />
              </div>

              {/* Type 2: Light */}
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">Light Surface Type</span>
                <Logo theme="light" variant="compact" tagline={false} />
              </div>

              {/* Type 3: Monochrome */}
              <div className="p-3 rounded-xl bg-[#F1F5F9] border border-slate-300 shadow-sm flex flex-col justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-2">Monochrome Type</span>
                <Logo theme="mono" variant="compact" tagline={false} />
              </div>

              {/* Type 4: App Icon */}
              <div className="p-3 rounded-xl bg-[#0B253E] border border-white/10 shadow-sm flex flex-col items-center justify-between text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-2">App / Avatar Icon</span>
                <Logo variant="app-icon" />
              </div>
            </div>
          </div>

          {/* Brand Colors Bar */}
          <div className="mt-5 pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="font-semibold text-white">Brand Palette:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#083091] border border-white/20" />
              <span className="font-mono text-[11px] text-slate-300">#083091 (Primary)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FF7A00]" />
              <span className="font-mono text-[11px] text-slate-300">#FF7A00 (Accent)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#1E6BD6]" />
              <span className="font-mono text-[11px] text-slate-300">#1E6BD6 (Secondary)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#333333] border border-white/20" />
              <span className="font-mono text-[11px] text-slate-300">#333333 (Text)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer / Copyright Row */}
      <div className="bg-[#051626] border-t border-slate-800/80 py-5 text-xs text-slate-400">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
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
