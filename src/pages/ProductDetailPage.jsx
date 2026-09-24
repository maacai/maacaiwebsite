import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import RevealWrapper from '../components/RevealWrapper';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === id);

  if (!product) {
    return (
      <main className="service-detail-page service-detail-page--not-found">
        <div className="service-detail-container">
          <div className="service-detail-not-found">
            <p className="service-detail-section-tag">PRODUCT NOT FOUND</p>
            <h1>We couldn't find that product.</h1>
            <p>Please return to the products directory and choose a product.</p>
            <Link to="/products" className="service-detail-primary-button">
              Back to products →
            </Link>
          </div>
        </div>
      </main>
    );
  }

  document.title = `MAAC AI | ${product.name}`;

  // Define some colors and gradients based on product data (since they don't have it natively)
  const productColors = ['#3858ff', '#f43f5e', '#10b981', '#8b5cf6', '#0ea5e9'];
  const color = productColors[products.indexOf(product) % productColors.length];
  const heroGradient = `linear-gradient(135deg, ${color}33 0%, ${color} 100%)`;

  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-hero__inner">
          <div className="service-detail-hero__content">
            <Link to="/products" className="service-detail-back">
              ← Back to Products
            </Link>
            <div className="service-detail-kicker">
              <span style={{ background: color }}></span>
              <span style={{ color: color }}>Product</span>
            </div>
            <h1>{product.name}</h1>
            <p className="service-detail-hero__description">{product.sub}</p>
            <div className="service-detail-hero__actions">
              <Link to="/contact" className="service-detail-primary-button" style={{ background: color }}>
                Request Demo
              </Link>
              <Link to="/products" className="service-detail-secondary-button">
                Explore others
              </Link>
            </div>
          </div>
          <div className="service-detail-visual">
            <div className="service-detail-visual__window">
              <div className="service-detail-visual__glow" style={{ background: heroGradient }}></div>
            </div>
            <div className="service-detail-visual__icon" style={{ background: color }}>
              <span style={{ fontSize: '32px' }}>{product.icon}</span>
            </div>
            <div className="service-detail-visual__orbit service-detail-visual__orbit--one"></div>
            <div className="service-detail-visual__orbit service-detail-visual__orbit--two"></div>
          </div>
        </div>
      </section>

      <section className="service-detail-overview section-anchor">
        <div className="service-detail-container">
          <div className="service-detail-overview__grid">
            <RevealWrapper variant="left">
              <div className="service-detail-overview__heading">
                <p className="service-detail-section-tag">OVERVIEW</p>
                <h2>Empower your workflow with {product.name}.</h2>
              </div>
            </RevealWrapper>
            <RevealWrapper variant="right" delay={100}>
              <div className="service-detail-overview__copy">
                <p>{product.desc}</p>
                <div className="service-detail-overview__accent" style={{ background: color }}></div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>
      
      <section className="service-detail-cta">
        <div className="service-detail-container">
          <RevealWrapper>
            <div className="service-detail-cta__box">
              <div className="service-detail-cta__orb"></div>
              <div className="service-detail-cta__content">
                <p className="service-detail-section-tag">GET STARTED</p>
                <h2>
                  Ready to integrate {product.name}?<br />
                  Let's make it happen.
                </h2>
                <Link to="/contact" className="service-detail-primary-button" style={{ background: color, color: '#fff', border: 'none' }}>
                  Contact Sales →
                </Link>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </main>
  );
}
