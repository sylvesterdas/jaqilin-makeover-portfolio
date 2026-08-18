<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 📘 AGENTS.md — Jaqilin Makeover Website Context & AI Guidance

This document explains the context, goals, audience, brand voice, SEO strategy, and design priorities for the **Jaqilin Makeover** website, for use by AI assistants like ChatGPT (Codex) to make informed decisions, write high-quality copy, and generate appropriate suggestions.

---

## 1. 🚩 Project Overview

**Project name:**
Jaqilin Makeover Website

**Description:**
A professional portfolio and booking website for **Jaqilin Makeover**, a freelance bridal makeup artist based in **Kanjiramkulam, Thiruvananthapuram, Kerala, India**.

The website showcases services (bridal makeup, engagement looks, reception makeup, guest makeup, saree draping, etc.) and aims to convert visitors into *WhatsApp or phone leads*, particularly brides and families preparing for weddings.

---

## 2. 🎯 Primary Goals

### 2.1 Website Core Goals

* Build **local trust and credibility** as a bridal makeup specialist.
* Explain services clearly to **Indian wedding audiences** (especially Kerala).
* Encourage direct contact through **WhatsApp and phone calls**.
* Support **local SEO** to rank for location-based search queries.
* Assist offline marketing (flyers, posters, word-of-mouth).

### 2.2 SEO Goals

Target high-intent keywords such as:

* Bridal makeup artist in Thiruvananthapuram
* Wedding makeup in Trivandrum / Neyyattinkara
* Saree draping services Kerala
* Guest makeup services

SEO should be localized (Malayalam + English when appropriate) and structured metadata must be correct.

---

## 3. 👥 Audience & Demographics

### 3.1 Primary Audience

* Brides and families preparing for weddings.
* Local audiences in Thiruvananthapuram and surrounding regions.
* Malayalam-speaking users with limited English proficiency.
* Individuals relying partly on **word-of-mouth** recommendations.

### 3.2 Secondary Audience

* Guests seeking makeup for receptions and family functions.
* Users discovering services via social media, Google Business Profile, and local referrals.

---

## 4. 🗺️ Local Market Behavior

Local village context influences choices:

* People often trust **word-of-mouth** more than online ads.
* Many users have **limited English proficiency**.
* Church / temple / mosque communities are key social environments.
* Offline flyers and posters are effective.
* Phone and WhatsApp contact is preferred over complex web forms.

---

## 5. 🗂 Website Structure & Pages

Expected pages:

* **Home** — Hero with local keyword headline, action buttons.
* **Services** — List of services with clear descriptions.
* **Portfolio** — Image gallery of bridal looks organized by type.
* **About** — Jaqilin’s story, training, and professional certification.
* **Connect** — Contact page with direct WhatsApp, call links, and location info.
* **Privacy Policy / Terms** — Standard informational pages.

---

## 6. 🎨 Design & UX Priorities

### 6.1 Hero Section

* Bold local keywords (e.g., *Bridal Makeup Artist in Thiruvananthapuram*).
* Primary CTA: *View My Work* and *Book Inquiry* (anchor to Connect).
* Malayalam + English supportive text.

### 6.2 Buttons

* Mobile thumb reachable.
* Minimal padding with balanced icon spacing.
* Button text should be short and actionable (e.g., *Check Date on WhatsApp*).

### 6.3 Images

* Use real client photos (not generic stock) where possible.
* Maintain a premium but grounded look.
* For flyers/posters: simple single bride focus.

---

## 7. 🗣 Tone & Content Guidelines

### 7.1 Brand Voice

* **Respectful**, approachable, and confident.
* Simple language leaning to Malayalam.
* Avoid overly poetic or “city salon” style language.
* Avoid complex English for primary CTAs.

### 7.2 Copywriting Principles

* First mention **local location** early.
* Lead with **benefit to bride and family**.
* Use bilingual lines only if it increases clarity.

Good example:

```
ബ്രൈഡൽ മേക്കപ്പ് ആർട്ടിസ്റ്റ്
Bridal Makeup Artist in Thiruvananthapuram
Natural, long-wear makeup with hair styling & saree draping.
```

Bad example:

```
Premium Artistry and Glamour for Every Wedding
```

---

## 8. 📞 Contact & Conversion Strategy

* Primary conversion actions: **WhatsApp click** and **call links**.
* Phone number should be **dominant** on Connect page and flyers.
* WhatsApp messages should be pre-formatted with intent phrases (e.g., *“Inquiry about bridal makeup for my wedding date…”*).

---

## 9. 🧠 SEO & Schema Expectations

AI should produce or verify:

* Correct **metadata titles & meta descriptions** (with location + service).
* Structured data (`LocalBusiness` / `ProfessionalService`) injection.
* Alternative texts for images with local keywords.
* Sitemap generation and robots rules are correct.

Example metadata:

```
<title>Bridal Makeup Artist in Thiruvananthapuram | Jaqilin Makeover</title>
<meta name="description" content="Professional bridal makeup artist in Thiruvananthapuram offering long-wear makeup, hair styling, and saree draping. Contact +91 73564 83404 on WhatsApp.">
```

---

## 10. 📢 Offline Marketing Context

AI should understand:

* Flyers/posters in churches and shops are widely read.
* Black-white printed posters require ultra-minimal text hierarchy.
* Malayalam-first is essential for local villagers.

Poster text guideline example:

```
വിവാഹ മേക്കപ്പ് ആർട്ടിസ്റ്റ്
വിവാഹത്തിന് തയ്യാറെടുക്കുന്ന കുടുംബങ്ങൾക്ക്
Lakmé Certified Makeup Artist
73564 83404 (WhatsApp available)
```

---

## 11. ⚠️ Things to Avoid

* Overly complex English sentences on primary CTAs.
* Too many decorative design suggestions without local clarity.
* Generic branding language that does NOT reference locality or trust.
* Assuming user has high-end device or broadband.

---

## 12. 🤖 AI Agent Instructions

When generating content, design suggestions, or code, AI should:

* Understand locality: Kerala, village context, multilingual needs.
* Prioritize **clarity & actionability** over aesthetics alone.
* Optimize for **mobile contact conversions** (WhatsApp/call).
* Default to **Malayalam-first** for user-facing text unless English enhances clarity.
* Validate SEO based on local intent, not broad global keywords.
