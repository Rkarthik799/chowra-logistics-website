import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Chowra Logistics | Conceptual Logistics Website Demo",
  description:
    "A technical-round assignment featuring conceptual Chowra branding, sample logistics content, demo tracking, and an illustrative pricing calculator.",
  keywords: [
    "Chowra Logistics",
    "Courier Services",
    "Express Delivery",
    "Domestic Courier India",
    "International Shipping",
    "E-commerce Logistics",
    "Freight and Cargo",
    "Door to Door Delivery",
    "Shipment Tracking",
    "Karthik Ramanadham",
  ],
  authors: [{ name: "Karthik Ramanadham" }],
  creator: "Karthik Ramanadham for SAC Info Tech Solutions",
  publisher: "Technical Assignment Demo",
  openGraph: {
    title: "Chowra Logistics | Conceptual Logistics Website Demo",
    description:
      "Technical-round assignment with conceptual branding, sample logistics content, demo tracking, and illustrative pricing.",
    type: "website",
    locale: "en_IN",
    siteName: "Chowra Logistics Conceptual Demo",
    images: [
      {
        url: "/logo/chowra-logo.svg",
        width: 1200,
        height: 630,
        alt: "Conceptual Chowra Logistics demonstration logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chowra Logistics | Conceptual Logistics Website Demo",
    description:
      "Technical-round assignment with conceptual branding, sample logistics content, demo tracking, and illustrative pricing.",
  },
  icons: {
    icon: "/logo/chowra-mark.svg",
    apple: "/logo/chowra-mark.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B2D4D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth h-full antialiased`}>
      <body className="min-h-full w-full flex flex-col font-sans bg-[#F5F8FC] text-[#172033] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
