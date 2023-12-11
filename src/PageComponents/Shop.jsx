import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { VscChecklist } from "react-icons/vsc";
import { Button, Option, Select } from "@material-tailwind/react";
import Category from "./Shop/Category";
import Products from "./Shop/Products";

function Shop() {
  return (
    <>
      <Category />
      <Products />
    </>
  );
}

export default Shop;
