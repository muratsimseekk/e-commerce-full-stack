import React, { useState } from "react";

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
import { CgClose } from "react-icons/cg";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import { logOutChange } from "../store/actions/globalAction";

function Header() {
  const userNavLog = useSelector((state) => state.general.roles.loggedIn);

  const userGravatar = useSelector((state) => state.general.roles.photo);

  const dispatch = useDispatch();

  const categories = useSelector((state) => state.general.categories);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [shopMenu, setShopMenu] = useState(false);
  const userNav = useSelector((state) => state.general.roles);

  const logOutHandler = (e) => {
    e.preventDefault();
    dispatch(logOutChange());
  };

  const handleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };
  let arrKadin = [];
  let arrErkek = [];
  for (let i = 0; i < categories.length; i++) {
    const gender = categories[i].code[0].split(":");

    if (gender == "k") {
      arrKadin.push(categories[i]);
    } else if (gender == "e") {
      arrErkek.push(categories[i]);
    }
  }
  console.log(categories);
  console.log(arrKadin, arrErkek);
  return (
    <div className="w-full h-[40vh] xl:h-full xl:block flex flex-col justify-around">
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
                  <li className="flex gap-2 items-center text-textColor relative">
                    <p>Shop</p>{" "}
                    {shopMenu == false && (
                      <IoIosArrowDown
                        onClick={() => {
                          setShopMenu(true);
                        }}
                      />
                    )}
                    {shopMenu == true && (
                      <>
                        <IoIosArrowUp
                          onClick={() => {
                            setShopMenu(false);
                          }}
                        />
                        <div className="absolute left-10 top-10 ">Acik</div>
                      </>
                    )}
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
          <div className="xl:flex xl:flex-row xl:gap-5 xl:justify-end relative">
            <div className="xl:text-primaryColor text-textColor flex xl:gap-3 gap-4 items-center justify-end">
              {userNavLog && !isMenuOpen && (
                <img
                  src={userGravatar}
                  className="rounded-full block xl:hidden w-10 h-10"
                />
              )}
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
                {!isMenuOpen && (
                  <TbMenuDeep
                    onClick={handleMenu}
                    className="xl:hidden block h-6 w-6"
                  />
                )}

                {isMenuOpen && (
                  <CgClose className="w-6 h-6" onClick={handleMenu} />
                )}

                <p className="xl:block hidden">1</p>
              </div>
            </div>
            {isMenuOpen && (
              <>
                {userNavLog === true ? (
                  <div className="xl:hidden  absolute bg-gray-100 xl:border-none border border-primaryColor rounded-lg flex flex-col gap-2 px-10 py-10 items-center right-2 top-8">
                    <img
                      src={userGravatar}
                      className="rounded-full w-10 h-10"
                    />
                    <p className="text-lg text-darkBg font-medium">
                      {userNav.name}
                    </p>
                    <button
                      type="button"
                      onClick={logOutHandler}
                      className="border bg-primaryColor text-lightText xl:h-8 px-2 py-1 rounded-xl xl:px-3  hover:bg-lightText hover:border-primaryColor hover:text-darkBg"
                    >
                      LogOut
                    </button>
                  </div>
                ) : (
                  <div className="text-primaryColor xl:hidden absolute bg-gray-100 xl:border-none border border-primaryColor rounded-lg w-full flex flex-col py-10 px-16 gap-8 right-2 top-8 items-center">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        className="xl:text-primaryColor text-darkBg"
                        icon={faUser}
                      />
                      <Link to="/login">
                        <p className="text-xl xl:text-bas xl:text-primaryColor text-darkBg">
                          Login
                        </p>
                      </Link>
                    </div>
                    <span className="xl:block hidden">/</span>
                    <Link to="/signup">
                      <p className="text-xl xl:text-base xl:text-primaryColor text-darkBg ">
                        Register
                      </p>
                    </Link>
                  </div>
                )}
              </>
            )}
            {userNavLog === true ? (
              <div className="xl:flex xl:flex-row xl:items-center xl:gap-3  hidden">
                <img src={userGravatar} className="rounded-full w-10 h-10" />

                <p className="text-lg text-darkBg font-medium">
                  {userNav.name}
                </p>
                <button
                  type="button"
                  onClick={logOutHandler}
                  className="border bg-primaryColor text-lightText xl:h-8   rounded-xl xl:px-3  hover:bg-lightText hover:border-primaryColor hover:text-darkBg"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="text-primaryColor xl:flex xl:flex-row  xl:items-center xl:gap-3 hidden">
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon
                    className="xl:text-primaryColor text-darkBg"
                    icon={faUser}
                  />
                  <Link to="/login">
                    <p className="text-xl xl:text-base xl:text-primaryColor text-darkBg">
                      Login
                    </p>
                  </Link>
                </div>
                <span className="xl:block hidden">/</span>
                <Link to="/signup">
                  <p className="text-xl xl:text-base xl:text-primaryColor text-darkBg ">
                    Register
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="xl:hidden  flex justify-center  font-medium">
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
