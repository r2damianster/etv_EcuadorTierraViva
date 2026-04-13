import React from 'react';

export default function WhatWeDo() {
  const pillars = [
    {
      title: "Water & Climate Solutions",
      desc: "We implement sustainable water systems and climate-resilient solutions that improve access to safe water and strengthen community resilience.",
      icon: "💧"
    },
    {
      title: "Environmental & Watershed Restoration",
      desc: "We design and implement ecosystem restoration initiatives, including watershed recovery and protection of critical water sources.",
      icon: "🌱"
    },
    {
      title: "Community Development",
      desc: "We strengthen local economies through productive, community-led initiatives that create sustainable livelihoods.",
      icon: "🤝"
    },
    {
      title: "Education & Social Impact",
      desc: "We expand opportunities through literacy, education, and community engagement programs for children and youth.",
      icon: "📚"
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: "hsla(var(--color-bg-surface), 0.5)" }}>
      <div className="container">
        <h2 className="section-title">What We <span className="text-gradient">Do</span></h2>
        <p className="section-subtitle">
          Our projects respond to real community needs and deliver measurable results.
        </p>

        <div className="grid-2" style={{ gap: "3rem" }}>
          {pillars.map((pillar, i) => (
            <div key={i} style={{ display: "flex", gap: "1.5rem" }}>
              <div style={{ fontSize: "2.5rem", background: "hsla(var(--color-primary), 0.1)", width: "80px", height: "80px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {pillar.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "1.3rem", color: "hsl(var(--color-text-main))", marginBottom: "0.5rem" }}>{pillar.title}</h3>
                <p style={{ color: "hsl(var(--color-text-muted))", lineHeight: 1.6 }}>{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
