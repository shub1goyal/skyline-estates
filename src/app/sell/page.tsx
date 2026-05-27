import { Advisor } from "@/components/Advisor";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { sellerSteps } from "@/data/realEstate";

export default function SellPage() {
  return (
    <main className="site-shell">
      <SiteHeader />
      <section className="page-hero">
        <div className="container">
          <h1>Seller intake designed like a real pipeline.</h1>
          <p>
            The seller side captures property data, valuation context, launch
            plan, and offer tracking. This can become a CRM, Google Sheet, or
            n8n automation template.
          </p>
        </div>
      </section>
      <section className="section alt" style={{ paddingTop: 40 }}>
        <div className="container split">
          <div className="process-list">
            {sellerSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div className="process-item" key={step.title}>
                  <div className="step-number">{index + 1}</div>
                  <div>
                    <h3>
                      <Icon size={18} /> {step.title}
                    </h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lead-panel">
            <h2 className="section-title" style={{ fontSize: 38 }}>
              List your property
            </h2>
            <div className="field">
              <label>Owner name</label>
              <input placeholder="Owner name" />
            </div>
            <div className="field">
              <label>Property type</label>
              <select defaultValue="Apartment">
                <option>Apartment</option>
                <option>Villa</option>
                <option>Builder Floor</option>
                <option>Independent House</option>
                <option>Commercial</option>
              </select>
            </div>
            <div className="field">
              <label>Property notes</label>
              <textarea placeholder="Location, size, condition, expected price, urgency..." />
            </div>
            <button className="btn btn-primary" type="button" style={{ marginTop: 16 }}>
              Prepare valuation request
            </button>
          </div>
        </div>
      </section>
      <SiteFooter />
      <Advisor />
    </main>
  );
}
