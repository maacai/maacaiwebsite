import React, { useState } from 'react';

const COMPANY_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Careers', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '/#contact' },
];

const SERVICE_LINKS = [
  { label: 'Artificial Intelligence', href: '/#services' },
  { label: 'Web Development', href: '/#services' },
  { label: 'Automation', href: '/#services' },
  { label: 'Cloud Solutions', href: '/#services' },
  { label: 'AI Agents', href: '/#services' },
];

const PRODUCT_LINKS = [
  { label: 'Mine Healer', href: '#products' },
  { label: 'Daily Need AI', href: '#products' },
  { label: 'AI CRM', href: '#products' },
  { label: 'AI ERP', href: '#products' },
  { label: 'AI Recruiter', href: '#products' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setEmail('');
      // In production this would call an API
      alert(`Thank you! You've subscribed with ${email}`);
    }
  };

  return (
    <footer role="contentinfo">
      <div className="footer-grid">
        {/* Brand column */}
        <div>
          <a className="brand footer-brand brand-logo" href="#home" aria-label="MAAC AI Home">
            <img src="/assets/images/maac-ai-logo.png" alt="MAAC AI" />
          </a>
          <p>
            Intelligent Solutions for a Smarter Tomorrow. We build AI-powered products,
            software and digital solutions that drive business growth.
          </p>
          <div className="social" aria-label="Social media links">
            <a href="#" aria-label="Twitter">◎</a>{' '}
            <a href="#" aria-label="LinkedIn">◉</a>{' '}
            <a href="#" aria-label="Instagram">◇</a>{' '}
            <a href="#" aria-label="YouTube">◌</a>
          </div>
        </div>

        {/* Company links */}
        <div>
          <b>Company</b>
          {COMPANY_LINKS.map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>

        {/* Services links */}
        <div>
          <b>Services</b>
          {SERVICE_LINKS.map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>

        {/* Products links */}
        <div>
          <b>Products</b>
          {PRODUCT_LINKS.map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <b>Newsletter</b>
          <p>Get the latest updates, product launches and AI insights.</p>
          <form className="newsletter" onSubmit={handleNewsletter} aria-label="Newsletter signup">
            <input
              type="email"
              aria-label="Email address for newsletter"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" aria-label="Subscribe">→</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 MAAC AI. All rights reserved.</span>
        <span>
          <a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a> · <a href="#">Cookie Policy</a>
        </span>
      </div>
    </footer>
  );
}

