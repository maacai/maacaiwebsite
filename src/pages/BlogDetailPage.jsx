import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import RevealWrapper from '../components/RevealWrapper';

export default function BlogDetailPage() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <main className="service-detail-page service-detail-page--not-found">
        <div className="service-detail-container">
          <div className="service-detail-not-found">
            <p className="service-detail-section-tag">ARTICLE NOT FOUND</p>
            <h1>We couldn't find that article.</h1>
            <p>Please return to the blog and choose an article.</p>
            <Link to="/blog" className="service-detail-primary-button">
              Back to blog →
            </Link>
          </div>
        </div>
      </main>
    );
  }

  document.title = `MAAC AI | ${blog.title}`;

  const color = '#8b5cf6';

  return (
    <main className="service-detail-page">
      <section className="service-detail-hero" style={{ paddingBottom: '4rem' }}>
        <div className="service-detail-hero__inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="service-detail-hero__content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', alignItems: 'center' }}>
            <Link to="/blog" className="service-detail-back" style={{ marginBottom: '2rem' }}>
              ← Back to Blog
            </Link>
            <div className="service-detail-kicker" style={{ justifyContent: 'center' }}>
              <span style={{ background: color }}></span>
              <span style={{ color: color }}>{blog.category}</span>
            </div>
            <h1 style={{ fontSize: '3rem', margin: '1rem 0' }}>{blog.title}</h1>
            <p style={{ color: '#888', marginTop: '1rem' }}>{blog.date}</p>
          </div>
        </div>
      </section>

      <section className="service-detail-overview section-anchor">
        <div className="service-detail-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <RevealWrapper variant="up">
            <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ddd' }}>
              <p style={{ marginBottom: '2rem' }}>{blog.excerpt}</p>
              <p>{blog.content}</p>
              
              <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #333' }}>
                <Link to="/blog" style={{ color: '#fff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  ← Read more articles
                </Link>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </main>
  );
}
