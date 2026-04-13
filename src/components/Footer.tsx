import React from 'react';
import { FaXTwitter, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="grid-2" style={{ textAlign: "left", marginBottom: "3rem" }}>
        <div>
          <h3 style={{ color: "hsl(var(--color-text-main))" }}>Ecuador Tierra Viva Foundation</h3>
          <p>
            Working to improve the quality of life in Ecuador since our founding. 
            Join us in building a sustainable and culturally rich future.
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <h3 style={{ color: "hsl(var(--color-text-main))" }}>Get in Touch</h3>
          <p>Phone: +593 988 500 314</p>
          <p>Email: info@ecuador-tierraviva.org</p>
          <p>Location: Vicente Ramon Roca E8-18 y 6 de diciembre. 4B</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <a href="https://x.com/ETV_foundation" target="_blank" rel="noreferrer" style={{ color: 'hsl(var(--color-text-main))', fontSize: '1.2rem' }} aria-label="X (Twitter)"><FaXTwitter /></a>
            <a href="https://www.instagram.com/ecuador_tierraviva/" target="_blank" rel="noreferrer" style={{ color: 'hsl(var(--color-text-main))', fontSize: '1.2rem' }} aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.facebook.com/ecuadortierravivaorg/" target="_blank" rel="noreferrer" style={{ color: 'hsl(var(--color-text-main))', fontSize: '1.2rem' }} aria-label="Facebook"><FaFacebookF /></a>
            <a href="http://tiktok.com/@ecuadortierraviva" target="_blank" rel="noreferrer" style={{ color: 'hsl(var(--color-text-main))', fontSize: '1.2rem' }} aria-label="TikTok"><FaTiktok /></a>
          </div>
        </div>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} Ecuador Tierra Viva Foundation. All rights reserved.</p>
        <p style={{ fontSize: "0.8rem", marginTop: "0.5rem", opacity: 0.5 }}>Archived executed projects preserved for historical record.</p>
      </div>
    </footer>
  );
}
