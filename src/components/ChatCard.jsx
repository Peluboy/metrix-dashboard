import React from "react";
import { useParams } from "react-router-dom";
import { contacts } from "../data/data";
import "../styles/charts.css";
import ConversationCard from "./ConversationCard";

const ChatCard = () => {
  const { contactId } = useParams();

  const selectedContact = contacts.find(
    (contact) => contact.id === parseInt(contactId)
  );

  if (!selectedContact) {
    // return <div className="chat-card">Contact not found!</div>;
    return (
      <div className="chat-card">
        <ConversationCard />
      </div>
    );
  }

  return (
    <div className="chat-card">
      <h3>{selectedContact.name}</h3>
      <p>{selectedContact.bio}</p>
    </div>
  );
};

export default ChatCard;
