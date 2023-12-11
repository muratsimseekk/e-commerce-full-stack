import {
  faAws,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faRedditAlien,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Companies() {
  return (
    <div className="flex flex-col pt-16 gap-20 bg-lightGray">
      <div className="flex flex-col items-center gap-10">
        <h2 className="capitalize font-bold text-3xl tracking-wide text-textColor">
          big companies are here
        </h2>
        <p className="text-secondText text-base text-center">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="w-full  flex justify-center bg-lightGray">
        <div className="w-[85%]  py-6 flex justify-between items-center  text-secondText">
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

export default Companies;
