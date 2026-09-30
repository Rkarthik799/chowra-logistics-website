import { ProcessStep } from "@/types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Book Shipment",
    subtitle: "Sample Booking Flow",
    description: "Explore how a sample booking flow could combine an illustrative rate, service selection, and pickup scheduling.",
    iconName: "FileText",
  },
  {
    stepNumber: "02",
    title: "Pickup",
    subtitle: "Sample Pickup Step",
    description: "See a conceptual pickup step with barcode scanning and package handling.",
    iconName: "PackageCheck",
  },
  {
    stepNumber: "03",
    title: "Track",
    subtitle: "Tracking Demo",
    description: "View sample route milestones and hub scans with a demo tracking ID.",
    iconName: "Navigation",
  },
  {
    stepNumber: "04",
    title: "Delivered",
    subtitle: "Proof of Handover",
    description: "Explore a sample doorstep handover with illustrative delivery confirmation.",
    iconName: "CheckCircle2",
  },
];
