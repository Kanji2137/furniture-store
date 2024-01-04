import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import {GoSearch} from "react-icons/go";

const SearchBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/shop/${value}`);
    setValue("")
  }

  return (
      <div className="searchbar">
        <div className="searchbar__search">
          <form onSubmit={handleSubmit}>
            <div className="searchbar__input-container">
              <GoSearch className="searchbar__icon"/>
              <input value={value} onChange={handleChange} placeholder="What are you looking?"/>
            </div>
          </form>
        </div>
      </div>
  )
}

export default SearchBar