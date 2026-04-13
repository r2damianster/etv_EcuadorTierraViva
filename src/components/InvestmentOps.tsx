import React from 'react';

export default function InvestmentOps() {
  const ops = [
    {
      title: "Solar Water for Isabela Island",
      desc: "Provide clean water through solar hydropanels for 100 families in the Galápagos.",
      status: "Seeking funding"
    },
    {
      title: "FESTI-ARTES Expansion",
      desc: "Expand a cultural and education program that uses arts as a tool for social development, youth engagement, and community resilience in Puerto López. 500+ children reached, 2,000+ community participants.",
      status: "Active / Scaling"
    },
    {
      title: "Community Education Programs",
      desc: "Expand literacy and educational initiatives in coastal Ecuador.",
      status: "Open for partnerships"
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: "hsla(var(--color-bg-surface), 0.5)" }}>
      <div className="container">
        <h2 className="section-title">Current <span className="text-gradient">Investment Opportunities</span></h2>
        
        <div className="grid-auto">
          {ops.map((op, i) => (
            <div key={i} className="glass-panel">
              <div style={{ fontSize: "0.8rem", fontWeight: "bold", color: "hsl(var(--color-secondary))", textTransform: "uppercase", marginBottom: "1rem", padding: "0.2rem 0.8rem", background: "hsla(var(--color-secondary), 0.1)", borderRadius: "99px", display: "inline-block" }}>
                Status: {op.status}
              </div>
              <h3 style={{ fontSize: "1.4rem", color: "hsl(var(--color-text-main))", marginBottom: "1rem" }}>{op.title}</h3>
              <p style={{ color: "hsl(var(--color-text-muted))" }}>{op.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
