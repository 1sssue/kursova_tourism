import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Slider from "./components/Slider";
import NewsList from "./components/NewsList";
import Footer from "./components/Footer";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contacts from "./components/Contacts";

function App() {
  return (
    
    <Router>
      <div className="d-flex flex-column min-vh-100 content-container">
        <Header />
        <Menu />
        <main className="flex-grow-1 container my-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slider />
                  <NewsList />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<NewsList />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;