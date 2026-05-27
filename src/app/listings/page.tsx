import { Advisor } from "@/components/Advisor";
import { PropertyExplorer } from "@/components/PropertyExplorer";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function ListingsPage() {
  return (
    <main className="site-shell">
      <SiteHeader />
      <section className="page-hero">
        <div className="container">
          <h1>Listings with filters, comparison, and buyer briefing.</h1>
          <p>
            A serious property search should feel organized from the first
            click. Use search, property type filtering, budget range, and a
            comparison shortlist to narrow your next site visits.
          </p>
        </div>
      </section>
      <section className="section alt" style={{ paddingTop: 40 }}>
        <div className="container">
          <PropertyExplorer />
        </div>
      </section>
      <SiteFooter />
      <Advisor />
    </main>
  );
}
