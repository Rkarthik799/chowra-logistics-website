import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chowra-logistics.vercel.app"),
  title: "Chowra Logistics & Couriers Limited | Reliable Logistics Solutions",
  description:
    "Reliable courier, express delivery, e-commerce logistics, freight and door-to-door delivery solutions designed to move your shipments with confidence.",
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
  publisher: "Chowra Logistics and Couriers Limited",
  openGraph: {
    title: "Chowra Logistics & Couriers Limited | Reliable Logistics Solutions",
    description:
      "Reliable courier, express delivery, e-commerce logistics, freight and door-to-door delivery solutions designed to move your shipments with confidence.",
    type: "website",
    locale: "en_IN",
    siteName: "Chowra Logistics & Couriers Limited",
    images: [
      {
        url: "/logo/chowra-logo.svg",
        width: 1200,
        height: 630,
        alt: "Chowra Logistics and Couriers Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chowra Logistics & Couriers Limited | Reliable Logistics Solutions",
    description:
      "Reliable courier, express delivery, e-commerce logistics, freight and door-to-door delivery solutions designed to move your shipments with confidence.",
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
