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
        <h2 className="capitalize font-bold text-3xl xl:block hidden tracking-wide text-textColor">
          big companies are here
        </h2>
        <h2 className="capitalize font-bold text-4xl leading-normal xl:hidden block text-center tracking-normal text-textColor">
          big
          <br /> companies
          <br /> are here
        </h2>
        <p className="text-secondText xl:block hidden text-base text-center">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
        <p className="text-secondText font-medium xl:hidden block text-base text-center">
          Problems trying to resolve the conflict
          <br /> between the two major realms of Classical
          <br /> physics: Newtonian mechanics
        </p>
      </div>
      <div className="w-full  flex justify-center xl:pb-0 pb-16 bg-lightGray">
        <div className="w-[85%] flex flex-col items-center py-6 xl:flex xl:flex-row xl:justify-between xl:items-center  text-secondText">
          <FontAwesomeIcon
            icon={faHooli}
            className="xl:w-24 xl:h-24 w-40 h-40"
          />
          <FontAwesomeIcon
            icon={faLyft}
            className="xl:w-24 xl:h-24 w-40 h-40"
          />
          <FontAwesomeIcon
            icon={faPiedPiperHat}
            className="xl:w-24 xl:h-24 w-40 h-40"
          />
          <FontAwesomeIcon
            icon={faStripe}
            className="xl:w-24 xl:h-24 w-40 h-40"
          />
          <FontAwesomeIcon icon={faAws} className="xl:w-24 xl:h-24 w-40 h-40" />
          <FontAwesomeIcon
            icon={faRedditAlien}
            className="xl:w-24 xl:h-24 w-40 h-40"
          />
        </div>
      </div>
    </div>
  );
}

export default Companies;
