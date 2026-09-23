import React, { useState, useRef, useEffect } from 'react';
import { products } from '../data/products';
import Button from './Button';
import RevealWrapper from './RevealWrapper';

/**
 * Split a product name so the last word(s) get the pink accent colour,
 * matching the original website's product heading style.
 */
function splitProductName(product) {
  const words = product.name.split(' ');
  if (product.accent) {
    const accentIdx = product.name.indexOf(product.accent);
    if (accentIdx > 0) {
      return {
        main: product.name.slice(0, accentIdx).trim(),
        highlight: product.accent,
      };
    }
  }
  // Default: first word plain, rest highlighted
  return { main: words[0], highlight: words.slice(1).join(' ') };
}

export default function Products() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const featureRef = useRef(null);

  const selectProduct = (idx) => {
    const next = ((idx % products.length) + products.length) % products.length;
    setSelectedIdx(next);
  };

  // Slide-in animation on product change
  useEffect(() => {
    if (featureRef.current) {
      featureRef.current.animate(
        [
          { opacity: 0.35, transform: 'translateX(-12px)' },
          { opacity: 1, transform: 'none' },
        ],
        { duration: 350, easing: 'ease-out' }
      );
    }
  }, [selectedIdx]);

  const p = products[selectedIdx];
  const { main, highlight } = splitProductName(p);
  // Sidebar list excludes the currently featured product
  const sidebarProducts = products.filter((_, i) => i !== selectedIdx);

  return (
    <section id="products" className="section products" aria-label="Featured Products">
      <RevealWrapper variant="up">
        <div className="eyebrow">FEATURED PRODUCTS</div>
        <h2>Our <em>AI-Driven Products</em></h2>
        <p className="lead">Innovative products designed to make everyday life and business smarter.</p>
      </RevealWrapper>

      <RevealWrapper variant="up" delay={200} className="product-stage">
        {/* Previous button */}
        <button
          className="product-nav product-prev"
          aria-label="Previous product"
          onClick={() => selectProduct(selectedIdx - 1)}
        >
          ←
        </button>

        <div className="product-shell">
          {/* Feature panel */}
          <article
            className="product-feature"
            ref={featureRef}
            aria-label={`Featured: ${p.name}`}
          >
            <div className="tiny">FEATURED PRODUCT</div>
            <h3>
              {main} <span>{highlight}</span>
            </h3>
            <b>{p.sub}</b>
            <p>{p.desc}</p>

            <Button href="#" variant="accent" showArrow>
              Learn More&nbsp;&nbsp;
            </Button>

            {/* Phone mockup */}
            <div className="phone" aria-hidden="true">
              <b>{p.icon} {p.name}</b>
              <p style={{ fontSize: '12px' }}>How are you feeling today?</p>
              <div style={{
                margin: '26px 0',
                padding: '18px 8px',
                background: '#fff',
                borderRadius: '14px',
              }}>
                Talk to a<br /><b>Professional</b>
              </div>
              <div style={{
                background: '#2370ff',
                color: '#fff',
                padding: '12px',
                borderRadius: '9px',
                fontSize: '10px',
              }}>
                Book Session
              </div>
            </div>
          </article>

          {/* Product sidebar list */}
          <aside className="product-list" aria-label="All AI products">
            <div className="tiny">OUR AI PRODUCTS</div>
            <div role="list">
              {products.map((prod, i) => (
                i !== selectedIdx && (
                  <button
                    key={i}
                    className={`product-btn${i === selectedIdx ? ' active' : ''}`}
                    type="button"
                    role="listitem"
                    aria-pressed={i === selectedIdx}
                    onClick={() => selectProduct(i)}
                  >
                    <i aria-hidden="true">{prod.icon}</i>
                    <span>
                      <b>{prod.name}</b>
                      <small>{prod.sub}</small>
                    </span>
                  </button>
                )
              ))}
            </div>
          </aside>
        </div>

        {/* Next button */}
        <button
          className="product-nav product-next"
          aria-label="Next product"
          onClick={() => selectProduct(selectedIdx + 1)}
        >
          →
        </button>
      </RevealWrapper>

      <RevealWrapper variant="up" delay={300}>
        <Button href="#" variant="dark" className="products-all" showArrow>
          View All Products&nbsp;&nbsp;
        </Button>
      </RevealWrapper>

      {/* Dot indicators */}
      <div className="product-dots" aria-label="Product pagination" role="list">
        {products.map((_, i) => (
          <i
            key={i}
            className={i === selectedIdx ? 'active' : ''}
            role="listitem"
            aria-label={`Product ${i + 1}${i === selectedIdx ? ' (selected)' : ''}`}
            onClick={() => selectProduct(i)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </section>
  );
}
