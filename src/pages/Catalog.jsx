import React from 'react';
import BookCard from '../components/BookCard';
import { useCart } from '../contexts/CartContext';

const booksData = [
  {
    id: 1,
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    price: 450,
  },
  {
    id: 2,
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    price: 520,
  },
  {
    id: 3,
    title: 'Война и мир',
    author: 'Лев Толстой',
    price: 890,
  },
  {
    id: 4,
    title: 'Анна Каренина',
    author: 'Лев Толстой',
    price: 670,
  },
  {
    id: 5,
    title: 'Евгений Онегин',
    author: 'Александр Пушкин',
    price: 380,
  },
  {
    id: 6,
    title: 'Мёртвые души',
    author: 'Николай Гоголь',
    price: 420,
  },
];

const Catalog = () => {
  const { addToCart } = useCart();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Каталог книг</h1>
      <div style={styles.grid}>
        {booksData.map(book => (
          <BookCard 
            key={book.id} 
            book={book} 
            onAddToCart={addToCart}
          />
        ))}
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
};

export default Catalog;