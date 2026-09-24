import React, { useRef, useState, useEffect, useCallback } from 'react';
import { industries } from '../data/industries';
import { useNavigate } from 'react-router-dom';
import useTilt from '../hooks/useTilt';
import RevealWrapper from './RevealWrapper';

/** Industry card with 3D tilt */
function IndustryCard({ icon, name, onCardClick }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ max: 14, scale: 1.05, speed: 260 });
  return (
    <button
      ref={ref}
      className="industry-card"
      type="button"
      role="listitem"
      aria-label={`${name} industry`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onCardClick}
    >
      <span className="tilt-shine" aria-hidden="true" />
      <i aria-hidden="true">{icon}</i>
      <b>{name}</b>
    </button>
  );
}

export default function Industries({ openModal }) {
  const navigate = useNavigate();
  const railRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const getCards = useCallback(() =>
    Array.from(railRef.current?.querySelectorAll('.industry-card') || []),
  []);

  const getMaxScroll = useCallback(() =>
    Math.max(0, (railRef.current?.scrollWidth || 0) - (railRef.current?.clientWidth || 0)),
  []);

  const updateControls = useCallback(() => {
    if (!railRef.current) return;
    const x = railRef.current.scrollLeft;
    const max = getMaxScroll();
    setCanScrollLeft(x > 2);
    setCanScrollRight(x < max - 2);

    // Find which card is closest to the left edge
    const cards = getCards();
    let best = 0, bestDist = Infinity;
    cards.forEach((card, i) => {
      const d = Math.abs(card.offsetLeft - railRef.current.offsetLeft - x);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    setActiveIndex(best);
  }, [getCards, getMaxScroll]);

  const goToIndustry = useCallback((index) => {
    const cards = getCards();
    if (!cards.length || !railRef.current) return;
    const safeIndex = Math.max(0, Math.min(cards.length - 1, index));
    const target = safeIndex === cards.length - 1
      ? getMaxScroll()
      : Math.min(getMaxScroll(), cards[safeIndex].offsetLeft - railRef.current.offsetLeft);
    railRef.current.scrollTo({ left: target, behavior: 'smooth' });
  }, [getCards, getMaxScroll]);

  const moveIndustries = useCallback((direction) => {
    const cards = getCards();
    if (!cards.length || !railRef.current) return;
    const x = railRef.current.scrollLeft;
    const max = getMaxScroll();
    if (direction < 0 && x <= 2) { goToIndustry(0); return; }
    if (direction > 0 && x >= max - 2) { goToIndustry(cards.length - 1); return; }
    goToIndustry(activeIndex + direction);
  }, [getCards, getMaxScroll, goToIndustry, activeIndex]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const handleResize = () => {
      rail.scrollLeft = Math.min(rail.scrollLeft, getMaxScroll());
      updateControls();
    };
    window.addEventListener('resize', handleResize);
    updateControls();
    return () => window.removeEventListener('resize', handleResize);
  }, [getMaxScroll, updateControls]);

  return (
    <section id="industries" className="section industries" aria-label="Industries we empower">
      <RevealWrapper variant="up">
        <div className="eyebrow">INDUSTRIES WE EMPOWER</div>
        <h2>We Serve a Wide Range of <em>Industries</em></h2>
        <p className="lead">
          Innovative solutions tailored for every industry, helping businesses transform,
          grow, and stay ahead in a digital world.
        </p>
      </RevealWrapper>

      <RevealWrapper variant="up" delay={200} className="rail-wrap">
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
          role="list"
          aria-label="Industries carousel"
          ref={railRef}
          onScroll={updateControls}
          tabIndex={0}
        >
          {industries.map(({ icon, name }, idx) => (
            <IndustryCard
              key={idx}
              icon={icon}
              name={name}
              onCardClick={() => {
                const slug = name.toLowerCase().replace(/\s+/g, '-');
                navigate(`/industries/${slug}`);
              }}
            />
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
      </RevealWrapper>

      {/* Dot indicators */}
      <div className="industry-dots" role="tablist" aria-label="Industry navigation dots">
        {industries.map((_, idx) => (
          <button
            key={idx}
            className={`industry-dot${idx === activeIndex ? ' active' : ''}`}
            type="button"
            role="tab"
            aria-selected={idx === activeIndex}
            aria-label={`Go to industry ${idx + 1}`}
            tabIndex={idx === activeIndex ? 0 : -1}
            onClick={() => goToIndustry(idx)}
          />
        ))}
      </div>
    </section>
  );
}
