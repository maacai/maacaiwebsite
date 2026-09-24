import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import RevealWrapper from '../components/RevealWrapper';
import useTitle from '../hooks/useTitle';

export default function BlogPage() {
  useTitle('MAAC AI | Blog');
  return (
    <main id="main-content" className="about-page">
      {/* Reusing about-page classes for unified hero look */}
      <div className="about-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Designer Background Elements */}
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(233,30,140,0.06) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(16, 24, 39, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 24, 39, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0, pointerEvents: 'none', maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' }} />

        {/* Floating Decorative Icons */}
        <div className="sd-floating-chip chip-top" style={{ top: '25%', left: '15%', right: 'auto', animationDelay: '0s', color: '#e91e8c' }}>
          <span className="dot" style={{ background: '#e91e8c' }}></span> AI Trends
        </div>
        <div className="sd-floating-chip chip-bottom" style={{ bottom: '25%', right: '15%', left: 'auto', animationDelay: '1s', color: '#3b82f6' }}>
          <span className="dot" style={{ background: '#3b82f6' }}></span> Tech News
        </div>

        <div style={{ position: 'absolute', top: '15%', right: '25%', zIndex: 1, animation: 'sdFloat 8s ease-in-out infinite 2s' }}>
           <div style={{ width: '15px', height: '15px', borderRadius: '50%', background: 'linear-gradient(135deg, #e91e8c, #7c3aed)', opacity: 0.3 }}></div>
        </div>
        <div style={{ position: 'absolute', bottom: '20%', left: '25%', zIndex: 1, animation: 'sdFloat 7s ease-in-out infinite 1.5s' }}>
           <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'linear-gradient(135deg, #3b82f6, #0ea5e9)', opacity: 0.2, transform: 'rotate(25deg)' }}></div>
        </div>

        <RevealWrapper variant="up" className="about-hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div className="about-eyebrow" style={{ justifyContent: 'center' }}>INSIGHTS & NEWS</div>
          <h2 className="about-h1">
            Our <em className="gradient-text">Blog</em>
          </h2>
          <p className="about-desc" style={{ margin: '0 auto' }}>
            Thoughts, news, and insights on how Artificial Intelligence is shaping the future of business and technology.
          </p>
        </RevealWrapper>
      </div>

      <div className="blog-grid" style={{ padding: '0 5%', marginBottom: '8rem', maxWidth: '1280px', margin: '0 auto 8rem' }}>
        {blogs.map((blog, idx) => {
          const colors = ['pink', 'blue', 'violet'];
          const colorClass = `blog-card--${colors[idx % colors.length]}`;
          
          return (
            <RevealWrapper variant="up" delay={idx * 100} key={blog.id}>
              <Link to={`/blog/${blog.id}`} className={`blog-card ${colorClass}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <div className="blog-card__visual">
                  <span className="icon" aria-hidden="true" style={{ fontSize: '4rem' }}>✦</span>
                  <div className="blog-card__lines">
                    <i /><i /><i />
                  </div>
                  {blog.category}
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__tag">{blog.category}</div>
                  <h3 style={{ color: 'var(--text-dark)' }}>{blog.title}</h3>
                  <div className="blog-card__meta">
                    <span>{blog.date}</span>
                    <div style={{
                      width: '32px', height: '32px', background: '#f5f7fb', borderRadius: '50%',
                      display: 'grid', placeItems: 'center', transition: 'all 0.25s', color: 'var(--text-dark)'
                    }}>
                      <span className="icon" style={{ transform: 'rotate(-45deg)' }}>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </RevealWrapper>
          );
        })}
      </div>
    </main>
  );
}
