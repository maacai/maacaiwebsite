import React, { useState } from 'react';
import { industries } from '../data/industries';
import RevealWrapper from './RevealWrapper';

export default function Industries({ openModal, isHomePage = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const selectedIndustry = industries[activeIndex] || industries[0];

  return (
    <section id="industries" className={`section industries-new ${!isHomePage ? 'about-page' : ''}`} aria-label="Industries we empower">
      {!isHomePage ? (
        <div style={{ width: '100%', marginBottom: '80px', marginTop: '20px' }}>
          <RevealWrapper variant="up">
            <img 
              src="/assets/images/industries-hero-banner.png" 
              alt="Industries Hero Banner" 
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '24px' }} 
            />
          </RevealWrapper>
        </div>
      ) : (
        <RevealWrapper variant="up">
          <div className="eyebrow">INDUSTRIES WE EMPOWER</div>
          <h2>We Serve a Wide Range of <em>Industries</em></h2>
          <p className="lead">
            Innovative solutions tailored for every industry, helping businesses transform,
            grow, and stay ahead in a digital world.
          </p>
        </RevealWrapper>
      )}

      <RevealWrapper variant="up" delay={200}>
        <div className="industry-grid-layout">
          <div className="industry-grid-list">
            {industries.map(({ icon, name }, idx) => (
              <button 
                key={idx}
                className={`industry-grid-btn ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Select ${name} industry`}
              >
                <div className="icon-box">
                  <i aria-hidden="true">{icon}</i>
                </div>
                <span>{name}</span>
                <span className="arrow">→</span>
              </button>
            ))}
          </div>

          <div className="industry-grid-panel">
            <div className="panel-icon" data-color={activeIndex % 4}>
              <i aria-hidden="true">{selectedIndustry.icon}</i>
            </div>
            <div className="eyebrow">SELECTED INDUSTRY</div>
            <h3>{selectedIndustry.name}</h3>
            <p>Learn more about our innovative {selectedIndustry.name} solutions.</p>
            <button 
              className="panel-link"
              onClick={() => {
                if (openModal) {
                  openModal(selectedIndustry.name, `Learn more about our innovative ${selectedIndustry.name} solutions.`);
                }
              }}
            >
              Build for {selectedIndustry.name} <span>→</span>
            </button>
            <div className="industry-grid-bars" aria-hidden="true">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
