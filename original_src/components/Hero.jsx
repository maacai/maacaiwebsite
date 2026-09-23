import { useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import './Hero.css';

const floatingCards = [
  { label: 'AI SOLUTIONS', icon: 'brain', className: 'card--ai' },
  { label: 'DEVELOPMENT', icon: 'code', className: 'card--dev' },
  { label: 'ANALYTICS', icon: 'chart', className: 'card--analytics' },
  { label: 'CLOUD', icon: 'cloud', className: 'card--cloud' },
  { label: 'AUTOMATION', icon: 'settings', className: 'card--automation' },
  { label: 'SECURITY', icon: 'shield', className: 'card--security' },
];

export default function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const handleMove = (event) => {
    if (window.matchMedia('(max-width: 900px)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({ x: (event.clientX - rect.left) / rect.width - .5, y: (event.clientY - rect.top) / rect.height - .5 });
  };

  return (
    <section id="home" className="hero section-anchor" onMouseMove={handleMove} onMouseLeave={() => setPointer({ x: 0, y: 0 })}>
      <div className="hero__bg-shapes" aria-hidden="true"><div className="shape shape--1"/><div className="shape shape--2"/><div className="shape shape--3"/><div className="hero__grid"/></div>
      <div className="container hero__inner">
        <div className="hero__content">
          <Reveal variant="up"><p className="hero__tag"><span className="hero__tag-dot"/>AI AUTOMATION · INNOVATION</p></Reveal>
          <Reveal variant="up" delay={90}><h1 className="hero__title">Building Intelligent<br/><span className="hero__title--gradient">Digital Solutions</span><br/>for the Future.</h1></Reveal>
          <Reveal variant="up" delay={180}><p className="hero__desc">MAAC.AI Private Limited develops AI-powered software, SaaS platforms, automation solutions, web applications, mobile apps, and digital experiences that help businesses grow faster and smarter.</p></Reveal>
          <Reveal variant="up" delay={270}><div className="hero__actions"><a href="#contact" className="btn-primary hero__btn-primary">Get Started <Icon name="arrowRight" size={16}/></a><a href="#services" className="btn-outline"><span className="hero__play-icon"><Icon name="sparkles" size={13}/></span>Explore Services</a></div></Reveal>
          <Reveal variant="up" delay={350}><div className="hero__proof"><span><Icon name="shield" size={15}/>Secure</span><span><Icon name="zap" size={15}/>Fast delivery</span><span><Icon name="users" size={15}/>Expert team</span></div></Reveal>
        </div>
        <div className="hero__visual" style={{ '--px': `${pointer.x * 18}px`, '--py': `${pointer.y * 18}px` }}>
          <div className="hero__orb hero__orb--one"/><div className="hero__orb hero__orb--two"/>
          <div className="hero__img-wrap">
            <img src="/hero.jpg" alt="AI intelligent digital solutions" className="hero__img"/>
            <div className="hero__img-glow"/>
            <div className="hero__img-shine"/>
          </div>
          {floatingCards.map((card, index) => <div key={card.label} className={`hero-float-card ${card.className}`} style={{ '--delay': `${index * 180}ms` }}><span className="hero-float-card__icon"><Icon name={card.icon} size={17}/></span><span>{card.label}</span></div>)}
        </div>
      </div>
      <a href="#services" className="hero__scroll-cue" aria-label="Scroll to services"><span>Scroll to explore</span><Icon name="arrowUp" size={15} className="hero__scroll-icon"/></a>
    </section>
  );
}
