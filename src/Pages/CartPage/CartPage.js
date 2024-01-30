import React from "react";
import CartItems from "./CartItems/CartItems";
import CartSummary from "./CartSummary/CartSummary";

function CartPage () {
  return (
      <div className="cart">
        <div className="cart__page-container">
          <CartItems/>
          <CartSummary/>
        </div>
      </div>
  )
}

export default CartPage;