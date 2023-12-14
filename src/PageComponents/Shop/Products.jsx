import { Button, Option, Select } from "@material-tailwind/react";
import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { VscChecklist } from "react-icons/vsc";

import product1 from "../../assets/hero/shop-card/shopProducts/product1.png";
import product2 from "../../assets/hero/shop-card/shopProducts/product2.png";
import product3 from "../../assets/hero/shop-card/shopProducts/product3.png";
import product4 from "../../assets/hero/shop-card/shopProducts/product4.png";
import product5 from "../../assets/hero/shop-card/shopProducts/product5.png";
import product6 from "../../assets/hero/shop-card/shopProducts/product6.png";
import product7 from "../../assets/hero/shop-card/shopProducts/product7.png";
import product8 from "../../assets/hero/shop-card/shopProducts/product8.png";
import product9 from "../../assets/hero/shop-card/shopProducts/product9.png";
import product10 from "../../assets/hero/shop-card/shopProducts/product10.png";
import product11 from "../../assets/hero/shop-card/shopProducts/product11.png";
import product12 from "../../assets/hero/shop-card/shopProducts/product12.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faRedditAlien,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="flex justify-center items-center  pt-8 ">
      <div className="flex flex-col w-full items-center gap-12">
        <div className="w-11/12 flex flex-col gap-10 items-center  xl:flex xl:flex-row xl:justify-between xl:items-center">
          <h2 className=" text-secondText text-base font-medium">
            Showing all 12 results
          </h2>
          <div className="flex items-center gap-7  font-semibold text-lg p-2">
            <h3 className="text-secondText">Views :</h3>
            <BsFillGridFill className="h-5 w-5 text-textColor" />
            <VscChecklist className="h-5 w-5 text-secondText" />
          </div>
          <div className="flex gap-2 items-center">
            <Select label="Sort By" size="lg">
              <Option>Popularity</Option>
              <Option>Newest</Option>
              <Option>Price Low-High</Option>
              <Option>Price High-Low</Option>
            </Select>
            <div>
              <Button
                size="lg"
                className="capitalize tracking-wider bg-primaryColor text-lightText "
              >
                Filter
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16 xl:gap-0 xl:flex xl:flex-row w-11/12 xl:flex-wrap xl:justify-between xl:gap-y-12">
          <div className=" xl:w-[23%] flex flex-col text-center xl:gap-6 gap-8 ">
            <Link to="/shop/product">
              <img className="w-full" src={product1} alt="Product 1" />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center xl:gap-6 gap-8 ">
            <Link to="/shop/product">
              <img className="w-full" src={product2} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={product3} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={product4} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={product5} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={product6} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={product7} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={product8} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={product9} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={product10} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={product11} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={product12} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
        </div>
        <div className=" bg-white border border-zinc rounded-md mt-8">
          <button className="text-sm border border-zinc bg-zinc100 py-6 px-6 text-mutedColor hover:cursor-pointer rounded-l-md ">
            First
          </button>
          <button className="text-sm border border-zinc text-primaryColor py-6 px-6  hover:cursor-pointer  ">
            1
          </button>
          <button className="text-sm border border-zinc py-6 px-6 text-lightText bg-primaryColor hover:cursor-pointer  ">
            2
          </button>
          <button className="text-sm border border-zinc py-6 px-6 text-primaryColor hover:cursor-pointer  ">
            3
          </button>
          <button className="text-sm border border-zinc py-6 px-6 text-primaryColor hover:cursor-pointer rounded-r-md ">
            Next
          </button>
        </div>
        <div className="w-full  flex justify-center bg-lightGray">
          <div className="w-[85%] py-6 pb-8 flex flex-col items-center gap-8 xl:flex xl:flex-row xl:justify-between xl:items-center  text-secondText">
            <FontAwesomeIcon
              icon={faHooli}
              className="xl:w-24 xl:h-24 w-40 h-40"
            />
            <FontAwesomeIcon
              icon={faLyft}
              className="xl:w-24 xl:h-24 w-40 h-40"
            />
            <FontAwesomeIcon
              icon={faPiedPiperHat}
              className="xl:w-24 xl:h-24 w-40 h-40"
            />
            <FontAwesomeIcon
              icon={faStripe}
              className="xl:w-24 xl:h-24 w-40 h-40"
            />
            <FontAwesomeIcon
              icon={faAws}
              className="xl:w-24 xl:h-24 w-40 h-40"
            />
            <FontAwesomeIcon
              icon={faRedditAlien}
              className="xl:w-24 xl:h-24 w-40 h-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
