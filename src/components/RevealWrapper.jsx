import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RevealWrapper({ children, variant = 'up', delay = 0, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = 0, y = 0;
    if (variant === 'up') y = 40;
    if (variant === 'left') x = -40;
    if (variant === 'right') x = 40;

    const ctx = gsap.context(() => {
      gsap.fromTo(el, 
        { opacity: 0, x, y, filter: 'blur(5px)' },
        { 
          opacity: 1, x: 0, y: 0, filter: 'blur(0px)', 
          duration: 0.85, 
          delay: delay / 1000, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [variant, delay]);

  return <div ref={ref} className={className}>{children}</div>;
}
