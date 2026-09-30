export type ServiceType = "Standard" | "Express" | "International";
export type PackageType = "Document" | "Parcel" | "Commercial";

export interface TrackingCheckpoint {
  id: string;
  status: "Order Confirmed" | "Picked Up" | "In Transit" | "Out for Delivery" | "Delivered";
  title: string;
  location: string;
  timestamp: string;
  completed: boolean;
  current?: boolean;
  detail?: string;
}

export interface ShipmentTracking {
  trackingId: string;
  status: "Order Confirmed" | "Picked Up" | "In Transit" | "Out for Delivery" | "Delivered";
  origin: string;
  destination: string;
  expectedDelivery: string;
  currentLocation: string;
  serviceType: string;
  packageWeight: string;
  recipientName: string;
  senderName: string;
  dispatchedDate: string;
  lastUpdated: string;
  checkpoints: TrackingCheckpoint[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  badge?: string;
}

export interface NetworkHub {
  id: string;
  city: string;
  state: string;
  region: "North" | "South" | "East" | "West" | "Central";
  role: string;
  addressPlaceholder: string;
  coveragePoints: string;
  dailyShipmentCapacity: string;
  coordinates: { x: number; y: number }; // percentage on visual map
}

export interface RateCalculationInput {
  origin: string;
  destination: string;
  weight: number;
  serviceType: ServiceType;
  packageType: PackageType;
}

export interface RateEstimate {
  estimatedCost: number;
  estimatedDelivery: string;
  baseFare: number;
  weightCharge: number;
  serviceMultiplier: number;
  insuranceAndHandling: number;
  gst: number;
  distanceTier: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlightText: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  designation: string;
  businessType: string;
  location: string;
  rating: number;
  shipmentType: string;
}

export interface PartnerCategory {
  id: string;
  name: string;
  description: string;
  metric: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Tracking" | "Shipping Rates" | "Delivery & Pickup" | "Enterprise Solutions";
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  originPincode: string;
  destinationPincode: string;
  serviceRequired: string;
  estimatedVolume: string;
  specialNotes?: string;
}
