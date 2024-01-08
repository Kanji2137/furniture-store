import React from "react";
import { useLocation } from 'react-router-dom'
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice";

function ProductPage () {
  const location = useLocation()
  const { resource } = location.state
  const dispatch = useDispatch();
  const name = resource.name
  const id = resource.url
  const price = resource.price
  const addToCart = () => {
    dispatch(cartActions.addToCart({
      name,
      id,
      price
    }))
  }

  return (
      <section className="productPage">
        <div className="product">
          <div className={`product__content`}>
            <div className="product__image">
              <img src={resource.url} alt={resource.name} />
            </div>
            <div className="product__title">
              <h1>{resource.name}</h1>
              <h2>{resource.price} $</h2>
              <p>{resource.description}</p>
            </div>
          </div>
        </div>
        <button type="button" onClick={addToCart}>add to cart</button>
      </section>
  );
}

export default ProductPage;