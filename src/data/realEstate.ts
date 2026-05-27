import {
  Building2,
  Calculator,
  CalendarDays,
  ChartNoAxesCombined,
  Home,
  KeyRound,
  Landmark,
  Map,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Trees,
  Users,
} from "lucide-react";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/sell", label: "Sell" },
  { href: "/agents", label: "Agents" },
  { href: "/tools", label: "Tools" },
  { href: "/contact", label: "Contact" },
];

export const metrics = [
  { label: "Curated listings", value: "18" },
  { label: "Neighborhood scorecards", value: "8" },
  { label: "Buyer journeys", value: "4" },
  { label: "Lead response target", value: "15m" },
];

export const listings = [
  {
    id: "SE-101",
    title: "Glass Courtyard Villa",
    type: "Villa",
    location: "Green Park Extension",
    price: 42500000,
    beds: 4,
    baths: 4,
    area: 4100,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85",
    tags: ["Private garden", "Solar roof", "Home office"],
  },
  {
    id: "SE-102",
    title: "Skyline Duplex Residence",
    type: "Duplex",
    location: "Golf Course Road",
    price: 31500000,
    beds: 3,
    baths: 3,
    area: 2850,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    tags: ["City view", "Club access", "Smart locks"],
  },
  {
    id: "SE-103",
    title: "Urban Nest Apartment",
    type: "Apartment",
    location: "Sector 57",
    price: 16800000,
    beds: 3,
    baths: 2,
    area: 1780,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
    tags: ["Metro nearby", "Rental ready", "Park facing"],
  },
  {
    id: "SE-104",
    title: "Founder Floor Studio",
    type: "Builder Floor",
    location: "DLF Phase 4",
    price: 12800000,
    beds: 2,
    baths: 2,
    area: 1320,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    tags: ["Low maintenance", "Lift", "Quiet lane"],
  },
  {
    id: "SE-105",
    title: "Lakeview Family Home",
    type: "Independent House",
    location: "Sushant Lok",
    price: 55200000,
    beds: 5,
    baths: 5,
    area: 5200,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=85",
    tags: ["Corner plot", "Guest suite", "EV bay"],
  },
  {
    id: "SE-106",
    title: "Compact Investor Loft",
    type: "Apartment",
    location: "Sohna Road",
    price: 7800000,
    beds: 1,
    baths: 1,
    area: 760,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85",
    tags: ["High yield", "Furnished", "Managed rental"],
  },
  {
    id: "SE-107",
    title: "The Atrium Penthouse",
    type: "Penthouse",
    location: "MG Road",
    price: 68200000,
    beds: 4,
    baths: 5,
    area: 4600,
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1000&q=85",
    tags: ["Private terrace", "Media lounge", "Concierge"],
  },
  {
    id: "SE-108",
    title: "Garden Workhome",
    type: "Townhouse",
    location: "Nirvana Country",
    price: 24200000,
    beds: 3,
    baths: 3,
    area: 2360,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    tags: ["Study", "Pet garden", "Community pool"],
  },
  {
    id: "SE-109",
    title: "Transit Prime Condo",
    type: "Apartment",
    location: "Cyber City",
    price: 19800000,
    beds: 2,
    baths: 2,
    area: 1480,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85",
    tags: ["Office commute", "Concierge desk", "Gym"],
  },
];

export const neighborhoods = [
  {
    name: "Golf Course Road",
    score: 94,
    price: "INR 18k/sq ft",
    pin: "44px 0 0 52%",
    text: "Premium towers, corporate access, dining, clubs, and strong resale liquidity.",
  },
  {
    name: "Green Park Extension",
    score: 91,
    price: "INR 21k/sq ft",
    pin: "128px 0 0 18%",
    text: "Quiet family homes, garden lanes, schools, and independent villa demand.",
  },
  {
    name: "Sector 57",
    score: 86,
    price: "INR 12k/sq ft",
    pin: "248px 0 0 46%",
    text: "Balanced price point, metro access, rental demand, and newer apartment stock.",
  },
  {
    name: "Sohna Road",
    score: 79,
    price: "INR 8k/sq ft",
    pin: "368px 0 0 24%",
    text: "Investor-friendly corridor with compact units, growth pockets, and highway access.",
  },
];

export const agents = [
  {
    name: "Ira Malhotra",
    role: "Luxury homes",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85",
    text: "Specializes in high-value villas, family homes, and negotiation strategy.",
  },
  {
    name: "Kabir Mehta",
    role: "Investments",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
    text: "Rental yield analysis, compact investments, and portfolio-led property selection.",
  },
  {
    name: "Maya Rao",
    role: "Relocation",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=85",
    text: "School, commute, lifestyle fit, visit planning, and family onboarding.",
  },
];

export const sellerSteps = [
  {
    icon: Home,
    title: "Property intake",
    text: "Capture details, photos, location, documents, renovation notes, and seller goals.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Valuation report",
    text: "Compare neighborhood pricing, buyer demand, rental value, and realistic range.",
  },
  {
    icon: Sparkles,
    title: "Listing launch",
    text: "Create listing copy, media plan, buyer FAQ, tour slots, and lead routing.",
  },
  {
    icon: ShieldCheck,
    title: "Offer management",
    text: "Track buyer interest, shortlist qualified leads, and prepare negotiation notes.",
  },
];

export const toolCards = [
  { icon: Calculator, title: "EMI estimator", text: "Estimate monthly payment with loan, rate, and tenure." },
  { icon: Map, title: "Neighborhood match", text: "Compare lifestyle, commute, budget, and growth score." },
  { icon: CalendarDays, title: "Tour scheduler", text: "Plan property visits and route lead details to an agent." },
  { icon: MessageSquareText, title: "AI reply draft", text: "Prepare buyer/seller WhatsApp and email responses." },
  { icon: Landmark, title: "Document checklist", text: "Keep sale deed, tax, loan, and compliance items visible." },
  { icon: KeyRound, title: "Closing tracker", text: "Show next step, owner, deadline, and pending approvals." },
];

export const contactCards = [
  { icon: Building2, title: "Buy", text: "Shortlist properties by budget, location, and lifestyle." },
  { icon: Users, title: "Sell", text: "Launch a listing flow with valuation and qualified lead capture." },
  { icon: Map, title: "Invest", text: "Compare yield, growth pockets, and risk notes." },
  { icon: Trees, title: "Relocate", text: "Plan schools, commute, parks, and family services." },
];
