import React from "react";
import { Button } from "@material-tailwind/react";
import women from "../../assets/hero/about/women.png";
function HeaderContent() {
  return (
    <div className="w-full xl:pt-0 pt-10 flex flex-col items-center justify-start">
      <div className="w-4/5 xl:h-[calc(100vh_-_144px)] h-[130vh] xl:flex xl:flex-row flex flex-col gap-16 xl:gap-32 xl:items-center relative ">
        <div className=" p-8 flex flex-col items-center xl:flex xl:flex-col xl:items-start gap-8 z-50 ">
          <h3 className="uppercase text-textColor font-medium xl:block hidden">
            about company
          </h3>
          <h1 className="uppercase xl:text-5xl text-4xl font-bold tracking-wide xl:tracking-wider text-textColor leading-relaxed ">
            about us
          </h1>
          <p className="text-secondText tracking-wider xl:block hidden">
            We know how large objects will act,
            <br /> but things on a small scale
          </p>
          <p className="text-secondText tracking-wider xl:hidden block text-center">
            We know how large <br /> objects will act, but things
            <br /> on a small scale just do
            <br /> not act that way.
          </p>
          <Button className="capitalize w-max text-base rounded-md px-10 py-4 bg-primaryColor text-lightText">
            get quote now
          </Button>
        </div>
        <div className=" xl:w-[57%] h-full relative">
          <div className="absolute  xl:w-[72%] w-[76%] h-[51%] xl:h-[72%] bg-roseBg rounded-full right-[11%] xl:right-[9%] bottom-[23%] "></div>
          <div className="absolute w-6 h-6 bg-violet rounded-full right-0 bottom-3/4"></div>
          <div className="absolute w-6 h-6 bg-violet rounded-full left-[6%] xl:left-[12%] bottom-[35%]"></div>
          <div className="absolute w-16 h-16 bg-roseBg rounded-full left-[5%] top-[10%]"></div>
          <div className="absolute w-7 h-7 bg-roseBg rounded-full right-[1%] top-[40%]"></div>
          <img src={women} className="absolute bottom-0 z-40 right-0" />
        </div>
      </div>
      <div className=" py-20 w-3/4 xl:flex xl:flex-row flex flex-col  gap-10 xl:gap-20">
        <div className=" flex flex-col gap-6">
          <h5 className="capitalize text-base font-medium text-center xl:text-start xl:font-normal xl:text-sm text-red-500">
            problems trying
          </h5>
          <p className="text-xl tracking-wider xl:block hidden font-semibold">
            Met minim Mollie non desert
            <br /> Alamo est sit cliquey dolor do
            <br /> met sent.
          </p>
          <p className="text-2xl text-center tracking-wider xl:hidden block font-bold">
            Met minim Mollie non
            <br /> desert Alamo est sit
            <br /> cliquey dolor do met
            <br /> sent.
          </p>
        </div>
        <div className="flex items-center text-secondText">
          <p className="text-sm xl:block hidden">
            Problems trying to resolve the conflict between the two major realms
            of <br /> Classical physics: Newtonian mechanics{" "}
          </p>
          <p className="text-sm  font-medium xl:hidden block">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
            <br /> Newtonian mechanics
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
