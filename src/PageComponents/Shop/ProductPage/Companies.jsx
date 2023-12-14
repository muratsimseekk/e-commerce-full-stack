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
      <div className="w-4/5 pb-8 py-6 xl:flex xl:flex-row xl:justify-between xl:items-center flex flex-col items-center text-secondText">
        <FontAwesomeIcon icon={faHooli} className="xl:w-24 xl:h-24 w-32 h-40" />
        <FontAwesomeIcon icon={faLyft} className="xl:w-24 xl:h-24 w-32 h-40" />
        <FontAwesomeIcon
          icon={faPiedPiperHat}
          className="xl:w-24 xl:h-24 w-32 h-40"
        />
        <FontAwesomeIcon
          icon={faStripe}
          className="xl:w-24 xl:h-24 w-32 h-40"
        />
        <FontAwesomeIcon icon={faAws} className="xl:w-24 xl:h-24 w-32 h-40" />
        <FontAwesomeIcon
          icon={faRedditAlien}
          className="xl:w-24 xl:h-24 w-32 h-40"
        />
      </div>
    </div>
  );
}

export default Companies;
