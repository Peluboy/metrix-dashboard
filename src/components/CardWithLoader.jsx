import React from "react";
import SkeletonLoader from "../components/SkeletonLoader";

const CardWithLoader = ({ children, loading }) => {
  return loading ? (
    <div className="skeleton-card-top">
      <SkeletonLoader />
    </div>
  ) : (
    <div>{children}</div>
  );
};

export default CardWithLoader;
