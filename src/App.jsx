// App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./LayoutComponents/Footer";
import Header from "./LayoutComponents/Header";
import Home from "./PageContents/Home";
import Blog from "./PageContents/Blog";

function App() {
  return (
    <div className="w-full ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
