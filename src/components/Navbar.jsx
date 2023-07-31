import React, { useContext, useEffect, useState } from "react";
import "../styles/navbar.css";
import { useLocation } from "react-router-dom";
import { SidebarContext } from "../context/sidebarContext";
import { iconsImgs, personsImgs } from "../utils/images";

const Navbar = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const options = [
    "Dupe's shop",
    "Ore's shop",
    "Shalewa's shop",
    "Yemi's shop",
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [routeTitle, setRouteTitle] = useState("Dashboard");

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const location = useLocation();

  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  useEffect(() => {
    const pathSegments = location.pathname
      .split("/")
      .filter((segment) => segment !== "");
    const lastSegment = pathSegments[pathSegments.length - 1];

    setRouteTitle(
      lastSegment ? capitalizeFirstLetter(lastSegment) : "Dashboard"
    );
  }, [location.pathname]);

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="top-left">
          <button
            type="button"
            className="sidebar-toggler"
            onClick={() => toggleSidebar()}
          >
            <img src={iconsImgs.menu} alt="" />
          </button>
          <h4 className="navbar-title">{routeTitle}</h4>
        </div>
        <div className="top-right">
          <div className="dropdown">
            <input
              type="text"
              className="textBox"
              placeholder="Nanny's Shop"
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
          <img src={iconsImgs.notification} alt="" />
          <img
            src={personsImgs.person_two}
            alt=""
            className="navbar-profile-pic"
          />
        </div>
      </div>
      <div className="navbar-bottom">
        <p className="breadcrum">
          <img src={iconsImgs.home} alt="" />{" "}
          {pathSegments.map(
            (segment, index) => `/ ${capitalizeFirstLetter(segment)}`
          )}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
