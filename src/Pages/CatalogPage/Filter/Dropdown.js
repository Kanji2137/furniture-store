import {useState} from "react";

const Dropdown = ({label, kinds, handleFilter}) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const items = kinds
  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (event) => {
    const value = event.target.value
    if(value === "All"){
      setSelectedItem("");
      handleFilter("");
    } else {
      setSelectedItem(value);
      handleFilter(value);
    }
  }

  return (
      <div className='dropdown'>
        <div className='dropdown-header' onClick={toggleDropdown}>
          {label}
          <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
        </div>
        <div className={`dropdown-body ${isOpen && 'open'}`}>
          <select onChange={handleItemClick} value={selectedItem}>
            {items.map(item => (
                <option value={item}
                        className={`dropdown-item-dot ${item === selectedItem && 'selected'}`}>{item}</option>
            ))}
          </select>
        </div>
      </div>
  )
}

export default Dropdown;