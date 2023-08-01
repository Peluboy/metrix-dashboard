import React from "react";
import { iconsImgs, personsImgs } from "../utils/images";
import ChatConversation from "./ChatConversation";

const ConversationCard = () => {
  return (
    <div>
      <div className="contact-card-content">
        <div className="contact-card-content-left">
          <img
            src={personsImgs.person_one}
            alt=""
            className="contact-card-img"
          />
          <div className="contact-card-content-texts contacts-price">
            <p className="chat-title">Jane Doe</p>
            <div className="online-time">
              <div className="card-buttom-marketting">
                <div className="card-buttom-marketting-circle circle-1"></div>
                <span className="card-label">Online</span>
              </div>
              <p className="no-of-orders">12:45 am</p>
            </div>
          </div>
        </div>
        <div className="conversation-card-right">
          <div className="conversation-card-right-top">
            <p className="customer">View customer</p>
            <p className="profile">View Profile</p>
          </div>
          <div className="conversation-card-right-bottom">
            <img src={iconsImgs.bag} alt="" />
            <p className="no-of-orders">0 Orders</p>
          </div>
        </div>
      </div>

      <ChatConversation />
    </div>
  );
};

export default ConversationCard;
