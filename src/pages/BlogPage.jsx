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
      <div className="about-hero">
        <RevealWrapper variant="up" className="about-hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="about-eyebrow" style={{ justifyContent: 'center' }}>INSIGHTS & NEWS</div>
          <h2 className="about-h1">
            Our <em className="gradient-text">Blog</em>
          </h2>
          <p className="about-desc" style={{ margin: '0 auto' }}>
            Thoughts, news, and insights on how Artificial Intelligence is shaping the future of business and technology.
          </p>
        </RevealWrapper>
      </div>

      <div className="service-grid" style={{ padding: '0 5%', marginBottom: '8rem', maxWidth: '1280px', margin: '0 auto 8rem' }}>
        {blogs.map((blog, idx) => (
          <RevealWrapper variant="up" delay={idx * 100} key={blog.id}>
            <div className="service-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="tilt-shine" aria-hidden="true" />
              <Link to={`/blog/${blog.id}`} className="service-card-link" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '1rem', fontSize: '0.85rem', color: '#888', display: 'flex', gap: '1rem' }}>
                  <span>{blog.date}</span>
                  <span style={{ color: '#3858ff' }}>{blog.category}</span>
                </div>
                <div className="service-copy" style={{ flex: 1 }}>
                  <b style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'block' }}>{blog.title}</b>
                  <p>{blog.excerpt}</p>
                </div>
                <span className="service-arrow" aria-hidden="true">Read More →</span>
              </Link>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </main>
  );
}
