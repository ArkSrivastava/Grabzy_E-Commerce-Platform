import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import './Products.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useQuery(['product', id], async () => {
    const res = await axios.get(`/api/products/${id}`);
    return res.data;
  });

  if (isLoading) {
    return <div className="products-page"><div className="container"><div className="loading"><div className="spinner"></div>Loading...</div></div></div>;
  }
  if (error || !product) {
    return <div className="products-page"><div className="container"><div className="error-message">Product not found.</div></div></div>;
  }

  return (
    <div className="products-page" style={{ animation: 'fadeInUp 0.7s cubic-bezier(.4,0,.2,1)' }}>
      <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
        <div className="card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', boxShadow: 'var(--shadow)' }}>
          <div style={{ flex: 1 }}>
            <div style={{ background: '#181A20', borderRadius: 16, padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 320 }}>
              <img src={product.image} alt={product.name} style={{ width: 240, height: 240, objectFit: 'contain', borderRadius: 12 }} />
            </div>
          </div>
          <div style={{ flex: 2 }}>
            <h2 style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: 8 }}>{product.name}</h2>
            <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--primary)', marginBottom: 12 }}>₹{product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
            <div style={{ color: 'var(--primary)', marginBottom: 18, fontWeight: 600 }}>{product.category}</div>
            <p style={{ fontSize: 16, color: '#e0c97f', marginBottom: 18 }}>{product.description}</p>
            <button className="btn" style={{ marginBottom: 18 }}>Add to Cart</button>
            <div style={{ marginTop: 32 }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: 8 }}>Reviews</h4>
              <div style={{ color: '#888' }}><em>No reviews yet. Be the first to review!</em></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 