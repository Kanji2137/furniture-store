import React, {useState} from "react";
import data from "../../../data/data.json";
import Product from "../Product/Product";

import CollapseList from "./Dropdown";
import FilterList from "../../../Components/Filters/Filter";

const Filter = ({room, showFilterCategories, searchQuery}) => {
  const resources = data.products.products;
  const [categories] = useState(data.products.categories);
  const [filter, setFilter] = useState("all");
  const [filterRoom, setFilterRoom] = useState(room);
  const [filterColor, setFilterColor] = useState("");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleFilterRoomChange = (newFilterRoom) => {
    setFilterRoom(newFilterRoom);
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
      const filterMatchRoom = filterRoom === "all" || resource.room.includes(filterRoom);
      const filterMatchColor = filterColor === "all" || resource.color.includes(filterColor);
      return filterMatchRoom && filterMatchColor;
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
      <div className="catalogPage__container">
        <h1>{searchQuery ? `Showing results for '${searchQuery}'` : ''}</h1>
        <div className="container-btn">
          {showFilterCategories && <FilterList filter={filter} handleFilterChange={handleFilterChange}/>}

          {categories.map((item) => (
              <CollapseList
                  key={item.label}
                  label={item.label}
                  kinds={item.kinds}
                  handleFilter={item.option === "room" ? handleFilterRoomChange : handleFilterColorChange}
                  byRoom={room === "all" ? "" : room}
              />
          ))}
        </div>

        {/* Content Cards */}
        <div className="product__container">
          {filteredResources.map((resource, index) => (
              <Product key={index} name={resource.name} url={resource.url} price={resource.price} description={resource.description }/>
          ))}
        </div>
      </div>
  );
};

export default Filter;