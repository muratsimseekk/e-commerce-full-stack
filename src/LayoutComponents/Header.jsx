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
      <div className="w-full py-5 bg-darkBg text-lightText flex  justify-center ">
        <div className="w-[95%] flex justify-between  flex-wrap">
          <div className=" flex gap-8">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faPhone} />
              <p>(225) 555-0118</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>michelle.rivera@example.com</p>
            </div>
          </div>
          <div className=" flex items-center">
            <p>Follow Us and get a chance to win 80%</p>
          </div>
          <div className=" flex gap-3 items-center">
            <p className="text-lg">Follow us :</p>
            <div className="flex gap-3 ">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
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
