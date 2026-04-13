import React from 'react';

export default function NavBar() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Our Impact", href: "#impact" },
    { label: "Contact", href: "#footer" }
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        <span style={{ color: "hsl(var(--color-primary))" }}>Ecuador</span> Tierra Viva
      </a>
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        {links.map((link) => (
          <a key={link.label} href={link.href} style={{ color: "hsl(var(--color-text-main))", textDecoration: "none", fontWeight: 500, fontSize: "0.95rem" }}>
            {link.label}
          </a>
        ))}
        <a href="#partner-with-us" className="btn-primary" style={{ padding: "0.6rem 1.5rem", fontSize: "0.9rem" }}>Partner with Us</a>
      </div>
    </nav>
  );
}
