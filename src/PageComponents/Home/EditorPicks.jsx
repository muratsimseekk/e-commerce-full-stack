import React, { Component } from "react";

import menPhoto from "../../assets/hero/heroCategory/men1.jpg";
import womenPhoto from "../../assets/hero/heroCategory/women.jpg";
import accessories from "../../assets/hero/heroCategory/accessories.jpg";
import kids from "../../assets/hero/heroCategory/kids.jpg";
import menPhoto2 from "../../assets/hero/heroCategory/men1-mobile.png";
import womenPhoto2 from "../../assets/hero/heroCategory/women-mobile.png";
import accessories2 from "../../assets/hero/heroCategory/accessories-mobile.png";
import kids2 from "../../assets/hero/heroCategory/kids-mobile.png";
import { Button } from "@material-tailwind/react";

function EditorPicks() {
  return (
    <div className=" w-full py-16 flex justify-center  items-center">
      <div className=" w-4/5 h-4/5 flex flex-col gap-8">
        <div className=" h-1/5 flex flex-col items-center gap-3">
          <h2 className="text-textColor xl:text-2xl text-xl font-bold tracking-wider xl:tracking-wider">
            EDITOR'S PICK
          </h2>
          <p className="text-secondText text-center text-sm xl:text-base xl:font-normal font-medium">
            Problems trying to resolve <br className="xl:hidden " /> the
            conflict between
          </p>
        </div>
        <div className="xl:flex xl:flex-row xl:h-4/5 xl:justify-between flex flex-col gap-6">
          <div className="xl:w-[49%]  xl:h-full relative ">
            <div className="absolute xl:top-[82%] xl:left-[8%] z-20 xl:w-[35%] top-[85%] left-[8%] w-[55%] ">
              <Button className="bg-lightText text-textColor h-full w-full text-lg uppercase  tracking-widest rounded-sm">
                MEN
              </Button>
            </div>
            <img className="h-full w-full xl:block hidden" src={menPhoto} />
            <img className="h-full w-full xl:hidden block" src={menPhoto2} />
          </div>
          <div className="xl:w-[49%] xl:flex xl:flex-row xl:justify-between flex flex-col gap-6 ">
            <div className="xl:w-[48%] h-full relative ">
              <div className="absolute xl:top-[82%] xl:left-[8%] top-[85%] left-[8%] w-[55%] z-20 xl:w-2/3  ">
                <Button className="bg-lightText text-textColor h-full w-full uppercase text-lg  tracking-widest rounded-sm">
                  women
                </Button>
              </div>
              <img
                className="h-full object-cover xl:block hidden"
                src={womenPhoto}
              />
              <img
                className="h-full object-cover w-full xl:hidden block"
                src={womenPhoto2}
              />
            </div>
            <div className="flex xl:w-[48%] h-full flex-col xl:gap-0 gap-6 justify-between">
              <div className="h-[48%]  relative w-full">
                <div className="absolute xl:top-[70%] xl:left-[10%] z-20 xl:w-[70%] top-[70%] left-[8%] w-3/5">
                  <Button className="bg-lightText text-textColor h-full w-full uppercase text-lg tracking-wide xl:tracking-widest rounded-sm">
                    accessories
                  </Button>
                </div>
                <img
                  className="h-full w-full xl:block hidden"
                  src={accessories}
                />
                <img
                  className="h-full w-full xl:hidden block"
                  src={accessories2}
                />
              </div>
              <div className="h-[48%] relative w-full">
                <div className="absolute xl:top-[62%] xl:left-[10%] top-[70%] left-[8%] z-20 xl:w-1/2 w-2/5  ">
                  <Button className="bg-lightText text-textColor h-full w-full uppercase text-lg  tracking-widest rounded-sm">
                    kids
                  </Button>
                </div>
                <img className="h-full w-full xl:block hidden" src={kids} />
                <img className="h-full w-full xl:hidden block" src={kids2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorPicks;
