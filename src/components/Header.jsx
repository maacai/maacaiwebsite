import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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
      <Link className="brand brand-logo" to="/" aria-label="MAAC AI – Home" onClick={closeMenu}>
        <img src="/assets/images/maac-ai-logo.png" alt="MAAC AI" />
      </Link>

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
        {NAV_LINKS.map(({ label, href }) => {
          // Determine if this nav item should be highlighted
          // e.g., /services/ai should highlight Services
          let isActive = location.pathname === href;
          if (href !== '/' && location.pathname.startsWith(href)) {
            isActive = true;
          }
          return (
            <Link 
              key={label} 
              to={href} 
              className={isActive ? 'nav-active' : ''}
              onClick={closeMenu}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <Button href="/contact" variant="dark" showArrow className="lets-talk-btn" onClick={closeMenu}>
        Let's Talk
      </Button>
    </header>
  );
}

