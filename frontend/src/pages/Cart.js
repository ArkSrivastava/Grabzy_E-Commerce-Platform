import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { FaTrash, FaShoppingBag, FaArrowLeft, FaCreditCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleQuantityChange = async (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setIsUpdating(true);
    await updateQuantity(productId, newQuantity);
    setIsUpdating(false);
  };

  const handleRemoveItem = async (productId) => {
    setIsUpdating(true);
    await removeFromCart(productId);
    setIsUpdating(false);
  };

  const calculateSubtotal = () => {
    return cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  const calculateTax = () => {
    return calculateSubtotal() * 0.18; // 18% GST
  };

  const calculateShipping = () => {
    return calculateSubtotal() > 500 ? 0 : 50; // Free shipping above ₹500
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + calculateShipping();
  };

  if (cart.items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <FaShoppingBag />
            </div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any products to your cart yet.</p>
            <Link to="/products" className="btn btn-primary">
              <FaArrowLeft />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <p>{cart.items.length} item{cart.items.length !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cart.items.map((item) => (
              <div key={item._id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-category">{item.category}</p>
                  <div className="item-price">
                    <span className="price">₹{item.price.toFixed(2)}</span>
                    {item.originalPrice && item.originalPrice > item.price && (
                      <span className="original-price">₹{item.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                </div>

                <div className="item-quantity">
                  <label>Quantity:</label>
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                      disabled={item.quantity >= item.stock || isUpdating}
                    >
                      +
                    </button>
                  </div>
                  {item.quantity >= item.stock && (
                    <span className="stock-warning">Max stock reached</span>
                  )}
                </div>

                <div className="item-total">
                  <span className="total-price">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>

                <button
                  className="remove-item"
                  onClick={() => handleRemoveItem(item._id)}
                  disabled={isUpdating}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-header">
              <h3>Order Summary</h3>
            </div>
            
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal ({cart.items.length} item{cart.items.length !== 1 ? 's' : ''})</span>
                <span>₹{calculateSubtotal().toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Tax (GST 18%)</span>
                <span>₹{calculateTax().toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Shipping</span>
                <span>
                  {calculateShipping() === 0 ? (
                    <span className="free-shipping">FREE</span>
                  ) : (
                    `₹${calculateShipping().toFixed(2)}`
                  )}
                </span>
              </div>
              
              {calculateShipping() > 0 && (
                <div className="free-shipping-notice">
                  <p>Add ₹{(500 - calculateSubtotal()).toFixed(2)} more for FREE shipping!</p>
                </div>
              )}
              
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{calculateTotal().toFixed(2)}</span>
              </div>
            </div>

            <div className="summary-actions">
              <Link to="/products" className="btn btn-secondary">
                <FaArrowLeft />
                Continue Shopping
              </Link>
              
              <Link to="/checkout" className="btn btn-primary">
                <FaCreditCard />
                Proceed to Checkout
              </Link>
              
              <button
                className="btn btn-danger"
                onClick={clearCart}
                disabled={isUpdating}
              >
                <FaTrash />
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 