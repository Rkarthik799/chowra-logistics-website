"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import {
  Menu,
  X,
  PhoneCall,
  Search,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for nav highlighting
      const sections = ["home", "tracking", "services", "network", "calculator", "about", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Tracking", href: "#tracking", id: "tracking" },
    { label: "Network", href: "#network", id: "network" },
    { label: "About", href: "#about", id: "about" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Professional Utility Notice Bar */}
      <div className="bg-[#071E34] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-white/5 relative z-50">
        <div className="w-full max-w-[1720px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-medium">
              Conceptual Logistics Network
            </span>
            <span className="hidden md:inline-block text-slate-500">|</span>

          </div>
          <div className="flex items-center gap-5 text-slate-300">
            <span className="hidden sm:inline-flex items-center gap-1.5 hover:text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Sample Operational Features</span>
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-orange-400 font-medium transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-orange-400" />
              <span>Demo Contact Details</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
          ? "bg-[#0B2D4D]/95 backdrop-blur-md shadow-lg shadow-black/10 py-3"
          : "bg-[#0B2D4D] py-4"
          }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div className="flex items-center gap-2">
              <Logo theme="dark" variant="full" showConceptBadge={true} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${isActive
                      ? "text-orange-400 bg-white/10"
                      : "text-slate-200 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleNavClick("#tracking")}
                className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Quick Track"
                aria-label="Track Shipment shortcut"
              >
                <Search className="w-4 h-4" />
              </button>

              <Button
                variant="accent"
                size="md"
                onClick={onOpenQuoteModal}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shadow-orange-500/20"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#FF7A00] text-white hover:bg-[#E66D00] shadow-sm"
              >
                Get Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 w-full bg-[#0B2D4D]/98 backdrop-blur-xl border-b border-white/10 shadow-2xl px-5 py-6 transition-all animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all text-left ${isActive
                      ? "bg-[#1565C0] text-white"
                      : "text-slate-200 hover:bg-white/5 hover:text-white"
                      }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                );
              })}

              <div className="pt-4 border-t border-white/10 mt-3 space-y-3">
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Get a Quote
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                  <PhoneCall className="w-3.5 h-3.5 text-orange-400" />
                  <span>Sample Contact: +91 00000 00000</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
