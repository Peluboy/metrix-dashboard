import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards loading={loading} />
      </div>
    </div>
  );
};

export default Dashboard;
