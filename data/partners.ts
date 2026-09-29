import { PartnerCategory } from "@/types";

export const PARTNER_CATEGORIES: PartnerCategory[] = [
  {
    id: "cat-ecom",
    name: "E-Commerce & D2C",
    description: "Multi-channel fulfillment, automated returns, and cash-on-delivery management.",
    metric: "High-Volume Dispatch",
    iconName: "ShoppingBag",
  },
  {
    id: "cat-retail",
    name: "Retail & Apparel",
    description: "Store replenishment, seasonal stocking, and point-of-sale supply chain support.",
    metric: "Fast Turnaround",
    iconName: "Store",
  },
  {
    id: "cat-mfg",
    name: "Manufacturing & Heavy Goods",
    description: "Industrial components, palletized freight, and scheduled plant delivery schedules.",
    metric: "Heavy Cargo Capable",
    iconName: "Factory",
  },
  {
    id: "cat-health",
    name: "Healthcare & Pharma",
    description: "Time-critical delivery of diagnostic samples, medicines, and medical equipment.",
    metric: "Priority Handling",
    iconName: "HeartPulse",
  },
  {
    id: "cat-tech",
    name: "Technology & Electronics",
    description: "High-value asset transit, secure reverse pickups, and tamper-proof tracking.",
    metric: "High Security",
    iconName: "Cpu",
  },
  {
    id: "cat-sme",
    name: "Small Businesses & Startups",
    description: "Accessible courier solutions with transparent per-shipment pricing and no minimum commitments.",
    metric: "Flexible Tariffs",
    iconName: "Sparkles",
  },
];

export const SAMPLE_CLIENT_BADGES = [
  "OmniRetail Enterprise",
  "Apex Dynamics Corp",
  "Zenith BioHealth",
  "IndoTech Systems",
  "BlueRidge Furnishings",
  "Vanguard AutoParts",
];
