import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoEye } from "react-icons/io5";

import { GrLinkPrevious } from "react-icons/gr";

import { Link, useNavigate, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { FaRegStar } from "react-icons/fa6";
import { Button, Carousel } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { addShoppingCard } from "../../../store/actions/shoppingAction";
function ProductHeader() {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const paramID = param["*"].split("/")[0];

  const products = useSelector((state) => state.product.productList);

  const pageProduct = products.filter((item) => item.id == paramID)[0];

  console.log("page product", pageProduct);
  const fullStar = Math.round(pageProduct.rating);
  const emptyStar = 5 - fullStar;

  const backHandler = () => {
    navigate(-1);
  };

  const addCartHandler = () => {
    dispatch(addShoppingCard(pageProduct));
  };

  return (
    <div className="w-full flex justify-center  text-teal-50">
      <div className="w-4/5 flex max-h-max flex-col ">
        <div className="flex flex-col">
          <div className="xl:flex xl:flex-row flex justify-center xl:justify-start items-center xl:items-center gap-3  font-semibold py-8 text-lg">
            <Link to="/">
              <h3 className="text-textColor xl:text-lg text-base">Home</h3>
            </Link>
            <IoIosArrowForward className="h-5 w-5 text-mutedColor" />
            <h3 className="text-mutedColor xl:text-lg text-base">Shop</h3>
          </div>
          <div className="flex items-center gap-3 pb-5">
            <GrLinkPrevious
              onClick={() => backHandler()}
              className="text-darkBg"
            />
            <button
              onClick={() => backHandler()}
              className="text-start text-darkBg font-semibold text-lg"
            >
              Go back
            </button>
          </div>
        </div>
        <div className="xl:flex xl:flex-row xl:justify-between ">
          <div className="xl:w-[48%] h-[700px] flex flex-col ">
            <Carousel className="h-5/6">
              <img
                className=" w-4/5 h-5/6 object-fill"
                src={pageProduct?.images[0].url}
              />
            </Carousel>
            <div className="h-1/6 flex ">
              {pageProduct.images?.map((img, index) => {
                return <img src={img.url} key={index} />;
              })}
            </div>
          </div>
          <div className="xl:w-[48%] max-h-max flex-col  flex gap-6">
            <h2 className="capitalize tracking-wide xl:tracking-wider text-lg xl:text-2xl text-textColor pt-4 font-semibold xl:font-medium ">
              {pageProduct.name}
            </h2>
            {}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                {Array(fullStar)
                  .fill()
                  .map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className="xl:h-8 xl:w-8 w-7 h-7 text-yellow "
                    />
                  ))}
                <div className="flex gap-3">
                  {Array(emptyStar)
                    .fill()
                    .map((_, index) => (
                      <FaRegStar
                        key={index}
                        className="xl:h-8 xl:w-8 w-7 h-7 text-yellow "
                      />
                    ))}
                </div>
              </div>
              <p className="text-secondText text-base">10 Reviews</p>
            </div>
            <p className="text-textColor xl:text-2xl text-xl font-bold tracking-wider ">
              $&nbsp;{pageProduct.price}
            </p>
            <div className="flex  items-center">
              <p className="text-secondText xl:text-lg text-base font-semibold">
                Availability &nbsp;&nbsp;&nbsp;:
              </p>
              {pageProduct.stock > 0 ? (
                <p className="capitalize text-primaryColor xl:text-lg text-base font-semibold">
                  &nbsp; in stock{" "}
                  <span className="text-base text-zinc">
                    ({pageProduct.stock})
                  </span>
                </p>
              ) : (
                <p className="capitalize text-dangerRed xl:text-lg text-base font-semibold">
                  &nbsp; Awaiting supply
                </p>
              )}
            </div>
            <p className="text-base text-zinc ">
              <span className="xl:block hidden">{pageProduct.description}</span>
              <span className="xl:hidden block">{pageProduct.description}</span>
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
              <div className="h-11 w-11 border rounded-full flex justify-center hover:bg-primaryColor hover:text-white hover:cursor-pointer items-center bg-white">
                <IoIosHeartEmpty className="h-6 w-6 text-textColor hover:text-white" />
              </div>
              <div className="h-11 w-11 border rounded-full hover:bg-primaryColor hover:text-white hover:cursor-pointer  flex justify-center items-center bg-white">
                <AiOutlineShoppingCart
                  onClick={() => addCartHandler()}
                  className="h-6 w-6 text-textColor  hover:text-white"
                />
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
