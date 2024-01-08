import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../../store/cart-slice";

const CartItems = () => {
  const cartItems = useSelector(state => state.cart.itemsList);
  const dispatch = useDispatch();
  const incrementCartItems = (name, id, price) => {
    dispatch(cartActions.addToCart({
      name,
      id,
      price
    }))
  }
  const decrementCartItems = (id) => {
    dispatch(cartActions.decrementCartItems(id));
  }
  const removeCartItems = (id) => {
    dispatch(cartActions.removeCartItems(id));
  }
  return (
      <ul>
        {cartItems.map(item => {
          return (
              <li key={item.id}>
                <h1>name: {item.name}</h1>
                <h1>price: {item.price}</h1>
                <h1>total price: {item.totalPrice}</h1>
                <h1>quantity: {item.quantity}</h1>
                <button onClick={() => incrementCartItems(item.name, item.id, item.price)}>+</button>
                <button onClick={() => decrementCartItems(item.id)}>-</button>
                <button onClick={() => removeCartItems(item.id)}>icon of trash</button>
              </li>
          )
        })}
      </ul>
  )
}

export default CartItems;