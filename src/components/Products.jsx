import React from 'react';
import { products } from '../data/products';
import Button from './Button';
import RevealWrapper from './RevealWrapper';

export default function Products() {
  const featuredProduct = products[0]; // Mine Healer
  const futureProducts = products.slice(1, 9); // Limit to grid size

  return (
    <section id="products" className="section products" aria-label="Featured Products">
      <div className="products-container">
        {/* Left Side: Featured Product */}
        <RevealWrapper variant="left" className="featured-product-card">
          <div className="featured-content">
            <div className="tiny">FEATURED PRODUCT</div>
            <h3>
              {featuredProduct.name.split(' ')[0]} <span>{featuredProduct.name.split(' ')[1]}</span>
            </h3>
            <b className="featured-sub">{featuredProduct.sub}</b>
            <p>{featuredProduct.desc}</p>
            <Button href="/products/mine-healer" variant="accent" showArrow style={{ background: '#ee3b9a', borderColor: '#ee3b9a' }}>
              Learn More&nbsp;&nbsp;
            </Button>
          </div>
          
          <div className="featured-visual">
            <div className="phone-mockup">
              <div className="phone-notch"></div>
              <b style={{ marginTop: '10px' }}>{featuredProduct.icon} {featuredProduct.name}</b>
              <p>How are you feeling today?</p>
              <div className="phone-card">
                Talk to a<br /><b>Professional</b>
              </div>
              <div className="phone-btn">
                Book Session
              </div>
            </div>
            {/* Floating icons around phone */}
            <div className="floating-icon icon-1">♡</div>
            <div className="floating-icon icon-2">✧</div>
            <div className="floating-icon icon-3">☺</div>
          </div>
        </RevealWrapper>

        {/* Right Side: Future Products */}
        <div className="future-products-section">
          <RevealWrapper variant="right" className="future-header">
            <div className="future-top">
              <span className="eyebrow" style={{ color: '#4058ff' }}>FUTURE PRODUCTS</span>
              <span className="concept-pill">10+ concepts</span>
            </div>
            <h2>Intelligent products,<br/>ready to scale.</h2>
          </RevealWrapper>

          <RevealWrapper variant="up" delay={200} className="future-grid">
            {futureProducts.map((prod, i) => (
              <div key={i} className="future-card">
                <i>{prod.icon}</i>
                <b>{prod.name}</b>
                <span className="arrow">→</span>
              </div>
            ))}
          </RevealWrapper>

          <RevealWrapper variant="up" delay={400} className="future-footer">
            <a href="/products" className="view-all-link">View all products →</a>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
