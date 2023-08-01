import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./context/sidebarContext";
import Scrollbars from "react-custom-scrollbars-2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <Scrollbars style={{ width: "100%", height: "100vh" }}>
          <App />
        </Scrollbars>
      </BrowserRouter>
    </SidebarProvider>
  </React.StrictMode>
);
