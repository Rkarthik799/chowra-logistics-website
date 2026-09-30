"use client";

import React, { useState } from "react";
import { POPULAR_CITIES, calculateEstimatedRate } from "@/data/rateData";
import { RateCalculationInput, RateEstimate, ServiceType, PackageType } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import {
  Calculator,
  ArrowRightLeft,
  Scale,
  Calendar,
  Layers,
  Sparkles,
  Info,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { ChowraEmblem } from "@/components/ui/Logo";

interface RateCalculatorProps {
  onBookWithEstimate?: (estimateDetails: {
    origin: string;
    destination: string;
    serviceType: string;
    cost: number;
    weight: number;
  }) => void;
}

export function RateCalculator({ onBookWithEstimate }: RateCalculatorProps) {
  const [origin, setOrigin] = useState("Hyderabad");
  const [destination, setDestination] = useState("Mumbai");
  const [weight, setWeight] = useState<string>("2");
  const [serviceType, setServiceType] = useState<ServiceType>("Standard");
  const [packageType, setPackageType] = useState<PackageType>("Parcel");

  const [estimate, setEstimate] = useState<RateEstimate | null>(() =>
    calculateEstimatedRate({
      origin: "Hyderabad",
      destination: "Mumbai",
      weight: 2,
      serviceType: "Standard",
      packageType: "Parcel",
    })
  );
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleSwapCities = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    if (!origin || !destination || !weight.trim()) {
      setValidationError("Please complete all required fields.");
      return;
    }

    const parsedWeight = parseFloat(weight);
    if (isNaN(parsedWeight) || parsedWeight <= 0) {
      setValidationError("Please complete all required fields.");
      return;
    }

    setValidationError(null);
    setIsCalculating(true);

    // Simulate instant smooth calculation
    setTimeout(() => {
      const result = calculateEstimatedRate({
        origin,
        destination,
        weight: parsedWeight,
        serviceType,
        packageType,
      });

      setEstimate(result);
      setIsCalculating(false);
    }, 200);
  };

  return (
    <section id="calculator" className="py-20 bg-[#F5F8FC] scroll-mt-20">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <SectionHeading
          badge="Instant Transparent Quotation"
          title="Rate Calculator &amp; Transit Estimator"
          subtitle="Estimate your consignment tariff and anticipated transit timeline in seconds using our multi-modal logistics calculation formula."
        />

        <div className="max-w-5xl 2xl:max-w-6xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/80 border border-slate-200/90 overflow-hidden">
          {/* Header Bar */}
          <div className="bg-[#0B2D4D] text-white p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#083091] p-1.5 text-white border border-white/15 shadow-sm">
                <ChowraEmblem theme="dark" size={36} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Consignment Tariff Estimator</h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Calculate domestic &amp; cross-border freight quotes
                </p>
              </div>
            </div>

            <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-orange-300 border border-white/15 font-semibold">
              Live Tariff Simulator
            </span>
          </div>

          <form onSubmit={handleCalculate} className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
              {/* From */}
              <div className="md:col-span-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  From <span className="text-slate-400 font-normal normal-case">(e.g. Hyderabad)</span> <span className="text-red-500">*</span>
                </label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm text-[#172033] font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#1565C0]"
                >
                  {POPULAR_CITIES.map((city) => (
                    <option key={`orig-${city}`} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Swap Button */}
              <div className="md:col-span-2 flex justify-center pb-1">
                <button
                  type="button"
                  onClick={handleSwapCities}
                  className="p-2.5 rounded-full bg-slate-100 hover:bg-blue-50 text-[#1565C0] hover:text-[#0B2D4D] border border-slate-200 transition-colors cursor-pointer"
                  title="Swap Origin &amp; Destination"
                  aria-label="Swap Origin and Destination"
                >
                  <ArrowRightLeft className="w-4 h-4" />
                </button>
              </div>

              {/* To */}
              <div className="md:col-span-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  To <span className="text-slate-400 font-normal normal-case">(e.g. Mumbai)</span> <span className="text-red-500">*</span>
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm text-[#172033] font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#1565C0]"
                >
                  {POPULAR_CITIES.map((city) => (
                    <option key={`dest-${city}`} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Second Row: Weight, Service Type, Package Type */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Package Weight */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Package Weight <span className="text-slate-400 font-normal normal-case">(e.g. 2 KG)</span> <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    min="0.1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 2"
                    className="w-full h-11 rounded-lg border border-slate-200 bg-white pl-3.5 pr-12 text-sm text-[#172033] font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#1565C0]"
                    required
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                    KG
                  </div>
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Service Type
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value as ServiceType)}
                  className="w-full h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm text-[#172033] font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#1565C0]"
                >
                  <option value="Standard">Standard</option>
                  <option value="Express">Express</option>
                  <option value="International">International</option>
                </select>
              </div>

              {/* Package Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Package Type
                </label>
                <select
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value as PackageType)}
                  className="w-full h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm text-[#172033] font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#1565C0]"
                >
                  <option value="Document">Document</option>
                  <option value="Parcel">Parcel</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
            </div>

            {/* Validation Banner */}
            {validationError && (
              <div className="mt-5 rounded-lg bg-red-50 border border-red-200 p-3.5 flex items-center gap-2.5 text-xs text-red-700">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Calculate Button */}
            <div className="mt-8 flex justify-center">
              <Button
                type="submit"
                variant="accent"
                size="lg"
                isLoading={isCalculating}
                rightIcon={<Calculator className="w-5 h-5" />}
                className="w-full sm:w-auto sm:px-12 text-base font-bold shadow-md cursor-pointer"
              >
                Calculate Estimate
              </Button>
            </div>
          </form>

          {/* Estimate Result Display */}
          {estimate && (
            <div className="border-t border-slate-200 bg-gradient-to-b from-blue-50/40 to-slate-50 p-6 sm:p-8 animate-in fade-in duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-orange-100 text-[#FF7A00]">
                      Tariff Calculated
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Route: {origin} &rarr; {destination} ({weight} KG)
                    </span>
                  </div>

                  <div className="mt-2 flex items-baseline gap-3 flex-wrap">
                    <span className="text-sm font-semibold text-slate-600">
                      Estimated Cost:
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-[#0B2D4D]">
                      {formatCurrency(estimate.estimatedCost)}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded font-bold uppercase tracking-wider bg-blue-100 text-[#083091]">
                      Estimated Price
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-700">
                    <Calendar className="w-4 h-4 text-[#1565C0]" />
                    <span>
                      Estimated Delivery: <strong className="text-[#0B2D4D]">{estimate.estimatedDelivery}</strong>
                    </span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() =>
                    onBookWithEstimate?.({
                      origin,
                      destination,
                      serviceType,
                      cost: estimate.estimatedCost,
                      weight: parseFloat(weight),
                    })
                  }
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full md:w-auto shadow-md"
                >
                  Book with this Estimate
                </Button>
              </div>

              {/* Price Breakdown Accordion / Details */}
              <div className="mt-6 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                  <span className="text-slate-500 block">Base Freight Fare</span>
                  <span className="font-bold text-slate-800 text-sm mt-0.5 block">
                    {formatCurrency(estimate.baseFare)}
                  </span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                  <span className="text-slate-500 block">Weight Surcharge</span>
                  <span className="font-bold text-slate-800 text-sm mt-0.5 block">
                    {formatCurrency(estimate.weightCharge)}
                  </span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                  <span className="text-slate-500 block">Transit Insurance &amp; Handling</span>
                  <span className="font-bold text-slate-800 text-sm mt-0.5 block">
                    {formatCurrency(estimate.insuranceAndHandling)}
                  </span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                  <span className="text-slate-500 block">Applicable GST (18%)</span>
                  <span className="font-bold text-slate-800 text-sm mt-0.5 block">
                    {formatCurrency(estimate.gst)}
                  </span>
                </div>
              </div>

              {/* Conceptual Notice Requirement */}
              <div className="mt-5 flex items-start gap-2 text-[11px] text-slate-500 bg-white/60 p-3 rounded-lg border border-slate-200">
                <Info className="w-4 h-4 text-[#1565C0] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Sample Pricing Formula:</strong> This calculation uses a frontend demonstration algorithm
                  (Base rate + Weight charge + Service multiplier + Handling + GST). It does not represent an official Chowra contract tariff.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
