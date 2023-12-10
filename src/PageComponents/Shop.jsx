import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import card1 from "../assets/hero/shop-card/card1.png";
import card2 from "../assets/hero/shop-card/card2.png";
import card3 from "../assets/hero/shop-card/card3.png";
import card4 from "../assets/hero/shop-card/card4.png";
import card5 from "../assets/hero/shop-card/card5.png";

function Shop() {
  return (
    <div className="w-full h-[100vh] bg-yellow flex justify-center ">
      <div className="w-[95%] h-full bg-cyan-400 flex flex-col">
        <div className="flex justify-between bg-red-600 py-6">
          <h2 className="bg-blue-gray-400 text-textColor text-xl font-semibold">
            Shop
          </h2>
          <div className="flex items-center gap-3 bg-red-200 font-semibold text-lg">
            <h3 className="text-textColor">Home</h3>
            <IoIosArrowForward className="h-5 w-5 text-mutedColor" />
            <h3 className="text-mutedColor">Shop</h3>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-between gap-y-4 pb-12">
          <div className="w-[19%] bg-green-300 relative ">
            <img className="w-full opacity-90" src={card1} />
            <div className="flex flex-col gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lightText">
              <h2 className="font-semibold text-xl">CLOTHS</h2>
              <p className="text-center font-semibold text-lg">5 Items</p>
            </div>
          </div>
          <div className="w-[19%] bg-green-300 relative">
            <img className="w-full opacity-90" src={card2} />
            <div className="flex flex-col gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lightText">
              <h2 className="font-semibold text-xl">CLOTHS</h2>
              <p className="text-center font-semibold text-lg">5 Items</p>
            </div>
          </div>
          <div className="w-[19%] bg-green-300 relative">
            <img className="w-full opacity-90" src={card3} />
            <div className="flex flex-col gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lightText">
              <h2 className="font-semibold text-xl">CLOTHS</h2>
              <p className="text-center font-semibold text-lg">5 Items</p>
            </div>
          </div>
          <div className="w-[19%] bg-green-300 relative">
            <img className="w-full opacity-90" src={card4} />
            <div className="flex flex-col gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lightText">
              <h2 className="font-semibold text-xl">CLOTHS</h2>
              <p className="text-center font-semibold text-lg">5 Items</p>
            </div>
          </div>
          <div className="w-[19%] bg-green-300 relative">
            <img className="w-full opacity-90" src={card5} />
            <div className="flex flex-col gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lightText">
              <h2 className="font-semibold text-xl">CLOTHS</h2>
              <p className="text-center font-semibold text-lg">5 Items</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center bg-red-600 py-6">
          <h2 className="bg-blue-gray-400 text-secondText text-base font-medium">
            Showing all 12 results
          </h2>
          <div className="flex items-center gap-3 bg-red-200 font-semibold text-lg">
            <h3 className="text-textColor">Home</h3>
            <IoIosArrowForward className="h-5 w-5 text-mutedColor" />
            <h3 className="text-mutedColor">Shop</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
