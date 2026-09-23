import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import Button from './Button';

const phrases = ['Meets AI', 'Powered by AI', 'Creates Tomorrow', 'Builds Smarter'];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (textRef.current && window.gsap) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 18, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0)', stagger: 0.045, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [phraseIndex]);

  return (
    <section id="home" className="hero">
      <video autoPlay muted loop playsInline preload="metadata">
        <source src="/src/assets/videos/human-ai-hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-shade"></div>
      <div className="hero-copy reveal">
        <div className="eyebrow">AI · INNOVATION · IMPACT</div>
        <h1>
          Human Intelligence<br />
          <span id="heroDynamic" ref={textRef}>
            {[...phrases[phraseIndex]].map((char, index) => (
              <span key={index} style={{ display: 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
        </h1>
        <p>
          We build intelligent digital solutions that solve real problems<br />
          and create a smarter, more connected future.
        </p>
        <div className="actions">
          <Button href="#services" variant="dark" showArrow>
            Get Started
          </Button>
          <Button href="#home" variant="light" icon="◉">
            Watch Video
          </Button>
        </div>
      </div>
      <div className="stats">
        <div><b>50+</b><small>Projects Delivered</small></div>
        <div><b>20+</b><small>Global Clients</small></div>
        <div><b>3+</b><small>Years of Innovation</small></div>
        <div><b>100%</b><small>Commitment to Your Growth</small></div>
      </div>
    </section>
  );
}
