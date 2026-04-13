import React from 'react';

export default function Partners() {
  const partners = [
    { name: "European Union", desc: "Solid waste recycling system benefiting 45,000 people (~USD 1,000,000 project)", logo: "/images/partners-girandula.jpg" }, // Reuse empty/old logos creatively or just text.
    { name: "Change for Children", desc: "Community eco-lodge (~USD 100,000)", logo: "/images/partners-ventureco.png" },
    { name: "Engineers Without Borders (Portland)", desc: "Water projects", logo: "/images/partners-bellavista.png" },
    { name: "The Book Bus & The Bissie Books (UK)", desc: "Literacy programs across Ecuador and Galápagos", logo: "/images/partners-bookbus.png" },
    { name: "LATA Foundation", desc: "Sustainability and community development", logo: "/LATA-Foundation.png" }
  ];

  return (
    <section id="partner-with-us" className="section container">
      
      <div className="grid-2" style={{ gap: "4rem", marginBottom: "6rem" }}>
        <div>
          <h2 className="section-title" style={{ textAlign: "left" }}>Partner with <br/><span className="text-gradient">Ecuador Tierra Viva</span></h2>
          <p style={{ color: "hsl(var(--color-text-muted))", fontSize: "1.1rem", marginBottom: "2rem" }}>
            Ecuador Tierra Viva is a trusted local partner for the design and implementation of community-based development projects. 
            We work with international organizations, NGOs, and foundations to deliver high-impact initiatives.
          </p>
          
          <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>What we offer:</h3>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>🔹 Project design and implementation</li>
            <li style={{ marginBottom: "0.5rem" }}>🔹 Community engagement</li>
            <li style={{ marginBottom: "0.5rem" }}>🔹 Field coordination</li>
            <li style={{ marginBottom: "0.5rem" }}>🔹 Monitoring and evaluation</li>
          </ul>

          <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Why work with us:</h3>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "3rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>✔ Proven international project experience</li>
            <li style={{ marginBottom: "0.5rem" }}>✔ Strong community relationships</li>
            <li style={{ marginBottom: "0.5rem" }}>✔ Nationwide operational capacity</li>
            <li style={{ marginBottom: "0.5rem" }}>✔ Transparent and efficient management</li>
          </ul>

          <div style={{ background: "hsla(var(--color-primary), 0.1)", padding: "2rem", borderRadius: "var(--radius-lg)" }}>
            <h3 style={{ marginBottom: "1rem" }}>Looking for a trusted local partner in Ecuador?</h3>
            <p style={{ marginBottom: "1.5rem", color: "hsl(var(--color-text-muted))" }}>We are ready to design and implement your next project.</p>
            <a href="mailto:info@ecuador-tierraviva.org" className="btn-primary">Let's build impactful projects together</a>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Partners & Experience</h3>
          <p style={{ color: "hsl(var(--color-text-muted))", marginBottom: "2rem" }}>
            We have successfully implemented projects with international organizations including:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {partners.map((p, i) => (
              <div key={i} className="glass-panel" style={{ display: "flex", gap: "1.5rem", alignItems: "center", padding: "1.5rem" }}>
                <img src={p.logo} alt={p.name} className="partner-logo" style={{ width: "60px", height: "auto", flexShrink: 0 }} />
                <div>
                  <h4 style={{ margin: 0, color: "hsl(var(--color-text-main))" }}>{p.name}</h4>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "hsl(var(--color-text-muted))" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
