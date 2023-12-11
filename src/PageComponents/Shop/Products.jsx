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

function Products() {
  return (
    <div className="flex justify-center items-center  pt-8 ">
      <div className="flex flex-col w-full items-center gap-12">
        <div className="w-11/12  flex justify-between items-center">
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
        <div className="flex w-11/12  flex-wrap justify-between gap-y-12">
          <div className=" w-[23%] flex flex-col text-center gap-4 ">
            <img src={product1} />
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-5 justify-center">
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
          <div className=" w-[23%] flex flex-col text-center gap-4 ">
            <img src={product2} />
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-5 justify-center">
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
          <div className=" w-[23%] flex flex-col text-center gap-4 ">
            <img src={product3} />
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-5 justify-center">
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
          <div className=" w-[23%] flex flex-col text-center gap-4 ">
            <img src={product4} />
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-5 justify-center">
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
          <div className=" w-[23%] flex flex-col text-center gap-4 ">
            <img src={product5} />
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-5 justify-center">
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
          <div className=" w-[23%] flex flex-col text-center gap-4 ">
            <img src={product6} />
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-5 justify-center">
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
          <div className=" w-[23%] flex flex-col text-center gap-4 ">
            <img src={product7} />
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-5 justify-center">
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
          <div className=" w-[23%] flex flex-col text-center gap-4 ">
            <img src={product8} />
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-5 justify-center">
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
          <div className=" w-[23%] flex flex-col text-center gap-4 ">
            <img src={product9} />
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-5 justify-center">
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
          <div className=" w-[23%] flex flex-col text-center gap-4 ">
            <img src={product10} />
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-5 justify-center">
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
          <div className=" w-[23%] flex flex-col text-center gap-4 ">
            <img src={product11} />
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-5 justify-center">
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
          <div className=" w-[23%] flex flex-col text-center gap-4 ">
            <img src={product12} />
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-5 justify-center">
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
        <div className=" bg-white border border-mutedColor rounded-md">
          <button className="text-lg  border border-mutedColor bg-mutedColor py-4 px-3 text-lightText hover:cursor-pointer rounded-l-md ">
            First
          </button>
          <button className="text-lg  border border-mutedColor text-primaryColor py-4 px-3  hover:cursor-pointer  ">
            1
          </button>
          <button className="text-lg  border border-mutedColor py-4 px-3 text-lightText bg-primaryColor hover:cursor-pointer  ">
            2
          </button>
          <button className="text-lg  border border-mutedColor py-4 px-3 text-primaryColor hover:cursor-pointer  ">
            3
          </button>
          <button className="text-lg  border border-mutedColor py-4 px-3 text-primaryColor hover:cursor-pointer rounded-r-md ">
            Next
          </button>
        </div>
        <div className="w-full  flex justify-center bg-lightGray">
          <div className="w-[85%]  py-6 flex justify-between items-center  text-secondText">
            <FontAwesomeIcon icon={faHooli} className="w-24 h-24" />
            <FontAwesomeIcon icon={faLyft} className="w-24 h-24" />
            <FontAwesomeIcon icon={faPiedPiperHat} className="w-24 h-24" />
            <FontAwesomeIcon icon={faStripe} className="w-24 h-24" />
            <FontAwesomeIcon icon={faAws} className="w-24 h-24" />
            <FontAwesomeIcon icon={faRedditAlien} className="w-24 h-24" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
