import React from 'react';
import Button from './Button';

export default function Beyond() {
  return (
    <section className="beyond">
      <div className="beyond-copy reveal">
        <div className="eyebrow">GO BEYOND</div>
        <h2>
          Deeper Technology<br />
          <em>Greater Possibilities</em>
        </h2>
        <p>
          We don't just build solutions, we uncover opportunities.<br />
          Like an iceberg, the real potential lies beneath the surface.
        </p>
      </div>
      <div className="ice-media">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src="/src/assets/videos/floating-ice.mp4" type="video/mp4" />
        </video>
      </div>
      <Button href="#services" variant="dark" showArrow>
        Explore Our Approach
      </Button>
    </section>
  );
}
