import React from 'react';
import './Cart.css';

const OrderDetail = () => (
  <div className="cart-page" style={{ animation: 'fadeInUp 0.7s cubic-bezier(.4,0,.2,1)' }}>
    <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      <div className="card" style={{ boxShadow: 'var(--shadow)' }}>
        <h2 style={{ color: 'var(--primary-dark)', fontSize: '2rem', marginBottom: 18 }}>Order #12345</h2>
        <div style={{ marginBottom: 18, color: '#888' }}>Placed: 2024-06-01 • Status: <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Shipped</span></div>
        <div style={{ marginBottom: 18 }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: 8 }}>Items</h4>
          <ul style={{ paddingLeft: 18 }}>
            <li>Product 1 x2 — ₹1,000.00</li>
            <li>Product 2 x1 — ₹499.00</li>
          </ul>
        </div>
        <div style={{ marginBottom: 18 }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: 8 }}>Shipping Address</h4>
          <div>123 Main Street, City, 123456</div>
        </div>
        <div style={{ fontWeight: 600, color: 'var(--primary-dark)' }}>Total Paid: ₹2,499.00</div>
      </div>
    </div>
  </div>
);

export default OrderDetail; 