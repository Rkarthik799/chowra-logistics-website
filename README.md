# CHOWRA LOGISTICS AND COURIERS LIMITED
### Modern Homepage & Logistics Portal &bull; Technical Round Project

> **Evaluation Submission for:** SAC Info Tech Solutions  
> **Candidate:** Karthik Ramanadham  
> **Repository:** `chowra-logistics-website`  
> **Framework:** Next.js (App Router) &bull; TypeScript &bull; Tailwind CSS &bull; Lucide React

---

## 1. Project Overview

This project is a responsive conceptual logistics website for **CHOWRA LOGISTICS AND COURIERS LIMITED**, created as a technical-round assignment for **SAC Info Tech Solutions**. It demonstrates frontend architecture and interactive experiences including demo shipment tracking, illustrative rate calculations, and a sample quote flow. The visual identity and company content are conceptual and created for demonstration purposes.

The web application is engineered to provide a polished, enterprise-grade logistics experience rather than an academic prototype.

---

## 2. Technology Stack

| Layer | Technology | Selection Rationale |
|---|---|---|
| **Framework** | **Next.js 16 (App Router)** | Used for app routes, layouts, and static page generation. |
| **Language** | **TypeScript 5** | Used for application components, data, and type definitions. |
| **Styling** | **Tailwind CSS v4** | Utility classes style the interface and responsive layouts. |
| **Animations** | **CSS Keyframes & Transitions** | Used for route graphics and interface transitions. |
| **Iconography** | **Lucide React** | Provides the interface icons. |
| **Fonts** | **Inter (Google Fonts)** | Used as the interface typeface. |

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

The homepage presents these sections in sequence:

```
HEADER / STICKY NAVBAR
        ↓
HERO SECTION (Headline, Conceptual Logistics Graphic & Demo AWB Chips)
        ↓
SAMPLE METRICS (Illustrative figures for technical evaluation)
        ↓
TRACK YOUR SHIPMENT (Demo AWB Lookups & Sample Milestone Timeline)
        ↓
SAMPLE LOGISTICS SERVICES (7 Interactive Service Cards & Detail Modals)
        ↓
SERVICE FEATURES: HOW IT WORKS (4-Step Workflow)
        ↓
SAMPLE NETWORK MODEL (Interactive Map & Illustrative Hub Details)
        ↓
SAMPLE PRICING CALCULATOR (Illustrative Pricing & Transit Estimates)
        ↓
SAMPLE OPERATIONAL FEATURES (6 Conceptual Feature Cards)
        ↓
SAMPLE CUSTOMER PROFILES (6 Industry Sectors & Sample Badges)
        ↓
SAMPLE TESTIMONIALS (Fictional demonstration content)
        ↓
FREQUENTLY ASKED QUESTIONS (Expandable Accordion)
        ↓
CALL TO ACTION (Sample Quote Flow)
        ↓
PROFESSIONAL MULTI-COLUMN FOOTER
```

---

## 5. Functional Features & Interactive Demos

### A. Shipment Tracking Demo (`/data/trackingData.ts`)
- Tracking search input with inline validation.
- **Demo AWB Numbers to test:**
  - `CHW10001` &rarr; Sample status: **In Transit** (Hyderabad &rarr; Mumbai).
  - `CHW10002` &rarr; Sample status: **Delivered** (Bengaluru &rarr; Delhi NCR).
  - `CHW10003` &rarr; Sample status: **Out for Delivery** (Chennai &rarr; Kolkata).
- All tracking records are fictional demo data and do not represent real shipments.
- **Interactive Timeline:** Order Confirmed &rarr; Picked Up &rarr; In Transit &rarr; Out for Delivery &rarr; Delivered.
- **Input Validation:** Clear inline error when entering an empty or unregistered tracking code.

### B. Sample Pricing & Transit Calculator (`/data/rateData.ts`)
- Select origin city and destination city with one-click **Swap Cities** functionality.
- Package weight input in KG with validation.
- Select Transit Priority: *Standard Surface*, *Express Air*, or *International Priority*.
- Select Package Category: *Document*, *Parcel*, or *Commercial Cargo*.
- Instant calculation displaying:
  - Base Freight Fare
  - Weight Surcharge
  - Sample handling and insurance amount
  - GST component used by the illustrative formula
  - Total Estimated Cost & Delivery Timeline
- **Book with Estimate** action that pre-populates the inquiry form.

### C. 7 Sample Service Profiles (`/data/services.ts`)
1. **Domestic Courier** — Sample domestic courier profile.
2. **International Courier** — Illustrative cross-border customs and shipping concepts.
3. **Express Delivery** — Conceptual priority delivery profile.
4. **E-commerce Logistics** — Sample fulfillment, COD, and returns workflow.
5. **Freight & Cargo** — Illustrative Full Truckload (FTL) and Part Truckload (PTL) profile.
6. **Pickup & Door-to-Door Delivery** — Sample pickup and delivery flow.
7. **Corporate Logistics** — Conceptual business logistics profile.
- Selecting a card opens its detail modal.

