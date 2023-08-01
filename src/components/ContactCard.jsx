import React, { useState } from "react";
import { contacts } from "../data/data";
import { iconsImgs } from "../utils/images";

const ContactCard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeContactId, setActiveContactId] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleContactClick = (contactId) => {
    setActiveContactId(contactId);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="contact-card">
      <div className="contact-card-top">
        <div className="contact-card-hr">
          <h4 className="contact-title">Contact</h4>
          <p>34</p>
        </div>
        <div className="search-bar">
          <img src={iconsImgs.search} alt="" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="contacts-card">
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            className={`contact-card-content ${
              contact.id === activeContactId ? "active-contact" : ""
            }`}
            onClick={() => handleContactClick(contact.id)}
          >
            <div className="contact-card-content-left">
              <img src={contact.image} alt="" className="contact-card-img" />
              <div className="contact-card-content-texts contacts-price">
                <p>{contact.name}</p>
                <p>{contact.bio}</p>
              </div>
            </div>
            <div className="contact-card-content-right">
              <div className={`status-circle ${contact.status}`} />{" "}
              {contact.notification && (
                <div className="contact-card-content-texts contact-notification">
                  <p>{contact.notification}</p>
                </div>
              )}
              <p className="time">{contact.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
