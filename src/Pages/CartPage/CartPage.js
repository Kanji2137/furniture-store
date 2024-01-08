import React from "react";
import {useSelector} from "react-redux";
import CartItems from "./CartItems/CartItems";

function CartPage () {
  const quantity = useSelector(state => state.cart.totalQuantity)
  return (
      <div className="cart">
        <h3>Cart: {quantity} Items</h3>
        <CartItems/>
      </div>
  )
}

export default CartPage;