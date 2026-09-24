import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import RevealWrapper from '../components/RevealWrapper';

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <main className="service-detail-page service-detail-page--not-found">
        <div className="service-detail-container">
          <div className="service-detail-not-found">
            <p className="service-detail-section-tag">SERVICE NOT FOUND</p>
            <h1>We couldn't find that service.</h1>
            <p>Please return to the services directory and choose a service.</p>
            <Link to="/services" className="service-detail-primary-button">
              Back to services →
            </Link>
          </div>
        </div>
      </main>
    );
  }

  document.title = `MAAC AI | ${service.title}`;

  return (
    <main className="service-detail-page">
      {/* ── Hero Section ── */}
      <section className="service-detail-hero">
        <div className="service-detail-hero__inner">
          <div className="service-detail-hero__content">
            <Link to="/services" className="service-detail-back">
              ← Back to Services
            </Link>
            <div className="service-detail-kicker">
              <span style={{ background: service.color }}></span>
              <span style={{ color: service.color }}>{service.shortName}</span>
            </div>
            <h1>{service.title}</h1>
            <p className="service-detail-hero__description">{service.tagline}</p>
            <div className="service-detail-hero__actions">
              <Link to="/contact" className="service-detail-primary-button" style={{ background: service.color }}>
                Start a project
              </Link>
              <Link to="/services" className="service-detail-secondary-button">
                Explore others
              </Link>
            </div>
          </div>
          <div className="service-detail-visual">
            <div className="service-detail-visual__window">
              <div className="service-detail-visual__glow" style={{ background: service.heroGradient }}></div>
            </div>
            <div className="service-detail-visual__icon" style={{ background: service.color }}>
              <span style={{ fontSize: '32px' }}>{service.icon}</span>
            </div>
            <div className="service-detail-visual__orbit service-detail-visual__orbit--one"></div>
            <div className="service-detail-visual__orbit service-detail-visual__orbit--two"></div>
            <div className="service-detail-visual__floating service-detail-visual__floating--top">
              <span style={{ background: service.color }}></span> {service.floatingTop}
            </div>
            <div className="service-detail-visual__floating service-detail-visual__floating--bottom">
              <span style={{ background: service.color }}></span> {service.floatingBottom}
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview Section ── */}
      <section className="service-detail-overview section-anchor">
        <div className="service-detail-container">
          <div className="service-detail-overview__grid">
            <RevealWrapper variant="left">
              <div className="service-detail-overview__heading">
                <p className="service-detail-section-tag">WHY IT MATTERS</p>
                <h2>{service.overviewTitle}</h2>
              </div>
            </RevealWrapper>
            <RevealWrapper variant="right" delay={100}>
              <div className="service-detail-overview__copy">
                <p>{service.overviewText}</p>
                <div className="service-detail-overview__accent" style={{ background: service.color }}></div>
              </div>
            </RevealWrapper>
          </div>

          <div className="service-detail-metrics">
            {service.metrics.map(([value, label, desc], idx) => (
              <RevealWrapper variant="up" delay={idx * 80} key={label}>
                <article className="service-detail-metric">
                  <span className="service-detail-metric__number" style={{ color: service.color }}>{value}</span>
                  <div>
                    <h3>{label}</h3>
                    <p>{desc}</p>
                  </div>
                </article>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities Section ── */}
      <section className="service-detail-capabilities">
        <div className="service-detail-container">
          <RevealWrapper>
            <div className="service-detail-section-heading">
              <div>
                <p className="service-detail-section-tag">CAPABILITIES</p>
                <h2>Everything you need to move forward.</h2>
              </div>
              <span className="service-detail-section-number">{service.capabilities.length} / 08</span>
            </div>
          </RevealWrapper>

          <div className="service-detail-capabilities-grid">
            {service.capabilities.map((cap, idx) => (
              <RevealWrapper variant="up" delay={idx * 65} key={cap.title}>
                <article className="service-detail-capability-card">
                  <div className="service-detail-capability-card__number" style={{ color: service.color }}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="service-detail-capability-card__icon">
                    <span>{service.icon}</span>
                  </div>
                  <h3>{cap.title}</h3>
                  <p>{cap.text}</p>
                  <span className="service-detail-capability-card__line" style={{ background: service.color }}></span>
                </article>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Section ── */}
      <section className="service-detail-process section-anchor">
        <div className="service-detail-container">
          <RevealWrapper>
            <div className="service-detail-section-heading service-detail-section-heading--process">
              <div>
                <p className="service-detail-section-tag">OUR APPROACH</p>
                <h2>A clear path from idea to impact.</h2>
              </div>
              <p>We keep every engagement structured, transparent and focused on measurable progress.</p>
            </div>
          </RevealWrapper>

          <div className="service-detail-process-list">
            {service.workflow.map(([step, title, text], idx) => (
              <RevealWrapper variant={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 60} key={title}>
                <article className="service-detail-process-item">
                  <span className="service-detail-process-item__step" style={{ color: service.color }}>
                    {step}
                  </span>
                  <div className="service-detail-process-item__body">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <span className="service-detail-process-item__indicator" style={{ background: service.color }}></span>
                </article>
              </RevealWrapper>
            ))}
          </div>

          <div className="service-detail-impact">
            <RevealWrapper variant="left">
              <div className="service-detail-impact__intro">
                <p className="service-detail-section-tag">BUSINESS IMPACT</p>
                <h2>Built to create outcomes, not just deliverables.</h2>
                <p>Technology only matters when it improves something meaningful for the business and its users.</p>
              </div>
            </RevealWrapper>
            <RevealWrapper variant="right" delay={100}>
              <div className="service-detail-impact__list">
                {service.outcomes.map((outcome, idx) => (
                  <div className="service-detail-impact__item" key={idx}>
                    <span className="service-detail-impact__number" style={{ color: service.color }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{outcome}</span>
                    <span style={{ color: service.color }}>→</span>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="service-detail-cta">
        <div className="service-detail-container">
          <RevealWrapper>
            <div className="service-detail-cta__box">
              <div className="service-detail-cta__orb"></div>
              <div className="service-detail-cta__content">
                <p className="service-detail-section-tag">LET'S BUILD</p>
                <h2>
                  Have a {service.shortName.toLowerCase()} challenge?<br />
                  Let's turn it into something useful.
                </h2>
                <p>Tell us what you are trying to build, improve or automate. We'll help you identify the right direction.</p>
                <Link to="/contact" className="service-detail-primary-button" style={{ background: service.color, color: '#fff', border: 'none' }}>
                  Talk to MAAC.AI →
                </Link>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </main>
  );
}
