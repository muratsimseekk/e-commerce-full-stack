// App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./LayoutComponents/Footer";
import Header from "./LayoutComponents/Header";
import Home from "./PageComponents/Home";
import Blog from "./PageComponents/Blog";
import Shop from "./PageComponents/Shop";
import About from "./PageComponents/About";
import Contact from "./PageComponents/Contact";
//Shop/* verdim cunku alt componentler icin de path acildi
function App() {
  return (
    <div className="w-full ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
