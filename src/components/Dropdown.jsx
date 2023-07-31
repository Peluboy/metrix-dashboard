import React, { useState } from "react";
import "../styles/dropdown.css";

const Dropdown = ({ options }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown">
      <input
        type="text"
        className="textBox"
        placeholder={selectedOption}
        value={selectedOption}
        readOnly
        onClick={toggleDropdown}
      />
      <div className={`option ${isDropdownOpen ? "open" : ""}`}>
        {options.map((option, index) => (
          <div key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
