import React, { useState,useContext } from "react";
import "./Browse.css";
import { ThemeContext } from "../context/ThemeContext";
const genres = [
  "All",
  "Action",
  "Adventure",
  "Drama",
  "Fantasy",
  "Harem",
  "Martial Arts",
  "Mature",
  "Romance",
  "Tragedy",
  "Xuanhuan",
  "Comedy",
  "Slice of Life",
  "Mystery",
  "Supernatural",
  "Psychological",
  "Sci-fi",
  "Xianxia",
  "School Life",
  "Josei",
  "Wuxia",
  "Horror",
  "Mecha",
  "Historical",
  "Shoujo",
  "Adult",
  "Seinen",
  "Sports",
  "Lolicon",
  "Gender Bender",
  "Shounen Ai",
  "Yaoi",
  "Video Games",
  "Smut",
  "Magical Realism",
  "Eastern Fantasy",
  "Contemporary Romance",
  "Fantasy Romance",
  "Shoujo Ai",
];

const orders = ["New", "Popular", "Updates"];
const statuses = ["All", "Completed", "Ongoing"];

const novels = [
  { src: "https://placehold.co/200x300", alt: "Light novel cover 1" },
  { src: "https://placehold.co/200x300", alt: "Light novel cover 2" },
  { src: "https://placehold.co/200x300", alt: "Light novel cover 3" },
  { src: "https://placehold.co/200x300", alt: "Light novel cover 4" },
  { src: "https://placehold.co/200x300", alt: "Light novel cover 5" },
  { src: "https://placehold.co/200x300", alt: "Light novel cover 6" },
  { src: "https://placehold.co/200x300", alt: "Light novel cover 1" },
  { src: "https://placehold.co/200x300", alt: "Light novel cover 2" },
  { src: "https://placehold.co/200x300", alt: "Light novel cover 3" },
  { src: "https://placehold.co/200x300", alt: "Light novel cover 4" },
  { src: "https://placehold.co/200x300", alt: "Light novel cover 5" },
  { src: "https://placehold.co/200x300", alt: "Light novel cover 6" },
  { src: "https://placehold.co/200x300", alt: "Light novel cover 1" },
  { src: "https://placehold.co/200x300", alt: "Light novel cover 2" },
  { src: "https://placehold.co/200x300", alt: "Light novel cover 3" },
  { src: "https://placehold.co/200x300", alt: "Light novel cover 4" },
  { src: "https://placehold.co/200x300", alt: "Light novel cover 5" },
  { src: "https://placehold.co/200x300", alt: "Light novel cover 6" },
];

const Browse = () => {
  const [activeGenre, setActiveGenre] = useState("All");
  const [activeOrder, setActiveOrder] = useState("New");
  const [activeStatus, setActiveStatus] = useState("All");
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
     }}

  return (
    <body>
      <div className="p-4" style={styles.card}>
        <div className="mb-4">
          <h2 className="section-title">Genre / Category</h2>
          <div className="flex flex-wrap">
            {genres.map((genre) => (
              <div
                key={genre}
                className={`tag ${activeGenre === genre ? "active" : ""}`}
                onClick={() => setActiveGenre(genre)}
              >
                {genre}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h2 className="section-title">Order By</h2>
          <div className="flex flex-wrap">
            {orders.map((order) => (
              <div
                key={order}
                className={`tag ${activeOrder === order ? "active" : ""}`}
                onClick={() => setActiveOrder(order)}
              >
                {order}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h2 className="section-title">Status</h2>
          <div className="flex flex-wrap">
            {statuses.map((status) => (
              <div
                key={status}
                className={`tag ${activeStatus === status ? "active" : ""}`}
                onClick={() => setActiveStatus(status)}
              >
                {status}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h2 className="section-title">
            Explore The Recently Added Light Novels
          </h2>
          <p>
            Discover newly published and popular novels across all categories.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {novels.map((novel, index) => (
              <img
                key={index}
                src={novel.src}
                alt={novel.alt}
                className="novel-image"
              />
            ))}
          </div>
        </div>
      </div>
    </body>
  );
};

export default Browse;
