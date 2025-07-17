import React from 'react';
import './Cart.css';

const AdminProducts = () => (
  <div className="cart-page" style={{ animation: 'fadeInUp 0.7s cubic-bezier(.4,0,.2,1)' }}>
    <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      <div className="card" style={{ boxShadow: 'var(--shadow)' }}>
        <h2 style={{ color: 'var(--primary-dark)', fontSize: '2rem', marginBottom: 18 }}>Manage Products</h2>
        <div style={{ color: '#888', marginBottom: 18 }}>Add, edit, or remove products from your store.</div>
        <button className="btn">Add New Product</button>
        <div style={{ marginTop: 24, color: '#aaa' }}><em>Product list coming soon...</em></div>
      </div>
    </div>
  </div>
);

export default AdminProducts; 