import React from "react";
import girl from "../../assets/hero/about/team/workwithusgirl.png";
import { Button } from "@material-tailwind/react";
function WorkWithUs() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex w-[95%]">
        <div className="w-3/5  bg-primaryColor flex justify-center items-center">
          <div className="w-2/3  flex flex-col gap-12 text-lightText">
            <h2 className="font-semibold">WORK WITH US</h2>
            <h3 className="font-bold tracking-wider text-4xl">
              Now Let’s grow Yours
            </h3>
            <p>
              The gradual accumulation of information about atomic and <br />
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
            <Button className="capitalize tracking-wider text-sm  py-4 w-1/4 text-center bg-primaryColor border border-white">
              Button
            </Button>
          </div>
        </div>
        <div className="w-2/5 ">
          <img className="w-full" src={girl} />
        </div>
      </div>
    </div>
  );
}

export default WorkWithUs;
