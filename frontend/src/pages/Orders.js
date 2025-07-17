import React from 'react';
import './Cart.css';

const Orders = () => (
  <div className="cart-page" style={{ animation: 'fadeInUp 0.7s cubic-bezier(.4,0,.2,1)' }}>
    <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      <div className="card" style={{ boxShadow: 'var(--shadow)' }}>
        <h2 style={{ color: 'var(--primary-dark)', fontSize: '2rem', marginBottom: 18 }}>My Orders</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {[1,2,3].map(order => (
            <div key={order} className="card" style={{ background: '#f8fafc', boxShadow: 'none', border: '1.5px solid #e3eaf2', borderRadius: 12, padding: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center', animation: 'slideIn 0.5s cubic-bezier(.4,0,.2,1)' }}>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--primary)' }}>Order #{order} <span style={{ color: '#888', fontWeight: 400, fontSize: 14 }}>(Placed: 2024-06-01)</span></div>
                <div style={{ color: '#444', fontSize: 15 }}>3 items • Total: ₹2,499.00</div>
              </div>
              <button className="btn btn-secondary">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Orders; 