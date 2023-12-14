import React from "react";
import girl from "../../assets/hero/about/team/workwithusgirl.png";
import { Button } from "@material-tailwind/react";
function WorkWithUs() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex w-[95%]">
        <div className="xl:w-3/5 w-full  bg-hoverText flex justify-center items-center">
          <div className="w-2/3 gap-8 py-24 flex flex-col xl:items-start items-center xl:gap-12 text-lightText">
            <h2 className="font-semibold xl:text-start text-lg xl:text-base text-center">
              WORK WITH US
            </h2>
            <h3 className="font-bold xl:block hidden tracking-wider text-4xl">
              Now Let’s grow Yours
            </h3>
            <h3 className="font-bold xl:hidden block text-center tracking-wider text-5xl">
              Now Let’s <br /> grow Yours
            </h3>
            <p className="xl:block hidden">
              The gradual accumulation of information about atomic and <br />
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
            <p className="xl:hidden block text-center">
              The gradual accumulation of <br /> information about atomic and{" "}
              <br />
              small-scale behavior during the
              <br /> first quarter of the 20th{" "}
            </p>
            <Button className="capitalize tracking-wider text-sm  py-4 w-2/5 xl:w-1/4 text-center bg-hoverText border  xl:border-white">
              Button
            </Button>
          </div>
        </div>
        <div className="w-2/5 xl:block hidden">
          <img className="w-full " src={girl} />
        </div>
      </div>
    </div>
  );
}

export default WorkWithUs;
