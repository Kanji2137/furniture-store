import React from "react";
import {Link} from "react-router-dom";

function Product({name, price, description, url}) {
  return (
      <Link to="/product" key={name} className="product" state={{name, price, description, url}}>
        <div className="product__image">
          <img src={`${url}.png`} alt={name}/>
        </div>
        <div className="product__title">
          <h1>{name}</h1>
          <h2>{price} $</h2>
        </div>
      </Link>
  );
}

export default Product;
