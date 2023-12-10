// App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./LayoutComponents/Footer";
import Header from "./LayoutComponents/Header";
import Home from "./PageComponents/Home";
import Blog from "./PageComponents/Blog";
import Shop from "./PageComponents/Shop";

function App() {
  return (
    <div className="w-full ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
