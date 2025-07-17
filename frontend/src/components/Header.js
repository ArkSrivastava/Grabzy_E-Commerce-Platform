import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { FaShoppingCart, FaUser, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const { getCartItemCount } = useCart();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          Grabzy <span>Shop Smart</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          {isAuthenticated && <Link to="/orders" className="nav-link">Orders</Link>}
          {isAuthenticated && isAdmin && <Link to="/admin" className="nav-link">Admin</Link>}
        </nav>

        {/* User Actions */}
        <div className="header-actions">
          {isAuthenticated && (
            <Link to="/cart" className="cart-icon">
              <FaShoppingCart />
              <span className="cart-label">Cart</span>
              {getCartItemCount() > 0 && (
                <span className="cart-badge">{getCartItemCount()}</span>
              )}
              <span className="cart-tooltip">View Cart</span>
            </Link>
          )}
          {isAuthenticated ? (
            <div className="user-menu">
              <button className="user-menu-btn">
                <FaUser />
                <span className="user-name">{user?.name}</span>
              </button>
              <div className="user-dropdown">
                <Link to="/profile" className="dropdown-item">Profile</Link>
                <button onClick={handleLogout} className="dropdown-item logout-btn">
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-secondary">Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </>
          )}
          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
        <Link to="/products" className="nav-link" onClick={toggleMenu}>Products</Link>
        {isAuthenticated && <Link to="/orders" className="nav-link" onClick={toggleMenu}>Orders</Link>}
        {isAuthenticated && isAdmin && <Link to="/admin" className="nav-link" onClick={toggleMenu}>Admin</Link>}
        {isAuthenticated && <Link to="/cart" className="nav-link" onClick={toggleMenu}>Cart ({getCartItemCount()})</Link>}
        {isAuthenticated && <Link to="/profile" className="nav-link" onClick={toggleMenu}>Profile</Link>}
        {isAuthenticated && <button onClick={handleLogout} className="nav-link logout-btn"><FaSignOutAlt /> Logout</button>}
        {!isAuthenticated && <Link to="/login" className="nav-link" onClick={toggleMenu}>Login</Link>}
        {!isAuthenticated && <Link to="/register" className="nav-link" onClick={toggleMenu}>Register</Link>}
      </nav>
    </header>
  );
};

export default Header; 