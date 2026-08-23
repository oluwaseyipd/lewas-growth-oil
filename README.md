# 👑 Lewa's Growth Oil Website

[![React Version](https://img.shields.io/badge/React-19.0-blue?logo=react&logoColor=white&color=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue?logo=typescript&logoColor=white&color=3178C6)](https://www.typescriptlang.org)
[![Vite Version](https://img.shields.io/badge/Vite-8.0-purple?logo=vite&logoColor=white&color=646CFF)](https://vite.dev)
[![Tailwind CSS Version](https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?logo=tailwindcss&logoColor=white&color=38BDF8)](https://tailwindcss.com)
[![React Router](https://img.shields.io/badge/React_Router-v7.0-CA4245?logo=reactrouter&logoColor=white&color=CA4245)](https://reactrouter.com)
[![WhatsApp Ordering](https://img.shields.io/badge/WhatsApp-Ordering-25D366?logo=whatsapp&logoColor=white&color=25D366)](#whatsapp-integration)

A premium, fully responsive, and highly polished e-commerce marketing website built for **Lewa's Growth Oil**—a luxury organic haircare brand specializing in natural growth stimulation, hydration, and scalp care.

Designed strictly in accordance with **Lewa's Brand Guidelines**, this project showcases a high-fidelity visual identity, modern layout architecture, and a direct-to-chat WhatsApp ordering system optimized for conversions.

---

## ✨ Features

- 📱 **Fully Responsive Design:** Tailored layouts for mobile, tablet, and desktop screens with fluid, modern animations.
- 🛍️ **WhatsApp Ordering Flow:** Custom `WAButton` and floating `WhatsAppFloat` components designed to initiate order chats in under 5 minutes.
- 🔬 **Interactive Ingredients & Benefits:** Interactive product showcase on the **The Oil** page highlighting cold-pressed ingredients (Rosemary, Coconut, etc.).
- 🙋 **Polished FAQ System:** Modern accordion-style FAQ sections addressing common customer queries.
- ✉️ **Contact Form:** Integrated clean feedback interface.
- 🔄 **Scroll-to-Top Navigation:** Custom React Router hook ensuring a seamless transition and scroll resets between pages.

---

## 🛠️ Tech Stack & Architecture

- **React 19:** Utilizing the latest rendering optimizations, performance improvements, and modern hooks.
- **TypeScript:** Strict type configurations ensuring high code quality, reliable interfaces, and clean documentation.
- **Tailwind CSS v4.0:** Harnessing the latest CSS-first Tailwind compiler, CSS variables, and native utility optimization.
- **Vite 8:** Lightning-fast local bundling, Hot Module Replacement (HMR), and production-optimized asset compilation.
- **React Router v7:** Client-side routing with clean nested routes.

---

## 📂 Project Structure

```
lewas-growth-oil/
├── Docs/                     # Brand identity guidelines and PDFs
│   ├── Lewa_s Brand Guideline.pdf
│   └── Visual Identity Presentation_LEWA.pdf
├── public/                   # Static assets, logos, and product graphics
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── CrownLogo.tsx     # Custom SVG brand logo mark
│   │   ├── Footer.tsx        # Responsive navigation footer
│   │   ├── Nav.tsx           # Global main navbar with mobile drawer
│   │   ├── WAButton.tsx      # Standard WhatsApp call-to-action button
│   │   └── WhatsAppFloat.tsx # Floating WhatsApp overlay trigger
│   ├── pages/                # Website page components
│   │   ├── About.tsx         # Brand story and mission statement
│   │   ├── Contact.tsx       # Contact/inquiry page
│   │   ├── FAQ.tsx           # Accordion FAQ page
│   │   ├── Home.tsx          # Landing page with reviews and product intro
│   │   └── TheOil.tsx        # Scientific overview of the ingredients
│   ├── App.tsx               # Main application routing and shell
│   ├── index.css             # Tailwind v4 directives and base design system
│   └── main.tsx              # Application entrypoint
├── index.html                # Global HTML entry and SEO meta tags
├── vite.config.ts            # Vite & Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Local Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/lewas-growth-oil.git
   cd lewas-growth-oil
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   *The application will be running locally at `http://localhost:5173/`.*

4. **Build for production:**
   ```bash
   npm run build
   ```
   *Compiles and optimizes assets into the `dist/` directory, ready for static deployment.*

---

## 🎨 Design System & Visual Guidelines

This project implements a cohesive, high-end visual design system following the guidelines provided in:
- `Docs/Lewa_s Brand Guideline.pdf`
- `Docs/Visual Identity Presentation_LEWA.pdf`

### Color Palette Highlight
- **Primary Gold/Branding:** Curated warm, luxurious gold tones representing crown royalty and natural oil.
- **Accents:** Soft botanical greens, deep rich obsidian tones, and spacious cream backdrops representing organic purity.
- **Typography:** Sleek sans-serif fonts tailored to offer high readability and premium editorial aesthetics.

---

## 📞 WhatsApp Integration
The site features direct WhatsApp ordering, sending pre-formatted messages to the business agent when clicked:
```tsx
// Example WhatsApp flow trigger
const message = encodeURIComponent("Hello Lewa's! I'd like to place an order for the Growth Oil.");
const whatsappUrl = `https://wa.me/PHONE_NUMBER?text=${message}`;
```
This reduces customer friction and bypasses complex cart checkout processes, resulting in a streamlined Direct-to-Consumer (D2C) flow.

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to open a pull request or submit an issue to improve the site layout, performance, or animations.
