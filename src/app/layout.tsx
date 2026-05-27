import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Skyline Estates",
  title: "Skyline Estates | Curated Property Advisory",
  description:
    "A curated real estate advisory for buyers, sellers, investors, and relocating families with listings, neighborhood guidance, finance tools, and agent support.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
