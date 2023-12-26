import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import card1 from "../../assets/hero/shop-card/card1.png";
import card2 from "../../assets/hero/shop-card/card2.png";
import card3 from "../../assets/hero/shop-card/card3.png";
import card4 from "../../assets/hero/shop-card/card4.png";
import card5 from "../../assets/hero/shop-card/card5.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categFetch } from "../../store/actions/thunkAction";
import { AxiosInstance } from "../../api/api";

function Category() {
  const dispatch = useDispatch();

  const fetchProcess = async () => {
    try {
      await AxiosInstance.get("/categories").then((res) => {
        dispatch(categFetch(res.data));
      });
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
  useEffect(() => {
    fetchProcess();
  }, []);

  const categories = useSelector((state) => state.general.categories);

  console.log("categories", categories);

  return (
    <div className="w-full bg-lightGray flex justify-center ">
      <div className="w-[95%] h-full flex flex-col">
        <div className="flex flex-col items-center gap-14  xl:flex xl:flex-row xl:justify-between  py-8 xl:px-8">
          <h2 className="bg- text-textColor text-xl font-semibold">Shop</h2>
          <div className="flex flex-row items-center gap-3  font-semibold text-lg">
            <Link to="/">
              <h3 className="text-textColor xl:text-lg text-base">Home</h3>
            </Link>
            <IoIosArrowForward className="h-5 w-5 text-mutedColor" />
            <h3 className="text-mutedColor xl:text-lg text-base">Shop</h3>
          </div>
        </div>

        <div className="w-full flex flex-col xl:flex xl:flex-row xl:flex-wrap bg-lightGray xl:justify-between gap-y-4 pb-12">
          {categories?.map((item) => (
            <div className="xl:w-[19%] relative ">
              <img
                className="w-full h-[80%] object-cover opacity-90"
                src={item.img}
              />
              <div className="flex flex-col gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lightText">
                <h2 className="font-semibold text-xl">{item.title}</h2>
                <p className="text-center font-semibold text-lg">5 Items</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
