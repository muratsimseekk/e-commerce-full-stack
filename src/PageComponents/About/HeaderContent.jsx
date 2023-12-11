import React from "react";
import { Button } from "@material-tailwind/react";
import women from "../../assets/hero/about/women.png";
function HeaderContent() {
  return (
    <div className="w-full  flex flex-col items-center justify-start">
      <div className="w-4/5  h-[82vh] flex  items-center relative">
        <div className=" p-8 flex flex-col gap-8">
          <h3 className="uppercase text-textColor font-medium">
            about company
          </h3>
          <h1 className="uppercase text-5xl font-bold tracking-wider text-textColor leading-relaxed ">
            about us
          </h1>
          <p className="text-secondText tracking-wider">
            We know how large objects will act,
            <br /> but things on a small scale
          </p>
          <Button className="capitalize w-max text-base rounded-md px-10 py-4 bg-primaryColor text-lightText">
            get quote now
          </Button>
        </div>

        <div className="absolute w-[450px] h-[450px] bg-roseBg rounded-full right-[6%] bottom-[23%] "></div>
        <div className="absolute w-6 h-6 bg-violet rounded-full right-0 bottom-3/4"></div>
        <div className="absolute w-6 h-6 bg-violet rounded-full right-1/2 bottom-1/4"></div>
        <div className="absolute w-16 h-16 bg-roseBg rounded-full right-[48%] top-[10%]"></div>
        <div className="absolute w-7 h-7 bg-roseBg rounded-full right-[3%] top-[40%]"></div>
        <img src={women} className="absolute bottom-0 z-40 right-0" />
      </div>
      <div className=" py-20 w-3/4 flex gap-20">
        <div className=" flex flex-col gap-6">
          <h5 className="capitalize text-sm text-red-500">problems trying</h5>
          <p className="text-xl tracking-wider font-semibold">
            Met minim Mollie non desert
            <br /> Alamo est sit cliquey dolor do
            <br /> met sent.
          </p>
        </div>
        <div className="  flex items-center text-secondText">
          <p className="text-sm ">
            Problems trying to resolve the conflict between the two major realms
            of <br /> Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
