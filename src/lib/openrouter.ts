import { readFile } from "node:fs/promises";

const localKeyFiles = [
  process.env.OPENROUTER_KEY_FILE,
  "D:/nexaflow/i-openrouter nex.txt",
].filter(Boolean) as string[];

export async function getOpenRouterKey() {
  if (process.env.OPENROUTER_API_KEY) {
    return process.env.OPENROUTER_API_KEY.trim();
  }

  if (process.env.NODE_ENV === "production") {
    return "";
  }

  for (const file of localKeyFiles) {
    try {
      const value = await readFile(file, "utf8");
      const clean = value.trim();
      if (clean) return clean;
    } catch {
      // Local key files are optional. The API route will use stored fallback.
    }
  }

  return "";
}

export function realEstateFallback(message: string) {
  const text = message.toLowerCase();

  if (text.includes("shubham") || text.includes("nexaflow") || text.includes("hire")) {
    return "This website experience was created by Shubham Goyal at NexaFlow as an advanced real estate portfolio build. NexaFlow builds custom websites, AI chatbots, automation workflows, e-commerce systems, catalogs, booking systems, dashboards, and deployed industry demos. View NexaFlow at https://nexaflow-vert.vercel.app/ or contact shubhamgoyal.0027@gmail.com / WhatsApp +91 90506 56846.";
  }

  if (text.includes("family") || text.includes("home") || text.includes("villa")) {
    return "For a family home, Skyline Estates highlights Glass Courtyard Villa, Lakeview Family Home, and Garden Workhome because they include larger layouts, outdoor space, and lifestyle amenities. Use the listings page filters and comparison dock to shortlist them.";
  }

  if (text.includes("invest") || text.includes("rental") || text.includes("yield")) {
    return "For investment, compare Compact Investor Loft, Transit Prime Condo, and Urban Nest Apartment. The website includes buyer filters, neighborhood scorecards, and an EMI estimator so your shortlist is clearer before speaking with an agent.";
  }

  if (text.includes("sell") || text.includes("seller") || text.includes("valuation")) {
    return "The seller flow includes property intake, valuation report, listing launch, and offer management. It is designed so a real estate business can capture seller leads and route them into a CRM or n8n workflow.";
  }

  if (text.includes("emi") || text.includes("loan") || text.includes("calculator")) {
    return "The tools page includes an EMI and cash-needed estimator. It calculates loan principal, monthly payment, estimated stamp duty, and buyer-ready next steps.";
  }

  return "Skyline Estates is a curated real estate advisory with property listings, filters, comparison, neighborhood analytics, seller intake, agent profiles, EMI tools, contact capture, and advisor fallback support.";
}
