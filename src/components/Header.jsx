import React, { useState, useEffect } from 'react';
import Button from './Button';

const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Products', href: '/#products' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (!e.target.closest('.header')) setMenuOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header" role="banner">
      <a className="brand brand-logo" href="#home" aria-label="MAAC AI – Home">
        <img src="/assets/images/maac-ai-logo.png" alt="MAAC AI" />
      </a>

      <button
        className="menu"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        onClick={() => setMenuOpen(prev => !prev)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav id="main-nav" className={menuOpen ? 'open' : ''} aria-label="Main navigation">
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
      </nav>

      <Button href="#contact" variant="dark" showArrow className="lets-talk-btn" onClick={closeMenu}>
        Let's Talk
      </Button>
    </header>
  );
}

