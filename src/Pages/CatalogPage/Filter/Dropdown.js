import {useState} from "react";

const Dropdown = ({label, kinds, handleFilter, byRoom}) => {
  const [selectedItem, setSelectedItem] = useState(byRoom);

  const items = kinds

  const handleItemClick = (event) => {
    const value = event.target.value
    if (value === "All") {
      setSelectedItem("");
      handleFilter("");
    } else {
      setSelectedItem(value);
      handleFilter(value);
    }
  }
  return (
      <div className="dropdown">
        <h1>{label}</h1>
        <select onChange={handleItemClick} value={selectedItem}>
          {items.map(item => (
              <option value={item} className="dropdown-item">{item}</option>
          ))}
        </select>
      </div>
  )
}

export default Dropdown;