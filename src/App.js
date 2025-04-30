import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './index.css';
import './style.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Loja de Livros - Ainda em construção</h1>
      </header>
      <main>
        <ProductList />
        <Cart />
      </main>
      <footer>
        <p>© 2025 Loja de Livros - Meu primeiro aplicativo fazendo Fullstack </p>
      </footer>
    </div>
  );
}

export default App;

