import React from "react";
import {useLocation} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice";

function ProductPage() {
  const location = useLocation()
  const {resource} = location.state
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
        <div className="productPage__container">
          <div className="productPage__image">
            <img src={resource.url} alt={resource.name}/>
          </div>
          <div className="productPage__description">
            <h1>{resource.name}</h1>
            <h2>{resource.price} $</h2>
            <p>{resource.description}</p>
            <button className="button button--hyperion productPage__button" type="button" onClick={addToCart}>
              <span>
                  <span>add to cart</span>
              </span>
            </button>
          </div>
        </div>
      </section>
  );
}

export default ProductPage;