import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "FESTI-ARTES: Cultural & Community Development",
      challenge: "Strengthening youth engagement, education, and community cohesion.",
      desc: "An active initiative that uses arts and culture as a tool for social development.",
      impact: ["500+ children reached through workshops", "2,000+ community participants", "Ongoing cultural programming"],
      status: "Active",
      img: "/images/festiartes3.jpg",
      statusColor: "hsl(var(--color-primary))"
    },
    {
      title: "Literacy Program – The Book Bus",
      challenge: "Long-term promotion of reading culture.",
      desc: "A long-term literacy initiative implemented across Ecuador and the Galápagos, funded by The Bissie Books (UK).",
      impact: ["+10,000 children reached", "Multi-province implementation", "Years of sustained literacy programming"],
      status: "Active",
      img: "/images/litercity1.jpg",
      statusColor: "hsl(var(--color-primary))"
    },
    {
      title: "Solid Waste Recycling Plant",
      challenge: "Large-scale environmental project in La Concordia.",
      desc: "Large-scale module funded by the European Union and effectively implemented.",
      impact: ["Fully operational solid waste management system", "Collection infrastructure and equipment", "45,000 people benefited at the municipal level"],
      status: "Executed",
      img: "/images/planta_residuos.jpeg",
      statusColor: "hsl(var(--color-text-muted))"
    },
    {
      title: "Community Eco-Lodge",
      challenge: "Sustainable tourism development.",
      desc: "Sustainable tourism project developed with Change for Children.",
      impact: ["Income generation for local communities", "Long-term sustainable operations", "Direct economic support"],
      status: "Executed",
      img: "/images/intro-scientist-studies-rainforest.jpg",
      statusColor: "hsl(var(--color-text-muted))"
    },
    {
      title: "2016 Earthquake Relief – Manabí",
      challenge: "Emergency response and shelter for the devastating 2016 Manabí earthquake.",
      desc: "Following the deadly April 2016 earthquake with its epicenter between Pedernales and Cojimíes, we coordinated to provide immediate relief.",
      impact: ["Donation of ~120 temporary shelters", "Support from Kubiec and private donors", "Emergency assistance in Manabí"],
      status: "Executed",
      img: "/Terremoto.jpeg",
      statusColor: "hsl(var(--color-text-muted))"
    },
    {
      title: "Water Supply – Esmeraldas",
      challenge: "Access to clean and safe water infrastructure.",
      desc: "Implementation of a water supply system in Esmeraldas in partnership with Engineers Without Borders.",
      impact: ["Improved access to clean water", "Direct community health benefits", "Sustainable infrastructure execution"],
      status: "Executed",
      img: "/images/water.jpg",
      statusColor: "hsl(var(--color-text-muted))"
    }
  ];

  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Our <span className="text-gradient">Projects</span></h2>
      <p className="section-subtitle">
        Our projects respond to real community needs and deliver measurable results. Below is a snapshot of our active and executed operations.
      </p>

      <div className="grid-auto">
        {projects.map((proj, i) => (
          <div key={i} className="glass-panel" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "200px", overflow: "hidden" }}>
              <img src={proj.img} alt={proj.title} className="img-responsive" style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: 0 }} />
            </div>
            <div style={{ padding: "2rem", flexGrow: 1 }}>
              <div style={{ fontSize: "0.8rem", fontWeight: "bold", color: proj.statusColor, textTransform: "uppercase", marginBottom: "0.5rem", padding: "0.2rem 0.8rem", background: "hsla(var(--color-bg-base), 1)", borderRadius: "99px", display: "inline-block" }}>
                Status: {proj.status}
              </div>
              <h3 style={{ fontSize: "1.3rem", color: "hsl(var(--color-text-main))", marginBottom: "1rem" }}>{proj.title}</h3>
              <p style={{ color: "hsl(var(--color-text-muted))", fontSize: "0.95rem", marginBottom: "1.5rem" }}>{proj.desc}</p>
              
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {proj.impact.map((imp, idx) => (
                  <li key={idx} style={{ fontSize: "0.85rem", color: "hsl(var(--color-text-main))", marginBottom: "0.4rem", display: "flex", gap: "0.5rem" }}>
                    <span style={{ color: "hsl(var(--color-primary))" }}>✓</span> {imp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
