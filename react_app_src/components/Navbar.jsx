import React, { useState } from 'react';
import Button from './Button';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <a className="brand brand-logo" href="#home" aria-label="MAAC AI Home">
        <img src="/src/assets/images/maac-ai-logo.png" alt="MAAC AI" />
      </a>
      <button className="menu" aria-label="Toggle menu" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={menuOpen ? 'open' : ''}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
        <a href="#industries" onClick={() => setMenuOpen(false)}>Industries</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Blog</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
      <Button href="#contact" variant="dark" showArrow>
        Let's Talk
      </Button>
    </header>
  );
}
