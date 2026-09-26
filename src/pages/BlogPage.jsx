import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import RevealWrapper from '../components/RevealWrapper';
import useTitle from '../hooks/useTitle';

export default function BlogPage() {
  useTitle('MAAC AI | Blog');
  return (
    <main id="main-content" className="about-page">
      <div style={{ width: '100%', marginBottom: '80px', marginTop: '20px' }}>
        <RevealWrapper variant="up">
          <img 
            src="/assets/images/blog-hero-banner.png" 
            alt="Blog Hero Banner" 
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '24px' }} 
          />
        </RevealWrapper>
      </div>

      <div className="blog-grid" style={{ padding: '0 5%', marginBottom: '8rem', maxWidth: '1280px', margin: '0 auto 8rem' }}>
        {blogs.map((blog, idx) => {
          const colors = ['pink', 'blue', 'violet'];
          const colorClass = `blog-card--${colors[idx % colors.length]}`;
          
          return (
            <RevealWrapper variant="up" delay={idx * 100} key={blog.id}>
              <div className={`blog-card ${colorClass}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
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
              </div>
            </RevealWrapper>
          );
        })}
      </div>
    </main>
  );
}
