import React from "react";
import Dropdown from "./Dropdown";
import Graph from "./Graph";
import SkeletonLoader from "./SkeletonLoader";

const Marketting = ({ options, loading }) => {
  return (
    <div className="card-container c2-marketting">
      <div className="card-marketting-top">
        {loading ? (
          <div className="skeleton-card-top">
            <SkeletonLoader />
          </div>
        ) : (
          <div className="card-top marketting">
            <h4 className="card-hr">Marketting</h4>
            <Dropdown options={options} />
          </div>
        )}
        {loading ? (
          <SkeletonLoader />
        ) : (
          <div className="card-buttom">
            <div className="card-buttom-marketting">
              <div className="card-buttom-marketting-circle circle-1"></div>
              <span className="card-label">Acquisition</span>
            </div>
            <div className="card-buttom-marketting">
              <div className="card-buttom-marketting-circle circle-2"></div>
              <span className="card-label">Purchase</span>
            </div>
            <div className="card-buttom-marketting">
              <div className="card-buttom-marketting-circle circle-3"></div>
              <span className="card-label">Retention</span>
            </div>
          </div>
        )}
      </div>
      <div className="card-marketting-buttom">
        <Graph loading={loading} />
      </div>
    </div>
  );
};

export default Marketting;
