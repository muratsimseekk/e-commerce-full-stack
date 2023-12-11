import React from "react";
import videoFoto from "../../assets/hero/about/video.jpg";
import { FaPlay } from "react-icons/fa6";
function VideoSection() {
  return (
    <div className="bg-red-400 w-full  py-8 flex flex-col gap-20 items-center">
      <div className="bg-orange-600 w-4/5 flex justify-around">
        <div className="flex flex-col gap-6 items-center  w-[21%] bg-blue-gray-300">
          <h1 className="font-bold text-5xl">15K</h1>
          <p className="capitalize text-secondText">happy customers</p>
        </div>
        <div className="flex flex-col gap-6 items-center  w-[21%] bg-blue-gray-300">
          <h1 className="font-bold text-5xl">15K</h1>
          <p className="capitalize text-secondText">happy customers</p>
        </div>
        <div className="flex flex-col gap-6 items-center  w-[21%] bg-blue-gray-300">
          <h1 className="font-bold text-5xl">15K</h1>
          <p className="capitalize text-secondText">happy customers</p>
        </div>
        <div className="flex flex-col gap-6 items-center  w-[21%] bg-blue-gray-300">
          <h1 className="font-bold text-5xl">15K</h1>
          <p className="capitalize text-secondText">happy customers</p>
        </div>
      </div>
      <div className="w-4/5 bg-black bg-opacity-100 relative rounded-2xl">
        <div className="absolute  rounded-full p-6 bg-primaryColor z-50 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <FaPlay className="text-4xl text-white" />
        </div>

        <img className="w-full rounded-2xl opacity-50" src={videoFoto} />
      </div>
    </div>
  );
}

export default VideoSection;
