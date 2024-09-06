import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import "./App.css";
import "./index.css";
import About from "./about/About";
import Gallery from "./gallery/Gallery";
import BookPromotion from "./bookPromotion/BookPromotion";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import { useState } from "react";

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <BrowserRouter>
      <Header toggleMenu={toggleMenu} />
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/bookpromotion" element={<BookPromotion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
