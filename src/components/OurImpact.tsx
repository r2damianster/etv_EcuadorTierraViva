import React from 'react';

export default function OurImpact() {
  const stats = [
    { value: "+50,000", label: "People Reached", desc: "through community programs, including large-scale education and development initiatives." },
    { value: "+40", label: "Communities Supported", desc: "across mainland Ecuador and the Galápagos Islands." },
    { value: "45,000", label: "Beneficiaries", desc: "in a single large-scale municipal project." },
    { value: "$1M+", label: "Executed Funds", desc: "in international cooperation projects with global organizations." }
  ];

  return (
    <section id="impact" className="section container">
      <h2 className="section-title">Measurable <span className="text-gradient">Impact</span></h2>
      <p className="section-subtitle">
        Ecuador Tierra Viva works across coastal, rural, and island regions, including the Galápagos Islands, 
        delivering real outcomes.
      </p>

      <div className="grid-auto" style={{ gap: "2rem" }}>
        {stats.map((stat, i) => (
          <div key={i} className="glass-panel" style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: "3rem", fontWeight: 800, color: "hsl(var(--color-primary))", lineHeight: 1 }}>
              {stat.value}
            </div>
            <h3 style={{ fontSize: "1.2rem", margin: "1rem 0 0.5rem 0", color: "hsl(var(--color-text-main))" }}>
              {stat.label}
            </h3>
            <p style={{ color: "hsl(var(--color-text-muted))", fontSize: "0.95rem" }}>
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
