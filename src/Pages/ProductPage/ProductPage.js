import React from "react";
import {useLocation} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice";

import {BsHeart} from "react-icons/bs";
import {wishlistActions} from "../../store/wishlist-slice";

function ProductPage() {
  const location = useLocation()
  const {name, url, price, description} = location.state
  const dispatch = useDispatch();
  const id = url
  const addToCart = () => {
    dispatch(cartActions.addToCart({
      name,
      url,
      description,
      id,
      price
    }))
  }

  const addToWishlist = () => {
    dispatch(wishlistActions.addToWishlist({
      name,
      url,
      description,
      id,
      price
    }))
  }

  return (
      <section className="productPage">
        <div className="productPage__container">
          <div className="productPage__image">
            <img src={url} alt={name}/>
          </div>
          <div className="productPage__description">
            <h1>{name}</h1>
            <h2>{price} $</h2>
            <p>{description}</p>
            <button className="button button--hyperion productPage__button" type="button" onClick={addToCart}>
              <span>
                  <span>add to cart</span>
              </span>
            </button>
            <div className="productPage__wishlist" onClick={addToWishlist}>
              <h2>Add to wishlist</h2>
              <BsHeart/>
            </div>
          </div>
        </div>
        <div className="productPage__moreDescription">more description</div>
      </section>
  );
}

export default ProductPage;