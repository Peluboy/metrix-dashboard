import React from "react";
import { iconsImgs } from "../utils/images";
import Dropdown from "./Dropdown";

const CustomersCard = ({ options }) => {
  return (
    <div className="card-container c1">
      <div className="card-top">
        <img src={iconsImgs.user} alt="" className="card-icon-img" />
        <Dropdown options={options} />
      </div>
      <div className="card-buttom">
        <div className="card-buttom-c1">
          <span className="card-label">Customers</span>
          <h4 className="card-hr">
            1,250 <span>+15.80%</span>
          </h4>
        </div>
        <div className="card-buttom-c2">
          <span className="card-label">Active</span>
          <h4 className="card-hr">
            1,180 <span>85%</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CustomersCard;
