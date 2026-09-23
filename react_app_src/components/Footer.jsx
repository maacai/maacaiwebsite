import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="brand footer-brand brand-logo">
            <img src="/src/assets/images/maac-ai-logo.png" alt="MAAC AI" />
          </div>
          <p>
            Intelligent Solutions for a Smarter Tomorrow. We build AI-powered products, software and digital solutions that drive business growth.
          </p>
          <div className="social">◎ ◉ ◇ ◌</div>
        </div>
        
        <div>
          <b>Company</b>
          <a href="#home">Home</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div>
          <b>Services</b>
          <a href="#services">Artificial Intelligence</a>
          <a href="#services">Web Development</a>
          <a href="#services">Automation</a>
          <a href="#services">Cloud Solutions</a>
          <a href="#services">AI Agents</a>
        </div>
        
        <div>
          <b>Products</b>
          <a href="#products">Mine Healer</a>
          <a href="#products">Daily Need AI</a>
          <a href="#products">AI CRM</a>
          <a href="#products">AI ERP</a>
          <a href="#products">AI Recruiter</a>
        </div>
        
        <div>
          <b>Newsletter</b>
          <p>Get the latest updates, product launches and AI insights.</p>
          <div className="newsletter">
            <input aria-label="Email" placeholder="Enter your email address" />
            <button>→</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        © 2026 MAAC AI. All rights reserved. <span>Privacy Policy · Terms of Service · Cookie Policy</span>
      </div>
    </footer>
  );
}
