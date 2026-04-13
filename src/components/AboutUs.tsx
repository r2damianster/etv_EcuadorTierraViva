import React from 'react';

export default function AboutUs() {
  return (
    <section id="about" className="section container">
      <div className="glass-panel" style={{ padding: "4rem", textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
        <h2 className="section-title" style={{ marginBottom: "2rem" }}>About <span className="text-gradient">Ecuador Tierra Viva</span></h2>
        
        <p style={{ fontSize: "1.1rem", color: "hsl(var(--color-text-muted))", marginBottom: "1.5rem", lineHeight: 1.8 }}>
          Ecuador Tierra Viva is an Ecuadorian non-profit organization founded in 2009, committed to improving the quality of life 
          of rural and vulnerable communities through sustainable development initiatives.
        </p>

        <p style={{ fontSize: "1.1rem", color: "hsl(var(--color-text-muted))", marginBottom: "1.5rem", lineHeight: 1.8 }}>
          We work with a participatory and long-term approach, promoting access to safe water, education, environmental management, 
          and community development. With over a decade of experience, we have successfully implemented projects across mainland 
          Ecuador and the Galápagos Islands in partnership with international organizations.
        </p>

        <h3 style={{ fontSize: "1.5rem", margin: "3rem 0 1.5rem 0", color: "hsl(var(--color-text-main))" }}>
          Institutional Capacity
        </h3>

        <p style={{ fontSize: "1.1rem", color: "hsl(var(--color-text-muted))", marginBottom: "2rem", lineHeight: 1.8 }}>
          Ecuador Tierra Viva operates nationwide and has strong experience in the design, management, and implementation of social, 
          environmental, and infrastructure projects. We have demonstrated technical capacity, transparent management, and 
          effective coordination with international partners, local governments, and communities.
        </p>

        <div style={{ display: "inline-block", padding: "0.8rem 2rem", background: "hsla(var(--color-primary), 0.1)", color: "hsl(var(--color-primary))", borderRadius: "99px", fontWeight: "bold" }}>
          ✅ All legal registrations and operational permits are fully in place.
        </div>
      </div>
    </section>
  );
}
