import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import './Stats.css';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered', icon: 'check' },
  { value: 20, suffix: '+', label: 'Digital Solutions', icon: 'sparkles' },
  { value: 15, suffix: '+', label: 'Industries Served', icon: 'globe' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: 'heart' },
];

function Counter({ value, suffix, active }) {
  const [count, setCount] = useState(0);
  const raf = useRef(null);
  useEffect(() => {
    if (!active) return undefined;
    const start = performance.now();
    const duration = 1200;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [active, value]);
  return <>{count}{suffix}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setActive(true), { threshold: .35 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <section className="stats" ref={ref}><div className="container stats__grid">{stats.map((stat,index)=><Reveal key={stat.label} delay={index*80}><div className="stat"><span className="stat__icon"><Icon name={stat.icon} size={16}/></span><strong><Counter {...stat} active={active}/></strong><span>{stat.label}</span></div></Reveal>)}</div></section>;
}
