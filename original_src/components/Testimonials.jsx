import { useEffect, useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import './Testimonials.css';

const testimonials = [
  { stars: 5, text: 'MAAC.AI transformed our business with their AI solutions. Their team is professional, creative, and highly supportive.', name: 'John D.', role: 'CEO, TechNova', avatar: 'JD', color: '#e91e8c' },
  { stars: 5, text: 'Excellent communication, on-time delivery, and innovative solutions. Highly recommended!', name: 'Sarah K.', role: 'Founder, HealthPlus', avatar: 'SK', color: '#2563eb' },
  { stars: 5, text: 'Their digital marketing strategy increased our leads by 300%. Amazing experience working with MAAC.AI.', name: 'Ravi P.', role: 'Marketing Head, Brandify', avatar: 'RP', color: '#7c3aed' },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => { if (paused) return undefined; const timer=setInterval(()=>setActive((v)=>(v+1)%testimonials.length),5000); return ()=>clearInterval(timer); }, [paused]);
  const current=testimonials[active];
  return <section className="testimonials-section"><div className="container"><Reveal><div className="text-center testimonials-section__header"><p className="section-tag">WHAT OUR CLIENTS SAY</p><h2 className="section-title">Trusted By Businesses, Loved By Clients</h2><p className="section-subtitle">Real-world outcomes are the best proof of a strong digital partnership.</p></div></Reveal><div className="testimonials-showcase" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}><div className="testimonial-main" style={{'--t-color':current.color}}><div className="testimonial-main__quote">“</div><div className="testimonial-main__stars">{'★'.repeat(current.stars)}</div><p className="testimonial-main__text">{current.text}</p><div className="testimonial-main__author"><div className="testimonial-main__avatar">{current.avatar}</div><div><strong>{current.name}</strong><span>{current.role}</span></div></div></div><div className="testimonial-side">{testimonials.map((item,index)=><button type="button" key={item.name} className={`testimonial-mini ${index===active?'active':''}`} onClick={()=>setActive(index)} style={{'--t-color':item.color}}><span className="testimonial-mini__avatar">{item.avatar}</span><span><strong>{item.name}</strong><small>{item.role}</small></span><Icon name="arrowRight" size={14}/></button>)}</div></div><div className="testimonials-dots">{testimonials.map((item,index)=><button type="button" key={item.name} aria-label={`Show testimonial ${index+1}`} className={index===active?'active':''} onClick={()=>setActive(index)}/>)}</div></div></section>;
}
