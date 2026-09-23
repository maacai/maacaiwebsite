import { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    stars: 5,
    text: "MAAC.AI transformed our business with their AI solutions. Their team is professional, creative, and highly supportive.",
    name: "John D.",
    role: "CEO, TechNova",
    avatar: "JD",
    color: "#e91e8c",
  },
  {
    stars: 5,
    text: "Excellent communication, on-time delivery, and innovative solutions. Highly recommended!",
    name: "Sarah K.",
    role: "Founder, HealthPlus",
    avatar: "SK",
    color: "#2563eb",
  },
  {
    stars: 5,
    text: "Their digital marketing strategy increased our leads by 300%. Amazing experience working with MAAC.AI.",
    name: "Ravi P.",
    role: "Marketing Head, Brandify",
    avatar: "RP",
    color: "#7c3aed",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="text-center testimonials-section__header">
          <p className="section-tag">WHAT OUR CLIENTS SAY</p>
          <h2 className="section-title">Trusted By Businesses, Loved By Clients</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testimonial-card ${i === active ? 'testimonial-card--active' : ''}`}
              onClick={() => setActive(i)}
              style={{ '--t-color': t.color }}
            >
              <div className="testimonial-card__stars">
                {'★'.repeat(t.stars)}
              </div>
              <p className="testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" style={{ background: t.color }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="testimonial-card__name">{t.name}</p>
                  <p className="testimonial-card__role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonials-dot ${i === active ? 'testimonials-dot--active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
