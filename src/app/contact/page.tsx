import { Send } from "lucide-react";
import { Advisor } from "@/components/Advisor";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { contactCards } from "@/data/realEstate";

export default function ContactPage() {
  return (
    <main className="site-shell">
      <SiteHeader />
      <section className="page-hero">
        <div className="container">
          <h1>Contact flow for buyers, sellers, investors, and relocation.</h1>
          <p>
            The contact page captures intent and routes it to the right service
            path. It is ready to connect with Vercel APIs, Supabase, Google
            Sheets, WhatsApp, or n8n workflow packs.
          </p>
        </div>
      </section>
      <section className="section alt" style={{ paddingTop: 40 }}>
        <div className="container split">
          <div className="lead-panel">
            <div className="field">
              <label>Name</label>
              <input placeholder="Your name" />
            </div>
            <div className="field">
              <label>Phone / WhatsApp</label>
              <input placeholder="+91..." />
            </div>
            <div className="field">
              <label>I want to</label>
              <select defaultValue="Buy">
                <option>Buy</option>
                <option>Sell</option>
                <option>Invest</option>
                <option>Relocate</option>
              </select>
            </div>
            <div className="field">
              <label>Details</label>
              <textarea placeholder="Budget, location, timeline, property type..." />
            </div>
            <button className="btn btn-primary" type="button" style={{ marginTop: 16 }}>
              <Send size={17} />
              Prepare enquiry
            </button>
          </div>
          <div className="cards-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {contactCards.map((item) => {
              const Icon = item.icon;
              return (
                <article className="info-card" key={item.title}>
                  <div className="card-body">
                    <div className="brand-mark" style={{ marginBottom: 16 }}>
                      <Icon size={22} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <SiteFooter />
      <Advisor />
    </main>
  );
}
