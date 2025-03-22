// src/context/CartContext.jsx
import React, { createContext, useState, useEffect, useCallback } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Инициализация состояния корзины из localStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error parsing cart data:', error);
      return [];
    }
  });

  // Синхронизация с localStorage при изменении корзины
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart data:', error);
    }
  }, [cart]);

  // Обработчик для синхронизации между вкладками
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'cart') {
        try {
          setCart(JSON.parse(e.newValue));
        } catch (error) {
          console.error('Error parsing updated cart data:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  

  // Добавление товара в корзину
  const addToCart = useCallback((product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevCart, { 
        ...product,
        quantity: 1,
        addedAt: new Date().toISOString() // Для сортировки при необходимости
      }];
    });
  }, []);

    const updateQuantity = useCallback((id, newQuantity) => {
    setCart(prevCart => {
      if (newQuantity < 1) return prevCart;
      
      return prevCart.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, newQuantity) } 
          : item
      );
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  }, []);

  

  // Общее количество товаров в корзине
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};