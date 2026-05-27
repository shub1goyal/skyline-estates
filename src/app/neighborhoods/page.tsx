import { MapPin } from "lucide-react";
import { Advisor } from "@/components/Advisor";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { neighborhoods } from "@/data/realEstate";

export default function NeighborhoodsPage() {
  return (
    <main className="site-shell">
      <SiteHeader />
      <section className="page-hero">
        <div className="container">
          <h1>Neighborhood scorecards for smarter property leads.</h1>
          <p>
            Buyers rarely decide by price alone. Skyline Estates adds area
            scores, pricing notes, commute context, rental potential, and local
            lifestyle fit.
          </p>
        </div>
      </section>
      <section className="section alt" style={{ paddingTop: 40 }}>
        <div className="container split">
          <div className="map-board">
            {neighborhoods.map((item) => (
              <div className="map-pin" style={{ "--pin": item.pin } as React.CSSProperties} key={item.name}>
                <div className="card-topline">
                  <span>
                    <MapPin size={13} /> {item.name}
                  </span>
                  <span>{item.score}/100</span>
                </div>
                <strong>{item.price}</strong>
                <p style={{ color: "var(--muted)", marginTop: 8 }}>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="cards-grid" style={{ gridTemplateColumns: "1fr" }}>
            {neighborhoods.map((item) => (
              <article className="info-card" key={item.name}>
                <div className="card-body">
                  <div className="card-topline">
                    <span>{item.name}</span>
                    <span>{item.score}/100</span>
                  </div>
                  <h3>{item.price}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
      <Advisor />
    </main>
  );
}
