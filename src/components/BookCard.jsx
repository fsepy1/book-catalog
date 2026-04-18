import React from 'react';

const BookCard = ({ book, onAddToCart }) => {
  return (
    <div style={styles.card}>
      <div style={styles.cover}>
        📖
      </div>
      <div style={styles.content}>
        <h3 style={styles.title}>{book.title}</h3>
        <p style={styles.author}>{book.author}</p>
        <p style={styles.price}>{book.price} ₽</p>
        <button 
          style={styles.button}
          onClick={() => onAddToCart(book)}
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    backgroundColor: 'white',
  },
  cover: {
    backgroundColor: '#f0f0f0',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
  },
  content: {
    padding: '1rem',
  },
  title: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.1rem',
    color: '#333',
  },
  author: {
    margin: '0 0 0.5rem 0',
    color: '#666',
    fontSize: '0.9rem',
  },
  price: {
    margin: '0 0 1rem 0',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  button: {
    width: '100%',
    padding: '0.5rem',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.2s',
  },
};

export default BookCard;