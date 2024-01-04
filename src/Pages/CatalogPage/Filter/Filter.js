import React, {useState} from "react";
import data from "../../../data/data.json";
import Product from "../Product/Product";

import CollapseList from "./Dropdown";
import FilterList from "../../../Components/Filters/Filter";

const Filter = ({showFilterCategories, searchQuery}) => {
  const [resources, setResources] = useState(data.products.products);
  const [categories] = useState(data.products.categories);
  const [filter, setFilter] = useState("all");
  const [filterActivity, setFilterActivity] = useState("");
  const [filterColor, setFilterColor] = useState("");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleFilterActivityChange = (newFilterActivity) => {
    setFilterActivity(newFilterActivity);
  };

  const handleFilterColorChange = (newFilterColor) => {
    setFilterColor(newFilterColor);
  };

  const filterResources = () => {
    return resources.filter((resource) => {
      return searchQuery === "" || resource.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  };

  const filterCategories = (resourcesToFilter) => {
    return resourcesToFilter.filter((resource) => {
      const filterMatchActivity = filterActivity === "all" || resource.activity.includes(filterActivity);
      const filterMatchColor = filterColor === "all" || resource.color.includes(filterColor);
      return filterMatchActivity && filterMatchColor;
    });
  };

  const filterTypes = (resourcesToFilter) => {
    return resourcesToFilter.filter((resource) => {
      return filter === "all" || resource.type.includes(filter);
    });
  };

  const filteredResourcesByTypes = filterResources() && filterCategories(filterResources());
  const filteredResources = showFilterCategories ? filterTypes(filteredResourcesByTypes) : filteredResourcesByTypes;

  return (
      <div>
        <h1>{searchQuery ? `Showing results for '${searchQuery}'` : ''}</h1>
        <div className="container-btn">
          {showFilterCategories && <FilterList filter={filter} handleFilterChange={handleFilterChange}/>}
          {categories.map((item) => (
              <CollapseList
                  key={item.label}
                  label={item.label}
                  kinds={item.kinds}
                  handleFilter={item.option === "activity" ? handleFilterActivityChange : handleFilterColorChange}
              />
          ))}
        </div>

        {/* Content Cards */}
        <div className="product__container">
          {filteredResources.map((resource, index) => (
              <Product key={index} resource={resource}/>
          ))}
        </div>
      </div>
  );
};

export default Filter;