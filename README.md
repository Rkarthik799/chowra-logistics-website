# CHOWRA LOGISTICS AND COURIERS LIMITED
### Modern Homepage & Logistics Portal &bull; Technical Round Project

> **Evaluation Submission for:** SAC Info Tech Solutions  
> **Candidate:** Karthik Ramanadham  
> **Repository:** `chowra-logistics-website`  
> **Framework:** Next.js (App Router) &bull; TypeScript &bull; Tailwind CSS &bull; Framer Motion &bull; Lucide React  

---

## 1. Project Overview

This project is a responsive conceptual logistics website for **CHOWRA LOGISTICS AND COURIERS LIMITED**, created as a technical-round assignment for **SAC Info Tech Solutions**. It demonstrates frontend architecture and interactive experiences including demo shipment tracking, illustrative rate calculations, and a sample quote flow. The visual identity and company content are conceptual and created for demonstration purposes.

The web application is engineered to feel like an authentic, high-traffic enterprise logistics carrier website (comparable to Blue Dart, FedEx, or DHL) rather than an academic prototype.

---

## 2. Technology Stack

| Layer | Technology | Selection Rationale |
|---|---|---|
| **Framework** | **Next.js 16 (App Router)** | Modern server-ready architecture, automated asset bundling, optimized routing, and SEO indexability. |
| **Language** | **TypeScript 5** | Strict interface definitions, typed component props, zero `any` shortcuts, and compile-time correctness. |
| **Styling** | **Tailwind CSS v4** | Rapid utility styling, custom HSL/HEX brand color tokens, modern grid/flex layouts, and fluid responsive breakpoints. |
| **Animations** | **Framer Motion & CSS Keyframes** | Micro-interactions, telemetry route animations, smooth elevation hovers, and accessible reduced-motion support. |
| **Iconography** | **Lucide React** | Consistent, crisp, scalable vector iconography matching corporate logistics standards (no random emojis). |
| **Fonts** | **Inter (Google Fonts)** | Clean geometric typography with high legibility across mobile, tablet, and high-DPI desktop displays. |

---

## 3. Brand Identity & Visual Design System

### Conceptual Branding Note
> **Assignment Notice:** The company logo, graphic elements, and brand color tokens are original conceptual design assets created specifically for this technical assignment because no official brand kit was provided. All addresses, phone numbers, rates, statistics, shipment records, testimonials, network figures, and customer references are illustrative sample content.

### Color Palette
- **Corporate Primary (Deep Navy):** `#0B2D4D` — Communicates authority, dependability, and corporate stability.
- **Logistics Secondary (Ocean Blue):** `#1565C0` — Represents multi-modal connectivity and technology.
- **Action Accent (Safety Orange):** `#FF7A00` — High-visibility action color for conversion CTAs, active tracking beacons, and alerts.
- **Surface & Background:** `#F5F8FC` — Soft light-slate background preventing eye fatigue.
- **Dark Neutral:** `#172033` — High-contrast readable typography for accessibility.
- **Muted Neutral:** `#64748B` — Secondary descriptions and metadata.

### Conceptual Vector Logo
The logo features an aerodynamic glyph combining:
1. An outer **"C" velocity arc** in Deep Navy and Logistics Blue.
2. An inner highway/air route track with dashed lane indicators.
3. An intertwined **forward-movement express arrow** in Safety Orange representing rapid consignee delivery.

---

## 4. Website Architecture & Section Flow

The homepage implements the sequential workflow defined in Section 10 of the specification:

```
HEADER / STICKY NAVBAR
        ↓
HERO SECTION (Headline, Visual Telemetry & Quick Chips)
        ↓
SAMPLE METRICS (Illustrative figures for technical evaluation)
        ↓
TRACK YOUR SHIPMENT (Functional AWB Lookups & Milestone Timeline)
        ↓
OUR LOGISTICS SOLUTIONS (7 Interactive Service Cards & Detail Modals)
        ↓
SERVICE FEATURES: HOW IT WORKS (4-Step Workflow)
        ↓
NETWORK & SERVICE COVERAGE (Interactive India Hub Map & Zonal Dossiers)
        ↓
RATE CALCULATOR & TRANSIT ESTIMATOR (Dynamic Formula Engine)
        ↓
WHY CHOOSE CHOWRA (6 Core Operational Pillars)
        ↓
CUSTOMERS & PARTNERS (6 Industry Sectors & Sample Badges)
        ↓
SAMPLE TESTIMONIALS (Fictional demonstration content)
        ↓
FREQUENTLY ASKED QUESTIONS (Expandable Accordion)
        ↓
CALL TO ACTION (High-Impact Lead Capture)
        ↓
PROFESSIONAL MULTI-COLUMN FOOTER
```

