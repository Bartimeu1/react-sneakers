import {React, useState, useEffect} from 'react';
import './ProductsTable.scss';

import ProductsItem from '../ProductsItem/ProductsItem';

import search from '../../assets/images/search.svg';
import img1 from '../../assets/images/img-1.png';
import img2 from '../../assets/images/img-2.png';
import img3 from '../../assets/images/img-3.png';
import img4 from '../../assets/images/img-4.png';
import img5 from '../../assets/images/img-5.png';
import img6 from '../../assets/images/img-6.png';
import img7 from '../../assets/images/img-7.png';
import img8 from '../../assets/images/img-8.png';
import img9 from '../../assets/images/img-9.png';
import img10 from '../../assets/images/img-10.png';
import img11 from '../../assets/images/img-11.png';
import img12 from '../../assets/images/img-12.png';

function ProductsTable() {
    const arr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
    // Data
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://627d391fbf2deb7174e9d43c.mockapi.io/sneakers')
        .then(response  => response.json())
        .then(data => setData(data))
    },[]);
    return (
      <section className='productsTable'>
        <div className="productsTable-topper">
            <h2 className="productsTable-title">Все кроссовки</h2>
            <div className="productsTable-search">
                <img src={search} alt="search" />
                <input className='productsTable-input' type="text" placeholder='Поиск...' />
            </div>
        </div>
        <div className="productsTable-items">
            {data.map((item) => (
                <ProductsItem key={data.indexOf(item)} title={item.name} price={item.price} imgUrl={arr[data.indexOf(item)]}></ProductsItem>
            ))}
        </div>
      </section>
    );
}

export default ProductsTable;
