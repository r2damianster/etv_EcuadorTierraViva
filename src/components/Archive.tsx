import React from 'react';

export default function Archive() {
  const projects = [
    { title: "Medical Brigades", img: "/images/intro-medical-brigades2.jpg", desc: "Providing access to essential healthcare in remote communities." },
    { title: "Organic Farm", img: "/images/intro-organic-farm.jpg", desc: "Sustainable Farming In The Amazon Rainforest." },
    { title: "Secrets of the Amazon", img: "/images/intro-scientist-studies-rainforest.jpg", desc: "Development of scientific projects to maintain the rainforest." },
    { title: "Ornithologists", img: "/images/intro-ornithologists.jpg", desc: "Monitoring Wildlife and bird studies in the Amazon Jungle." },
    { title: "Water Supply Project", img: "/images/intro-water-supply.jpg", desc: "Construction of water systems for communities." },
    { title: "Book Bus Puerto Lopez", img: "/images/intro-casa-buho.jpg", desc: "Books and education for Children on the Pacific Coast." }
  ];

  return (
    <section id="archive" className="section container">
      <h2 className="section-title">Executed <br/><span className="text-gradient">Projects Repository</span></h2>
      <p className="section-subtitle">
        A look back at the incredible work we've accomplished over the years. These projects laid the foundation 
        for our current focus and demonstrate our deep commitment to Ecuador's development.
      </p>

      <div className="grid-auto">
        {projects.map((proj, i) => (
          <div key={i} className="glass-panel" style={{ padding: "0", overflow: "hidden", border: "1px solid hsla(var(--color-border), 0.5)" }}>
            <div className="img-wrapper" style={{ height: "220px", borderRadius: "0" }}>
              <img src={proj.img} alt={proj.title} className="img-responsive" style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "0" }} />
            </div>
            <div style={{ padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.2rem", color: "hsl(var(--color-text-main))" }}>{proj.title}</h3>
              <p style={{ color: "hsl(var(--color-text-muted))", fontSize: "0.9rem" }}>{proj.desc}</p>
              <div style={{ marginTop: "1rem", display: "inline-block", padding: "0.3rem 0.8rem", background: "hsla(0, 0%, 100%, 0.1)", borderRadius: "99px", fontSize: "0.75rem", color: "hsl(var(--color-secondary))" }}>
                Status: Executed
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
