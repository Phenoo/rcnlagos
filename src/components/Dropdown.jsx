import React from "react";
import { serviceDropdown } from "./NavItems";
import { useNavigate } from "react-router-dom";

function Dropdown() {
  let navigate = useNavigate();

  function handleChange(value) {
    navigate(`${value}`);
  }

  return (
    <li>
      <select onChange={event => handleChange(event.target.value)}>
      <option className='nav-item'>About</option>
      {serviceDropdown.map((item, index) => (
          <option value={`${item.path}`} key={index}>{item.title}</option> 
        )
        )}
        </select>
    </li>
  );
}

export default Dropdown;
