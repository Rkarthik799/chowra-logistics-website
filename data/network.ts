import { NetworkHub } from "@/types";

export interface NetworkStat {
  label: string;
  value: string;
  subtext: string;
  tag: string;
}

export const NETWORK_STATS: NetworkStat[] = [
  {
    label: "Strategic Zonal Hubs",
    value: "18+",
    subtext: "Fully automated regional sort facilities",
    tag: "National Backbone",
  },
  {
    label: "Delivery Centers",
    value: "250+",
    subtext: "Last-mile dispatch hubs nationwide",
    tag: "Deep Reach",
  },
  {
    label: "Pincodes Connected",
    value: "19,000+",
    subtext: "Across metro, tier 2 & rural zones",
    tag: "Pan-India",
  },
  {
    label: "International Gateways",
    value: "4",
    subtext: "Direct airport cargo customs access",
    tag: "Global Air",
  },
];

export const NETWORK_HUBS: NetworkHub[] = [
  {
    id: "hub-hyd",
    city: "Hyderabad",
    state: "Telangana",
    region: "South",
    role: "National Headquarters & Mega Hub",
    addressPlaceholder: "Sample Facility: Shamshabad Aero-Logistics Park, Hyderabad",
    coveragePoints: "Telangana, Andhra Pradesh, Central India Corridor",
    dailyShipmentCapacity: "75,000+ parcels/day",
    coordinates: { x: 44, y: 58 },
  },
  {
    id: "hub-bom",
    city: "Mumbai",
    state: "Maharashtra",
    region: "West",
    role: "Regional Sorting Hub",
    addressPlaceholder: "Sample Facility: Bhiwandi Logistics Corridor, Mumbai MMR",
    coveragePoints: "Maharashtra, Goa, Gujarat Maritime Link",
    dailyShipmentCapacity: "110,000+ parcels/day",
    coordinates: { x: 28, y: 54 },
  },
  {
    id: "hub-del",
    city: "Delhi NCR",
    state: "Delhi",
    region: "North",
    role: "Regional Sorting Hub",
    addressPlaceholder: "Sample Facility: Samalkha Express Cargo Facility, Delhi",
    coveragePoints: "Delhi, Haryana, Punjab, UP, Rajasthan",
    dailyShipmentCapacity: "120,000+ parcels/day",
    coordinates: { x: 38, y: 28 },
  },
  {
    id: "hub-blr",
    city: "Bengaluru",
    state: "Karnataka",
    region: "South",
    role: "Fulfillment Center",
    addressPlaceholder: "Sample Facility: Hoskote Industrial Logistics Park, Bengaluru",
    coveragePoints: "Karnataka, Kerala, Tamil Nadu Border",
    dailyShipmentCapacity: "90,000+ parcels/day",
    coordinates: { x: 42, y: 72 },
  },
  {
    id: "hub-ccu",
    city: "Kolkata",
    state: "West Bengal",
    region: "East",
    role: "Regional Sorting Hub",
    addressPlaceholder: "Sample Facility: Dankuni Freight Complex, Kolkata",
    coveragePoints: "West Bengal, Odisha, North-East Gateways",
    dailyShipmentCapacity: "60,000+ parcels/day",
    coordinates: { x: 74, y: 46 },
  },
  {
    id: "hub-maa",
    city: "Chennai",
    state: "Tamil Nadu",
    region: "South",
    role: "Express Gateway",
    addressPlaceholder: "Sample Facility: Sriperumbudur Logistics Zone, Chennai",
    coveragePoints: "Tamil Nadu, Puducherry, Southern Coast",
    dailyShipmentCapacity: "70,000+ parcels/day",
    coordinates: { x: 50, y: 76 },
  },
  {
    id: "hub-amd",
    city: "Ahmedabad",
    state: "Gujarat",
    region: "West",
    role: "Fulfillment Center",
    addressPlaceholder: "Sample Facility: Sanand Industrial Transport Hub, Ahmedabad",
    coveragePoints: "Gujarat, Saurashtra, Western Ports",
    dailyShipmentCapacity: "55,000+ parcels/day",
    coordinates: { x: 25, y: 44 },
  },
  {
    id: "hub-pnq",
    city: "Pune",
    state: "Maharashtra",
    region: "West",
    role: "Express Gateway",
    addressPlaceholder: "Sample Facility: Chakan Industrial Logistics Hub, Pune",
    coveragePoints: "Western Auto & Engineering Belts",
    dailyShipmentCapacity: "48,000+ parcels/day",
    coordinates: { x: 32, y: 60 },
  },
];

export const NETWORK_PILLARS = [
  {
    title: "Domestic Network",
    description: "Multi-modal road and air linehaul routes linking capital cities, tier-2 centers and industrial hubs on daily fixed departure timetables.",
  },
  {
    title: "International Reach",
    description: "Partnerships with premier international air cargo carriers and bonded customs brokerages across 180+ countries.",
  },
  {
    title: "Strategic Delivery Hubs",
    description: "State-of-the-art automated sorting hubs situated along national express corridors for minimal transshipment dwell time.",
  },
  {
    title: "Reliable Last-Mile Delivery",
    description: "GPS-tracked fleet of delivery vans and two-wheeler couriers with mobile app routing for time-slot delivery accuracy.",
  },
];
