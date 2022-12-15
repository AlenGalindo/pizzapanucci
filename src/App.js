import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import { Container } from 'react-bootstrap';
import Index from './pages/Index';
import Store from './pages/Store';
import { useState } from 'react';
import Checkout from './pages/Checkout';
import Pizzas from './pages/Pizzas';
import Bebidas from './pages/Bebidas';
import Cart from './components/Cart';
import back from './data/images/AMERICANA.jpeg';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
      setShowCart(true);
  };

  const closeCart = () => {
      setShowCart(false);
  };

  const addToCart = (order) => {
    let cartIndex = cart.findIndex(c => (
      c.id === order.id
      && c.size === order.size
    ));
    let item = cart[cartIndex];

    if (item) {
      item.qty += order.qty;
      item.price += order.price;
      setCart(cart);
      alert("Agregado al carrito");
    } else {
      setCart([...cart, order]);
    }
  };

  return (
    <Layout
      cart={cart}
      showCart={showCart}
      openCart={openCart}
      closeCart={closeCart}
    >
      <Container style={{backgroundImage:'url${back}'}}>
        <Routes >
          <Route path='/checkout' element={<Checkout />} exact />
          <Route path='/pizzas' element={<Pizzas addToCart={addToCart}/>} exact />
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;