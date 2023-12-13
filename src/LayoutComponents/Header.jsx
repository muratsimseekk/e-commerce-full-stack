import React from "react";

import vector from "../assets/vector.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { TbMenuDeep } from "react-icons/tb";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="w-full h-[40vh] xl:h-full">
      <div className=" xl:w-full xl:py-5 xl:bg-darkBg hidden xl:text-lightText xl:flex  xl:justify-center ">
        <div className="xl:w-[95%] xl:flex xl:justify-between  xl:flex-wrap">
          <div className=" xl:flex xl:gap-8">
            <div className="xl:flex xl:gap-2 xl:items-center">
              <FontAwesomeIcon icon={faPhone} />
              <p>(225) 555-0118</p>
            </div>
            <div className="xl:flex xl:items-center xl:gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>michelle.rivera@example.com</p>
            </div>
          </div>
          <div className=" flex items-center">
            <p>Follow Us and get a chance to win 80%</p>
          </div>
          <div className=" flex gap-3 items-center">
            <p className="hidden xl:block xl:text-lg">Follow us :</p>
            <div className="flex gap-3 ">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-6 xl:py-6 flex justify-center ">
        <div className="xl:w-[95%] w-[85%] h-full flex items-center flex-wrap justify-between ">
          <div className="flex justify-between xl:w-[45%]  flex-wrap  items-center">
            <div className=" flex">
              <Link to="/">
                <h1 className="text-textColor text-xl font-semibold">
                  Bandage
                </h1>
              </Link>
            </div>
            <div className="xl:block hidden">
              <ul className="flex-col gap-6 xl:flex xl:flex-row xl:gap-4 text-secondText">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/shop">
                  <li className="flex gap-2 text-textColor">
                    <p>Shop</p> <img src={vector} />
                  </li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
                <Link to="/blog">
                  <li>Blog</li>
                </Link>
                <Link to="/contact">
                  <li>Contact</li>
                </Link>
                <li>Pages</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-5 justify-end">
            <div className="text-primaryColor xl:flex xl:flex-row hidden xl:items-center xl:gap-3">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon className="text-primaryColor " icon={faUser} />
                <p>Login</p>
              </div>
              <span>/</span>
              <p>Register</p>
            </div>
            <div className="xl:text-primaryColor text-textColor flex xl:gap-3 gap-4 items-center">
              <FontAwesomeIcon
                className="xl:h-4 xl:w-4 h-5 w-5"
                icon={faMagnifyingGlass}
              />
              <div className="flex gap-1 items-center">
                <FontAwesomeIcon
                  className="xl:h-4 xl:w-4 h-5 w-5"
                  icon={faCartShopping}
                />
                <p className="xl:block hidden">1</p>
              </div>
              <div className="flex gap-1 items-center">
                <FontAwesomeIcon
                  className="xl:h-4 xl:w-4 h-5 w-5 xl:block hidden"
                  icon={faHeart}
                />
                <TbMenuDeep className="xl:hidden block h-6 w-6 " />
                <p className="xl:block hidden">1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:hidden flex justify-center pt-10 font-medium h-full ">
        <ul className="flex-col text-2xl text-center text-secondText">
          <Link to="/">
            <li className="py-3">Home</li>
          </Link>
          <Link to="/shop">
            <li className="py-3">
              <p>Shop</p>
            </li>
          </Link>
          <Link to="/about">
            <li className="py-3">About</li>
          </Link>

          <Link to="/contact">
            <li className="py-3">Contact</li>
          </Link>
          <li className="xl:block hidden py-3">Pages</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
