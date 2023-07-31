import React, { useContext, useState } from "react";
import { navigationLinks } from "../data/data";
import { Link } from "react-router-dom";
import { iconsImgs } from "../utils/images";
import "../styles/sidebar.css";
import { SidebarContext } from "../context/sidebarContext";

const Sidebar = () => {
  const topLinks = navigationLinks.slice(0, 6);

  // const [activeLinkIdx] = useState(1);
  // const [sidebarClass, setSidebarClass] = useState("");
  // const [isSiderbarOpen, setIsSidebarOpen] = useContext(SidebarContext);

  return (
    <div className={`sidebar`}>
      <div className="logo">
        <img src={iconsImgs.logo} alt="metrix-logo" className="logo-icon" />
        <h3>Metrix</h3>
      </div>
      <nav className="navigation">
        <div className="top-links">
          <ul className="nav-list">
            {topLinks.map((link) => (
              <li key={link.id} className={`nav-item`}>
                <Link to={link.route} className={`nav-link`}>
                  <img
                    src={link.image}
                    alt={link.title}
                    className={`nav-link-icon`}
                  />
                  <span className="nav-link-text">{link.title}</span>
                  {link.messageCount && (
                    <span className="message-count">{link.messageCount}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bottom-links">
          <div className="nav-list">
            <div className="support-link">
              <Link to="/support" className={`nav-link`}>
                <img
                  src={iconsImgs.headphone}
                  alt=""
                  className={`nav-link-icon`}
                />
                <span className="nav-link-text">Contact Support</span>
              </Link>
            </div>
            <div className="gift-link">
              <Link to="/" className={`nav-link`}>
                <div className="free-gifts">
                  <img
                    src={iconsImgs.gift}
                    alt=""
                    className={`nav-link-icon`}
                  />
                  <span className="nav-link-text">Free Gift Awaits You!</span>
                </div>
                <span className="upgrade">
                  <p>Upgrade your account</p>
                  <span class="material-symbols-outlined">chevron_right</span>
                </span>
              </Link>
            </div>
            <div className="logout-link">
              <Link to="/logout" className={`nav-link`}>
                <img
                  src={iconsImgs.logout}
                  alt=""
                  className={`nav-link-icon`}
                />
                <span className="nav-link-text">Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
