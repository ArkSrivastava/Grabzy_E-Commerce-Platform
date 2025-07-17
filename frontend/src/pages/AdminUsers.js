import React from 'react';
import './Cart.css';

const AdminUsers = () => (
  <div className="cart-page" style={{ animation: 'fadeInUp 0.7s cubic-bezier(.4,0,.2,1)' }}>
    <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      <div className="card" style={{ boxShadow: 'var(--shadow)' }}>
        <h2 style={{ color: 'var(--primary-dark)', fontSize: '2rem', marginBottom: 18 }}>Manage Users</h2>
        <div style={{ color: '#888', marginBottom: 18 }}>View and manage all registered users.</div>
        <div style={{ marginTop: 24, color: '#aaa' }}><em>User list coming soon...</em></div>
      </div>
    </div>
  </div>
);

export default AdminUsers; 