import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../../store/cart-slice";
import Product from "../../CatalogPage/Product/Product";
import CartItem from "./CartItem/CartItem";

const CartItems = () => {
  const quantity = useSelector(state => state.cart.totalQuantity)
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
      <ul className="cartItems__container">
        {cartItems.map(item => {
          return (
              <li key={item.id}>
                <CartItem name={item.name} url={item.url} price={item.price} description={item.description}/>
                <hr/>
              </li>
          )
        })}
      </ul>
  )
}

export default CartItems;