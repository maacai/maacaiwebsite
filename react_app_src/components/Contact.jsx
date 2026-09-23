import React, { useState } from 'react';
import Button from './Button';

const Pin = ({ className, label, dataPlace }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button 
      className={`pin ${className} ${isActive ? 'active' : ''}`}
      data-place={dataPlace}
      aria-label={label}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
    >
      <i></i>
      <span>{dataPlace}</span>
    </button>
  );
};

export default function Contact() {
  return (
    <section id="contact" className="smart section">
      <div className="smart-copy reveal">
        <div className="eyebrow">OUR LOCATION</div>
        <h2>
          Let’s Build a Smarter<br />
          Tomorrow, <em>Together</em>
        </h2>
        <p>Visit our office or get in touch — we’d love to hear from you.</p>
        
        <div className="contact-cards">
          <div>
            <span className="contact-icon">●</span>
            <span>
              <b>Our Office</b>
              <small>MAAC AI Technologies Pvt. Ltd.<br />Sector 62, Noida, Uttar Pradesh 201309, India</small>
            </span>
          </div>
          <div>
            <span className="contact-icon">✉</span>
            <span>
              <b>Email Us</b>
              <small>hello@maacai.com<br />info@maacai.com</small>
            </span>
          </div>
          <div>
            <span className="contact-icon">●</span>
            <span>
              <b>Call Us</b>
              <small>+91 120 456 7890<br />+91 987 654 3210</small>
            </span>
          </div>
        </div>
        
        <div className="actions">
          <Button href="#" variant="accent" showArrow>
            Get in Touch&nbsp;
          </Button>
          <Button href="#" variant="light" icon={null}>
            View on Google Maps&nbsp; ↗
          </Button>
        </div>
        
        <div className="contact-stats">
          <div><b>50+</b><small>Global Clients</small></div>
          <div><b>20+</b><small>Countries Served</small></div>
          <div><b>3+</b><small>Years of Innovation</small></div>
          <div><b>100%</b><small>Client Satisfaction</small></div>
        </div>
      </div>
      
      <div className="map" id="map" aria-label="Interactive MAAC AI location map">
        <Pin className="map-delhi" label="Delhi" dataPlace="Delhi · 25 min" />
        <Pin className="map-noida" label="Noida" dataPlace="Noida · 5 min" />
        <Pin className="map-greater" label="Greater Noida" dataPlace="Greater Noida · 20 min" />
        <Pin className="map-airport" label="Indira Gandhi International Airport" dataPlace="Airport · 40 min" />
        <Pin className="map-yamuna" label="Yamuna Expressway" dataPlace="Yamuna Expressway · 15 min" />
        <Pin className="map-office" label="MAAC AI Office" dataPlace="MAAC AI · Sector 62, Noida" />
        
        <div className="map-search">⌖&nbsp;&nbsp; Sector 62, Noida, Uttar Pradesh 201309, India&nbsp;&nbsp;⌕</div>
      </div>
    </section>
  );
}
