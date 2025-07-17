import React from 'react';
import './Cart.css';

const Profile = () => (
  <div className="cart-page" style={{ animation: 'fadeInUp 0.7s cubic-bezier(.4,0,.2,1)' }}>
    <div className="container" style={{ maxWidth: 700, margin: '0 auto', padding: '2rem 1rem' }}>
      <div className="card" style={{ boxShadow: 'var(--shadow)' }}>
        <h2 style={{ color: 'var(--primary-dark)', fontSize: '2rem', marginBottom: 18 }}>My Profile</h2>
        <div style={{ marginBottom: 18 }}>
          <label style={{ color: '#888', fontWeight: 600 }}>Name</label>
          <input type="text" value="John Doe" style={{ width: '100%', marginBottom: 12 }} readOnly />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={{ color: '#888', fontWeight: 600 }}>Email</label>
          <input type="email" value="john@example.com" style={{ width: '100%', marginBottom: 12 }} readOnly />
        </div>
        <button className="btn">Edit Profile</button>
      </div>
    </div>
  </div>
);

export default Profile; 