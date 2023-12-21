import React from "react";

function Product({resource}) {
  return (
    <a href={resource.link} target="_blank" key={resource.name} className="product">
      <div className={`product__content`}>
          <div className="product__image">
            <img src={resource.url} alt={resource.name} />
          </div>
          <div className="product__title">
            <h1>{resource.name}</h1>
            <h2>{resource.price} $</h2>
          </div>
      </div>
    </a>
  );
}

export default Product;
