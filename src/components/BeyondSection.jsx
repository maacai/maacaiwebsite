import React from 'react';
import Button from './Button';
import RevealWrapper from './RevealWrapper';
import iceVideo from '../assets/videos/floating-ice.mp4';

export default function BeyondSection() {
  return (
    <section className="beyond" aria-label="Go Beyond section">
      <RevealWrapper variant="up" className="beyond-copy">
        <div className="eyebrow section-pill">GO BEYOND</div>
        <h2>
          Deeper Technology<br />
          <em>Greater Possibilities</em>
        </h2>
        <p>
          We don't just build solutions, we uncover opportunities.<br />
          Like an iceberg, the real potential lies beneath the surface.
        </p>
      </RevealWrapper>

      <div className="ice-media" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={iceVideo} type="video/mp4" />
        </video>
      </div>

      <RevealWrapper variant="up" delay={200}>
        <Button href="/services" variant="dark" showArrow>
          Explore Our Approach
        </Button>
      </RevealWrapper>
    </section>
  );
}
