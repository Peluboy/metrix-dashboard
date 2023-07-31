import React from "react";
import Routers from "../routers/Routers";
import "../styles/content.css";
import Navbar from "./Navbar";

const Content = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="main-content">
        <Routers />
      </div>
    </div>
  );
};

export default Content;
