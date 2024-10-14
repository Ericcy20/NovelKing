import React, { useState, useContext } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [novelData, setNovelData] = useState(null);

  // Search function to fetch novel data from the API
  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      alert("Please enter a novel title.");
      return;
    }

    try {
      const response = await fetch(
        `https://kooma-api.herokuapp.com/boxnovel/novels/${searchQuery}`
      );
      const data = await response.json();
      setNovelData(data);
    } catch (error) {
      console.error("Error fetching novel data:", error);
      alert("Failed to fetch novel. Please try again.");
    }
  };

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
    <div className="min-h-screen bg-gray-900 text-white" style={styles.card}>
      <main className="p-4">
        {/* Search Box */}
        <div className="flex justify-center mb-8">
          <div className="relative w-1/2 flex items-center">
            <input
              type="text"
              placeholder="Search Light Novel By Title"
              className="w-full p-4 bg-gray-800 rounded-full text-gray-400 imggg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch} className="ml-2">
              <FaSearch className="text-black-300" />
            </button>
          </div>
        </div>

        {/* Popular Novels Section */}
        <section>
          <h2 className="mb-4 text-center text-xl">Some Popular Novels</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {" "}
            {/* Adjust the grid here */}
            <NovelCard
              imageSrc="https://placehold.co/100x150"
              title="Shadow Slave"
            />
            <NovelCard
              imageSrc="https://placehold.co/100x150"
              title="Lord of Mysteries"
            />
            <NovelCard
              imageSrc="https://placehold.co/100x150"
              title="Reverend Insanity"
            />
            <NovelCard
              imageSrc="https://placehold.co/100x150"
              title="My Vampire System"
            />
            <NovelCard
              imageSrc="https://placehold.co/100x150"
              title="Novel Title"
            />
            <NovelCard
              imageSrc="https://placehold.co/100x150"
              title="Shadow Slave"
            />
            <NovelCard
              imageSrc="https://placehold.co/100x150"
              title="Lord of Mysteries"
            />
            <NovelCard
              imageSrc="https://placehold.co/100x150"
              title="Reverend Insanity"
            />
            <NovelCard
              imageSrc="https://placehold.co/100x150"
              title="My Vampire System"
            />
            <NovelCard
              imageSrc="https://placehold.co/100x150"
              title="Novel Title"
            />
          </div>
        </section>

        {/* Display Search Results */}
        {novelData && (
          <div className="novel-details bg-gray-800 p-4 rounded mt-8">
            <h2 className="text-center text-xl mb-4">{novelData.data.title}</h2>
            <div className="flex justify-center">
              <img
                src={novelData.data.img}
                alt={novelData.data.title}
                className="w-40 h-60 rounded"
              />
            </div>
            <p className="mt-4">
              <strong>Author:</strong> {novelData.data.author}
            </p>
            <p>
              <strong>Genre:</strong> {novelData.data.genre}
            </p>
            <p>
              <strong>Rating:</strong> {novelData.data.rating}
            </p>
            <p>
              <strong>Release:</strong> {novelData.data.release}
            </p>
            <p>
              <strong>Status:</strong> {novelData.data.novelstatus}
            </p>
            <p>
              <strong>Description:</strong> {novelData.data.description}
            </p>

            {/* List of Chapters */}
            <h3 className="mt-4">Chapters</h3>
            <ul className="list-disc pl-6">
              {novelData.chapter &&
                novelData.chapter.map((chapter, index) => (
                  <li key={index}>
                    <a
                      href={chapter.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600"
                    >
                      {chapter.title}
                    </a>{" "}
                    - {chapter.rating}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

// Component for individual novel cards in the "Popular Novels" section
const NovelCard = ({ imageSrc, title }) => {
  return (
    <div className="novel-card">
      {" "}
      {/* Updated to use novel-card class */}
      <img src={imageSrc} alt={title} />
      <p className="mt-2 text-center">{title}</p>
    </div>
  );
};

export default App;
