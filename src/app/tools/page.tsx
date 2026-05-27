import { Advisor } from "@/components/Advisor";
import { MortgageTool } from "@/components/MortgageTool";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { toolCards } from "@/data/realEstate";

export default function ToolsPage() {
  return (
    <main className="site-shell">
      <SiteHeader />
      <section className="page-hero">
        <div className="container">
          <h1>Tools that turn visitors into qualified leads.</h1>
          <p>
            Finance estimates, matching, document checklists, and AI reply
            drafts make the website feel like a working real estate product.
          </p>
        </div>
      </section>
      <section className="section alt" style={{ paddingTop: 40 }}>
        <div className="container">
          <MortgageTool />
        </div>
      </section>
      <section className="section">
        <div className="container cards-grid">
          {toolCards.map((item) => {
            const Icon = item.icon;
            return (
              <article className="tool-panel" key={item.title}>
                <div className="card-body">
                  <div className="brand-mark" style={{ marginBottom: 18 }}>
                    <Icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <SiteFooter />
      <Advisor />
    </main>
  );
}
