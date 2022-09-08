import React from 'react';
import './ProductsItem.scss';

function ProductsItem({title, price, imgUrl}) {
    return (
      <div className="productsItem">
        <img src={imgUrl} alt="product" className='productsItem-img'/>
        <h3 className="productsItem-title">{title}</h3>
        <div className="productsItem__price">
            <p className="productsItem__price-text">Цена:</p>
            <h4 className='productsItem__price-value'>{price}</h4>
        </div>
      </div>
    );
}

export default ProductsItem;
