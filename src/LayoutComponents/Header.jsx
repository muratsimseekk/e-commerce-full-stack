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
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="w-full">
      <div className=" xl:w-full xl:py-5 xl:bg-darkBg xl:text-lightText xl:flex  xl:justify-center ">
        <div className="xl:w-[95%] xl:flex xl:justify-between  xl:flex-wrap">
          <div className=" xl:flex xl:gap-8">
            <div className="xl:flex xl:gap-2 xl:items-center">
              <FontAwesomeIcon className="hidden xl:block " icon={faPhone} />
              <p className="hidden xl:block ">(225) 555-0118</p>
            </div>
            <div className="xl:flex xl:items-center xl:gap-2">
              <FontAwesomeIcon className="hidden xl:block " icon={faEnvelope} />
              <p className="hidden xl:block ">michelle.rivera@example.com</p>
            </div>
          </div>
          <div className=" flex items-center">
            <p className="hidden xl:block ">
              Follow Us and get a chance to win 80%
            </p>
          </div>
          <div className=" flex gap-3 items-center">
            <p className="hidden xl:block xl:text-lg">Follow us :</p>
            <div className="flex gap-3 ">
              <FontAwesomeIcon
                className="hidden xl:block "
                icon={faInstagram}
              />
              <FontAwesomeIcon className="hidden xl:block " icon={faYoutube} />
              <FontAwesomeIcon className="hidden xl:block " icon={faFacebook} />
              <FontAwesomeIcon className="hidden xl:block " icon={faTwitter} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-6  flex justify-center ">
        <div className="w-[95%]  h-full flex items-center flex-wrap justify-between">
          <div className="flex  justify-between w-[45%] items-center">
            <div className=" flex">
              <Link to="/">
                <h1 className="text-textColor text-xl font-semibold">
                  Bandage
                </h1>
              </Link>
            </div>
            <div>
              <ul className="flex gap-4 text-secondText">
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
          <div className="flex  gap-5 justify-end">
            <div className="text-primaryColor flex items-center  gap-3">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon className="text-primaryColor" icon={faUser} />
                <p>Login</p>
              </div>
              <span>/</span>
              <p>Register</p>
            </div>
            <div className="text-primaryColor flex gap-3 items-center">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <div className="flex gap-1 items-center">
                <FontAwesomeIcon icon={faCartShopping} />
                <p>1</p>
              </div>
              <div className="flex gap-1 items-center">
                <FontAwesomeIcon icon={faHeart} />
                <p>1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
