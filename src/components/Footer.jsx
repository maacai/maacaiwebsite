import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const COMPANY_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '#' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const SERVICE_LINKS = [
  { label: 'Artificial Intelligence', href: '/services/artificial-intelligence' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'Automation', href: '/services/automation' },
  { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
  { label: 'UI/UX Design', href: '/services/ui-ux-design' },
];

const PRODUCT_LINKS = [
  { label: 'Mine Healer', href: '/products/mine-healer' },
  { label: 'AI CRM', href: '/products/ai-crm' },
  { label: 'AI HRMS', href: '/products/ai-hrms' },
  { label: 'AI ERP', href: '/products/ai-erp' },
  { label: 'AI Recruiter', href: '/products/ai-recruiter' },
];

const SOCIAL_LINKS = [
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.257 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="site-footer" role="contentinfo">
      {/* Top gradient accent bar */}
      <div className="footer-top-bar" aria-hidden="true" />

      <div className="footer-inner">
        {/* Brand column */}
        <div className="footer-brand-col">
          <Link className="footer-logo-link" to="/" aria-label="MAAC AI Home">
            <img src="/assets/images/maac-ai-logo.png" alt="MAAC AI" className="footer-logo-img" />
          </Link>
          <p className="footer-brand-desc">
            Intelligent Solutions for a Smarter Tomorrow. We build AI-powered products,
            software and digital solutions that drive business growth.
          </p>
          <div className="footer-social" aria-label="Social media links">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a key={label} href={href} className="footer-social-btn" aria-label={label}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className="footer-nav-col">
          <h4 className="footer-col-heading">Company</h4>
          <ul className="footer-link-list">
            {COMPANY_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link to={href} className="footer-nav-link">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-nav-col">
          <h4 className="footer-col-heading">Services</h4>
          <ul className="footer-link-list">
            {SERVICE_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link to={href} className="footer-nav-link">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="footer-nav-col">
          <h4 className="footer-col-heading">Products</h4>
          <ul className="footer-link-list">
            {PRODUCT_LINKS.map(({ label }) => (
              <li key={label}>
                <span className="footer-nav-link footer-nav-link--static">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter-col">
          <h4 className="footer-col-heading">Newsletter</h4>
          <p className="footer-newsletter-desc">
            Get the latest updates, product launches and AI insights.
          </p>
          {subscribed ? (
            <div className="footer-subscribed-msg">
              ✓ You're subscribed! Welcome aboard.
            </div>
          ) : (
            <form className="footer-newsletter-form" onSubmit={handleNewsletter} aria-label="Newsletter signup">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address for newsletter"
              />
              <button type="submit" aria-label="Subscribe">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </form>
          )}
          <p className="footer-newsletter-note">No spam. Unsubscribe anytime.</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-bar">
        <span className="footer-copyright">© 2026 MAAC AI. All rights reserved.</span>
        <div className="footer-legal-links">
          <a href="#">Privacy Policy</a>
          <span className="footer-dot" aria-hidden="true">·</span>
          <a href="#">Terms of Service</a>
          <span className="footer-dot" aria-hidden="true">·</span>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
