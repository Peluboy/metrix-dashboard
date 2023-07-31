import React from "react";
import "../styles/dasboard.css";
import Cards from "../components/Cards";

const Dashboard = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards />
      </div>
    </div>
  );
};

export default Dashboard;
