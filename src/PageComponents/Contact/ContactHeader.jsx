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
    <div className="w-full  h-[calc(100vh_-_144px)] relative">
      <div className="absolute w-[375px] h-[375px] bg-roseBg rounded-full left-[56%] bottom-[32%]"></div>
      <div className="absolute w-3 h-3 bg-violet rounded-full right-[16%] z-40 bottom-3/4"></div>
      <div className="absolute w-3 h-3 bg-violet rounded-full right-[44.5%] z-40 bottom-[42%]"></div>
      <div className="absolute w-16 h-16 bg-roseBg rounded-full right-[44%] top-[10%]"></div>
      <div className="absolute w-7 h-7 bg-roseBg rounded-full right-[15%] top-[40%]"></div>
      <img src={women} className="absolute bottom-0 left-[55%] h-full" />

      <div className="w-full h-full flex justify-center items-center">
        <div className="w-4/5 h-3/4">
          <div className="flex flex-col h-full justify-center gap-6 text-textColor">
            <h2 className="uppercase font-semibold">Contact Us</h2>
            <h3 className="font-bold tracking-wider text-5xl leading-snug">
              Get in touch
              <br /> today!
            </h3>
            <p className="text-secondText tracking-wide font-medium">
              We know how large objects will act,
              <br /> but things on a small scale
            </p>
            <p className="text-lg font-bold">
              Phone &ensp;&ensp;;&ensp;&ensp; +451 215 215{" "}
            </p>
            <p className="text-lg font-bold">Fax &ensp;:&ensp; +451 215 215</p>
            <div className="flex gap-7 pt-4">
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
