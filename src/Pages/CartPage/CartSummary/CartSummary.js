import React from "react";
import {useSelector} from "react-redux";

function CartSummary () {
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const total = totalPrice + 9.99
  return (
      <div className="cartSummary">
        <div className="cartSummary__container">
          <div className="cartSummary__items">
            <span>Products price</span>
            <price> {totalPrice}</price>
          </div>
          <div className="cartSummary__items">
            <span>Delivery from</span>
            <price>9.99</price>
          </div>
          <hr/>
          <div className="cartSummary__items cartSummary__total">
            <span>Including delivery</span>
            <div className="cartSummary__price">{total}</div>
          </div>
          <button className="button button--hyperion cartSummary__button" type="button">
              <span>
                  <span>payment</span>
              </span>
          </button>
        </div>
      </div>
  )
}

export default CartSummary;