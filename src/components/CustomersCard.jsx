import React from "react";
import { iconsImgs } from "../utils/images";
import Dropdown from "./Dropdown";
import SkeletonLoader from "./SkeletonLoader";

const CustomersCard = ({ options, loading }) => {
  return (
    <div className="card-container c1">
      {loading ? (
        <div className="skeleton-card-top">
          <SkeletonLoader />
        </div>
      ) : (
        <div className="card-top">
          <img src={iconsImgs.user} alt="" className="card-icon-img" />
          <Dropdown options={options} />
        </div>
      )}
      {loading ? (
        <SkeletonLoader />
      ) : (
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
      )}
    </div>
  );
};

export default CustomersCard;
