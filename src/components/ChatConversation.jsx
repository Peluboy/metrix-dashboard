import React, { useState } from "react";
import { format, isToday, isYesterday } from "date-fns";
import "../styles/conversation.css";
import { iconsImgs } from "../utils/images";

const ChatConversation = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [conversation, setConversation] = useState([
    {
      id: 1,
      sender: "client",
      text: "Hello, I want to make enquiries about you product",
      timestamp: new Date(),
    },
    {
      id: 2,
      sender: "user",
      text: "Hello Janet, thank you for reaching out",
      timestamp: new Date(),
    },
    {
      id: 3,
      sender: "user",
      text: "What do you need to know?",
      timestamp: new Date(),
    },
    {
      id: 4,
      sender: "client",
      text: "I want to know if the price is negotiable, i need about 2 Units",
      timestamp: new Date(),
    },
  ]);

  const formatDate = (timestamp) => {
    if (isToday(timestamp)) {
      return "today";
    } else if (isYesterday(timestamp)) {
      return "yesterday";
    } else {
      return format(timestamp, "MMMM d, yyyy");
    }
  };

  const sendMessage = () => {
    if (inputMessage.trim() === "") return;
    const newMessage = {
      id: conversation.length + 1,
      sender: "user",
      text: inputMessage,
      timestamp: new Date(),
    };
    setConversation([...conversation, newMessage]);
    setInputMessage("");
  };

  return (
    <div className="chat-conversation">
      <div className="chat-messages">
        {conversation.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            <div className="message-content">
              <p className="text">{message.text}</p>
            </div>

            <div className="message-footer">
              <p className="timestamp">
                {formatDate(message.timestamp)} at{" "}
                {format(message.timestamp, "HH:mm")}
              </p>
              {message.sender === "user" && (
                <span className="double-tick">&#10004;</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="message-input">
        <img src={iconsImgs.plus} alt="" />
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <div className="emoji">
          <img src={iconsImgs.smile} alt="" />
        </div>
        <button onClick={sendMessage}>
          Send <img src={iconsImgs.send} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ChatConversation;
