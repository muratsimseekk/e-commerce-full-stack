import React from "react";
import foto1 from "../assets/hero/blog/blog1.jpg";
import foto2 from "../assets/hero/blog/blog2.jpg";
import foto3 from "../assets/hero/blog/blog3.png";
import foto4 from "../assets/hero/blog/blog4.jpg";
import foto5 from "../assets/hero/blog/blog5.jpg";
import foto6 from "../assets/hero/blog/blog6.jpg";
import { IoIosArrowForward, IoMdAlarm } from "react-icons/io";
import { FaChartArea } from "react-icons/fa";
function Blog() {
  return (
    <div className="  flex justify-center items-center">
      <div className=" h-full w-4/5 flex flex-wrap justify-evenly gap-y-24 py-16">
        <div className=" w-[45%] flex flex-col text-center gap-4 ">
          <div className="w-full relative ">
            <p className="absolute text-lightText bg-dangerRed z-10 px-3 py-1 rounded-md top-[5%] left-[5%]">
              NEW
            </p>
            <img className="w-full object-cover" src={foto1} />
          </div>
          <div className="w-full pt-3 flex justify-center">
            <div className="w-[90%]  flex flex-col gap-6">
              <div className="flex gap-4">
                <p className="text-blue-300">Google</p>
                <p className="text-secondText">Trending</p>
                <p className="text-secondText">New</p>
              </div>
              <p className="text-textColor text-start text-xl tracking-wide font-semibold">
                Koudetat à la Maison #1 <br />
                (L'intégrale)
              </p>
              <p className="text-start text-secondText">
                We focus on ergonomics and meeting <br /> you where you work.
                It's only a <br /> keystroke away.
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
        <div className=" w-[45%] flex flex-col text-center gap-4 ">
          <div className="w-full relative ">
            <p className="absolute text-lightText bg-dangerRed z-10 px-3 py-1 rounded-md top-[5%] left-[5%]">
              NEW
            </p>
            <img className="w-full object-cover" src={foto2} />
          </div>
          <div className="w-full pt-3 flex justify-center">
            <div className="w-[90%]  flex flex-col gap-6">
              <div className="flex gap-4">
                <p className="text-blue-300">Google</p>
                <p className="text-secondText">Trending</p>
                <p className="text-secondText">New</p>
              </div>
              <p className="text-textColor text-start text-xl tracking-wide font-semibold">
                Koudetat à la Maison #1 <br />
                (L'intégrale)
              </p>
              <p className="text-start text-secondText">
                We focus on ergonomics and meeting <br /> you where you work.
                It's only a <br /> keystroke away.
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
        <div className=" w-[45%] flex flex-col text-center gap-4 ">
          <div className="w-full relative ">
            <p className="absolute text-lightText bg-dangerRed z-10 px-3 py-1 rounded-md top-[5%] left-[5%]">
              NEW
            </p>
            <img className="w-full object-cover" src={foto3} />
          </div>
          <div className="w-full pt-3 flex justify-center">
            <div className="w-[90%]  flex flex-col gap-6">
              <div className="flex gap-4">
                <p className="text-blue-300">Google</p>
                <p className="text-secondText">Trending</p>
                <p className="text-secondText">New</p>
              </div>
              <p className="text-textColor text-start text-xl tracking-wide font-semibold">
                Koudetat à la Maison #1 <br />
                (L'intégrale)
              </p>
              <p className="text-start text-secondText">
                We focus on ergonomics and meeting <br /> you where you work.
                It's only a <br /> keystroke away.
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
        <div className=" w-[45%] flex flex-col text-center gap-4 ">
          <div className="w-full relative ">
            <p className="absolute text-lightText bg-dangerRed z-10 px-3 py-1 rounded-md top-[5%] left-[5%]">
              NEW
            </p>
            <img className="w-full object-cover" src={foto4} />
          </div>
          <div className="w-full pt-3 flex justify-center">
            <div className="w-[90%]  flex flex-col gap-6">
              <div className="flex gap-4">
                <p className="text-blue-300">Google</p>
                <p className="text-secondText">Trending</p>
                <p className="text-secondText">New</p>
              </div>
              <p className="text-textColor text-start text-xl tracking-wide font-semibold">
                Koudetat à la Maison #1 <br />
                (L'intégrale)
              </p>
              <p className="text-start text-secondText">
                We focus on ergonomics and meeting <br /> you where you work.
                It's only a <br /> keystroke away.
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
        <div className=" w-[45%] flex flex-col text-center gap-4 ">
          <div className="w-full relative ">
            <p className="absolute text-lightText bg-dangerRed z-10 px-3 py-1 rounded-md top-[5%] left-[5%]">
              NEW
            </p>
            <img className="w-full object-cover" src={foto5} />
          </div>
          <div className="w-full pt-3 flex justify-center">
            <div className="w-[90%]  flex flex-col gap-6">
              <div className="flex gap-4">
                <p className="text-blue-300">Google</p>
                <p className="text-secondText">Trending</p>
                <p className="text-secondText">New</p>
              </div>
              <p className="text-textColor text-start text-xl tracking-wide font-semibold">
                Koudetat à la Maison #1 <br />
                (L'intégrale)
              </p>
              <p className="text-start text-secondText">
                We focus on ergonomics and meeting <br /> you where you work.
                It's only a <br /> keystroke away.
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
        <div className=" w-[45%] flex flex-col text-center gap-4 ">
          <div className="w-full relative ">
            <p className="absolute text-lightText bg-dangerRed z-10 px-3 py-1 rounded-md top-[5%] left-[5%]">
              NEW
            </p>
            <img className="w-full object-cover" src={foto6} />
          </div>
          <div className="w-full pt-3 flex justify-center">
            <div className="w-[90%]  flex flex-col gap-6">
              <div className="flex gap-4">
                <p className="text-blue-300">Google</p>
                <p className="text-secondText">Trending</p>
                <p className="text-secondText">New</p>
              </div>
              <p className="text-textColor text-start text-xl tracking-wide font-semibold">
                Koudetat à la Maison #1 <br />
                (L'intégrale)
              </p>
              <p className="text-start text-secondText">
                We focus on ergonomics and meeting <br /> you where you work.
                It's only a <br /> keystroke away.
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
  );
}

export default Blog;
