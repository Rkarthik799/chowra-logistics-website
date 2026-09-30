import { FAQItem } from "@/types";

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I track my shipment with Chowra Logistics?",
    answer: "This assignment includes a tracking demo. Enter a sample AWB such as CHW10001 in the tracking section to view illustrative status, milestones, route progress, and estimated delivery details. These records do not represent real shipments.",
    category: "Tracking",
  },
  {
    id: "faq-2",
    question: "What is the difference between Express Delivery and Standard Courier?",
    answer: "In this conceptual service model, standard courier represents a cost-focused option and express delivery represents a priority option. The routes and delivery estimates are illustrative only.",
    category: "Delivery & Pickup",
  },
  {
    id: "faq-3",
    question: "How does the Rate Calculator work?",
    answer: "The sample pricing calculator uses origin, destination, parcel weight, package category, and service speed to produce an illustrative estimate. It does not represent official Chowra tariffs.",
    category: "Shipping Rates",
  },
  {
    id: "faq-4",
    question: "Can I request a scheduled doorstep pickup?",
    answer: "The conceptual door-to-door service profile demonstrates a sample pickup and delivery workflow; this website does not arrange actual shipments.",
    category: "Delivery & Pickup",
  },
  {
    id: "faq-5",
    question: "What enterprise logistics solutions do you offer for businesses?",
    answer: "The sample enterprise profile illustrates possible service-level agreements (SLAs), bulk dispatch, account management, billing, API integration, and reverse logistics concepts. These are not confirmed company offerings.",
    category: "Enterprise Solutions",
  },
  {
    id: "faq-6",
    question: "What should I do if my tracking number shows 'Not Found'?",
    answer: "Check that the sample code is entered correctly. This demo recognizes CHW10001, CHW10002, and CHW10003; it does not connect to a live shipment system.",
    category: "Tracking",
  },
];
