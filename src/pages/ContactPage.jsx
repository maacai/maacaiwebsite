import React, { useEffect } from 'react';
import gsap from 'gsap';
import Contact from '../components/Contact';
import useTitle from '../hooks/useTitle';

export default function ContactPage() {
  useTitle('MAAC AI | Contact');
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-form-wrap, .smart', {
        scrollTrigger: { trigger: '.contact', start: 'top 75%', once: true },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main id="main-content">
      <Contact isContactPage />
    </main>
  );
}
