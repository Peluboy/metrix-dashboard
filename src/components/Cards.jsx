import React from "react";
import "../styles/cards.css";
import { iconsImgs } from "../utils/images";
import Dropdown from "./Dropdown";
import Report from "./Report";

const Cards = () => {
  const options = ["This month", "Last year", "This week"];

  return (
    <div>
      <div className="card">
        <div className="card-container-top">
          <div className="card-container">
            <div className="card-top">
              <img src={iconsImgs.graph} alt="" className="card-icon-img" />
              <Dropdown options={options} />
            </div>
            <div className="card-buttom">
              <div className="card-buttom-c1">
                <span className="card-label">Sales</span>
                <h4 className="card-hr">$40,000.00</h4>
              </div>
              <div className="card-buttom-c2">
                <span className="card-label">Volume</span>
                <h4 className="card-hr">
                  450 <span>+20.00%</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="card-container c1">
            <div className="card-top">
              <img src={iconsImgs.user} alt="" className="card-icon-img" />
              <Dropdown options={options} />
            </div>
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
          </div>
          <div className="card-container c1">
            <div className="card-top">
              <img src={iconsImgs.bag} alt="" className="card-icon-img" />
              <Dropdown options={options} />
            </div>
            <div className="card-buttom">
              <div className="card-buttom-c1">
                <span className="card-label">All Orders</span>
                <h4 className="card-hr">450</h4>
              </div>
              <div className="card-buttom-c2">
                <span className="card-label">Pending</span>
                <h4 className="card-hr">5</h4>
              </div>
              <div className="card-buttom-c3">
                <span className="card-label">Completed</span>
                <h4 className="card-hr">445</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container-bottom">
          <div className="card-container-left">
            <div className="card-marketting">
              <div className="card-container c2">
                <div className="card-top marketting">
                  <h4 className="card-hr">Marketting</h4>
                  <Dropdown options={options} />
                </div>
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
              </div>

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
                      <span className="card-label">Abandoned Cart</span>
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
          <div className="card-container-right">
            <div className="card-container c2">
              <div className="card-top marketting">
                <h4 className="card-hr">Marketting</h4>
                <Dropdown options={options} />
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
