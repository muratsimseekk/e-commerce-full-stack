import { Button } from "@material-tailwind/react";
import React from "react";
import { LuPhone } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";
import { PiArrowBendRightDownLight } from "react-icons/pi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faRedditAlien,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";

function ContactContent() {
  return (
    <div className="w-full  pt-32 flex flex-col items-center">
      <div className="w-4/5 ">
        <div className=" w-full flex flex-col gap-32">
          <div className="flex flex-col gap-6 text-textColor">
            <h2 className="font-semibold text-lg text-center">
              VISIT OUR OFFICE
            </h2>
            <p className="font-bold text-4xl text-center tracking-wider leading-normal">
              We help small businesses <br /> with big ideas
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <div className="w-[28%]  flex flex-col items-center gap-7 py-14">
              <LuPhone className="w-16 h-16 text-primaryColor" />
              <div className="text-textColor font-medium text-lg flex flex-col text-center">
                <p>georgia.young@example.com</p>
                <p>georgia.young@ple.com</p>
              </div>
              <p className="text-textColor font-bold text-lg">Get Support</p>
              <Button className="w-1/2 font-montserrat font-bold capitalize tracking-wider text-xs px-6 py-5 bg-white border border-primaryColor text-primaryColor rounded-3xl">
                Submit Request
              </Button>
            </div>
            <div className="w-[28%] bg-darkBg flex flex-col items-center gap-7 py-14 rounded-lg">
              <FaLocationDot className="w-16 h-16 text-primaryColor" />
              <div className="text-lightText font-medium text-lg flex flex-col text-center">
                <p>georgia.young@example.com</p>
                <p>georgia.young@ple.com</p>
              </div>
              <p className="text-lightText font-bold text-lg">Get Support</p>
              <Button className="w-1/2 font-montserrat font-bold capitalize tracking-wider text-xs px-6 py-5 bg-darkBg border border-primaryColor text-primaryColor rounded-3xl">
                Submit Request
              </Button>
            </div>
            <div className="w-[28%]  flex flex-col items-center gap-7 py-14">
              <BsEnvelopeFill className="w-16 h-16 text-primaryColor" />
              <div className="text-textColor font-medium text-lg flex flex-col text-center">
                <p>georgia.young@example.com</p>
                <p>georgia.young@ple.com</p>
              </div>
              <p className="text-textColor font-bold text-lg">Get Support</p>
              <Button className="w-1/2 font-montserrat font-bold capitalize tracking-wider text-xs px-6 py-5 bg-white border border-primaryColor text-primaryColor rounded-3xl">
                Submit Request
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-12 pb-10 items-center text-textColor">
            <PiArrowBendRightDownLight className="h-20 w-20 text-primaryColor" />
            <p className="font-semibold text-lg">WE Can't WAIT TO MEET YOU</p>
            <p className="text-6xl font-bold tracking-wider">Let’s Talk</p>
            <Button className="w-1/6 font-montserrat font-bold capitalize tracking-wider text-xs px-5 py-4 bg-primaryColor border border-primaryColor text-lightText rounded-md">
              Try it free now
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full  flex justify-center bg-lightGray pt-8">
        <div className="w-4/5  py-6 flex justify-between items-center text-secondText">
          <FontAwesomeIcon icon={faHooli} className="w-24 h-24" />
          <FontAwesomeIcon icon={faLyft} className="w-24 h-24" />
          <FontAwesomeIcon icon={faPiedPiperHat} className="w-24 h-24" />
          <FontAwesomeIcon icon={faStripe} className="w-24 h-24" />
          <FontAwesomeIcon icon={faAws} className="w-24 h-24" />
          <FontAwesomeIcon icon={faRedditAlien} className="w-24 h-24" />
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
