import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { industries } from '../data/industries';
import RevealWrapper from '../components/RevealWrapper';

export default function IndustryDetailPage() {
  const { id } = useParams();
  const industry = industries.find(ind => ind.name.toLowerCase().replace(/\s+/g, '-') === id);

  if (!industry) {
    return (
      <main className="service-detail-page service-detail-page--not-found">
        <div className="service-detail-container">
          <div className="service-detail-not-found">
            <p className="service-detail-section-tag">INDUSTRY NOT FOUND</p>
            <h1>We couldn't find that industry.</h1>
            <p>Please return to the industries directory.</p>
            <Link to="/industries" className="service-detail-primary-button">
              Back to industries →
            </Link>
          </div>
        </div>
      </main>
    );
  }

  document.title = `MAAC AI | ${industry.name}`;

  const color = '#3b82f6';
  const heroGradient = `linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)`;

  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-hero__inner">
          <div className="service-detail-hero__content">
            <Link to="/industries" className="service-detail-back">
              ← Back to Industries
            </Link>
            <div className="service-detail-kicker">
              <span style={{ background: color }}></span>
              <span style={{ color: color }}>Industry</span>
            </div>
            <h1>{industry.name}</h1>
            <p className="service-detail-hero__description">
              MAAC AI creates intelligent solutions for the {industry.name.toLowerCase()} sector focused on automation and measurable business outcomes.
            </p>
            <div className="service-detail-hero__actions">
              <Link to="/contact" className="service-detail-primary-button" style={{ background: color }}>
                Discuss your needs
              </Link>
            </div>
          </div>
          <div className="service-detail-visual">
            <div className="service-detail-visual__window">
              <div className="service-detail-visual__glow" style={{ background: heroGradient }}></div>
            </div>
            <div className="service-detail-visual__icon" style={{ background: color }}>
              <span style={{ fontSize: '32px' }}>{industry.icon}</span>
            </div>
            <div className="service-detail-visual__orbit service-detail-visual__orbit--one"></div>
            <div className="service-detail-visual__orbit service-detail-visual__orbit--two"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
