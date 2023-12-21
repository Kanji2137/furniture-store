import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

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
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input value={value} onChange={handleChange} placeholder="What are you looking?"/>
          </form>
        </div>
      </div>
  )
}

export default SearchBar