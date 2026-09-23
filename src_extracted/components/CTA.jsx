import './CTA.css';

export default function CTA() {
  return (
    <section id="consultation" className="cta-section">
      <div className="cta-section__bg" />
      <div className="container cta-section__inner">
        <div className="cta-section__content">
          <p className="cta-section__label">READY TO GET STARTED?</p>
          <h2 className="cta-section__title">
            Let&apos;s Build Something<br />
            <span className="cta-section__title--white">Amazing Together</span>
          </h2>
          <p className="cta-section__desc">
            Share your idea with us and let our experts turn it into a powerful digital solution.
          </p>
          <div className="cta-section__actions">
            <a href="#contact" className="cta-btn-primary">
              Book Free Consultation →
            </a>
            <a href="#contact" className="cta-btn-outline">
              Contact Us ↓
            </a>
          </div>
        </div>
        <div className="cta-section__rocket">
          <div className="rocket-wrapper">
            <div className="rocket">🚀</div>
            <div className="rocket-trail" />
          </div>
        </div>
      </div>
    </section>
  );
}
