# Skyline Estates

Advanced NexaFlow real estate website prototype.

## Links

- GitHub: https://github.com/shub1goyal/skyline-estates
- Live: https://skyline-estates-advisory.vercel.app
- Deployment path: GitHub `main` branch to Vercel production.

## Features

- Multi-page real estate website: Home, Listings, Neighborhoods, Sell, Agents, Tools, Contact.
- Full property catalog with filters, budget range, search, and comparison shortlist.
- EMI and cash-needed estimator for buyer qualification.
- Seller intake flow for valuation and listing launch.
- AI property advisor route at `/api/chat` using OpenRouter when configured.
- Stored fallback answers for missing key, API failure, or empty model output.
- Server-side-only key handling. The browser never receives the OpenRouter key.

## Local AI Key

This app reads `OPENROUTER_API_KEY` first. For Shubham's local machine, `.env.local`
points to:

```text
D:/nexaflow/i-openrouter nex.txt
```

The key file is not committed and should stay outside the project repo.

## Commands

```bash
npm run dev
npm run build
```
