import { Advisor } from "@/components/Advisor";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { agents } from "@/data/realEstate";

export default function AgentsPage() {
  return (
    <main className="site-shell">
      <SiteHeader />
      <section className="page-hero">
        <div className="container">
          <h1>Agent profiles with clear specialization.</h1>
          <p>
            Real estate websites convert better when buyers and sellers know who
            they are speaking to. This page shows specialization, trust, and
            lead routing.
          </p>
        </div>
      </section>
      <section className="section alt" style={{ paddingTop: 40 }}>
        <div className="container cards-grid">
          {agents.map((agent) => (
            <article className="agent-card" key={agent.name}>
              <div className="card-media" style={{ "--image": `url(${agent.image})` } as React.CSSProperties} />
              <div className="card-body">
                <div className="card-topline">
                  <span>{agent.role}</span>
                  <span>Advisor</span>
                </div>
                <h3>{agent.name}</h3>
                <p>{agent.text}</p>
                <div className="section-actions">
                  <button className="btn btn-primary" type="button">
                    Request callback
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
      <Advisor />
    </main>
  );
}
