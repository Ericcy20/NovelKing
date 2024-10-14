import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./Home";
import SearchPage from "./SearchPage";
import Footer from "./Footer/Footer";
import Browse from "./Browse/Browse";
import "./index.css"

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path="/Browse" element={<Browse />} />
     <Footer/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
