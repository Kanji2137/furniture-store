import React from "react";
import CartItems from "./CartItems/CartItems";

function CartPage () {
  return (
      <div className="cart">
        <h3>Your shopping cart</h3>
        <div className="cart__page-container">
          <CartItems/>
          <div className="cart__sidebar">right side bar</div>
        </div>
      </div>
  )
}

export default CartPage;