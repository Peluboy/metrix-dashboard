import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Inventory from "../pages/Inventory";
import Conversation from "../pages/Conversation";
import Logout from "../pages/Logout";
import Page404 from "../pages/Page404";
import Settings from "../pages/Settings";
import Orders from "../pages/Orders";
import Support from "../pages/Support";
import ChatCard from "../components/ChatCard";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/conversations" element={<Conversation />} />
      <Route path="/support" element={<Support />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/conversations/:contactId" element={<ChatCard />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Routers;
