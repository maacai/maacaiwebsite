import React, { useState } from 'react';
import Button from './Button';
import RevealWrapper from './RevealWrapper';

/**
 * Map pin button with hover/focus/click toggling the label tooltip.
 */
function Pin({ className, label, place }) {
  const [active, setActive] = useState(false);

  return (
    <button
      className={`pin ${className}${active ? ' active' : ''}`}
      type="button"
      aria-label={label}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      onClick={() => setActive(prev => !prev)}
    >
      <i aria-hidden="true" />
      <span>{place}</span>
    </button>
  );
}

const CONTACT_CARDS = [
  {
    icon: '●',
    title: 'Our Office',
    lines: ['MAAC AI Technologies Pvt. Ltd.', 'Sector 62, Noida, Uttar Pradesh 201309, India'],
  },
  {
    icon: '✉',
    title: 'Email Us',
    lines: ['hello@maacai.com', 'info@maacai.com'],
  },
  {
    icon: '●',
    title: 'Call Us',
    lines: ['+91 120 456 7890', '+91 987 654 3210'],
  },
];

const CONTACT_STATS = [
  { value: '50+',  label: 'Global Clients' },
  { value: '20+',  label: 'Countries Served' },
  { value: '3+',   label: 'Years of Innovation' },
  { value: '100%', label: 'Client Satisfaction' },
];

const MAP_PINS = [
  { className: 'map-delhi',   label: 'Delhi',                          place: 'Delhi · 25 min' },
  { className: 'map-noida',   label: 'Noida',                          place: 'Noida · 5 min' },
  { className: 'map-greater', label: 'Greater Noida',                  place: 'Greater Noida · 20 min' },
  { className: 'map-airport', label: 'Indira Gandhi International Airport', place: 'Airport · 40 min' },
  { className: 'map-yamuna',  label: 'Yamuna Expressway',              place: 'Yamuna Expressway · 15 min' },
  { className: 'map-office',  label: 'MAAC AI Office',                 place: 'MAAC AI · Sector 62, Noida' },
];

export default function Contact() {
  return (
    <section id="contact" className="smart section" aria-label="Contact and location">
      {/* Left copy column */}
      <RevealWrapper variant="left" className="smart-copy">
        <div className="eyebrow">OUR LOCATION</div>
        <h2>
          Let's Build a Smarter<br />
          Tomorrow, <em>Together</em>
        </h2>
        <p>Visit our office or get in touch — we'd love to hear from you.</p>

        {/* Contact cards */}
        <div className="contact-cards">
          {CONTACT_CARDS.map(({ icon, title, lines }) => (
            <div key={title}>
              <span className="contact-icon" aria-hidden="true">{icon}</span>
              <span>
                <b>{title}</b>
                <small>
                  {lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </small>
              </span>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="actions">
          <Button href="mailto:hello@maacai.com" variant="accent" showArrow>
            Get in Touch&nbsp;
          </Button>
          <Button href="https://maps.google.com/?q=Sector+62+Noida" variant="light">
            View on Google Maps&nbsp; ↗
          </Button>
        </div>

        {/* Stats */}
        <div className="contact-stats" role="list" aria-label="Company statistics">
          {CONTACT_STATS.map(({ value, label }) => (
            <div key={label} role="listitem">
              <b>{value}</b>
              <small>{label}</small>
            </div>
          ))}
        </div>
      </RevealWrapper>

      {/* Right map column */}
      <RevealWrapper variant="right" className="map" id="map" aria-label="Interactive MAAC AI location map">
        {MAP_PINS.map(pin => (
          <Pin key={pin.className} {...pin} />
        ))}
        <div className="map-search" aria-label="Office address">
          ⌖&nbsp;&nbsp; Sector 62, Noida, Uttar Pradesh 201309, India&nbsp;&nbsp;⌕
        </div>
      </RevealWrapper>
    </section>
  );
}
