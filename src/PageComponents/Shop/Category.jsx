import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categFetch } from "../../store/actions/thunkAction";
import { AxiosInstance } from "../../api/api";

function Category() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const sorted = categories.sort((a, b) => b.rating - a.rating);

  const firstFive = sorted.slice(0, 5);

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

        <div className="w-full flex flex-col xl:flex  xl:flex-row xl:flex-wrap bg-lightGray xl:justify-between gap-y-4 pb-12">
          {firstFive?.map((item) => (
            <div
              className="xl:w-[17%]  relative bg-black hover:cursor-pointer"
              key={item.id}
              id={item.id}
              onClick={() => {
                navigate(item.code.replace(":", "/"));
              }}
            >
              <img
                className="w-full h-full object-cover  z-20 opacity-70 hover:opacity-90"
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
