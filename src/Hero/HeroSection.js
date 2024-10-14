// HeroSection.js
import React, { useContext } from "react";
import "./HeroSection.css";
import Fantasyimg from "../img/Fantasyimg.jpg";
import { ThemeContext } from "../context/ThemeContext";
const HeroSection = () => {
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
    <div className="hero-section" style={styles.card}>
      <img src={Fantasyimg} alt="Hero background" className="hero-img" />
      <div className="hero-text">
        <h2>Read Light Novel & Web Novel Translations Online For FREE!</h2>
        <p>Your fictional stories hub</p>
      </div>
    </div>
  );
};

export default HeroSection;
