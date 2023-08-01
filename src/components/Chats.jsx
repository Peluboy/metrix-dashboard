import React from "react";
import "../styles/charts.css";
import ContactCard from "./ContactCard";
import ChatCard from "./ChatCard";

const Chats = () => {
  return (
    <div className="chats-container">
      <ContactCard />
      <ChatCard />
    </div>
  );
};

export default Chats;
