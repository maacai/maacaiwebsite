import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Beyond from './components/Beyond';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [modalState, setModalState] = useState({ isOpen: false, title: '', text: '' });

  const openModal = (title, text) => {
    setModalState({ isOpen: true, title, text });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  useEffect(() => {
    window.gsap = gsap;
    
    // Initial GSAP animations based on original script.js
    const reveals = gsap.utils.toArray('.reveal');
    reveals.forEach(el => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 82%', once: true },
        opacity: 0,
        y: 45,
        filter: 'blur(7px)',
        duration: 1,
        ease: 'power3.out'
      });
    });

    gsap.from('.industry-card', {
      scrollTrigger: { trigger: '.industries', start: 'top 75%', once: true },
      opacity: 0,
      y: 25,
      stagger: 0.06,
      duration: 0.55
    });

    gsap.from('.service-card', {
      scrollTrigger: { trigger: '.services', start: 'top 70%', once: true },
      opacity: 0,
      y: 45,
      scale: 0.96,
      stagger: 0.07,
      duration: 0.65,
      ease: 'power2.out'
    });

    gsap.from('.product-feature', {
      scrollTrigger: { trigger: '.products', start: 'top 70%', once: true },
      opacity: 0,
      x: -55,
      duration: 0.8
    });

    gsap.from('.product-list', {
      scrollTrigger: { trigger: '.products', start: 'top 70%', once: true },
      opacity: 0,
      x: 55,
      duration: 0.8
    });

    // Cleanup scroll triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Industries openModal={openModal} />
        <Beyond />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
      <Modal 
        isOpen={modalState.isOpen}
        title={modalState.title}
        text={modalState.text}
        onClose={closeModal}
      />
    </>
  );
}
