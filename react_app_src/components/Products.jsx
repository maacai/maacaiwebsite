import React, { useState, useRef, useEffect } from 'react';
import { products } from '../data/websiteData';
import Button from './Button';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const featureRef = useRef(null);

  const selectProduct = (idx) => {
    const newIdx = (idx + products.length) % products.length;
    setSelectedProduct(newIdx);
  };

  useEffect(() => {
    if (featureRef.current) {
      featureRef.current.animate(
        [
          { opacity: 0.35, transform: 'translateX(-12px)' },
          { opacity: 1, transform: 'none' }
        ],
        { duration: 350 }
      );
    }
  }, [selectedProduct]);

  const p = products[selectedProduct];
  const parts = p.name.split(' ');
  const mainName = parts[0];
  const highlightName = parts.slice(1).join(' ') || p.accent || '';

  return (
    <section id="products" className="section products">
      <div className="eyebrow">FEATURED PRODUCTS</div>
      <h2>Our <em>AI-Driven Products</em></h2>
      <p className="lead">Innovative products designed to make everyday life and business smarter.</p>
      
      <div className="product-stage">
        <button 
          className="product-nav product-prev" 
          aria-label="Previous product"
          onClick={() => selectProduct(selectedProduct - 1)}
        >
          ←
        </button>
        
        <div className="product-shell">
          <article className="product-feature" id="productFeature" ref={featureRef}>
            <div className="tiny">FEATURED PRODUCT</div>
            <h3>{mainName} <span>{highlightName}</span></h3>
            <b>{p.sub}</b>
            <p>{p.desc}</p>
            
            <Button href="#" variant="accent" showArrow>
              Learn More&nbsp;&nbsp;
            </Button>
            
            <div className="phone">
              <b>♡ {p.name}</b>
              <p style={{ fontSize: '12px' }}>How are you feeling today?</p>
              <div style={{ margin: '26px 0', padding: '18px 8px', background: '#fff', borderRadius: '14px' }}>
                Talk to a<br /><b>Professional</b>
              </div>
              <div style={{ background: '#2370ff', color: '#fff', padding: '12px', borderRadius: '9px', fontSize: '10px' }}>
                Book Session
              </div>
            </div>
          </article>
          
          <aside className="product-list">
            <div className="tiny">OUR AI PRODUCTS</div>
            <div id="productButtons">
              {products.slice(1).map((prod, i) => (
                <button 
                  key={i} 
                  className={`product-btn ${i + 1 === selectedProduct ? 'active' : ''}`}
                  onClick={() => selectProduct(i + 1)}
                >
                  <i>{prod.icon}</i>
                  <span>
                    <b>{prod.name}</b>
                    <small>{prod.sub}</small>
                  </span>
                </button>
              ))}
            </div>
          </aside>
        </div>
        
        <button 
          className="product-nav product-next" 
          aria-label="Next product"
          onClick={() => selectProduct(selectedProduct + 1)}
        >
          →
        </button>
      </div>
      
      <Button href="#" variant="dark" className="products-all" showArrow>
        View All Products&nbsp;&nbsp;
      </Button>
      
      <div className="product-dots">
        <i></i>
        <i className="active"></i>
        <i></i>
      </div>
    </section>
  );
}
