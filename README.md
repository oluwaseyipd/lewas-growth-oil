# 👑 Lewa's Growth Oil

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![React Router](https://img.shields.io/badge/React_Router-v7.18-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com)

A high-converting, luxury web application and direct-to-consumer (D2C) storefront for **Lewa's Growth Oil**—an organic haircare brand formulated for scalp health, follicle nourishment, and active hair growth.

Built strictly according to official brand guidelines, the site combines editorial typography, custom SVG branding, and a streamlined WhatsApp conversational ordering architecture to minimize customer friction and boost sales conversions.

---

## ✨ Features

- **Direct WhatsApp Ordering:** One-tap order initiation and inquiry routing with pre-configured messages via `WAButton` and floating `WhatsAppFloat` triggers.
- **Interactive Ingredient Showcase:** Deep dive into cold-pressed botanical actives (Rosemary Leaf, Onion Oil, Avocado Oil, Clove Oil, Menthol, and Aloe Vera) highlighting key benefits.
- **Social Proof & Reviews:** Structured customer testimony showcase highlighting real transformation stories and ratings.
- **Categorized FAQ Accordion:** Segmented knowledge base addressing ordering, delivery, ingredients, and product usage instructions.
- **Editorial Brand Design:** High-fidelity UI incorporating custom SVG marks (`CrownLogo`, `HaloArc`), brand palettes, and smooth transition animations.
- **Route Scroll Restoration:** Built-in viewport scroll management ensuring smooth top-level navigation between routes.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | [React 19](https://react.dev/) | Component architecture & modern state management |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict static typing and code reliability |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | CSS-first utility framework & custom theme variables |
| **Bundler & Tooling** | [Vite 8](https://vite.dev/) | Lightning-fast HMR and production asset optimization |
| **Routing** | [React Router v7](https://reactrouter.com/) | Client-side routing and layout rendering |
| **Linting** | [ESLint](https://eslint.org/) | Code quality and React Hooks validation |

---

## 📂 Project Structure

```
lewas-growth-oil/
├── Docs/                     # Brand identity guidelines & content documentation
│   ├── Lewa's Growth Oil - Website Content Documentation.pdf
│   ├── Lewa_s Brand Guideline.pdf
│   └── Visual Identity Presentation_LEWA.pdf
├── public/                   # Static product images, ingredient assets & icons
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── CrownLogo.tsx     # Custom SVG brand crown & wordmark component
│   │   ├── Footer.tsx        # Global responsive footer with quick links
│   │   ├── HaloArc.tsx       # Brand accent SVG divider component
│   │   ├── Nav.tsx           # Navigation bar with responsive mobile menu
│   │   ├── WAButton.tsx      # Configurable WhatsApp call-to-action button
│   │   └── WhatsAppFloat.tsx # Floating quick-access WhatsApp chat trigger
│   ├── pages/                # Route view components
│   │   ├── About.tsx         # Brand story, mission, and founder vision
│   │   ├── Contact.tsx       # Direct contact channels & inquiry options
│   │   ├── FAQ.tsx           # Categorized FAQ accordion page
│   │   ├── Home.tsx          # Landing page with hero, features & reviews
│   │   └── TheOil.tsx        # Product benefits and ingredient breakdown
│   ├── App.tsx               # Root application router and layout shell
│   ├── index.css             # Tailwind v4 theme definitions and base styles
│   ├── main.tsx              # React DOM mounting entry point
│   └── REUSABLES.ts          # Centralized store for contacts, FAQs, and testimonials
├── index.html                # Application HTML template
├── package.json              # Project dependencies and script definitions
├── tsconfig.json             # TypeScript root compiler configuration
└── vite.config.ts            # Vite build configuration with Tailwind plugin
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/oluwaseyipd/lewas-growth-oil.git
   cd lewas-growth-oil
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   *The application will start at `http://localhost:5173`.*

---

## 📜 Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts Vite local development server with HMR |
| `npm run build` | Type-checks code with `tsc` and compiles production bundle into `dist/` |
| `npm run preview` | Locally previews the compiled production build |
| `npm run lint` | Runs ESLint across all TypeScript and React files |

---

## 🎨 Design System & Visual Tokens

The user interface follows the design specifications in `Docs/Lewa_s Brand Guideline.pdf`:

- **Primary Colors:**
  - `Obsidian` (`#110E0C`) — Deep luxury neutral background / text
  - `Royal Pink` (`#EF00C2`) — Vibrant brand primary & action accent
  - `Nectar` (`#EFD3C5`) — Soft warm pastel neutral & border tone
  - `White` (`#FFFFFF`) — Clean light background
- **Typography:**
  - **Display / Headings:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (Editorial Serif)
  - **Body / Interface:** [Manrope](https://fonts.google.com/specimen/Manrope) (Modern Geometric Sans-Serif)

---

## ⚙️ WhatsApp Flow Configuration

WhatsApp destination numbers, formatted contact strings, and pre-filled message payloads are centrally managed in [`src/REUSABLES.ts`](file:///d:/OVERSIGHT/lewas-growth-oil/src/REUSABLES.ts):

```typescript
export const phoneNumber = '2349021801964'
export const phoneNumberFormatted = '+234 902 180 1964'

export const WHATSAPP = [
  {
    request: 'order',
    message: `https://wa.me/${phoneNumber}?text=Hi%2C%20I'd%20like%20to%20order%20Lewa's%20Growth%20Oil%20%F0%9F%91%91`
  },
  {
    request: 'enquiry',
    message: `https://wa.me/${phoneNumber}?text=Hi%2C%20I%20have%20an%20enquiry%20about%20Lewa's%20Growth%20Oil%20%F0%9F%91%91`
  }
]
```

---

## 📄 License

This project is proprietary and confidential. All rights reserved by Lewa's Growth Oil.
