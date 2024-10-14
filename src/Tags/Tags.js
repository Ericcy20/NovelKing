// TagsSection.js
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./Tags.css";

const TagsSection = () => {
  
  const { theme } = useContext(ThemeContext);
  
  const styles = {
    card: {
      backgroundColor: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#000" : "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: theme === "light"
        ? "0 2px 5px rgba(0,0,0,0.1)"
        : "0 2px 10px rgba(0,0,0,0.5)",
    },
  }

  return (
    <section className="tags-section" style={styles.card}>
      <h3>Start exploring now!</h3>
      <div className="tags">
        <button>Novel Ranking</button>
        <button>Most Populars</button>
        <button>New Releases</button>
        <button>Latest Updates</button>
        <button>Fantasy</button>
        <button>Romance</button>
        <button>Supernatural</button>
        <button>Video Games</button>
        <button>Martial Arts</button>
        <button>Sci-fi</button>
        <button>Slice of Life</button>
        <button>Josei</button>
      </div>
    </section>
  );
};

export default TagsSection;
