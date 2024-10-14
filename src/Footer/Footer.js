// Footer.js
import React, { useContext } from "react";
import "./Footer.css"; // Make sure this path is correct for your project
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
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

  return (
    <footer style={styles.card} className="footer">
      <div className="footer-content">
        <p>© 2024 NovelKing.net</p>
        <div className="footer-links">
          <button className="footer-button">Privacy Policy</button>
          <button className="footer-button">Terms of Service</button>
          <button className="footer-button">DMCA Notices</button>
          <button className="footer-button">Contact Us</button>
        </div>
        <div className="footer-categories">
          <h4>Categories</h4>
          <div className="categories-links">
            <button className="footer-button">Novel Ranking</button>
            <button className="footer-button">Latest Chapters</button>
            <button className="footer-button">Latest Novels</button>
            <button className="footer-button">All Tags</button>
            <button className="footer-button">Romance</button>
            <button className="footer-button">Josei for Ladies</button>
            <button className="footer-button">Video Games</button>
            <button className="footer-button">Fantasy</button>
            <button className="footer-button">Martial Arts</button>
            <button className="footer-button">Slice of Life</button>
            <button className="footer-button">Sci-fi</button>
            <button className="footer-button">Supernatural</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
