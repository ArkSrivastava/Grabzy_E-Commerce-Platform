import React from 'react';
import './Cart.css';

const AdminDashboard = () => (
  <div className="cart-page" style={{ animation: 'fadeInUp 0.7s cubic-bezier(.4,0,.2,1)' }}>
    <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      <div className="card" style={{ boxShadow: 'var(--shadow)' }}>
        <h2 style={{ color: 'var(--primary-dark)', fontSize: '2rem', marginBottom: 18 }}>Admin Dashboard</h2>
        <div style={{ display: 'flex', gap: 24, marginBottom: 24 }}>
          <div className="card" style={{ flex: 1, background: '#f8fafc', boxShadow: 'none', border: '1.5px solid #e3eaf2', borderRadius: 12, padding: 18 }}>
            <div style={{ fontWeight: 600, color: 'var(--primary)' }}>Total Users</div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>1,234</div>
          </div>
          <div className="card" style={{ flex: 1, background: '#f8fafc', boxShadow: 'none', border: '1.5px solid #e3eaf2', borderRadius: 12, padding: 18 }}>
            <div style={{ fontWeight: 600, color: 'var(--primary)' }}>Total Orders</div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>567</div>
          </div>
          <div className="card" style={{ flex: 1, background: '#f8fafc', boxShadow: 'none', border: '1.5px solid #e3eaf2', borderRadius: 12, padding: 18 }}>
            <div style={{ fontWeight: 600, color: 'var(--primary)' }}>Total Sales</div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>₹4,56,789</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          <button className="btn btn-secondary" style={{ flex: 1 }}>Manage Products</button>
          <button className="btn btn-secondary" style={{ flex: 1 }}>Manage Orders</button>
          <button className="btn btn-secondary" style={{ flex: 1 }}>Manage Users</button>
        </div>
      </div>
    </div>
  </div>
);

export default AdminDashboard; 