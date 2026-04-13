import React from 'react';

export default function FeaturedProject() {
  return (
    <section className="section container">
      <div className="glass-panel" style={{ padding: "0", overflow: "hidden", border: "2px solid hsla(var(--color-primary), 0.3)" }}>
        <div className="grid-2" style={{ gap: "0" }}>
          
          <div style={{ padding: "4rem" }}>
            <div style={{ display: "inline-block", padding: "0.4rem 1rem", background: "hsla(var(--color-secondary), 0.1)", color: "hsl(var(--color-secondary))", borderRadius: "99px", fontWeight: "bold", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
              FEATURED PROJECT
            </div>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Solar Water for Isabela Island (Galápagos)</h2>
            <p style={{ color: "hsl(var(--color-text-muted))", fontSize: "1.1rem", marginBottom: "2rem" }}>
              A community-based initiative to provide clean water through solar hydropanels for 100 families in Isabela Island.
            </p>
            
            <ul style={{ listStyle: "none", margin: "0 0 2rem 0", padding: "0" }}>
              <li style={{ marginBottom: "0.5rem" }}>✅ Off-grid, renewable solution</li>
              <li style={{ marginBottom: "0.5rem" }}>✅ Climate-resilient and scalable</li>
              <li style={{ marginBottom: "0.5rem" }}>✅ Designed for vulnerable island communities</li>
              <li style={{ marginBottom: "0.5rem" }}>✅ Can be implemented in phases</li>
            </ul>

            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <a href="#partner-with-us" className="btn-primary">Partner With Us</a>
              <span style={{ fontWeight: 600, color: "hsl(var(--color-text-main))" }}>• Seeking funding partners</span>
            </div>
          </div>

          <div style={{ background: "url('/images/intro-water-supply.jpg') center/cover", minHeight: "400px", height: "100%" }}>
            {/* Placeholder for the project image */}
          </div>
          
        </div>
      </div>
    </section>
  );
}
