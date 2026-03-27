# The Weekly Till — Newsletter Landing Page

A signup landing page for **The Weekly Till**, a newsletter for local business owners about workflow automation.

Built with React + Vite + TypeScript. Sends form submissions to a Zapier webhook.

---

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the project root:
   ```env
   VITE_ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_ID/YOUR_HOOK/
   ```

3. Run locally:
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173`

4. Build for production:
   ```bash
   npm run build
   ```

---

## What it collects

- Work email (required)
- Mobile number (optional, for text reminders)
- Business type
- Biggest time cost / bottleneck
- Where they found us

All fields are sent as a form payload to the Zapier webhook on submit.

---

## Customization

Everything lives in `src/config.ts`:
- All text content (headline, subheadline, button, success message, footer)
- Dropdown options (business types, pain points, referral sources)
- Webhook payload shape

Colors and fonts are in `src/App.css` and `src/index.css`.

---

## Design

- Warm terracotta / cream color palette
- 21 animated 3D spheres bouncing in the background (various sizes)
- Animated workflow connector lines with traveling dots — evoking automation pipelines
- Pulse rings on the two largest spheres
- Fully responsive — mobile collapses to full-screen card

---

## Project structure

```
src/
├── config.ts    — all content, dropdowns, and webhook payload
├── App.tsx      — main component and form logic
├── App.css      — component styles, sphere animations, connectors
├── index.css    — global reset and fonts
└── main.tsx     — entry point
```
