import {React, useState, useEffect} from 'react';
import './ProductsTable.scss';

import ProductsItem from '../ProductsItem/ProductsItem';

import search from '../../assets/images/search.svg';


function ProductsTable({data, onPlus}) {

    // Filter Items
    const [filterText, setFilterText] = useState('');
    const [currentItems, setCurrentItems] = useState([]);
    function handleFilterTextChange(e) {
        setFilterText(e.target.value);
    }
    useEffect(() => {
        if (filterText !== '') {
            const searchedItems = data.filter(item=>item.name.toLowerCase().includes(filterText));
            setCurrentItems(searchedItems);
        } else {
            setCurrentItems(data)
        }
    },[data, filterText])

    return (
      <section className='productsTable'>
        <div className="productsTable-topper">
            <h2 className="productsTable-title">Все кроссовки</h2>
            <div className="productsTable-search">
                <img src={search} alt="search" />
                <input className='productsTable-input' onChange={handleFilterTextChange} type="text" placeholder='Поиск...' />
            </div>
        </div>
        <div className="productsTable-items">
            {currentItems.map((item, index) => (
                <ProductsItem 
                    key={index} 
                    title={item.name} 
                    price={item.price} 
                    imgUrl={item.image}
                    onPlus={onPlus}
                ></ProductsItem>
            ))}
        </div>
      </section>
    );
}

export default ProductsTable;
