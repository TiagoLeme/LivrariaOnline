import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './index.css';
import './style.css';

function App() {
  return (
    <div className="container">
      <header role="banner">
        <h1 tabIndex="0">Loja de Livros - Ainda em construção</h1>
      </header>
      <main role="main">
        <section aria-labelledby="product-list">
          <h2 id="product-list" className="visually-hidden">Lista de Produtos</h2>
          <ProductList />
        </section>
        <section aria-labelledby="shopping-cart">
          <h2 id="shopping-cart" className="visually-hidden">Carrinho de Compras</h2>
          <Cart />
        </section>
      </main>
      <footer role="contentinfo">
        <p>© 2025 Loja de Livros - Meu primeiro aplicativo fazendo Fullstack</p>
      </footer>
    </div>
  );
}

export default App;


