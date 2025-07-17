import React from 'react';
import './Cart.css';

const Checkout = () => (
  <div className="cart-page" style={{ animation: 'fadeInUp 0.7s cubic-bezier(.4,0,.2,1)' }}>
    <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      <div className="card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', boxShadow: 'var(--shadow)' }}>
        <div style={{ flex: 2 }}>
          <h2 style={{ color: 'var(--primary-dark)', fontSize: '2rem', marginBottom: 8 }}>Checkout</h2>
          <div style={{ marginBottom: 18 }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: 8 }}>Shipping Address</h4>
            <input type="text" placeholder="Enter your address" style={{ width: '100%', marginBottom: 12 }} />
            <input type="text" placeholder="City" style={{ width: '100%', marginBottom: 12 }} />
            <input type="text" placeholder="Postal Code" style={{ width: '100%', marginBottom: 12 }} />
          </div>
          <div style={{ marginBottom: 18 }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: 8 }}>Payment Method</h4>
            <select style={{ width: '100%', marginBottom: 12 }}>
              <option>Credit Card</option>
              <option>UPI</option>
              <option>Cash on Delivery</option>
            </select>
          </div>
          <button className="btn">Place Order</button>
        </div>
        <div className="cart-summary" style={{ flex: 1, minWidth: 280 }}>
          <div className="summary-header">
            <h3>Order Summary</h3>
          </div>
          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹1,999.00</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>₹50.00</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹2,049.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Checkout; 