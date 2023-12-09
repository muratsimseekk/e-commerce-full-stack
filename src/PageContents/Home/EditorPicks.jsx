import React, { Component } from "react";

import menPhoto from "../../assets/hero/heroCategory/men1.jpg";
import womenPhoto from "../../assets/hero/heroCategory/women.jpg";
import accessories from "../../assets/hero/heroCategory/accessories.jpg";
import kids from "../../assets/hero/heroCategory/kids.jpg";
import { Button } from "@material-tailwind/react";

function EditorPicks() {
  return (
    <div className=" w-full py-16 flex justify-center  items-center">
      <div className=" w-4/5 h-4/5 flex flex-col gap-8">
        <div className=" h-1/5 flex flex-col items-center gap-3">
          <h2 className="text-textColor text-2xl font-bold tracking-wider">
            EDITOR'S PICK
          </h2>
          <p className="text-secondText ">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="flex h-4/5 justify-between">
          <div className="w-[49%] h-full relative ">
            <div className="absolute top-[82%] left-[8%] z-20 w-[35%]  ">
              <Button className="bg-lightText text-textColor h-full w-full text-lg uppercase  tracking-widest rounded-md">
                MEN
              </Button>
            </div>
            <img className="h-full w-full" src={menPhoto} />
          </div>
          <div className="w-[49%] flex justify-between ">
            <div className="w-[48%] h-full relative ">
              <div className="absolute top-[82%] left-[8%] z-20 w-2/3  ">
                <Button className="bg-lightText text-textColor h-full w-full uppercase text-lg  tracking-widest rounded-md">
                  women
                </Button>
              </div>
              <img className="h-full object-cover" src={womenPhoto} />
            </div>
            <div className="flex w-[48%] h-full flex-col justify-between">
              <div className="h-[48%]  relative w-full">
                <div className="absolute top-[70%] left-[10%] z-20 w-[70%]  ">
                  <Button className="bg-lightText text-textColor h-full w-full uppercase text-lg  tracking-widest rounded-md">
                    accessories
                  </Button>
                </div>
                <img className="h-full w-full " src={accessories} />
              </div>
              <div className="h-[48%] relative w-full">
                <div className="absolute top-[62%] left-[10%] z-20 w-1/2  ">
                  <Button className="bg-lightText text-textColor h-full w-full uppercase text-lg  tracking-widest rounded-md">
                    kids
                  </Button>
                </div>
                <img className="h-full w-full" src={kids} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorPicks;
