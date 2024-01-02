import React from "react";

import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BestsellerProducts() {
  const param = useParams();

  const paramID = param["*"].split("/")[0];

  const products = useSelector((state) => state.product.productList);

  const pageProduct = products.filter((item) => item.id == paramID)[0];

  const productList = products
    .filter((item) => item.category_id == pageProduct.category_id)
    .slice(0, 12);
  // <Link to={`/shop/category/${item.id}/${item.name}`}></Link>;

  return (
    <div className="py-12  w-full flex bg-lightGray justify-center">
      <div className="w-4/5 flex flex-col gap-10">
        <h2 className="xl:font-semibold font-bold text-2xl uppercase tracking-wide xl:tracking-wider">
          Bestseller Products
        </h2>
        <div className="w-full h-1 bg-gray-200"></div>
        <div className="flex flex-col gap-14  xl:shadow-none xl:gap-x-0 xl:flex xl:flex-row xl:flex-wrap xl:justify-between xl:gap-y-12 ">
          {productList.map((item) => {
            return (
              <div className=" xl:w-[23%] flex flex-col text-center gap-6 bg-lightText pb-10">
                <Link to={`/shop/category/${item.id}/${item.name}`}>
                  <img className="w-full" src={item.images[0].url} />
                </Link>
                <div className="flex flex-col gap-6 items-start pl-6 ">
                  <h4 className="text-textColor font-bold tracking-wider">
                    {item.name}
                  </h4>
                  <p className="text-secondText text-start font-medium">
                    {item.description}
                  </p>
                  <div className="flex gap-5 justify-center">
                    <span className="text-secondaryColorGreen font-bold">
                      $ {item.price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BestsellerProducts;
