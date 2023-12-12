import React from "react";
import ProductHeader from "./ProductPage/ProductHeader";
import ProductDescription from "./ProductPage/ProductDescription";
import BestsellerProducts from "./ProductPage/BestsellerProducts";
import Companies from "./ProductPage/Companies";

function ProductPage() {
  return (
    <>
      <ProductHeader />
      <ProductDescription />
      <BestsellerProducts />
      <Companies />
    </>
  );
}

export default ProductPage;
