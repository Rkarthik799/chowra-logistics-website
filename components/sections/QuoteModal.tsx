"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  X,
  Send,
  CheckCircle2,
  AlertCircle,
  FileText,
  ShieldCheck,
  Building,
  User,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import { ChowraEmblem } from "@/components/ui/Logo";

interface PrefillDetails {
  origin?: string;
  destination?: string;
  serviceType?: string;
  cost?: number;
  weight?: number;
}

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: PrefillDetails | null;
}

export function QuoteModal({ isOpen, onClose, prefillData }: QuoteModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [origin, setOrigin] = useState("Hyderabad");
  const [destination, setDestination] = useState("Mumbai");
  const [service, setService] = useState("Domestic Courier");
  const [weight, setWeight] = useState("2.5");
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReference, setQuoteReference] = useState("");

  useEffect(() => {
    if (prefillData) {
      if (prefillData.origin) setOrigin(prefillData.origin);
      if (prefillData.destination) setDestination(prefillData.destination);
      if (prefillData.serviceType) setService(prefillData.serviceType);
      if (prefillData.weight) setWeight(prefillData.weight.toString());
    }
  }, [prefillData]);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^\+?[0-9\s\-]{8,15}$/.test(phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit mobile or telephone number.";
    }

    if (!origin.trim()) {
      newErrors.origin = "Please enter origin location.";
    }

    if (!destination.trim()) {
      newErrors.destination = "Please enter destination location.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate instant backend quote processing
    setTimeout(() => {
      const generatedRef = `QTE-2026-${Math.floor(10000 + Math.random() * 90000)}`;
      setQuoteReference(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl sm:max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#0B2D4D] text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#083091] p-1.5 text-white border border-white/15 shadow-sm">
              <ChowraEmblem theme="dark" size={36} />
            </div>
            <div>
              <h3 className="text-xl font-bold">Request a Logistics Quote</h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Sample quote request for demonstration only
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-2xl font-black text-[#0B2D4D]">
                Quote Request Submitted!
              </h4>

              <div className="max-w-md mx-auto rounded-xl bg-slate-50 border border-slate-200 p-4 text-left text-xs sm:text-sm space-y-2">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Quote Reference ID:</span>
                  <span className="font-mono font-bold text-[#1565C0]">{quoteReference}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Name:</span>
                  <strong className="text-slate-800">{fullName}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Route:</span>
                  <strong className="text-slate-800">
                    {origin} &rarr; {destination}
                  </strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Service:</span>
                  <strong className="text-slate-800">{service}</strong>
                </div>
                {prefillData?.cost && (
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-[#FF7A00] font-bold">
                    <span>Estimated Baseline:</span>
                    <span>₹{prefillData.cost}</span>
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-500 max-w-md mx-auto">
                This demo submission is displayed locally and is not sent to a company. The email entered is shown here for demonstration: {" "}
                <strong>{email}</strong>.
              </p>

              <div className="pt-4 flex justify-center">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleResetAndClose}
                  className="px-8 cursor-pointer"
                >
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Contact Information Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  required
                  placeholder="e.g. Karthik Ramanadham"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  leftIcon={<User className="w-4 h-4 text-slate-400" />}
                  error={errors.fullName}
                />

                <Input
                  label="Business Email"
                  required
                  type="email"
                  placeholder="e.g. karthik@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  leftIcon={<Mail className="w-4 h-4 text-slate-400" />}
                  error={errors.email}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Phone / Mobile Number"
                  required
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  leftIcon={<Phone className="w-4 h-4 text-slate-400" />}
                  error={errors.phone}
                />

                <Input
                  label="Company Name (Optional)"
                  placeholder="e.g. TechCorp Solutions"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  leftIcon={<Building className="w-4 h-4 text-slate-400" />}
                />
              </div>

              {/* Transit Locations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <Input
                  label="Pickup Origin City / PIN"
                  required
                  placeholder="e.g. Hyderabad (500081)"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  leftIcon={<MapPin className="w-4 h-4 text-blue-500" />}
                  error={errors.origin}
                />

                <Input
                  label="Delivery Destination City / PIN"
                  required
                  placeholder="e.g. Mumbai (400001)"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  leftIcon={<MapPin className="w-4 h-4 text-orange-500" />}
                  error={errors.destination}
                />
              </div>

              {/* Service & Weight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#172033] mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#1565C0]"
                  >
                    <option value="Domestic Courier">Domestic Courier</option>
                    <option value="International Courier">International Courier</option>
                    <option value="Express Delivery">Express Delivery</option>
                    <option value="E-commerce Logistics">E-commerce Logistics</option>
                    <option value="Freight & Cargo">Freight &amp; Cargo</option>
                    <option value="Pickup & Door-to-Door Delivery">Pickup &amp; Door-to-Door Delivery</option>
                    <option value="Corporate Logistics">Corporate Logistics</option>
                  </select>
                </div>

                <Input
                  label="Estimated Weight (KG)"
                  type="number"
                  step="0.1"
                  placeholder="e.g. 5"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-xs font-semibold text-[#172033] mb-1.5">
                  Consignment Notes / Special Handling (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention any fragility, temperature sensitivity, or specific delivery window preferences..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white p-3 text-sm text-[#172033] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#1565C0]"
                />
              </div>

              {/* Submission Action */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Confidential Business Quotation</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={handleResetAndClose}
                    className="w-full sm:w-auto"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    variant="accent"
                    size="md"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    Submit Quote Request
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
