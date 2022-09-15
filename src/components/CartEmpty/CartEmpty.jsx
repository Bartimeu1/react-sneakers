import { React } from 'react';
import './CartEmpty.scss';

import box from '../../assets/images/cart-empty.png';

function CartEmpty() {
    return (
      <div className="cartEmpty">
        <img src={box} alt="" className="cartEmpty-img" />
        <div className="cartEmpty__text">
            <h2 className="cartEmpty__text-title">Корзина пустая</h2>
            <p className="cartEmpty__text-subtitle">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
        </div>
      </div>
    );
}

export default CartEmpty;
