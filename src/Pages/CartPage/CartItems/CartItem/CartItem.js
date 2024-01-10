import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RiDeleteBin6Line} from 'react-icons/ri';

const CartItem = ({name, url, price, description}) => {
  return (
      <div className="cartItem">
        <div className="cartItem__contentContainer">
          <Link to="/product" className="product"
                state={{name, url, price, description}}>
            <img alt="image of furniture" src={url}/>
          </Link>
          <h1 className="cartItem__name">{name}</h1>
        </div>
        <div className="cartItem__amountChanger">
          <button className="cartItem__amountChanger-but-1">+</button>
          <h1>0</h1>
          <button className="cartItem__amountChanger-but-2">-</button>
        </div>
        <div className="cartItem__price">{price},-</div>
        <button className="cartItem__removeBtn"><RiDeleteBin6Line/></button>
      </div>
  )
}

export default CartItem;