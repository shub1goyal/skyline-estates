import Link from "next/link";
import { Building2 } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Skyline Estates</h3>
          <p>
            A property advisory for serious buyers, sellers, investors, and
            relocating families who want clearer choices before the first site
            visit.
          </p>
        </div>
        <div>
          <h4>Browse</h4>
          <Link href="/listings">Listings</Link>
          <Link href="/neighborhoods">Neighborhoods</Link>
          <Link href="/agents">Agents</Link>
          <Link href="/tools">Tools</Link>
        </div>
        <div>
          <h4>Flows</h4>
          <Link href="/sell">Seller intake</Link>
          <Link href="/tools">EMI calculator</Link>
          <Link href="/contact">Tour request</Link>
          <Link href="/contact">Buyer match</Link>
        </div>
        <div>
          <h4>Property Desk</h4>
          <p>
            <Building2 size={15} /> Speak with our team about listings,
            valuations, investment options, relocation, and private tours.
          </p>
          <Link href="/contact">Contact advisor</Link>
        </div>
      </div>
    </footer>
  );
}
