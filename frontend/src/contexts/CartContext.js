import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [loading, setLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  // Load cart when user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadCart();
    } else {
      setCart({ items: [], total: 0 });
    }
  }, [isAuthenticated]);

  const loadCart = async () => {
    if (!isAuthenticated) return;
    
    setLoading(true);
    try {
      const response = await axios.get('/api/cart');
      setCart(response.data);
    } catch (error) {
      console.error('Failed to load cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    if (!isAuthenticated) {
      toast.error('Please login to add items to cart');
      return { success: false };
    }

    setLoading(true);
    try {
      const response = await axios.post('/api/cart/add', { productId, quantity });
      setCart(response.data);
      toast.success('Added to cart!');
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to add to cart';
      toast.error(message);
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  const updateCartItem = async (productId, quantity) => {
    if (!isAuthenticated) return { success: false };

    setLoading(true);
    try {
      const response = await axios.put(`/api/cart/update/${productId}`, { quantity });
      setCart(response.data);
      toast.success('Cart updated!');
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to update cart';
      toast.error(message);
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (productId) => {
    if (!isAuthenticated) return { success: false };

    setLoading(true);
    try {
      const response = await axios.delete(`/api/cart/remove/${productId}`);
      setCart(response.data);
      toast.success('Item removed from cart');
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to remove item';
      toast.error(message);
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    if (!isAuthenticated) return { success: false };

    setLoading(true);
    try {
      const response = await axios.delete('/api/cart/clear');
      setCart(response.data);
      toast.success('Cart cleared');
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to clear cart';
      toast.error(message);
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  const getCartItemCount = () => {
    return cart.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cart.total;
  };

  const value = {
    cart,
    loading,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    loadCart,
    getCartItemCount,
    getCartTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}; 