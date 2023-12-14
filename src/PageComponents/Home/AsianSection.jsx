import React from "react";
import asianPhoto from "../../assets/hero/asianSection/asian.png";
import asianMobile from "../../assets/hero/asianSection/asianMobile.png";
import { Button } from "@material-tailwind/react";
function AsianSection() {
  return (
    <div className="w-full xl:flex xl:flex-row xl:justify-center gap-6 xl:gap-0 xl:pb-8 flex flex-col-reverse items-center">
      <div className="w-full xl:w-[45%]">
        <img className="object-cover xl:block hidden" src={asianPhoto} />
        <img className="object-cover xl:hidden block" src={asianMobile} />
      </div>
      <div className="xl:w-[40%] w-4/5 xl:pl-7 xl:pt-0 pt-20 flex flex-col gap-6 xl:gap-8 justify-center">
        <p className="text-mutedColor uppercase xl:text-lg xl:font-normal font-semibold xl:text-start text-center">
          Summer 2023
        </p>
        <h4 className="text-textColor xl:font-bold font-bold  leading-snug text-4xl xl:tracking-wider xl:leading-relaxed">
          <span className="xl:block hidden">
            {" "}
            Part of the Neural <br /> Universe
          </span>
          <span className="xl:hidden block text-center">
            Part of the <br /> Neural <br />
            Universe
          </span>
        </h4>
        <p className="text-secondText text-lg tracking-wider">
          <span className="xl:block hidden">
            {" "}
            We know how large objects will act,
            <br /> but things on a small scale.
          </span>
          <span className="xl:hidden block text-center font-medium">
            {" "}
            We know how large
            <br /> objects will act, but <br /> things on a small scale.
          </span>
        </p>
        <div className="xl:flex xl:flex-row flex flex-col gap-6 items-center xl:gap-x-5">
          <div className="">
            <Button
              size="lg"
              className="xl:bg-successColor bg-primaryColor text-lightText tracking-widest rounded-md hover:cursor-pointer px-12 text-base xl:text-lg uppercase"
            >
              buy now
            </Button>
          </div>
          <div className="">
            <Button
              size="lg"
              className="bg-lightText xl:text-successColor text-primaryColor border border-primaryColor xl:border-successColor tracking-widest rounded-md hover:cursor-pointer px-10 text-base xl:text-lg capitalize xl:uppercase"
            >
              <span className="xl:block hidden"> read more</span>
              <span className="xl:hidden span"> learn more</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsianSection;
