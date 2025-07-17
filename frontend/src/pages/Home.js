import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { FaArrowRight, FaStar, FaShoppingCart } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  // Fetch featured products
  const { data: products, isLoading } = useQuery('featuredProducts', async () => {
    const response = await axios.get('/api/products?limit=6');
    return response.data.products;
  });

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Welcome to <span className="hero-highlight">Grabzy</span>
              </h1>
              <p className="hero-subtitle">
                Your one-stop destination for quality products. Discover amazing deals 
                and shop with confidence.
              </p>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary">
                  Shop Now
                  <FaArrowRight />
                </Link>
                <Link to="/register" className="btn btn-secondary">
                  Join Us
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-graphic">
                <div className="floating-card card-1">
                  <FaShoppingCart />
                  <span>Fast Delivery</span>
                </div>
                <div className="floating-card card-2">
                  <FaStar />
                  <span>Best Quality</span>
                </div>
                <div className="floating-card card-3">
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaShoppingCart />
              </div>
              <h3>Fast Shipping</h3>
              <p>Get your orders delivered quickly and safely to your doorstep.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaStar />
              </div>
              <h3>Quality Products</h3>
              <p>We only sell products that meet our high quality standards.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span role="img" aria-label="money">💰</span>
              </div>
              <h3>Best Prices</h3>
              <p>Competitive prices and regular deals to save you money.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span role="img" aria-label="shield">🛡️</span>
              </div>
              <h3>Secure Shopping</h3>
              <p>Your data and payments are protected with industry-standard security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Discover our most popular items</p>
          </div>
          
          {isLoading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="products-grid">
              {products?.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-4">
            <Link to="/products" className="btn btn-primary">
              View All Products
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Shopping?</h2>
            <p>Join thousands of satisfied customers and discover amazing products today.</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-accent">
                Create Account
              </Link>
              <Link to="/products" className="btn btn-secondary">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 