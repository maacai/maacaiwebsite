import React from 'react';
import Button from '../components/Button';
import RevealWrapper from '../components/RevealWrapper';
import useTitle from '../hooks/useTitle';

export default function NotFound() {
  useTitle('MAAC AI | 404');
  return (
    <main id="main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
      <RevealWrapper variant="up">
        <h1 style={{ fontSize: '6rem', margin: 0 }} className="gradient-text">404</h1>
        <h2>Page Not Found</h2>
        <p className="lead" style={{ marginBottom: '2rem' }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button href="/" variant="dark" showArrow>
          Back to Home
        </Button>
      </RevealWrapper>
    </main>
  );
}
