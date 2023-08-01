import React from "react";
import { iconsImgs } from "../utils/images";
import Dropdown from "./Dropdown";

const OrdersCard = ({ options }) => {
  return (
    <div className="card-container c1">
      <div className="card-top">
        <img src={iconsImgs.bag} alt="" className="card-icon-img" />
        <Dropdown options={options} />
      </div>
      <div className="card-buttom">
        <div className="card-buttom-c1">
          <span className="card-label">All Orders</span>
          <h4 className="card-hr">450</h4>
        </div>
        <div className="card-buttom-c2">
          <span className="card-label">Pending</span>
          <h4 className="card-hr">5</h4>
        </div>
        <div className="card-buttom-c3">
          <span className="card-label">Completed</span>
          <h4 className="card-hr">445</h4>
        </div>
      </div>
    </div>
  );
};

export default OrdersCard;
