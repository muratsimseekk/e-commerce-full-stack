import React, { useEffect } from "react";
import Category from "./Shop/Category";
import Products from "./Shop/Products";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./Shop/ProductPage";
import { productFetch } from "../store/actions/thunkAction";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { AxiosInstance } from "../api/api";

function Shop() {
  const dispatch = useDispatch();
  const fetchingProducts = async () => {
    try {
      const response = await AxiosInstance.get("/products");
      dispatch(productFetch(response.data.products));
    } catch (err) {
      toast.error("An error occurred while fetching products");
    }
  };

  useEffect(() => {
    fetchingProducts();
  }, []);
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
