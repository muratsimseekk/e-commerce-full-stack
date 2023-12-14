import React from "react";
import videoFoto from "../../assets/hero/about/video.jpg";
import { FaPlay } from "react-icons/fa6";
function VideoSection() {
  return (
    <div className=" w-full  py-8 flex flex-col gap-20 items-center">
      <div className=" w-4/5 flex flex-col xl:gap-0 gap-14 items-center xl:flex xl:flex-row xl:justify-around xl:items-start">
        <div className="flex flex-col gap-6 items-center  xl:w-[21%] ">
          <h1 className="font-bold text-5xl text-textColor">15K</h1>
          <p className="capitalize text-secondText">happy customers</p>
        </div>
        <div className="flex flex-col gap-6 items-center  xl:w-[21%] ">
          <h1 className="font-bold text-5xl text-textColor">150K</h1>
          <p className="capitalize text-secondText">monthly visitors</p>
        </div>
        <div className="flex flex-col gap-6 items-center  xl:w-[21%] ">
          <h1 className="font-bold text-5xl text-textColor">15</h1>
          <p className="capitalize text-secondText">countries worldwide</p>
        </div>
        <div className="flex flex-col gap-6 items-center  xl:w-[21%] ">
          <h1 className="font-bold text-5xl text-textColor">100+</h1>
          <p className="capitalize text-secondText">top partners</p>
        </div>
      </div>
      <div className="w-4/5 bg-black bg-opacity-100 relative rounded-2xl">
        <div className="absolute  rounded-full p-6 hover:cursor-pointer bg-primaryColor z-50 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <FaPlay className="text-4xl text-white " />
        </div>
        <img className="w-full rounded-2xl opacity-50" src={videoFoto} />
      </div>
    </div>
  );
}

export default VideoSection;