---

## 5. Functional Features & Interactive Demos

### A. Shipment Tracking Demo (`/data/trackingData.ts`)
- Prominent search input with auto-formatting.
- **Demo AWB Numbers to test:**
  - `CHW10001` &rarr; Status: **In Transit** (Hyderabad &rarr; Mumbai, current: Pune Zonal Sorting Hub).
  - `CHW10002` &rarr; Sample status: **Delivered** (Bengaluru &rarr; Delhi NCR).
  - `CHW10003` &rarr; Sample status: **Out for Delivery** (Chennai &rarr; Kolkata).
- All tracking records are fictional demo data and do not represent real shipments.
- **Interactive Timeline:** Order Confirmed &rarr; Picked Up &rarr; In Transit &rarr; Out for Delivery &rarr; Delivered.
- **Input Validation:** Clear inline error when entering an empty or unregistered tracking code.

### B. Dynamic Tariff & Transit Calculator (`/data/rateData.ts`)
- Select origin city and destination city with one-click **Swap Cities** functionality.
- Package weight input in KG with validation.
- Select Transit Priority: *Standard Surface*, *Express Air*, or *International Priority*.
- Select Package Category: *Document*, *Parcel*, or *Commercial Cargo*.
- Instant calculation displaying:
  - Base Freight Fare
  - Weight Surcharge
  - Handling & Transit Insurance
  - Applicable GST (18%)
  - Total Estimated Cost & Delivery Timeline
- **Book with Estimate** action that pre-populates the inquiry form.

### C. 7 Core Logistics Solutions (`/data/services.ts`)
1. **Domestic Courier** — Pan-India surface and express network.
2. **International Courier** — Illustrative cross-border customs and shipping concepts.
3. **Express Delivery** — Time-critical same-day / next-flight dispatches.
4. **E-commerce Logistics** — Multi-channel fulfillment, COD reconciliation, and reverse pickup.
5. **Freight & Cargo** — Full Truckload (FTL) and Part Truckload (PTL) heavy haulage.
6. **Pickup & Door-to-Door Delivery** — Direct premise collection and doorstep delivery.
7. **Corporate Logistics** — Enterprise account managers, scheduled pouches, and consolidated billing.
- Clicking any card opens a detailed modal with comprehensive service capabilities.

### D. Interactive Route & Hub Map (`/data/network.ts`)
- Stylized vector network connecting Hyderabad HQ, Mumbai, Delhi, Bengaluru, Kolkata, Chennai, Ahmedabad, and Pune.
- Filter hubs by regional zone: *All*, *South*, *North*, *West*, *East*.
- Dynamic hub dossier displaying illustrative sample locations, coverage, and capacity figures.

### E. Quick Quote & Inquiries Modal
- Accessible modal dialog for quote submissions.
- Validates contact name, email pattern, phone format, and route details.
- Generates a confirmation reference ID (e.g. `QTE-2026-8819`).

---

## 6. Directory Structure

