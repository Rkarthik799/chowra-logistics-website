import { NetworkHub } from "@/types";

export interface NetworkStat {
  label: string;
  value: string;
  subtext: string;
  tag: string;
}

export const NETWORK_STATS: NetworkStat[] = [
  {
    label: "Illustrative Hubs",
    value: "18+",
    subtext: "Sample network figure",
    tag: "Illustrative",
  },
  {
    label: "Illustrative Delivery Centers",
    value: "250+",
    subtext: "Sample network figure",
    tag: "Illustrative",
  },
  {
    label: "Illustrative PIN Codes",
    value: "19,000+",
    subtext: "Sample network figure",
    tag: "Illustrative",
  },
  {
    label: "Illustrative Gateways",
    value: "4",
    subtext: "Sample network figure",
    tag: "Illustrative",
  },
];

export const NETWORK_HUBS: NetworkHub[] = [
  {
    id: "hub-hyd",
    city: "Hyderabad",
    state: "Telangana",
    region: "South",
    role: "Sample Network Hub",
    addressPlaceholder: "Sample Facility: Shamshabad Aero-Logistics Park, Hyderabad",
    coveragePoints: "Telangana, Andhra Pradesh, Central India Corridor",
    dailyShipmentCapacity: "Illustrative capacity: 75,000+ parcels/day",
    coordinates: { x: 44, y: 58 },
  },
  {
    id: "hub-bom",
    city: "Mumbai",
    state: "Maharashtra",
    region: "West",
    role: "Sample Sorting Hub",
    addressPlaceholder: "Sample Facility: Bhiwandi Logistics Corridor, Mumbai MMR",
    coveragePoints: "Maharashtra, Goa, Gujarat Maritime Link",
    dailyShipmentCapacity: "Illustrative capacity: 110,000+ parcels/day",
    coordinates: { x: 28, y: 54 },
  },
  {
    id: "hub-del",
    city: "Delhi NCR",
    state: "Delhi",
    region: "North",
    role: "Sample Sorting Hub",
    addressPlaceholder: "Sample Facility: Samalkha Express Cargo Facility, Delhi",
    coveragePoints: "Delhi, Haryana, Punjab, UP, Rajasthan",
    dailyShipmentCapacity: "Illustrative capacity: 120,000+ parcels/day",
    coordinates: { x: 38, y: 28 },
  },
  {
    id: "hub-blr",
    city: "Bengaluru",
    state: "Karnataka",
    region: "South",
    role: "Sample Fulfillment Center",
    addressPlaceholder: "Sample Facility: Hoskote Industrial Logistics Park, Bengaluru",
    coveragePoints: "Karnataka, Kerala, Tamil Nadu Border",
    dailyShipmentCapacity: "Illustrative capacity: 90,000+ parcels/day",
    coordinates: { x: 42, y: 72 },
  },
  {
    id: "hub-ccu",
    city: "Kolkata",
    state: "West Bengal",
    region: "East",
    role: "Sample Sorting Hub",
    addressPlaceholder: "Sample Facility: Dankuni Freight Complex, Kolkata",
    coveragePoints: "West Bengal, Odisha, North-East Gateways",
    dailyShipmentCapacity: "Illustrative capacity: 60,000+ parcels/day",
    coordinates: { x: 74, y: 46 },
  },
  {
    id: "hub-maa",
    city: "Chennai",
    state: "Tamil Nadu",
    region: "South",
    role: "Sample Express Gateway",
    addressPlaceholder: "Sample Facility: Sriperumbudur Logistics Zone, Chennai",
    coveragePoints: "Tamil Nadu, Puducherry, Southern Coast",
    dailyShipmentCapacity: "Illustrative capacity: 70,000+ parcels/day",
    coordinates: { x: 50, y: 76 },
  },
  {
    id: "hub-amd",
    city: "Ahmedabad",
    state: "Gujarat",
    region: "West",
    role: "Sample Fulfillment Center",
    addressPlaceholder: "Sample Facility: Sanand Industrial Transport Hub, Ahmedabad",
    coveragePoints: "Gujarat, Saurashtra, Western Ports",
    dailyShipmentCapacity: "Illustrative capacity: 55,000+ parcels/day",
    coordinates: { x: 25, y: 44 },
  },
  {
    id: "hub-pnq",
    city: "Pune",
    state: "Maharashtra",
    region: "West",
    role: "Sample Express Gateway",
    addressPlaceholder: "Sample Facility: Chakan Industrial Logistics Hub, Pune",
    coveragePoints: "Western Auto & Engineering Belts",
    dailyShipmentCapacity: "Illustrative capacity: 48,000+ parcels/day",
    coordinates: { x: 32, y: 60 },
  },
];

export const NETWORK_PILLARS = [
  {
    title: "Sample Domestic Network",
    description: "Illustrative road and air routes linking cities and industrial centers in a conceptual network model.",
  },
  {
    title: "Sample International Reach",
    description: "Conceptual examples of international cargo routes and customs support.",
  },
  {
    title: "Sample Delivery Hubs",
    description: "Illustrative sorting hub locations shown along sample express corridors.",
  },
  {
    title: "Last-Mile Delivery Model",
    description: "A conceptual example of delivery routes and time-slot planning.",
  },
];
