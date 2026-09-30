"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getShipmentByTrackingId,
  SAMPLE_TRACKING_IDS,
} from "@/data/trackingData";
import { ChowraEmblem } from "@/components/ui/Logo";
import { ShipmentTracking, TrackingCheckpoint } from "@/types";
import {
  Search,
  Package,
  MapPin,
  Calendar,
  Truck,
  CheckCircle2,
  Clock,
  AlertCircle,
  RotateCcw,
  ExternalLink,
  Shield,
  User,
  ArrowRight,
} from "lucide-react";

interface TrackingSectionProps {
  initialTrackingId?: string;
  onClearInitialId?: () => void;
}

export function TrackingSection({
  initialTrackingId,
  onClearInitialId,
}: TrackingSectionProps) {
  const [trackingInput, setTrackingInput] = useState("");
  const [activeShipment, setActiveShipment] = useState<ShipmentTracking | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Automatically track if an initial ID is passed down (e.g. from hero quick-track chips)
  useEffect(() => {
    if (initialTrackingId) {
      setTrackingInput(initialTrackingId);
      performTracking(initialTrackingId);
      onClearInitialId?.();
    }
  }, [initialTrackingId]);

  const performTracking = (idToSearch: string) => {
    const trimmed = idToSearch.trim();

    if (!trimmed) {
      setErrorMessage("Please enter a tracking number.");
      setActiveShipment(null);
      setHasSearched(true);
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);
    setHasSearched(true);

    // Simulate realistic 300ms network lookup for professional feedback
    setTimeout(() => {
      const result = getShipmentByTrackingId(trimmed);
      if (result) {
        setActiveShipment(result);
        setErrorMessage(null);
      } else {
        setActiveShipment(null);
        setErrorMessage("Tracking number not found. Please check the number and try again.");
      }
      setIsLoading(false);
    }, 280);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performTracking(trackingInput);
  };

  const handleDemoSelect = (demoId: string) => {
    setTrackingInput(demoId);
    performTracking(demoId);
  };

  const handleReset = () => {
    setTrackingInput("");
    setActiveShipment(null);
    setErrorMessage(null);
    setHasSearched(false);
  };

  // Helper for status badge colors
  const getStatusBadge = (status: ShipmentTracking["status"]) => {
    switch (status) {
      case "Delivered":
        return "bg-emerald-100 text-emerald-800 border-emerald-300";
      case "In Transit":
        return "bg-orange-100 text-orange-800 border-orange-300";
      case "Out for Delivery":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Picked Up":
        return "bg-amber-100 text-amber-800 border-amber-300";
      default:
        return "bg-slate-100 text-slate-800 border-slate-300";
    }
  };

  return (
    <section id="tracking" className="py-20 bg-[#F5F8FC] scroll-mt-20">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <SectionHeading
          badge="Live Consignment Telemetry"
          title="Track Your Shipment"
          subtitle="Enter your consignment or Air Waybill (AWB) number to view real-time location milestones, transit updates, and expected delivery time."
        />

        {/* Tracking Input Card */}
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200 p-6 sm:p-8 lg:p-10">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Input
                  id="tracking-input"
                  type="text"
                  placeholder="Enter Tracking Number (e.g. CHW10001, CHW10002, CHW10003)"
                  value={trackingInput}
                  onChange={(e) => {
                    setTrackingInput(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  leftIcon={<Search className="w-5 h-5 text-slate-400" />}
                  className="h-12 text-base font-mono uppercase tracking-wider"
                  error={errorMessage || undefined}
                  autoComplete="off"
                />
              </div>

              <Button
                type="submit"
                variant="accent"
                size="lg"
                isLoading={isLoading}
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="h-12 sm:w-44 text-base font-semibold"
              >
                Track Shipment
              </Button>
            </div>

            {/* Quick Demo Number Selector Chips */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-slate-500">Try Demo Tracking Numbers:</span>
                {SAMPLE_TRACKING_IDS.map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => handleDemoSelect(id)}
                    className={`px-2.5 py-1 rounded-md font-mono text-xs font-semibold transition-all cursor-pointer ${
                      trackingInput.toUpperCase() === id
                        ? "bg-[#0B2D4D] text-white shadow-sm"
                        : "bg-slate-100 text-[#1565C0] hover:bg-blue-50 border border-slate-200 hover:border-blue-300"
                    }`}
                  >
                    {id}
                  </button>
                ))}
              </div>

              {hasSearched && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors font-medium cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>
              )}
            </div>
          </form>

          {/* Validation Notice Banner for Error State */}
          {errorMessage && (
            <div className="mt-6 rounded-xl bg-red-50 border border-red-200 p-4 flex items-start gap-3 text-sm text-red-800 animate-in fade-in duration-200">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Verification Alert</p>
                <p className="mt-0.5 text-xs text-red-700">{errorMessage}</p>
                <p className="mt-1 text-xs text-red-600">
                  Tip: Use demo identifiers like <code className="font-bold underline">CHW10001</code>, <code className="font-bold underline">CHW10002</code>, or <code className="font-bold underline">CHW10003</code> to view complete tracking records.
                </p>
              </div>
            </div>
          )}

          {/* Shipment Result Details View */}
          {activeShipment && !isLoading && (
            <div className="mt-8 pt-8 border-t border-slate-200 animate-in fade-in duration-300">
              {/* Header: Tracking ID + Status Badge + Official Emblem */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80">
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex p-2 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <ChowraEmblem theme="light" size={38} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                        Official Consignment AWB
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 text-[#083091] font-semibold">
                        {activeShipment.serviceType}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#083091] font-mono tracking-tight mt-1">
                      {activeShipment.trackingId}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end">
                  <span className="text-xs text-slate-500 font-medium">Consignment Status</span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border mt-1 ${getStatusBadge(
                      activeShipment.status
                    )}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                    {activeShipment.status}
                  </span>
                </div>
              </div>

              {/* 4-Column Shipment Metadata Grid */}
              <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-3.5 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>Origin</span>
                  </div>
                  <div className="text-sm font-bold text-[#172033] truncate">
                    {activeShipment.origin}
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Destination</span>
                  </div>
                  <div className="text-sm font-bold text-[#172033] truncate">
                    {activeShipment.destination}
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-orange-600" />
                    <span>Expected Delivery</span>
                  </div>
                  <div className="text-sm font-bold text-orange-600 truncate">
                    {activeShipment.expectedDelivery}
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <Truck className="w-3.5 h-3.5 text-purple-600" />
                    <span>Current Hub</span>
                  </div>
                  <div className="text-sm font-bold text-[#0B2D4D] truncate">
                    {activeShipment.currentLocation}
                  </div>
                </div>
              </div>

              {/* Milestone Progress Bar / Horizontal Indicator */}
              <div className="mt-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B2D4D] mb-6 flex items-center justify-between">
                  <span>Shipment Milestone Timeline</span>
                  <span className="text-xs font-normal text-slate-500">
                    Last Scan: {activeShipment.lastUpdated}
                  </span>
                </h4>

                {/* Milestone Step Timeline */}
                <div className="relative">
                  <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-5 sm:gap-2">
                    {activeShipment.checkpoints.map((step, idx) => {
                      const isComplete = step.completed;
                      const isCurrent = step.current;

                      return (
                        <div key={step.id} className="relative flex sm:flex-col items-start sm:items-center text-left sm:text-center group">
                          {/* Desktop horizontal connector line */}
                          {idx < activeShipment.checkpoints.length - 1 && (
                            <div
                              className={`hidden sm:block absolute top-4 left-1/2 w-full h-1 -translate-y-1/2 z-0 transition-colors ${
                                activeShipment.checkpoints[idx + 1].completed
                                  ? "bg-emerald-500"
                                  : isComplete
                                  ? "bg-orange-400"
                                  : "bg-slate-200"
                              }`}
                            />
                          )}

                          {/* Mobile vertical connector line */}
                          {idx < activeShipment.checkpoints.length - 1 && (
                            <div
                              className={`sm:hidden absolute top-8 left-4 w-0.5 h-full -translate-x-1/2 z-0 ${
                                activeShipment.checkpoints[idx + 1].completed
                                  ? "bg-emerald-500"
                                  : isComplete
                                  ? "bg-orange-400"
                                  : "bg-slate-200"
                              }`}
                            />
                          )}

                          {/* Node Icon */}
                          <div
                            className={`relative z-10 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border-2 transition-all ${
                              isComplete
                                ? "bg-emerald-500 border-white text-white shadow-md shadow-emerald-500/20"
                                : isCurrent
                                ? "bg-[#FF7A00] border-white text-white shadow-md shadow-orange-500/30 ring-4 ring-orange-200"
                                : "bg-white border-slate-300 text-slate-400"
                            }`}
                          >
                            {isComplete ? (
                              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                            ) : isCurrent ? (
                              <Clock className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                            ) : (
                              <span className="text-xs font-bold">{idx + 1}</span>
                            )}
                          </div>

                          {/* Step Content */}
                          <div className="ml-4 sm:ml-0 sm:mt-3 flex-1">
                            <span
                              className={`block text-xs font-bold leading-tight ${
                                isComplete
                                  ? "text-emerald-700"
                                  : isCurrent
                                  ? "text-[#FF7A00]"
                                  : "text-slate-400"
                              }`}
                            >
                              {step.status}
                            </span>
                            <span className="block text-[11px] font-medium text-slate-700 mt-0.5 line-clamp-1">
                              {step.location}
                            </span>
                            <span className="block text-[10px] text-slate-400 mt-0.5">
                              {step.timestamp}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Additional Consignment Summary Box */}
                <div className="mt-8 rounded-xl bg-slate-50 border border-slate-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="text-slate-600">Sender: </span>
                      <strong className="text-slate-800">{activeShipment.senderName}</strong>
                    </div>
                    <div>
                      <span className="text-slate-600">Consignee: </span>
                      <strong className="text-slate-800">{activeShipment.recipientName}</strong>
                    </div>
                    <div className="hidden md:block">
                      <span className="text-slate-600">Weight: </span>
                      <strong className="text-slate-800">{activeShipment.packageWeight}</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#1565C0] font-semibold">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Digital POD &amp; Insurance Enabled</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
