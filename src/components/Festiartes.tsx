import React from 'react';

export default function Festiartes() {
  const activities = [
    {
      img: "/images/festiartes1.jpg",
      title: "Children's Theater Workshops",
      desc: "Each year, Festiartes dedicates an entire week to children's activities. Over 500 children benefit from creative workshops and performances."
    },
    {
      img: "/images/festiartes2.jpg",
      title: "Diverse Artistic Performances",
      desc: "From dance and music to circus arts and magic shows, the festival showcases a wide range of artistic disciplines from across Ecuador."
    },
    {
      img: "/images/festiartes3.jpg",
      title: "Music & Community Engagement",
      desc: "Providing a platform for local and national musicians, fostering community connections through the universal language of music."
    },
    {
      img: "/images/festiartes4.jpg",
      title: "Long-Term Artistic Training",
      desc: "Beyond performances, Festiartes offers extended circus arts training programs engaging young participants from the canton."
    },
    {
      img: "/images/festiartes5.jpg",
      title: "Street Art & Celebrations",
      desc: "Transforming public spaces with street performances, murals, and vibrant parades like the Batucada drummers in Puerto López."
    }
  ];

  return (
    <section id="festiartes" className="section container">
      <h2 className="section-title">Current Project: <br/><span className="text-gradient">Festiartes</span></h2>
      <p className="section-subtitle">
        A Growing Cultural Phenomenon. From 600 attendees in 2018 to an estimated 2000 in 2023, 
        Festiartes has become a crucial platform for artistic expression in Puerto López.
      </p>

      <div className="grid-auto">
        {activities.map((act, i) => (
          <div key={i} className="glass-panel" style={{ padding: "1.5rem" }}>
            <div className="img-wrapper" style={{ height: "200px", marginBottom: "1.5rem" }}>
              <img src={act.img} alt={act.title} className="img-responsive" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
            </div>
            <h3 style={{ fontSize: "1.25rem", color: "hsl(var(--color-primary))" }}>{act.title}</h3>
            <p style={{ color: "hsl(var(--color-text-muted))", fontSize: "0.95rem" }}>{act.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
