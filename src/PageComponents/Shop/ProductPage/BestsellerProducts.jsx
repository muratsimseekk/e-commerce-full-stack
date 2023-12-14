import React from "react";

import bestProduct1 from "../../../assets/hero/productCard/bestProduct1.png";
import bestProduct2 from "../../../assets/hero/productCard/bestProduct2.png";
import bestProduct3 from "../../../assets/hero/productCard/bestProduct3.png";
import bestProduct4 from "../../../assets/hero/productCard/bestProduct4.png";
import bestProduct5 from "../../../assets/hero/productCard/bestProduct5.png";
import bestProduct6 from "../../../assets/hero/productCard/bestProduct6.png";
import bestProduct7 from "../../../assets/hero/productCard/bestProduct7.png";
import bestProduct8 from "../../../assets/hero/productCard/bestProduct8.png";
import { Link } from "react-router-dom";

function BestsellerProducts() {
  return (
    <div className="py-12  w-full flex bg-lightGray justify-center">
      <div className="w-4/5 flex flex-col gap-10">
        <h2 className="xl:font-semibold font-bold text-2xl uppercase tracking-wide xl:tracking-wider">
          Bestseller Products
        </h2>
        <div className="w-full h-1 bg-gray-200"></div>
        <div className="flex flex-col gap-14  xl:shadow-none xl:gap-x-0 xl:flex xl:flex-row xl:flex-wrap xl:justify-between xl:gap-y-12 ">
          <div className=" xl:w-[23%] flex flex-col text-center gap-6 bg-lightText pb-10">
            <img className="w-full" src={bestProduct1} />
            <div className="flex flex-col gap-6 items-start pl-6 ">
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">
                  $6.48
                </span>
              </div>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-6 bg-lightText pb-10">
            <img className="w-full" src={bestProduct2} />
            <div className="flex flex-col gap-6 items-start pl-6 ">
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">
                  $6.48
                </span>
              </div>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-6 bg-lightText pb-10">
            <img className="w-full" src={bestProduct3} />
            <div className="flex flex-col gap-6 items-start pl-6 ">
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">
                  $6.48
                </span>
              </div>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-6 bg-lightText pb-10">
            <img className="w-full" src={bestProduct4} />
            <div className="flex flex-col gap-6 items-start pl-6 ">
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">
                  $6.48
                </span>
              </div>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-6 bg-lightText pb-10">
            <img className="w-full" src={bestProduct5} />
            <div className="flex flex-col gap-6 items-start pl-6 ">
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">
                  $6.48
                </span>
              </div>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-6 bg-lightText pb-10">
            <img className="w-full" src={bestProduct6} />
            <div className="flex flex-col gap-6 items-start pl-6 ">
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">
                  $6.48
                </span>
              </div>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-6 bg-lightText pb-10">
            <img className="w-full" src={bestProduct7} />
            <div className="flex flex-col gap-6 items-start pl-6 ">
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">
                  $6.48
                </span>
              </div>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-6 bg-lightText pb-10">
            <img className="w-full" src={bestProduct8} />
            <div className="flex flex-col gap-6 items-start pl-6 ">
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">
                  $6.48
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestsellerProducts;
