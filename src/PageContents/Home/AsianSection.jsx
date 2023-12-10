import React from "react";
import asianPhoto from "../../assets/hero/asianSection/asian.png";
import { Button } from "@material-tailwind/react";
function AsianSection() {
  return (
    <div className="w-80%  flex justify-center pb-8 ">
      <div className="w-[45%]">
        <img className="object-cover" src={asianPhoto} />
      </div>
      <div className="w-[40%]  flex flex-col gap-8 justify-center">
        <p className="text-mutedColor uppercase text-lg">Summer 2023</p>
        <h4 className="text-textColor font-bold text-4xl tracking-wider leading-relaxed">
          Part of the Neural <br /> Universe
        </h4>
        <p className="text-secondText text-lg tracking-wider">
          We know how large objects will act,
          <br /> but things on a small scale.
        </p>
        <div className="flex gap-x-5">
          <div className="">
            <Button
              size="lg"
              className="bg-successColor text-lightText  tracking-widest rounded-md hover:cursor-pointer px-12 text-lg uppercase"
            >
              buy now
            </Button>
          </div>
          <div className="">
            <Button
              size="lg"
              className="bg-lightText text-successColor border border-successColor tracking-widest rounded-md hover:cursor-pointer px-10 text-lg uppercase"
            >
              read more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsianSection;
