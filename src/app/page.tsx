import Link from "next/link";
import { ArrowRight, CalendarCheck, MapPin, Sparkles } from "lucide-react";
import { Advisor } from "@/components/Advisor";
import { ListingCard } from "@/components/ListingCard";
import { MortgageTool } from "@/components/MortgageTool";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { listings, metrics, neighborhoods, sellerSteps } from "@/data/realEstate";

export default function Home() {
  return (
    <main className="site-shell">
      <SiteHeader />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Real estate browsing with buyer intelligence built in.</h1>
            <p className="hero-copy">
              Skyline Estates helps buyers, sellers, investors, and relocating
              families compare homes with cleaner listings, sharper
              neighborhood context, finance estimates, seller guidance, and
              advisor-led next steps.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/listings">
                Explore listings
                <ArrowRight size={17} />
              </Link>
              <Link className="btn btn-soft" href="/tools">
                <Sparkles size={17} />
                Match me
              </Link>
            </div>
            <div className="compare-dock" style={{ position: "static" }}>
              <div>
                <strong>Search brief</strong>
                <p>3BHK+ | school radius | under 4 Cr | tour this week</p>
              </div>
              <Link className="btn btn-primary" href="/contact">
                Send brief
              </Link>
            </div>
            <div className="metric-row">
              {metrics.map((metric) => (
                <div className="metric-card" key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="market-panel">
            <div className="market-card">
              <div>
                <span>Featured buyer path</span>
                <strong>Family upgrade</strong>
                <p style={{ color: "var(--muted)", marginTop: 10 }}>
                  Villa shortlist, school radius, commute window, EMI estimate,
                  and agent handoff.
                </p>
              </div>
              <div>
                <span>Qualified lead</span>
                <strong>92%</strong>
                <p style={{ color: "var(--muted)", marginTop: 10 }}>
                  Budget, area, timeline, and tour intent captured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container section-head">
          <h2 className="section-title">A loaded property catalog</h2>
          <p>
            Explore properties with price, size, location, filters, comparison,
            and buyer-ready tags that make shortlisting easier.
          </p>
        </div>
        <div className="container cards-grid">
          {listings.slice(0, 3).map((listing) => (
            <ListingCard listing={listing} key={listing.id} />
          ))}
        </div>
        <div className="container section-actions">
          <Link className="btn btn-primary" href="/listings">
            View all properties
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="section">
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
          <div>
            <h2 className="section-title">Neighborhood intelligence</h2>
            <p style={{ marginTop: 16, color: "var(--muted)", lineHeight: 1.65 }}>
              Serious buyers need more than listing cards. Area scorecards,
              commute logic, price notes, and lifestyle fit make every enquiry
              clearer before the first call.
            </p>
            <div className="section-actions">
              <Link className="btn btn-soft" href="/neighborhoods">
                Open neighborhood page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container section-head">
          <h2 className="section-title">Seller pipeline that looks operational</h2>
          <p>
            The seller journey is packaged as a workflow: intake, valuation,
            launch, and offer management. It can connect to CRM, WhatsApp,
            email, or an n8n template later.
          </p>
        </div>
        <div className="container cards-grid">
          {sellerSteps.slice(0, 3).map((step) => {
            const Icon = step.icon;
            return (
              <article className="info-card" key={step.title}>
                <div className="card-body">
                  <div className="brand-mark" style={{ marginBottom: 18 }}>
                    <Icon size={22} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <MortgageTool />
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div>
            <h2 className="section-title">Tour requests become clean leads</h2>
            <p style={{ marginTop: 16, color: "var(--muted)", lineHeight: 1.65 }}>
              Forms can capture budget, preferred area, tour timing, finance
              readiness, and buying purpose, then route to the right agent with
              an AI summary and WhatsApp-ready reply.
            </p>
          </div>
          <div className="lead-panel">
            <div className="field">
              <label>Buyer name</label>
              <input placeholder="Client name" />
            </div>
            <div className="field">
              <label>Budget</label>
              <select defaultValue="2-4 Cr">
                <option>Under 1 Cr</option>
                <option>1-2 Cr</option>
                <option>2-4 Cr</option>
                <option>4 Cr+</option>
              </select>
            </div>
            <div className="field">
              <label>Requirement</label>
              <textarea placeholder="3BHK near office, school access, ready in 3 months..." />
            </div>
            <button className="btn btn-primary" type="button" style={{ marginTop: 16 }}>
              <CalendarCheck size={17} />
              Prepare tour request
            </button>
          </div>
        </div>
      </section>

      <SiteFooter />
      <Advisor />
    </main>
  );
}
