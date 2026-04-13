'use client';
import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/images/intro-scientist-studies-rainforest.jpg", 
    "/images/intro-casa-buho.jpg",                    
    "/images/festiartes3.jpg"                         
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="hero">
      {/* Background Images Slider */}
      {images.map((src, index) => (
        <img 
          key={src}
          src={src} 
          alt={`Ecuador Tierra Viva impact ${index + 1}`} 
          className={`hero-bg-media ${index === currentSlide ? 'active' : ''}`} 
        />
      ))}
      
      {/* Dark overlay specifically for the hero background to ensure text reads well over the bright images */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1 }}></div>

      <div className="container hero-content" style={{ zIndex: 10, maxWidth: "1000px" }}>
        <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
          Community-driven solutions with <span className="text-gradient">measurable impact</span> in Ecuador
        </h1>
        <p className="hero-desc">
          We design and implement sustainable projects in water, education, environmental restoration, 
          and community development, working alongside rural communities and international partners.
        </p>
        <div className="hero-actions">
          <a href="#partner-with-us" className="btn-primary" style={{ padding: "1.2rem 3rem" }}>Partner with us</a>
        </div>
      </div>
    </section>
  );
}
