import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice,
    clearCart 
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <h2>Ваша корзина пуста</h2>
        <Link to="/" style={styles.link}>
          Перейти в каталог
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Корзина</h1>
      
      <div style={styles.cartContent}>
        <div style={styles.itemsList}>
          {cartItems.map(item => (
            <div key={item.id} style={styles.cartItem}>
              <div style={styles.itemInfo}>
                <h3 style={styles.itemTitle}>{item.title}</h3>
                <p style={styles.itemAuthor}>{item.author}</p>
                <p style={styles.itemPrice}>{item.price} ₽</p>
              </div>
              
              <div style={styles.itemControls}>
                <div style={styles.quantityControl}>
                  <button
                    style={styles.quantityBtn}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span style={styles.quantity}>{item.quantity}</span>
                  <button
                    style={styles.quantityBtn}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                
                <button
                  style={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  Удалить
                </button>
              </div>
              
              <div style={styles.itemTotal}>
                {item.price * item.quantity} ₽
              </div>
            </div>
          ))}
        </div>
        
        <div style={styles.summary}>
          <h3>Итого</h3>
          <div style={styles.totalPrice}>
            {getTotalPrice()} ₽
          </div>
          <button 
            style={styles.clearBtn}
            onClick={clearCart}
          >
            Очистить корзину
          </button>
          <button style={styles.checkoutBtn}>
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#333',
  },
  emptyContainer: {
    textAlign: 'center',
    padding: '50px',
  },
  link: {
    color: '#3498db',
    textDecoration: 'none',
    fontSize: '1.1rem',
  },
  cartContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 300px',
    gap: '2rem',
  },
  itemsList: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    borderBottom: '1px solid #eee',
    backgroundColor: 'white',
  },
  itemInfo: {
    flex: 2,
  },
  itemTitle: {
    margin: '0 0 0.5rem 0',
    fontSize: '1rem',
  },
  itemAuthor: {
    margin: '0 0 0.5rem 0',
    color: '#666',
    fontSize: '0.9rem',
  },
  itemPrice: {
    margin: 0,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  itemControls: {
    flex: 1,
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  quantityBtn: {
    width: '30px',
    height: '30px',
    border: '1px solid #ddd',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  quantity: {
    minWidth: '30px',
    textAlign: 'center',
  },
  removeBtn: {
    padding: '0.3rem 0.8rem',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  itemTotal: {
    flex: 1,
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  summary: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    height: 'fit-content',
    backgroundColor: '#f9f9f9',
  },
  totalPrice: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#e74c3c',
    margin: '1rem 0',
  },
  clearBtn: {
    width: '100%',
    padding: '0.5rem',
    backgroundColor: '#95a5a6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '0.5rem',
  },
  checkoutBtn: {
    width: '100%',
    padding: '0.5rem',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default Cart;