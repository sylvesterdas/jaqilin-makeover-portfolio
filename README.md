<div align="center">

# 💄 Jaqilin Makeover — Luxury Bridal Portfolio & Booking

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.1-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**The official portfolio and instant booking website for Jaqilin Makeover (LJS Works) — Lakmé Certified Bridal Makeup Artist based in Kanjiramkulam, Thiruvananthapuram, Kerala, India.**

🌐 **Live Website:** [https://www.jaqilinmakeover.com](https://www.jaqilinmakeover.com)  
📸 **Instagram:** [@jaqilinmua](https://www.instagram.com/jaqilinmua/)  
💬 **Direct WhatsApp:** [+91 73564 83404](https://wa.me/917356483404)

</div>

---

## 🌟 Highlights & Features

* **✨ Luxury Champagne & Royal Gold Aesthetic**: High-fashion editorial UI tailored for South Indian and Kerala bridal ceremonies (Hindu Muhurtham, Christian Church Wedding, Muslim Nikah & Reception Glam).
* **🎯 1-Click Interactive Bridal Concierge**: 3-tap inquiry planner (Ceremony $\rightarrow$ Location $\rightarrow$ Guest Count) generating custom WhatsApp booking links with zero friction.
* **📸 Live Instagram Graph API Feed**: Dynamic portfolio grid with video hover autoplay, multi-image carousel modal, and automated bi-monthly token rotation.
* **🌐 Bilingual Experience (Malayalam + English)**: Native Malayalam support with server-side cookie persistence for local families and elders.
* **📍 Hyper-Local SEO & Rich Snippets**:
  * `ProfessionalService` Schema with exact geo-coordinates (`8.3547, 77.0519`)
  * `AggregateRating` Schema for Google 5-Star search result badges (★★★★★ 5.0)
  * `FAQPage` JSON-LD for expandable FAQ rich snippets in search results
  * Dedicated landing page for [`/bridal-makeup-artist-thiruvananthapuram`](https://www.jaqilinmakeover.com/bridal-makeup-artist-thiruvananthapuram)
* **📱 Mobile-First Sticky Action Bar**: Persistent thumb-reach WhatsApp & Direct Call buttons on all smartphones.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router, Turbopack)](https://nextjs.org/) |
| **UI Library** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/) |
| **Icons & Motion** | [Lucide React](https://lucide.dev/) + `tailwindcss-animate` |
| **Media Feed** | Instagram Graph API (Meta for Developers) |
| **Analytics & Telemetry** | Google Tag Manager, Vercel Web Analytics, Vercel Speed Insights |
| **CI/CD & Hosting** | [Vercel](https://vercel.com/) + [GitHub Actions](https://github.com/features/actions) |

---

## 🚀 Getting Started Locally

### Prerequisites

* **Node.js** `20.9.0+` (LTS recommended)
* **pnpm** `v11.0+`

### Installation & Run

```bash
# 1. Clone repository
git clone https://github.com/sylvesterdas/jaqilin-makeover-portfolio.git
cd jaqilin-makeover-portfolio

# 2. Install dependencies
pnpm install

# 3. Configure environment variables (.env.local)
cp .env.example .env.local  # Add your IG_TOKEN & Meta verify credentials

# 4. Start local development server (Turbopack)
pnpm dev

# 5. Typecheck & Build
pnpm typecheck
pnpm build
```

---

## 🔄 Automated Instagram Token Refresh Pipeline

Meta long-lived user tokens expire every 60 days. This repository includes an automated GitHub Actions cron workflow:
* [`.github/workflows/refresh-instagram-token.yml`](.github/workflows/refresh-instagram-token.yml)

Every **1st and 15th of the month at 00:00 UTC**, the pipeline:
1. Calls Meta Graph API endpoint (`graph.instagram.com/refresh_access_token`) to extend token validity.
2. Updates `IG_TOKEN` across Vercel **production**, **preview**, and **development** environments using the Vercel CLI.
3. Ensures the live website feed always remains fresh and synchronized without manual intervention.

---

## 🗺️ Service Coverage & Location Hubs

Home and venue bridal makeover services are provided across **Thiruvananthapuram District**, including:
* **Trivandrum City** • **Neyyattinkara** • **Kanjiramkulam** • **Kazhakoottam**
* **Balaramapuram** • **Kovalam / Vizhinjam** • **Kattakada** • **Vellarada**

---

## 📄 License & Attribution

All rights reserved © **Jaqilin Makeover / LJS Works**.  
Artistry & Photography by **Jaqilin** ([@jaqilinmua](https://www.instagram.com/jaqilinmua/)).
