import { React, useState, useEffect } from 'react';
import './App.scss';

import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import ProductsTable from './components/ProductsTable/ProductsTable';
import CartMenu from './components/CartMenu/CartMenu';

function App() {
  // Data
  const [data, setData] = useState([]);
  useEffect(() => {
      fetch('https://631f7aec22cefb1edc4cdec0.mockapi.io/api/sneakers/items')
      .then(response  => response.json())
      .then(data => setData(data))
  },[]);

  // Onclick Hide Cart Menu
  const [cartMenuActive, setCartMenuActive] = useState(false);
  function hideCartMenu() {
    setCartMenuActive(prevState => !prevState)
  }
  // Onclick Add Items To CartMenu
  const [cartItems, setCartItems] = useState([]);
  function addCartItem(item) {
    let alreadyAdded = false;
    cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        alreadyAdded = true;
      }
    })
    if (alreadyAdded === false) {
      setCartItems(prevState => [...prevState, item]);
    }
  }
  // Onclick Delete Items From CartMenu
  const [deletedCartId, setDeletedCartId] = useState(0);
  function deleteCartItem(id) {
    setCartItems(prev => prev.filter(item => item.id !== id));
    setDeletedCartId(id);
  }

  // Calculate Cart Sum Value
  const [cartValueSum, setCartValueSum] = useState(0);
  useEffect(() => {
    setCartValueSum(cartItems.reduce(
      (sum, item) => sum + parseInt(item.price.replace(' ', '')), 0))
  },[cartItems]);
  

  return (
    <div className="wrapper">
      {cartMenuActive ? <CartMenu 
        hideCartMenu={hideCartMenu} 
        deleteCartItem={deleteCartItem} items={cartItems}
        cartValueSum={cartValueSum}
      /> : null}
      <Header 
        onCartButton={() => setCartMenuActive((prevState)=>!prevState)}
        cartValueSum={cartValueSum}
      ></Header>
      <Slider></Slider>
      <ProductsTable 
        data={data} 
        onPlus={(obj => addCartItem(obj))}
        addedCartItems={cartItems}
        deletedCartId={deletedCartId}
      ></ProductsTable>
    </div>
  );
}

export default App;
