import React from "react";
import { iconsImgs } from "../utils/images";
import Dropdown from "./Dropdown";
import SkeletonLoader from "./SkeletonLoader";

const OrdersCard = ({ options, loading }) => {
  return (
    <div className="card-container c1">
      {loading ? (
        <div className="skeleton-card-top">
          <SkeletonLoader />
        </div>
      ) : (
        <div className="card-top">
          <img src={iconsImgs.bag} alt="" className="card-icon-img" />
          <Dropdown options={options} />
        </div>
      )}
      {loading ? (
        <SkeletonLoader />
      ) : (
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
      )}
    </div>
  );
};

export default OrdersCard;
