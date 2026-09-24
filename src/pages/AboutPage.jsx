import React, { useEffect } from 'react';
import gsap from 'gsap';
import About from '../components/About';
import useTitle from '../hooks/useTitle';

export default function AboutPage() {
  useTitle('MAAC AI | About');
  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.stats b, .stat-value').forEach(el => {
        const raw = el.textContent.trim();
        const num = parseFloat(raw);
        if (isNaN(num)) return;
        const suffix = raw.replace(String(num), '');
        const obj = { val: 0 };
        gsap.to(obj, {
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          val: num,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate() {
            el.textContent =
              (obj.val % 1 === 0 ? Math.round(obj.val) : obj.val.toFixed(1)) + suffix;
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main id="main-content">
      <About />
    </main>
  );
}
