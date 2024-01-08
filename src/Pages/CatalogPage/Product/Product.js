import React from "react";
import { Link } from "react-router-dom";

function Product({resource}) {
  return (
    <Link to="/product" key={resource.name} className="product" state={{ resource: resource }}>
      <div className={`product__content`}>
          <div className="product__image">
            <img src={resource.url} alt={resource.name} />
          </div>
          <div className="product__title">
            <h1>{resource.name}</h1>
            <h2>{resource.price} $</h2>
          </div>
      </div>
    </Link>
  );
}

export default Product;
