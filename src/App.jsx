import { React, useState, useEffect } from 'react';
import './App.scss';

import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import ProductsTable from './components/ProductsTable/ProductsTable';
import CartMenu from './components/CartMenu/CartMenu';

function App() {
  const [cartMenuActive, setCartMenuActive] = useState(false);

  // Data
  const [data, setData] = useState([]);
  useEffect(() => {
      fetch('https://631f7aec22cefb1edc4cdec0.mockapi.io/api/sneakers/items')
      .then(response  => response.json())
      .then(data => setData(data))
  },[]);
  // Onclick Add Items To CartMenu
  const [cartItems, setCartItems] = useState([]);
  function addCartItem(item) {
    setCartItems(prev => [...prev, item]);
  }

  return (
    <div className="wrapper">
      {cartMenuActive ? <CartMenu items={cartItems}/> : null}
      <Header onCartButton={() => setCartMenuActive(!cartMenuActive)}></Header>
      <Slider></Slider>
      <ProductsTable data={data} onPlus={(obj => addCartItem(obj))}></ProductsTable>
    </div>
  );
}

export default App;
