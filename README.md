# Kevin Ngenoh — Developer Portfolio & Rate Card

Personal rate card and portfolio site. Deployed to [kevin.iopulse.cloud](https://kevin.iopulse.cloud).

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript + Tailwind CSS
- Motion (v12) for animations
- Lenis for smooth scroll
- Self-hosted Inter + Instrument Serif via `next/font`

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Deployment

Pushes to `main` trigger a GitHub Action that builds a Docker image to GHCR and calls the Dokploy API on iopulse to redeploy.

Required secrets:
- `DOKPLOY_API_KEY` — iopulse Dokploy API key
- `DOKPLOY_APP_ID` — the Dokploy application ID

## Content

The rate card PDF lives at `/public/rate-card.pdf` and is linked from the Hero and Contact sections. Update the PDF in-place and commit.
