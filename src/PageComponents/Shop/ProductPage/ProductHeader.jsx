import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoEye } from "react-icons/io5";

import { Link } from "react-router-dom";

import product1 from "../../../assets/hero/productCard/product1-2.svg";
import small1 from "../../../assets/hero/productCard/sm1.svg";
import small2 from "../../../assets/hero/productCard/sm2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { FaRegStar } from "react-icons/fa6";
import { Button, Carousel } from "@material-tailwind/react";
function ProductHeader() {
  return (
    <div className="w-full flex justify-center bg-lightGray text-teal-50">
      <div className="w-4/5 flex flex-col ">
        <div className="flex items-center gap-3  font-semibold py-8 text-lg">
          <Link to="/">
            <h3 className="text-textColor">Home</h3>
          </Link>
          <IoIosArrowForward className="h-5 w-5 text-mutedColor" />
          <h3 className="text-mutedColor">Shop</h3>
        </div>
        <div className="flex justify-between ">
          <div className="w-[48%] flex flex-col gap-8">
            <Carousel className="">
              <img className="w-full" src={product1} />
            </Carousel>
            <div className=" flex gap-6 pb-10">
              <img src={small1} />
              <img src={small2} />
            </div>
          </div>
          <div className="w-[48%]  flex-col  flex gap-6">
            <h2 className="capitalize tracking-wider text-2xl text-textColor pt-4 font-medium ">
              floating phone
            </h2>
            <div className="flex items-center ">
              <div className="flex gap-1">
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8 text-yellow "
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8 text-yellow "
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8 text-yellow "
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-8 w-8 text-yellow "
                />
                <FaRegStar className="h-8 w-8 text-yellow " />
              </div>
              <p className="text-secondText text-base">10 Reviews</p>
            </div>
            <p className="text-textColor text-2xl font-bold tracking-wider ">
              $1,139.33
            </p>
            <div className="flex  items-center">
              <p className="text-secondText text-lg font-semibold">
                Availability &nbsp;&nbsp;&nbsp;:
              </p>
              <p className="capitalize text-primaryColor text-lg font-semibold">
                &nbsp; in stock
              </p>
            </div>
            <p className="text-base text-zinc ">
              Met minim Mollie non desert Alamo est sit cliquey dolor <br />
              do met sent. RELIT official consequent door ENIM RELIT Mollie.
              <br />
              Excitation venial consequent sent nostrum met.
            </p>
            <div className="w-[90%] h-[2px] bg-mutedColor"></div>
            <div className="flex  gap-3">
              <div className="w-8 h-8 bg-primaryColor rounded-full"></div>
              <div className="w-8 h-8 bg-successColor rounded-full"></div>
              <div className="w-8 h-8 bg-alertColor rounded-full"></div>
              <div className="w-8 h-8 bg-darkBg rounded-full"></div>
            </div>
            <div className="flex  items-center gap-4 pt-7">
              <Button className="font-semibold font-montserrat capitalize tracking-wider text-base bg-primaryColor text-lightText">
                Select Options
              </Button>
              <div className="h-11 w-11 border rounded-full flex justify-center items-center bg-white">
                <IoIosHeartEmpty className="h-6 w-6 text-textColor" />
              </div>
              <div className="h-11 w-11 border rounded-full flex justify-center items-center bg-white">
                <AiOutlineShoppingCart className="h-6 w-6 text-textColor" />
              </div>
              <div className="h-11 w-11 border rounded-full flex justify-center items-center bg-white">
                <IoEye className="h-6 w-6 text-textColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductHeader;
