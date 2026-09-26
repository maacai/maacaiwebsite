import React from 'react';
import RevealWrapper from './RevealWrapper';

export default function AboutHero() {
  return (
    <div className="about-hero-full-container">
      <RevealWrapper variant="up">
        <img 
          src="/assets/images/about-full-hero2.jpg" 
          alt="About Us Hero Banner" 
          className="about-hero-full-img"
        />
      </RevealWrapper>
    </div>
  );
}
