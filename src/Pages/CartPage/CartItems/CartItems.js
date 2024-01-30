import React from 'react';
import {useSelector} from "react-redux";
import CartItem from "./CartItem/CartItem";

const CartItems = () => {
  const cartItems = useSelector(state => state.cart.itemsList);

  return (
      <ul className="cartItems__container">
        {cartItems.map(item => {
          return (
              <li key={item.id}>
                <CartItem quantity={item.quantity} name={item.name} url={item.url} price={item.price} description={item.description}/>
                <hr/>
              </li>
          )
        })}
      </ul>
  )
}

export default CartItems;