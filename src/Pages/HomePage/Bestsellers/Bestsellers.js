import React from "react";
import data from "../../../data/data.json";

import {Link} from "react-router-dom";

function Bestsellers() {
  return (
      <section className="bestsellers">
        <div className="bestsellers__title">
          <h1>Bestsellers</h1>
        </div>
        <div className="bestsellers__container">
          {data.bestsellers.map((bestseller) => {
            return (
                <Link to="/product" key={bestseller.name} state={{
                  name: bestseller.name,
                  price: bestseller.price,
                  description: bestseller.description,
                  url: bestseller.url
                }}>
                  <div className="bestsellers__tile">
                    <div className="bestsellers__imageContainer">
                      <img src={`${bestseller.url}.png`} alt="chair"/>
                    </div>
                    <div className="bestsellers__description">
                      <h1>{bestseller.name}</h1>
                      <h2>{bestseller.price}</h2>
                    </div>
                  </div>
                </Link>
            );
          })}
        </div>
      </section>
  );
}

export default Bestsellers;
