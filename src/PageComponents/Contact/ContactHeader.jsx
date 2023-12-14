import React from "react";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoLogoFacebook } from "react-icons/io";

import women from "../../assets/hero/contact/family.png";
function ContactHeader() {
  return (
    <div className="w-full xl:h-[calc(100vh_-_144px)] h-[160vh] flex flex-col-reverse items-center  xl:flex xl:flex-row-reverse xl:justify-center  xl:gap-8 relative">
      <div className="xl:w-1/2 w-full xl:h-full h-1/2  relative">
        <div className="absolute xl:w-[375px] w-[300px] h-[300px] xl:h-[375px] bg-roseBg rounded-full right-[23%] xl:right-[11%] bottom-[46%] xl:bottom-[32%]"></div>
        <div className="absolute w-3 h-3 bg-violet rounded-full xl:right-[10%] right-[12%] z-40 bottom-3/4"></div>
        <div className="absolute w-3 h-3 bg-violet rounded-full xl:left-[34.5%] z-40 left-[12%] bottom-[30%] xl:bottom-[42%]"></div>
        <div className="absolute w-16 h-16 bg-roseBg rounded-full xl:left-[22%] left-[7%] top-[6%]"></div>
        <div className="absolute w-7 h-7 bg-roseBg rounded-full xl:right-[5%] right-[12%] top-[40%]"></div>
        <img
          src={women}
          className="absolute bottom-0 xl:right-[5%] right-[10%] h-full xl:h-full"
        />
      </div>
      <div className="h-1/2 w-full xl:py-0 py-10 xl:w-1/3 xl:h-full xl:flex xl:flex-row xl:justify-end xl:items-center flex flex-col items-center">
        <div className="w-4/5 xl:h-3/4">
          <div className="flex  flex-col h-full xl:justify-center xl:items-start gap-10 xl:gap-6 text-textColor">
            <h2 className="uppercase font-semibold xl:text-start text-center">
              Contact Us
            </h2>
            <h3 className="font-bold xl:block hidden tracking-wider xl:text-start text-center text-5xl leading-snug">
              Get in touch
              <br /> today!
            </h3>
            <h3 className="font-bold xl:hidden block tracking-wide  text-center text-3xl leading-snug">
              Get in touch
              <br /> today!
            </h3>
            <p className="text-secondText xl:block hidden tracking-wide xl:text-start text-center font-medium">
              We know how large objects will act,
              <br /> but things on a small scale
            </p>
            <p className="text-secondText xl:hidden block tracking-wide xl:text-start text-center font-medium">
              We know how large
              <br /> objects will act, but things
              <br /> on a small scale just do <br />
              not act that way.
            </p>
            <p className="text-lg font-bold xl:text-start text-center">
              Phone &ensp;&ensp;;&ensp;&ensp; +451 215 215{" "}
            </p>
            <p className="text-lg  font-bold xl:text-start text-center">
              Fax &ensp;:&ensp; +451 215 215
            </p>
            <div className="flex xl:justify-start justify-center gap-7  pt-4">
              <FontAwesomeIcon icon={faTwitter} className="h-8 w-8" />
              <IoLogoFacebook className="h-8 w-8" />
              <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
              <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHeader;
