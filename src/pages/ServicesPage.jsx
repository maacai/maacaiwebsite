import React from 'react';
import Services from '../components/Services';
import useTitle from '../hooks/useTitle';

export default function ServicesPage() {
  useTitle('MAAC AI | Services');
  return (
    <main id="main-content">
      <Services />
    </main>
  );
}
