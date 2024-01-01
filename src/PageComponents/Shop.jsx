import React from "react";
import Category from "./Shop/Category";
import Products from "./Shop/Products";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./Shop/ProductPage";

function Shop() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Category />
              <Products />
            </>
          }
        />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default Shop;

// path = "/:gender/:category";
