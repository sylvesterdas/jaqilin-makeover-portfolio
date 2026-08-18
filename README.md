# 💄 Jaqilin Makeover — Portfolio & Booking Website

Official portfolio and booking website for **Jaqilin Makeover** (LJS Works), a freelance bridal makeup artist based in **Kanjiramkulam, Thiruvananthapuram, Kerala, India**.

---

## 🛠️ Tech Stack

* **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
* **Library**: [React 19](https://react.dev/) + TypeScript
* **Styling**: Tailwind CSS + Radix UI primitives
* **Media & Feed**: Instagram Graph API with automatic bi-monthly token rotation
* **Deployment**: [Vercel](https://vercel.com/) with automated GitHub Actions workflow

---

## 🚀 Getting Started

### Prerequisites

* Node.js 20.9+ (or LTS)
* `pnpm` (v11 recommended)

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Typecheck
pnpm typecheck

# Production build
pnpm build
```

---

## 🔄 Automated Instagram Token Refresh

Meta long-lived user tokens expire every 60 days. This repository includes a GitHub Actions workflow:
* [`.github/workflows/refresh-instagram-token.yml`](.github/workflows/refresh-instagram-token.yml)

It automatically runs on the **1st and 15th of every month** via cron, refreshes the Instagram access token with Meta, and syncs `IG_TOKEN` across all Vercel environments (`production`, `preview`, `development`).

---

## 📄 License

Private repository © Jaqilin Makeover / LJS Works.
