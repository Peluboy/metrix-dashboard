import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Layout;
