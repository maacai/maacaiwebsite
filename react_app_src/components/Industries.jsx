import React, { useRef, useState, useEffect } from 'react';
import { industries } from '../data/websiteData';

export default function Industries({ openModal }) {
  const railRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const getCards = () => Array.from(railRef.current?.querySelectorAll('.industry-card') || []);
  const getMaxScroll = () => Math.max(0, (railRef.current?.scrollWidth || 0) - (railRef.current?.clientWidth || 0));

  const updateControls = () => {
    if (!railRef.current) return;
    const x = railRef.current.scrollLeft;
    const max = getMaxScroll();
    setCanScrollLeft(x > 2);
    setCanScrollRight(x < max - 2);

    const cards = getCards();
    let best = 0;
    let bestDist = Infinity;
    cards.forEach((card, i) => {
      const d = Math.abs(card.offsetLeft - railRef.current.offsetLeft - x);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActiveIndex(best);
  };

  const goToIndustry = (index) => {
    const cards = getCards();
    if (!cards.length) return;
    const safeIndex = Math.max(0, Math.min(cards.length - 1, index));
    const target = safeIndex === cards.length - 1 
      ? getMaxScroll() 
      : Math.min(getMaxScroll(), cards[safeIndex].offsetLeft - railRef.current.offsetLeft);
    
    railRef.current.scrollTo({ left: target, behavior: 'smooth' });
  };

  const moveIndustries = (direction) => {
    const cards = getCards();
    if (!cards.length) return;
    const x = railRef.current.scrollLeft;
    const max = getMaxScroll();
    
    if (direction < 0 && x <= 2) {
      goToIndustry(0);
      return;
    }
    if (direction > 0 && x >= max - 2) {
      goToIndustry(cards.length - 1);
      return;
    }
    goToIndustry(activeIndex + direction);
  };

  useEffect(() => {
    const handleResize = () => {
      if (railRef.current) {
        railRef.current.scrollLeft = Math.min(railRef.current.scrollLeft, getMaxScroll());
      }
      updateControls();
    };
    
    window.addEventListener('resize', handleResize);
    updateControls();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="industries" className="section industries">
      <div className="eyebrow">INDUSTRIES WE EMPOWER</div>
      <h2>We Serve a Wide Range of <em>Industries</em></h2>
      <p className="lead">Innovative solutions tailored for every industry, helping businesses transform, grow, and stay ahead in a digital world.</p>
      
      <div className="rail-wrap">
        <button 
          className="rail-btn prev" 
          aria-label="Scroll industries left"
          disabled={!canScrollLeft}
          onClick={() => moveIndustries(-1)}
        >
          ←
        </button>
        <div 
          className="industry-rail" 
          tabIndex="0" 
          aria-label="Industries carousel"
          ref={railRef}
          onScroll={updateControls}
        >
          {industries.map(([icon, name], idx) => (
            <button 
              key={idx} 
              className="industry-card" 
              type="button"
              onClick={() => openModal(name, `MAAC AI creates intelligent ${name.toLowerCase()} solutions focused on automation, better digital experiences and measurable business outcomes.`)}
            >
              <i>{icon}</i><b>{name}</b>
            </button>
          ))}
        </div>
        <button 
          className="rail-btn next" 
          aria-label="Scroll industries right"
          disabled={!canScrollRight}
          onClick={() => moveIndustries(1)}
        >
          →
        </button>
      </div>
      
      <div className="industry-dots" aria-hidden="true">
        {industries.map((_, idx) => (
          <button 
            key={idx}
            className={`industry-dot ${idx === activeIndex ? 'active' : ''}`}
            type="button"
            tabIndex="-1"
            aria-label={`Show industry ${idx + 1}`}
            onClick={() => goToIndustry(idx)}
          />
        ))}
      </div>
    </section>
  );
}
