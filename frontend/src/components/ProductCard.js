import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../contexts/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = async (e) => {
    e.preventDefault();
    await addToCart(product._id, 1);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= rating ? 'star filled' : 'star'}
        />
      );
    }
    return stars;
  };

  return (
    <Link to={`/products/${product._id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            title="Add to Cart"
          >
            <FaShoppingCart />
          </button>
        </div>
        
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-category">{product.category}</p>
          
          <div className="product-rating">
            <div className="stars">
              {renderStars(product.rating)}
            </div>
            <span className="rating-text">
              ({product.numReviews} reviews)
            </span>
          </div>
          
          <div className="product-price">
            <span className="price">₹{product.price.toFixed(2)}</span>
            {product.stock < 10 && product.stock > 0 && (
              <span className="low-stock">Only {product.stock} left!</span>
            )}
            {product.stock === 0 && (
              <span className="out-of-stock">Out of Stock</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard; 