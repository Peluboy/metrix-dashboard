import React from "react";
import { iconsImgs } from "../utils/images";
import Dropdown from "./Dropdown";

const SalesCard = ({ options }) => {
  return (
    <div className="card-container">
      <div className="card-top">
        <img src={iconsImgs.graph} alt="" className="card-icon-img" />
        <Dropdown options={options} />
      </div>
      <div className="card-buttom">
        <div className="card-buttom-c1">
          <span className="card-label">Sales</span>
          <h4 className="card-hr">$40,000.00</h4>
        </div>
        <div className="card-buttom-c2">
          <span className="card-label">Volume</span>
          <h4 className="card-hr">
            450 <span>+20.00%</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
