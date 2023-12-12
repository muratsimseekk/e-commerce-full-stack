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
    <div className="w-full  flex justify-center bg-lightText">
      <div className="w-4/5  py-6 flex justify-between items-center  text-secondText">
        <FontAwesomeIcon icon={faHooli} className="w-24 h-24" />
        <FontAwesomeIcon icon={faLyft} className="w-24 h-24" />
        <FontAwesomeIcon icon={faPiedPiperHat} className="w-24 h-24" />
        <FontAwesomeIcon icon={faStripe} className="w-24 h-24" />
        <FontAwesomeIcon icon={faAws} className="w-24 h-24" />
        <FontAwesomeIcon icon={faRedditAlien} className="w-24 h-24" />
      </div>
    </div>
  );
}

export default Companies;
