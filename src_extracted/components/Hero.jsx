import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg-shapes">
        <div className="shape shape--1" />
        <div className="shape shape--2" />
        <div className="shape shape--3" />
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__tag">AI AUTOMATION · INNOVATION</p>
          <h1 className="hero__title">
            Building Intelligent <br />
            <span className="hero__title--gradient">Digital Solutions</span><br />
            for the Future.
          </h1>
          <p className="hero__desc">
            MAAC.AI Private Limited develops AI-powered software, SaaS platforms, automation solutions,
            web applications, mobile apps, and digital experiences that help businesses grow faster and smarter.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn-primary hero__btn-primary">
              Get Started <span>→</span>
            </a>
            <a href="#services" className="btn-outline">
              <span className="hero__play-icon">▶</span>
              Explore Services
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__img-wrap animate-float">
            <img src="/hero.jpg" alt="AI Intelligent Solutions" className="hero__img" />
            <div className="hero__img-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
