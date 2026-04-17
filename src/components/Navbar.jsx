import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          📚 Книжный магазин
        </Link>
        <Link to="/cart" style={styles.cartLink}>
          🛒 Корзина
          {itemCount > 0 && (
            <span style={styles.badge}>{itemCount}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#2c3e50',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: '1.5rem',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  cartLink: {
    color: 'white',
    fontSize: '1.2rem',
    textDecoration: 'none',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: '-10px',
    right: '-20px',
    backgroundColor: '#e74c3c',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  },
};

export default Navbar;