```
chowra-logistics-website/
├── app/
│   ├── globals.css           # Tailwind v4 theme, brand CSS variables, custom animations
│   ├── layout.tsx            # Root layout, Inter font, OpenGraph & SEO metadata
│   └── page.tsx              # Main homepage assembling all 14 sequential sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Sticky responsive navigation, mobile drawer & utility bar
│   │   └── Footer.tsx        # Multi-column footer, demo disclosures & legal modal
│   ├── sections/
│   │   ├── Hero.tsx          # Hero headline, CTAs, quick tracking chips
│   │   ├── TrustStats.tsx    # 4 quick trust statistics
│   │   ├── TrackingSection.tsx # AWB tracking search & milestone timeline
│   │   ├── ServicesSection.tsx # 7 logistics services & interactive detail modal
│   │   ├── HowItWorks.tsx    # 4-step logistics process
│   │   ├── NetworkSection.tsx# Interactive India network map & hub dossier
│   │   ├── RateCalculator.tsx# Dynamic freight rate & transit estimator
│   │   ├── WhyChooseUs.tsx   # 6 operational advantage cards
│   │   ├── PartnersSection.tsx# 6 industry sectors & conceptual client badges
│   │   ├── Testimonials.tsx  # Customer review quotes & ratings
│   │   ├── FAQSection.tsx    # Interactive accordion with search filter
│   │   ├── CTASection.tsx    # High-impact conversion section
│   │   └── QuoteModal.tsx    # Interactive quote request dialog with validation
│   └── ui/
│       ├── Button.tsx        # Accessible button component with multiple variants
│       ├── SectionHeading.tsx# Reusable section header with category badges
│       ├── ServiceCard.tsx   # Service card with hover elevation & icon highlights
│       ├── StatCard.tsx      # Metric card with icons and trend badges
│       ├── Input.tsx         # Accessible input component with error states
│       ├── Logo.tsx          # Conceptual vector logo and typography
│       └── HeroLogisticsGraphic.tsx # Custom vector cargo truck & live route telemetry
├── data/
│   ├── services.ts           # 7 logistics service definitions
│   ├── trackingData.ts       # Mock tracking shipments (CHW10001-3)
│   ├── network.ts            # Regional hubs, capacities & network pillars
│   ├── rateData.ts           # Rate calculation formulas and popular cities
│   ├── whyChooseUs.ts        # 6 operational feature pillars
│   ├── howItWorks.ts         # 4-step logistics workflow
│   ├── partners.ts           # Industry categories & sample client badges
│   ├── testimonials.ts       # Customer reviews and designations
│   └── faq.ts                # Logistics FAQs across 4 categories
├── lib/
│   └── utils.ts              # Class merging (cn) and Indian Rupee formatter
├── public/
│   └── logo/
│       ├── chowra-logo.svg   # Standalone vector brand logo
│       └── chowra-mark.svg   # Standalone vector icon mark
├── types/
│   └── index.ts              # Complete TypeScript interfaces and types
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 7. Responsive Design Breakpoints

The website layout includes responsive treatments for standard viewport widths:
- **Desktop Large (1440px / 1280px):** 4-column service grids, dual-column telemetry hero layout, horizontal milestone timeline, and interactive network map.
- **Laptop / Small Desktop (1024px):** Scaled typography, 3-column service grid, sticky header with compact navigation.
- **Tablet (768px / 834px):** 2-column service and feature cards, stacked rate calculator, and touch-optimized hit targets.
- **Mobile (375px / 390px / 414px):** Slide-out hamburger navigation menu, vertical milestone timeline, horizontal-scroll friendly chips, and full touch accessibility with zero horizontal page overflow.

---

## 8. Getting Started Locally

### Prerequisites
- **Node.js:** v18.18.0 or higher (v22 LTS recommended)
- **npm:** v9 or higher

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/karthik-ramanadham/chowra-logistics-website.git
cd chowra-logistics-website
npm install
```

### Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Production Build
To create an optimized production build and verify type compliance:
```bash
npm run build
npm start
```

---

## 9. Accessibility & SEO Compliance

- **Semantic HTML5:** Native `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` elements used throughout.
- **Heading Hierarchy:** Single primary `<h1>` in the Hero section, structured `<h2>` tags for sections, and `<h3>`/`<h4>` for cards.
- **Keyboard Navigation:** Full tab order navigation with visible focus rings (`focus-visible:ring-2 focus-visible:ring-[#FF7A00]`).
- **Form Usability:** Explicit label association, `aria-invalid`, `aria-describedby` error announcements, and clear inline validation.
- **SEO & Social Sharing:**
  - Descriptive Title: `Chowra Logistics & Couriers Limited | Reliable Logistics Solutions`
  - Meta Description: Captures core value propositions and target service lines.
  - OpenGraph / Twitter cards with vector brand marks.
  - Indian locale (`en_IN`) and viewport configuration for mobile indexing.

---

## 10. Suggested Git Commit History

The project development was structured along clean, modular milestones:

1. `feat: initial Next.js setup with TypeScript and Tailwind CSS`
2. `feat: implement design tokens, typography, and conceptual vector logo`
3. `feat: create responsive navbar and hero section with fleet telemetry`
4. `feat: add shipment tracking section with milestone timeline and demo lookups`
5. `feat: add logistics services section with interactive details modal`
6. `feat: implement 4-step how it works process section`
7. `feat: create interactive national network coverage map and hub dossiers`
8. `feat: implement functional consignment rate calculator and transit estimator`
9. `feat: add why choose chowra operational advantage cards`
10. `feat: add industry sectors, testimonials, and interactive FAQ accordion`
11. `feat: create high-impact CTA section and multi-column footer`
12. `feat: add interactive quote modal with validation and prefill capabilities`
13. `refactor: optimize responsive breakpoints (1440px to 375px) and eliminate layout shifts`
14. `docs: add comprehensive production README and technical assignment disclosures`

---

## 11. Submission Credentials

- **Assignment Title:** Technical Round Assignment &ndash; Chowra Logistics
- **Target Company:** SAC Info Tech Solutions
- **Candidate Name:** Karthik Ramanadham
- **Submission Email:** `hr@sacinfotech.sacb.co.in`
- **Subject:** `Technical Round Assignment – Chowra Logistics – Karthik Ramanadham`
