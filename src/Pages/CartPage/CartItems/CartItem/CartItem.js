import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {RiDeleteBin6Line} from 'react-icons/ri';
import {cartActions} from "../../../../store/cart-slice";

const CartItem = ({quantity, name, url, price, description}) => {

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
      <div className="cartItem">
        <div className="cartItem__contentContainer">
          <Link to="/product"
                state={{name, url, price, description}}>
            <img alt="furniture" src={`${url}.png`}/>
          </Link>
          <h1 className="cartItem__name">{name}</h1>
        </div>
        <div className="cartItem__amountChanger">
          <button onClick={() => incrementCartItems(name, url, price)} className="cartItem__amountChanger-but-1">+</button>
          <h1>{quantity}</h1>
          <button onClick={() => decrementCartItems(url)} className="cartItem__amountChanger-but-2">-</button>
        </div>
        <div className="cartItem__price">{price},-</div>
        <button onClick={() => removeCartItems(url)} className="cartItem__removeBtn"><RiDeleteBin6Line/></button>
      </div>
  )
}

export default CartItem;