### D. Interactive Sample Route & Hub Map (`/data/network.ts`)
- Stylized sample network map showing Hyderabad, Mumbai, Delhi, Bengaluru, Kolkata, Chennai, Ahmedabad, and Pune.
- Filter hubs by regional zone: *All*, *South*, *North*, *West*, *East*.
- Dynamic hub dossier displaying illustrative sample locations, coverage, and capacity figures.

### E. Quick Quote & Inquiries Modal
- Quote dialog with required-field validation.
- Displays a sample confirmation reference ID after submission; the demo does not send inquiries to a company.

---

## 6. Directory Structure

```
chowra-logistics-website/
├── app/
│   ├── globals.css           # Tailwind v4 theme, brand CSS variables, custom animations
│   ├── layout.tsx            # Root layout, Inter font, OpenGraph & SEO metadata
│   └── page.tsx              # Main homepage assembling the page sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Sticky responsive navigation, mobile drawer & utility bar
│   │   └── Footer.tsx        # Multi-column footer, demo disclosures & legal modal
│   ├── sections/
│   │   ├── Hero.tsx          # Hero headline, CTAs, quick tracking chips
│   │   ├── TrustStats.tsx    # 4 sample metrics
│   │   ├── TrackingSection.tsx # AWB tracking search & milestone timeline
│   │   ├── ServicesSection.tsx # 7 sample service profiles & detail modal
│   │   ├── HowItWorks.tsx    # Sample 4-step service flow
│   │   ├── NetworkSection.tsx# Interactive sample network map & hub dossier
│   │   ├── RateCalculator.tsx# Illustrative pricing & transit estimator
│   │   ├── WhyChooseUs.tsx   # 6 conceptual feature cards
│   │   ├── PartnersSection.tsx# 6 industry sectors & conceptual client badges
│   │   ├── Testimonials.tsx  # Fictional sample testimonials & ratings
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
│       └── HeroLogisticsGraphic.tsx # Conceptual vector cargo truck and sample route graphic
├── data/
│   ├── services.ts           # 7 sample service profiles
│   ├── trackingData.ts       # Demo tracking records (CHW10001-3)
│   ├── network.ts            # Sample hubs, capacities, and network concepts
│   ├── rateData.ts           # Illustrative rate formula and sample cities
│   ├── whyChooseUs.ts        # 6 conceptual feature profiles
│   ├── howItWorks.ts         # 4-step logistics workflow
│   ├── partners.ts           # Industry categories & sample client badges
│   ├── testimonials.ts       # Fictional sample testimonials and designations
│   └── faq.ts                # Logistics FAQs across 4 categories
├── lib/
│   └── utils.ts              # Class merging (cn) and Indian Rupee formatter
├── public/
│   └── logo/
│       ├── chowra-logo.svg   # Conceptual vector brand logo
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

The layout uses responsive breakpoints for common screen sizes:
- **Desktop:** Multi-column service grids, a two-column hero, horizontal milestone timeline, and network map.
- **Laptop / Small Desktop:** Adjusted grid columns and compact navigation.
- **Tablet:** Two-column cards and stacked calculator layout.
- **Mobile:** Collapsible navigation, vertical milestone timeline, and wrapping tracking chips.

---

## 8. Getting Started Locally

### Prerequisites
- **Node.js and npm:** Versions supported by the installed Next.js release.

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/Rkarthik799/chowra-logistics-website.git
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

## 9. Accessibility & SEO

- **Semantic HTML:** Native `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` elements are used.
- **Heading Hierarchy:** Single primary `<h1>` in the Hero section, structured `<h2>` tags for sections, and `<h3>`/`<h4>` for cards.
- **Keyboard Navigation:** Interactive elements include visible focus styles.
- **Form Usability:** Form inputs include labels and inline validation states.
- **SEO & Social Sharing:**
  - Descriptive title and meta description identify this as a conceptual logistics website demo.
  - OpenGraph / Twitter cards with vector brand marks.
  - Indian locale (`en_IN`) and viewport metadata.

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

## 11. Assignment Information

- Assignment: Technical Round Assignment – Chowra Logistics
- Organization: SAC Info Tech Solutions
- Candidate: Karthik Ramanadham
- Live Demo: [https://chowra-logistics-website.vercel.app/](https://chowra-logistics-website.vercel.app/)
- GitHub: [https://github.com/Rkarthik799/chowra-logistics-website](https://github.com/Rkarthik799/chowra-logistics-website)
