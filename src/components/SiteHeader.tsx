import Link from "next/link";
import { Building2, CalendarCheck, Phone } from "lucide-react";
import { nav } from "@/data/realEstate";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link className="brand" href="/">
          <span className="brand-mark">
            <Building2 size={23} />
          </span>
          <span>
            Skyline Estates
            <small>Curated property advisory</small>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {nav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link className="btn btn-soft" href="/contact">
            <Phone size={16} />
            Enquire
          </Link>
          <Link className="btn btn-primary" href="/tools">
            <CalendarCheck size={16} />
            Match Me
          </Link>
        </div>
      </div>
    </header>
  );
}
