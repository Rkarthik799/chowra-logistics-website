import { RateCalculationInput, RateEstimate } from "@/types";

export const POPULAR_CITIES = [
  "Hyderabad",
  "Mumbai",
  "Delhi NCR",
  "Bengaluru",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Kochi",
  "Chandigarh",
  "Visakhapatnam",
  "Dubai (UAE - International)",
  "London (UK - International)",
  "Singapore (International)",
  "New York (USA - International)",
];

export function calculateEstimatedRate(input: RateCalculationInput): RateEstimate {
  const { origin, destination, weight, serviceType, packageType } = input;
  const isInternational =
    serviceType === "International" ||
    origin.includes("International") ||
    destination.includes("International");

  // Determine base fare and weight multiplier
  let baseFare = 150;
  let weightRatePerKg = 60;
  let serviceMultiplier = 1.0;
  let estimatedDays = "2–4 Business Days";
  let distanceTier = "Domestic Standard Zone";

  if (isInternational) {
    baseFare = 1200;
    weightRatePerKg = 450;
    serviceMultiplier = 1.6;
    estimatedDays = "4–7 Business Days";
    distanceTier = "Cross-Border Air Transit";
  } else if (serviceType === "Express") {
    baseFare = 280;
    weightRatePerKg = 95;
    serviceMultiplier = 1.35;
    estimatedDays = "Next Day / 24–36 Hours";
    distanceTier = "Priority Air/Express Corridor";
  } else {
    // Standard
    if (origin === destination) {
      baseFare = 90;
      weightRatePerKg = 40;
      estimatedDays = "Same Day / Next Day";
      distanceTier = "Intra-City Zone";
    } else {
      baseFare = 160;
      weightRatePerKg = 65;
      estimatedDays = "2–4 Business Days";
      distanceTier = "Inter-City Surface Corridor";
    }
  }

  // Adjust for package type
  let typeAdjustment = 1.0;
  if (packageType === "Document") {
    typeAdjustment = 0.85;
  } else if (packageType === "Commercial") {
    typeAdjustment = 1.15;
  }

  const normalizedWeight = Math.max(0.5, weight);
  const weightCharge = Math.round(normalizedWeight * weightRatePerKg);
  const rawSubtotal = (baseFare + weightCharge) * serviceMultiplier * typeAdjustment;

  const insuranceAndHandling = Math.round(rawSubtotal * 0.05);
  const gst = Math.round((rawSubtotal + insuranceAndHandling) * 0.18);
  const estimatedCost = Math.round(rawSubtotal + insuranceAndHandling + gst);

  return {
    estimatedCost,
    estimatedDelivery: estimatedDays,
    baseFare,
    weightCharge,
    serviceMultiplier,
    insuranceAndHandling,
    gst,
    distanceTier,
  };
}
