import React from "react";
import "./Sidebar.css";
import { FaCog, FaListUl, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="sideContent">
        <div className="menu">
          <div className="logo-img">
            <img src="pig.jpg" alt="logo" />
          </div>
        </div>
        <Link to="/" className="link">
          <div className="menuItems">
            <FaListUl /> Home
          </div>
        </Link>
        <Link to="/profile" className="link">
          <div className="menuItems">
            <FaUserAlt /> Profile
          </div>
        </Link>
        <Link to="/setting" className="link">
          <div className="menuItems">
            <FaCog /> Settings
          </div>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
