import React from "react";
import HeroSection from "./Hero/HeroSection";
import "./index.css";
import TagsSection from "./Tags/Tags";
const Home = () => {
  return (
    <div className="body">

      <HeroSection />
      <TagsSection />
    </div>
  );
};

export default Home;
