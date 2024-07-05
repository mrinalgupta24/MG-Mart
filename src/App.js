import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import Finish from './components/Finish';



const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      const updatedCart = cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCart);
    } else {
      const newCartItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const updateCart = updatedCartItems => {
    setCartItems(updatedCartItems);
  };

  return (
    <Router>
      <div>
        <nav>
          <div className='logo'>
            <ul>
              <li>
                <Link to="/">MG Mart</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/cart">Cart ({cartItems.length})</Link>
                {/* <Link to="/cart">Cart</Link> */}
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Products addToCart={addToCart} />}>
            {/* <Products addToCart={addToCart} /> */}
          </Route>
          <Route path="/cart" element={<Cart cartItems={cartItems} updateCart={updateCart} />}>
            {/* <Cart cartItems={cartItems} updateCart={updateCart} /> */}
          </Route>
          <Route path="/finish" element={<Finish/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
