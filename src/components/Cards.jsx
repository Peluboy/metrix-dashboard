import React from "react";
import "../styles/cards.css";
import { iconsImgs } from "../utils/images";
import Dropdown from "./Dropdown";
import Report from "./Report";
import Orders from "./Orders";
import Marketting from "./Marketting";
import SalesCard from "./SalesCard";
import CustomersCard from "./CustomersCard";
import OrdersCard from "./OrdersCard";

const Cards = () => {
  const options = ["This month", "Last year", "This week"];

  return (
    <div>
      <div className="card">
        <div className="card-container-top">
          <SalesCard options={options} />
          <CustomersCard options={options} />
          <OrdersCard options={options} />
        </div>

        <div className="card-container-bottom">
          <div className="card-container-left">
            <div className="card-marketting">
              <Marketting options={options} />
              <div className="cards-2">
                <div className="card-container c1 inventory">
                  <div className="card-top">
                    <img
                      src={iconsImgs.folder}
                      alt=""
                      className="card-icon-img"
                    />
                  </div>
                  <div className="card-buttom">
                    <div className="card-buttom-c1">
                      <span className="card-label">All Products</span>
                      <h4 className="card-hr">45</h4>
                    </div>
                    <div className="card-buttom-c2">
                      <span className="card-label">Active</span>
                      <h4 className="card-hr">
                        32 <span>+24%</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="card-container c1">
                  <div className="card-top">
                    <img
                      src={iconsImgs.cart}
                      alt=""
                      className="card-icon-img"
                    />
                    <Dropdown options={options} />
                  </div>
                  <div className="card-buttom">
                    <div className="card-buttom-c1">
                      <span className="card-label" style={{ color: "#CC5F5F" }}>
                        Abandoned Cart
                      </span>
                      <h4 className="card-hr">
                        20% <span>+0.00%</span>
                      </h4>
                    </div>
                    <div className="card-buttom-c2">
                      <span className="card-label">Customers</span>
                      <h4 className="card-hr">30</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Report />
          </div>
          <Orders />
        </div>
      </div>
    </div>
  );
};

export default Cards;
