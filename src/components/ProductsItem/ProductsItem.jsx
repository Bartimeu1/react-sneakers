import { React, useState, useEffect } from 'react';
import './ProductsItem.scss';

function ProductsItem({title, price, imgUrl, onPlus, id, deletedCartId}) {
    const [isAdded, setIsAdded] = useState(false);

    function createItemObj() {
      const obj = {
        title: title,
        price: price,
        imgUrl: imgUrl,
        id: id
      };
      return obj;
    }
    // On Delete Cart
    useEffect(() => {
      if (id === deletedCartId) {
        setIsAdded(!isAdded)
      }
    },[deletedCartId])
    return (
      <div className="productsItem">
        <div className="productsItem__info">
            <img src={process.env.PUBLIC_URL + imgUrl} alt="product" className='productsItem-img'/>
            <h3 className="productsItem-title">{title}</h3>
        </div>
        <div className="productsItem__price">
            <p className="productsItem__price-text">Цена:</p>
            <h4 className='productsItem__price-value'>{price}</h4>
        </div>
        <button 
        className={isAdded ? 'productsItem__added' : 'productsItem__unadded'} 
        onClick={() => {
          if (isAdded === false) {
            onPlus(createItemObj())
          }
          setIsAdded(prevState => !prevState)
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6653 5.13122H7.20215V1.66821C7.20215 0.332846 5.13115 0.332846 5.13115 1.66821V5.13122H1.66802C0.332951 5.13122 0.332951 7.20215 1.66802 7.20215H5.13115V10.6652C5.13115 12.0005 7.20215 12.0005 7.20215 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
          </svg>
        </button>
      </div>
    );
}

export default ProductsItem;
