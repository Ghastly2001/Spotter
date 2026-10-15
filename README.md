# Spotter

**Catch every member before they drop.**

Spotter is a gym retention CRM for gyms, studios and sports academies in India. Most gym members don't cancel. They miss a week, then two, and their plan quietly runs out. Spotter notices that early and brings them back.

This repository is the **marketing site** for Spotter: the landing page that explains the product and collects sign-ups from the first 100 "founding" gyms. The product itself is being built separately.

## What Spotter does

- **Spots members who are slipping.** It learns each member's normal attendance and flags anyone whose visits are dropping, with a reason and a suggested next step.
- **Brings them back on WhatsApp.** Check-in messages go out from the gym's own WhatsApp number, in wording the owner has approved.
- **Answers leads around the clock.** An AI front desk replies to enquiries in Hindi, English, Marathi or Hinglish, quotes real plans and books free trials into real batches.
- **Collects renewals on UPI AutoPay.** Members approve a mandate once and fees are collected on renewal day, with failed payments retried automatically.
- **Check-in without extra hardware.** A QR code at the door or an old tablet works; existing biometric machines can still be connected.
- **Tracks personal training.** Sessions, packages and trainer commissions are worked out automatically.
- **Covers the everyday basics.** Memberships, GST invoices, a daily cash book, batches, staff roles, multiple branches and a member app.
- **Imports the paper register.** Owners send a photo or an Excel sheet and Spotter turns it into members, plans and pending dues.

Pricing is one plan per gym with no member caps: ₹1,499 a month, or ₹999 a month locked for life for the founding 100.

## What's on the landing page

| Section | Purpose |
| --- | --- |
| Hero | The core promise, with a live-looking product screen and WhatsApp chat |
| Leak calculator | Owners enter members, fee and dropout rate to see how much revenue left last year |
| A day at the gym | A timeline showing what Spotter does from 6 am to 11:40 pm |
| Feature deep dives | WhatsApp front desk, slipping-member alerts, AutoPay, check-in, PT tracking |
| Everyday features | The standard gym-management basics |
| Register import | How switching from a paper register works |
| Who it's for | Gyms, yoga, martial arts, dance, swimming, badminton and pickleball |
| Pricing and comparison | One plan, extras, and Spotter compared with a register or typical gym software |
| FAQ | Common owner questions |
| Founding 100 sign-up | Early-access form that submits to a server action |

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router, Server Actions), React 19, TypeScript in strict mode
- [Tailwind CSS](https://tailwindcss.com) v4 for styling
- [shadcn/ui](https://ui.shadcn.com) components on Radix, restyled to the Spotter brand
- Fonts via `next/font`: Anek (display), Mukta (body) and Kalam (handwriting), all with ₹ and Devanagari support

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |
| `npm run lint` | Run ESLint |

## Environment variables

Copy `.env.example` to `.env.local` and fill it in.

| Variable | Required | Purpose |
| --- | --- | --- |
| `FOUNDING_LIST_WEBHOOK_URL` | In production | Founding-gym sign-ups are sent here as JSON (for example a Google Apps Script, Zapier or Slack webhook). In development, sign-ups are only printed to the server console if it is not set. In production, the form shows an error instead of silently losing sign-ups. |

## Project structure

```
src/
  app/                  Layout, page, global styles, design tokens, server actions
    globals.css         Colour, type and spacing tokens, mapped into Tailwind and shadcn
    brand.css           Signature effects: chisel cut, highlighter sweep, grain, glows
    actions/            Server action for the founding-list form
  components/
    ui/                 shadcn components (button, slider, accordion, select, sheet…)
    brand/              Spotter building blocks (section, chisel card, highlight, panel…)
    mockups/            Product screens shown on the page
    sections/           One folder per page section
    site/               Header, mobile menu, footer
  content/              All page copy and example data, typed
  hooks/                Client-side motion (highlighter sweep, count-up, tilt, timeline)
  lib/                  Pure logic: formatting, leak estimate, validation, heatmap
  services/             Server-side integrations (founding-list storage)
```

## Brand rules

- **Navy** is the brand surface and **marigold** is the highlighter. Marigold is never used as text on white.
- **Chisel cuts** (top-left and bottom-right corners) appear only on buttons, highlights and offer cards. Product mockups stay softly rounded so they read as the real app.
- Example names, gyms and numbers in the mockups are illustrative.

Contributor guidelines for code style and verification are in [`CLAUDE.md`](./CLAUDE.md).
