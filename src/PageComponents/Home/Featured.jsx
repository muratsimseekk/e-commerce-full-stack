import React from "react";
import foto1 from "../../assets/hero/features/feature1.png";
import foto2 from "../../assets/hero/features/feature2.png";
import foto3 from "../../assets/hero/features/feature3.png";
import { IoMdAlarm } from "react-icons/io";
import { FaChartArea } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
function Featured() {
  return (
    <div className=" w-full py-16  flex justify-center items-center">
      <div className=" w-4/5 h-4/5 flex flex-col gap-20">
        <div className="text-center  flex flex-col gap-4">
          <p className="text-primaryColor font-semibold text-lg capitalize tracking-normal xl:tracking-wider">
            practice advise
          </p>
          <h2 className="text-textColor xl:font-bold xl:text-3xl capitalize xl:tracking-widest font-extrabold">
            <span className="xl:block hidden">featured posts</span>
            <span className="xl:hidden block text-4xl font-bold leading-snug tracking-wide">
              featured <br /> products
            </span>
          </h2>
          <p className="text-secondText tracking-wider">
            <span className="xl:block hidden">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </span>
            <span className="xl:hidden block font-medium">
              Problems trying to resolve the <br /> conflict between the two
              major
            </span>
          </p>
        </div>
        <div className=" xl:flex xl:flex-row w-full xl:justify-between xl:gap-0 flex flex-col gap-16 flex-wrap">
          <div className="xl:w-[32%] xl:border-none xl:shadow-none shadow-md border flex flex-col text-center gap-4 ">
            <div className="w-full relative ">
              <p className="absolute text-lightText bg-dangerRed z-10 px-3 py-1 rounded-md top-[5%] left-[5%]">
                NEW
              </p>
              <img className="w-full" src={foto1} />
            </div>
            <div className="w-full pt-3 flex justify-center">
              <div className="w-[90%]  flex flex-col gap-6">
                <div className="flex gap-4">
                  <p className="text-blue-300">Google</p>
                  <p className="text-secondText">Trending</p>
                  <p className="text-secondText">New</p>
                </div>
                <p className="text-textColor text-start text-xl tracking-wide font-semibold">
                  Loudest à la Madison #1 <br /> (L'integral)
                </p>
                <p className="text-start text-secondText">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="w-full flex justify-between">
                  <div className="flex gap-2  items-center">
                    <IoMdAlarm className="h-5 w-5 text-primaryColor" />
                    <p className="text-xs text-secondText">22 April 2023</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaChartArea className="h-5 w-5 text-secondaryColorGreen" />
                    <p className="text-xs text-secondText">10 comments</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-base text-secondText">Learn More</p>
                  <IoIosArrowForward className="h-7 w-7 text-primaryColor" />
                </div>
              </div>
            </div>
          </div>
          <div className=" xl:w-[32%] xl:border-none xl:shadow-none shadow-md border flex flex-col text-center gap-4 ">
            <div className="w-full relative">
              <p className="absolute text-lightText bg-dangerRed z-10 px-3 py-1 rounded-md top-[5%] left-[5%]">
                NEW
              </p>
              <img className="w-full" src={foto2} />
            </div>
            <div className="w-full pt-3 flex justify-center">
              <div className="w-[90%]  flex flex-col gap-6">
                <div className="flex gap-4">
                  <p className="text-blue-300">Google</p>
                  <p className="text-secondText">Trending</p>
                  <p className="text-secondText">New</p>
                </div>
                <p className="text-textColor text-start text-xl tracking-wide font-semibold">
                  Loudest à la Madison #1 <br /> (L'integral)
                </p>
                <p className="text-start text-secondText">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="w-full flex justify-between">
                  <div className="flex gap-2  items-center">
                    <IoMdAlarm className="h-5 w-5 text-primaryColor" />
                    <p className="text-xs text-secondText">22 April 2023</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaChartArea className="h-5 w-5 text-secondaryColorGreen" />
                    <p className="text-xs text-secondText">10 comments</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-base text-secondText">Learn More</p>
                  <IoIosArrowForward className="h-7 w-7 text-primaryColor" />
                </div>
              </div>
            </div>
          </div>
          <div className=" xl:w-[32%] xl:border-none xl:shadow-none shadow-md border flex flex-col text-center gap-4 ">
            <div className="w-full relative">
              <p className="absolute text-lightText bg-dangerRed z-10 px-3 py-1 rounded-md top-[5%] left-[5%]">
                NEW
              </p>
              <img className="w-full" src={foto3} />
            </div>
            <div className="w-full pt-3 flex justify-center">
              <div className="w-[90%]  flex flex-col gap-6">
                <div className="flex gap-4">
                  <p className="text-blue-300">Google</p>
                  <p className="text-secondText">Trending</p>
                  <p className="text-secondText">New</p>
                </div>
                <p className="text-textColor text-start text-xl tracking-wide font-semibold">
                  Loudest à la Madison #1 <br /> (L'integral)
                </p>
                <p className="text-start text-secondText">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="w-full flex justify-between">
                  <div className="flex gap-2  items-center">
                    <IoMdAlarm className="h-5 w-5 text-primaryColor" />
                    <p className="text-xs text-secondText">22 April 2023</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaChartArea className="h-5 w-5 text-secondaryColorGreen" />
                    <p className="text-xs text-secondText">10 comments</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-base text-secondText">Learn More</p>
                  <IoIosArrowForward className="h-7 w-7 text-primaryColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
