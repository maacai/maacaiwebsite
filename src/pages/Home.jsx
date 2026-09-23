import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from '../components/Hero';
import About from '../components/About';
import Industries from '../components/Industries';
import BeyondSection from '../components/BeyondSection';
import Services from '../components/Services';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Modal from '../components/Modal';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [modalState, setModalState] = useState({ isOpen: false, title: '', text: '' });

  const openModal = (title, text) => {
    setModalState({ isOpen: true, title, text });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  // ── Active nav link highlight while scrolling ──────────────
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'products', 'industries', 'contact'];
    const links = document.querySelectorAll('nav a[href^="/#"]');

    const onScroll = () => {
      const scrollY = window.scrollY + 100;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      links.forEach(link => {
        link.classList.toggle('nav-active', link.getAttribute('href') === `/#${current}`);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── GSAP animations ────────────────────────────────────────
  useEffect(() => {
    window.gsap = gsap;

    const ctx = gsap.context(() => {
      // Animated stat counters (hero + about)
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

      // Footer
      gsap.from('footer', {
        scrollTrigger: { trigger: 'footer', start: 'top 90%', once: true },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
      });

      // Contact
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
    <>
      <main id="main-content">
        <Hero />
        <About />
        <Industries openModal={openModal} />
        <BeyondSection />
        <Services />
        <Products />
        <Contact />
      </main>
      <Modal
        isOpen={modalState.isOpen}
        title={modalState.title}
        text={modalState.text}
        onClose={closeModal}
      />
    </>
  );
}
