import { ProcessStep } from "@/types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Book Shipment",
    subtitle: "Instant Digital Booking",
    description: "Calculate your estimated rate, select your transit priority, and schedule your consignment online in under two minutes.",
    iconName: "FileText",
  },
  {
    stepNumber: "02",
    title: "Doorstep Pickup",
    subtitle: "Prompt Collection",
    description: "Our logistics associate arrives at your designated premise, scans your barcode, and verifies package safety.",
    iconName: "PackageCheck",
  },
  {
    stepNumber: "03",
    title: "Live Tracking",
    subtitle: "Full Route Visibility",
    description: "Monitor real-time interstate linehaul movements and receiving hub sorting scans via your unique tracking ID.",
    iconName: "Navigation",
  },
  {
    stepNumber: "04",
    title: "Secure Delivery",
    subtitle: "Proof of Handover",
    description: "Safe doorstep handover to consignee with instant digital OTP verification and automated delivery confirmation.",
    iconName: "CheckCircle2",
  },
];
