import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import RevealWrapper from '../components/RevealWrapper';
import '../styles/service-details.css';

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <main className="service-detail-page not-found">
        <div className="sd-container text-center">
          <h1>Service Not Found</h1>
          <Link to="/services" className="sd-btn-secondary">← Back to Services</Link>
        </div>
      </main>
    );
  }

  document.title = `MAAC AI | ${service.title}`;

  return (
    <main className="service-detail-page">
      {/* 1. Hero Section */}
      <section className="sd-hero">
        <div className="sd-hero-bg" style={{ background: service.heroGradient }}></div>
        <div className="sd-hero-glow"></div>
        <div className="sd-container">
          <RevealWrapper variant="up" className="sd-hero-content">
            <Link to="/services" className="sd-back-link">← Back to Services</Link>
            <div className="sd-label" style={{ color: service.color, borderColor: `${service.color}40`, background: `${service.color}15` }}>
              <span className="sd-label-dot" style={{ background: service.color }}></span>
              {service.shortName} SERVICE
            </div>
            <h1 className="sd-title">{service.title}</h1>
            <p className="sd-tagline">{service.tagline}</p>
            <div className="sd-hero-actions">
              <Link to="/contact" className="sd-btn-primary" style={{ background: service.color, boxShadow: `0 8px 24px ${service.color}50` }}>
                Start a project <span className="arrow">→</span>
              </Link>
              <a href="#overview" className="sd-btn-secondary">
                Learn more
              </a>
            </div>
          </RevealWrapper>

          <RevealWrapper variant="up" delay={200} className="sd-hero-visual">
            <div className="sd-orb-container">
              <div className="sd-orb-core" style={{ background: service.color }}>
                 <span className="sd-orb-icon">{service.icon}</span>
              </div>
              <div className="sd-orb-ring ring-1" style={{ borderColor: `${service.color}50` }}></div>
              <div className="sd-orb-ring ring-2" style={{ borderColor: `${service.color}30` }}></div>
              
              <div className="sd-floating-chip chip-top" style={{ color: service.color }}>
                <span className="dot" style={{ background: service.color }}></span> {service.floatingTop}
              </div>
              <div className="sd-floating-chip chip-bottom" style={{ color: service.color }}>
                <span className="dot" style={{ background: service.color }}></span> {service.floatingBottom}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section id="overview" className="sd-overview">
        <div className="sd-container">
          <div className="sd-overview-grid">
            <RevealWrapper variant="left" className="sd-overview-text">
              <h2 className="sd-section-title">
                <span className="eyebrow" style={{ color: service.color }}>OVERVIEW</span>
                {service.overviewTitle}
              </h2>
              <p className="sd-lead">{service.overviewText}</p>
            </RevealWrapper>
            <RevealWrapper variant="right" delay={150} className="sd-metrics-grid">
              {service.metrics.map(([value, label, desc], idx) => (
                <div className="sd-metric-card" key={idx}>
                  <h3 className="sd-metric-value" style={{ color: service.color }}>{value}</h3>
                  <b className="sd-metric-label">{label}</b>
                  <p className="sd-metric-desc">{desc}</p>
                </div>
              ))}
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* 3. Capabilities Section */}
      <section className="sd-capabilities">
        <div className="sd-container">
          <RevealWrapper variant="up">
            <h2 className="sd-section-title text-center" style={{ margin: '0 auto 60px' }}>
              <span className="eyebrow" style={{ color: service.color }}>CAPABILITIES</span>
              Everything you need to scale
            </h2>
          </RevealWrapper>

          <div className="sd-cap-grid">
            {service.capabilities.map((cap, idx) => (
              <RevealWrapper variant="up" delay={idx * 80} key={idx}>
                <div className="sd-cap-card">
                  <div className="sd-cap-icon" style={{ color: service.color, background: `${service.color}15` }}>
                    {service.icon}
                  </div>
                  <h3 className="sd-cap-title">{cap.title}</h3>
                  <p className="sd-cap-desc">{cap.text}</p>
                  <div className="sd-cap-line" style={{ background: service.color }}></div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="sd-process">
        <div className="sd-container">
          <RevealWrapper variant="left">
            <h2 className="sd-section-title" style={{ marginBottom: '50px' }}>
              <span className="eyebrow" style={{ color: service.color }}>HOW WE WORK</span>
              A clear path from idea to impact.
            </h2>
          </RevealWrapper>

          <div className="sd-process-steps">
            {service.workflow.map(([step, title, text], idx) => (
              <RevealWrapper variant="up" delay={idx * 100} key={idx} className="sd-process-step">
                <div className="sd-step-number" style={{ color: service.color, background: `${service.color}15` }}>{step}</div>
                <div className="sd-step-content">
                  <h3 className="sd-step-title">{title}</h3>
                  <p className="sd-step-desc">{text}</p>
                </div>
                {idx !== service.workflow.length - 1 && <div className="sd-step-connector"></div>}
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits / Outcomes */}
      <section className="sd-outcomes">
        <div className="sd-container">
          <div className="sd-outcomes-wrapper" style={{ background: service.heroGradient }}>
            <RevealWrapper variant="up" className="sd-outcomes-header">
              <h2 className="sd-outcomes-title">Business Impact</h2>
              <p className="sd-outcomes-lead">Built to create outcomes, not just deliverables.</p>
            </RevealWrapper>

            <div className="sd-outcomes-list">
              {service.outcomes.map((outcome, idx) => (
                <RevealWrapper variant="up" delay={idx * 100} key={idx}>
                  <div className="sd-outcome-item">
                    <div className="sd-outcome-check">✓</div>
                    <p>{outcome}</p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="sd-cta">
        <div className="sd-container">
          <RevealWrapper variant="up">
            <div className="sd-cta-card">
              <h2 className="sd-cta-title">Ready to build your {service.shortName} solution?</h2>
              <p className="sd-cta-desc">Let's discuss how our expertise can accelerate your business growth.</p>
              <Link to="/contact" className="sd-btn-primary" style={{ background: service.color }}>
                Get in Touch <span className="arrow">→</span>
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </main>
  );
}
