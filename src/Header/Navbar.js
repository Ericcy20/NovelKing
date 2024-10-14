import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import React from "react";
import Crownimg from "../img/Crownimg.jpg"; // Your logo image

import {
  FaHome,
  FaSearch,
  FaTh,
  FaGem,
  FaBook,
  FaFilter,
  FaBullhorn,
  FaCog,
} from "react-icons/fa";
import { BiBrightness } from "react-icons/bi";
import { ThemeContext } from "../context/ThemeContext";
import "./Header.css"; // Link the custom CSS

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [sidebarActive, setSidebarActive] = useState(false);
  const styles = {
    card: {
      backgroundColor: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#000" : "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow:
        theme === "light"
          ? "0 2px 5px rgba(0,0,0,0.1)"
          : "0 2px 10px rgba(0,0,0,0.5)",
    },
  };

  const handleToggleSidebar = () => {
    setSidebarActive((prev) => !prev);
  };

  return (
    <nav className="navbar" style={styles.card}>
      {/* Sidebar Toggle Button for Mobile */}
      <button
        id="bar"
        onClick={handleToggleSidebar}
        className={`toggle-btn ${sidebarActive ? "active" : ""}`} // Add the active class based on state
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <i
          className={sidebarActive ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          style={{ fontSize: "1.8rem", color: "#474754" }} // Bigger and more visible
        />
      </button>

      {/* Logo Section */}
      <div className="logo-container">
        <NavLink to="/Home">
          <img className="logo-img" src={Crownimg} alt="Logo" />
        </NavLink>
        <h1 className="logo-title">NovelKing</h1> {/* Now below the logo */}
      </div>

      {/* Navigation Links */}
      <div className={`sidebar ${sidebarActive ? "active" : ""}`}>
        <NavLink to="/Home" className="nav-link" onClick={handleToggleSidebar}>
          <FaHome /> Home
        </NavLink>
        <NavLink
          to="/SearchPage"
          className="nav-link"
          onClick={handleToggleSidebar}
        >
          <FaSearch /> Search
        </NavLink>
        <NavLink
          to="/Browse"
          className="nav-link"
          onClick={handleToggleSidebar}
        >
          <FaTh /> Browse
        </NavLink>
        <NavLink
          to="/Ranking"
          className="nav-link"
          onClick={handleToggleSidebar}
        >
          <FaGem /> Ranking
        </NavLink>
        <NavLink
          to="/updates"
          className="nav-link"
          onClick={handleToggleSidebar}   
        >
          <FaBook /> Updates
        </NavLink>
        <NavLink
          to="/filter"
          className="nav-link"
          onClick={handleToggleSidebar}
        >
          <FaFilter /> Filter
        </NavLink>
        <NavLink to="/dev" className="nav-link" onClick={handleToggleSidebar}>
          <FaBullhorn /> DEV
        </NavLink>
        <NavLink
          to="/settings"
          className="nav-link"
          onClick={handleToggleSidebar}
        >
          <FaCog /> Settings
        </NavLink>
        {/* Sign-in Button (Visible on Desktop) */}
        {/* Sign-in Button (Visible on Mobile and Desktop) */}
        <NavLink to="/sign-in" className="sign-in-btn">
          SIGN IN
        </NavLink>

        <br />
        <br />
        <br />
        {/* Theme Toggle Button */}
        <button
          className="toggle-button"
          onClick={toggleTheme}
          style={{ marginRight: "8px", fontSize: "3rem" }}
        >
          <BiBrightness />
        </button>
      </div>
    </nav>
  );
};

export default Header;
