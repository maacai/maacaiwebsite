import React from 'react';
import Products from '../components/Products';
import useTitle from '../hooks/useTitle';

export default function ProductsPage() {
  useTitle('MAAC AI | Products');
  return (
    <main id="main-content">
      <Products />
    </main>
  );
}
