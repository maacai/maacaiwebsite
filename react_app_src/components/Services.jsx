import React from 'react';
import { services } from '../data/websiteData';

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="eyebrow">WHAT WE DO</div>
      <h2>Transforming Ideas Into <em>Intelligent Solutions</em></h2>
      <p className="lead">
        We combine AI, technology, and creativity to build digital solutions that help businesses grow, automate, and lead in the future.
      </p>
      <div className="service-grid">
        {services.map(([icon, name, desc], idx) => (
          <a key={idx} href="#" className={`service-card service-${idx + 1}`} aria-label={name}>
            <div className="ico">
              <span>{icon}</span>
            </div>
            <div className="service-copy">
              <b>{name}</b>
              <p>{desc}</p>
            </div>
            <span className="service-arrow" aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
