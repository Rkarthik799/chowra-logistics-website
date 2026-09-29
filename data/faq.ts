import { FAQItem } from "@/types";

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I track my shipment with Chowra Logistics?",
    answer: "You can track your package 24/7 by entering your unique tracking number (e.g., CHW10001) in the 'Track Your Shipment' search bar on our homepage. You will instantly view the current status, past sorting milestones, route progress, and estimated delivery schedule.",
    category: "Tracking",
  },
  {
    id: "faq-2",
    question: "What is the difference between Express Delivery and Standard Courier?",
    answer: "Standard Courier is cost-optimized for non-urgent parcels using scheduled interstate linehaul transit (typically 2-4 business days). Express Delivery prioritizes your consignment with next-flight-out air connectivity or dedicated express road corridors for same-day or next-day delivery.",
    category: "Delivery & Pickup",
  },
  {
    id: "faq-3",
    question: "How does the Rate Calculator work?",
    answer: "Our online calculator provides an instant estimated quotation based on origin, destination, parcel weight, package category, and service speed. Note that final charges may vary slightly based on volumetric dimensional weight and applicable service taxes.",
    category: "Shipping Rates",
  },
  {
    id: "faq-4",
    question: "Can I request a scheduled doorstep pickup?",
    answer: "Yes, our Door-to-Door Delivery service includes doorstep pickup from your residential or office location. Simply book your consignment online or contact customer support to designate your preferred pickup window.",
    category: "Delivery & Pickup",
  },
  {
    id: "faq-5",
    question: "What enterprise logistics solutions do you offer for businesses?",
    answer: "For corporate clients, we provide customized service-level agreements (SLAs), bulk dispatch discounts, dedicated account managers, consolidated monthly billing, API integration for automated airway bill generation, and reverse logistics.",
    category: "Enterprise Solutions",
  },
  {
    id: "faq-6",
    question: "What should I do if my tracking number shows 'Not Found'?",
    answer: "Please verify that the tracking code was entered correctly without special characters or spaces. For newly booked consignments, electronic tracking information typically reflects within 30-60 minutes after initial pickup scan. For demo purposes, you can try CHW10001, CHW10002, or CHW10003.",
    category: "Tracking",
  },
];
