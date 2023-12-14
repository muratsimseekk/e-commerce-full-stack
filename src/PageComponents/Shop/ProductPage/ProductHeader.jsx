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
        <div className="xl:flex xl:flex-row flex justify-center items-center xl:items-center  gap-3  font-semibold py-8 text-lg">
          <Link to="/">
            <h3 className="text-textColor xl:text-lg text-base">Home</h3>
          </Link>
          <IoIosArrowForward className="h-5 w-5 text-mutedColor" />
          <h3 className="text-mutedColor xl:text-lg text-base">Shop</h3>
        </div>
        <div className="xl:flex xl:flex-row xl:justify-between ">
          <div className="xl:w-[48%] flex flex-col gap-8">
            <Carousel className="">
              <img className="w-full" src={product1} />
            </Carousel>
            <div className=" flex gap-6 pb-10">
              <img src={small1} />
              <img src={small2} />
            </div>
          </div>
          <div className="xl:w-[48%]  flex-col  flex gap-6">
            <h2 className="capitalize tracking-wide xl:tracking-wider text-lg xl:text-2xl text-textColor pt-4 font-semibold xl:font-medium ">
              floating phone
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                <FontAwesomeIcon
                  icon={faStar}
                  className="xl:h-8 xl:w-8 w-7 h-7 text-yellow "
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="xl:h-8 xl:w-8 w-7 h-7 text-yellow "
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="xl:h-8 xl:w-8 w-7 h-7 text-yellow "
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="xl:h-8 xl:w-8 w-7 h-7 text-yellow "
                />
                <FaRegStar className="xl:h-8 xl:w-8 w-7 h-7 text-yellow " />
              </div>
              <p className="text-secondText text-base">10 Reviews</p>
            </div>
            <p className="text-textColor xl:text-2xl text-xl font-bold tracking-wider ">
              $1,139.33
            </p>
            <div className="flex  items-center">
              <p className="text-secondText xl:text-lg text-base font-semibold">
                Availability &nbsp;&nbsp;&nbsp;:
              </p>
              <p className="capitalize text-primaryColor xl:text-lg text-base font-semibold">
                &nbsp; in stock
              </p>
            </div>
            <p className="text-base text-zinc ">
              <span className="xl:block hidden">
                {" "}
                Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                do met sent. RELIT official consequent door ENIM RELIT Mollie.
                <br />
                Excitation venial consequent sent nostrum met.
              </span>
              <span className="xl:hidden block">
                {" "}
                Met minim Mollie non desert
                <br /> Alamo est sit cliquey dolor do
                <br /> met sent. RELIT official consequent
                <br /> door ENIM RELIT Mollie. Excitation <br />
                venial consequent sent nostrum met.
              </span>
            </p>
            <div className="w-[90%] h-[2px] bg-mutedColor"></div>
            <div className="flex  gap-3">
              <div className="xl:w-8 xl:h-8 w-7 h-7 bg-primaryColor rounded-full"></div>
              <div className="xl:w-8 xl:h-8 w-7 h-7 bg-successColor rounded-full"></div>
              <div className="xl:w-8 xl:h-8 w-7 h-7 bg-alertColor rounded-full"></div>
              <div className="xl:w-8 xl:h-8 w-7 h-7 bg-darkBg rounded-full"></div>
            </div>
            <div className="flex  items-center gap-2 xl:gap-4 pt-7">
              <Button className="font-semibold font-montserrat capitalize tracking-tight xl:tracking-wider text-sm xl:text-base bg-primaryColor text-lightText">
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
