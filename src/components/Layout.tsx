import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { Layout } from './components/Layout';
import { ProductList } from './pages/ProductList';
import { Cart } from './pages/Cart';
import { OrderStatus } from './pages/OrderStatus';

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-status" element={<OrderStatus />} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
}

export default App;

