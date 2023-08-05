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
          <img src={iconsImgs.graph} alt="" className="card-icon-img-sales" />
          <Dropdown options={options} />
        </div>
      )}
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="card-buttom">
          <div className="card-buttom-c1">
            <span className="card-label">Sales</span>
            <h4 className="card-hr">$4,000,000</h4>
          </div>
          <div className="card-buttom-c2">
            <span className="card-label">Volume</span>
            <h4 className="card-hr">
              450 <span>20.00%</span>
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersCard;
