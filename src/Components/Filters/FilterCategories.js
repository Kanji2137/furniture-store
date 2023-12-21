import React from "react";
import data from "../../data/data.json";

const FilterCategories = ({filter, handleFilterChange}) => {
  return (
      <div className="buttons">
        <div className="btn-group">
          {data.products.types.map((product) => {
            return (
                <button
                    className={`button ${filter === product.type ? "active" : ""}`}
                    onClick={() => handleFilterChange(product.type)}
                >
                  {product.name}
                </button>
            );
          })}
        </div>
      </div>
  )
}

export default FilterCategories