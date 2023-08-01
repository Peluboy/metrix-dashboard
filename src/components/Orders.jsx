import React from "react";
import { orderData } from "../data/data";

const Orders = () => {
  return (
    <div className="card-container c2 order-container">
      <div className="card-top marketting">
        <h4 className="card-hr">Recent Orders</h4>
      </div>
      <div className="orders">
        {orderData.map((orders, index) => (
          <ul key={index}>
            <li>
              <div
                className={`orders-content ${
                  index === orderData.length - 1 ? "last-item" : ""
                }`}
              >
                <div className="orders-content-left">
                  <img src={orders.image} alt="" className="orders-img" />
                  <div className="order-content-texts title-price">
                    <p>{orders.name}</p>
                    <p>{orders.price}</p>
                  </div>
                </div>
                <div className="orders-content-right">
                  <div
                    className={`order-content-texts order-status status-${orders.status.toLowerCase()}`}
                  >
                    <p>{orders.date}</p>
                    <p>{orders.status}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Orders;
