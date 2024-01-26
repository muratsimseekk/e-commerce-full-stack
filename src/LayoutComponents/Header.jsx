import React, { useEffect, useState } from "react";

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
import { Link, useNavigate } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logOutChange } from "../store/actions/globalAction";
import { Button } from "@material-tailwind/react";
import {
  decrementProduct,
  deleteShoppingCard,
  increaseProduct,
} from "../store/actions/shoppingAction";
import { RiDeleteBin5Line } from "react-icons/ri";

function Header() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const navigate = useNavigate();
  const userNavLog = useSelector((state) => state.general.roles.loggedIn);

  const userGravatar = useSelector((state) => state.general.roles.photo);

  const dispatch = useDispatch();

  const categories = useSelector((state) => state.general.categories);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [shopMenu, setShopMenu] = useState(false);
  const [womanMenu, setWomenMenu] = useState(false);
  const [manMenu, setManMenu] = useState(false);

  const [cartMenu, setCartMenu] = useState(false);

  const shopCardProducts = useSelector((state) => state.shopping.cart);

  // console.log("shopping carttaki itemlar", shopCardProducts);
  const allProducts = useSelector((state) => state.product.productList);
  // console.log("all products", allProducts);

  useEffect(() => {
    const updatedCartProducts = shopCardProducts.map((cartItem) => {
      const matchingProduct = allProducts.find(
        (product) => product.id === cartItem.product.id
      );
      // console.log("matching product", matchingProduct);
      if (matchingProduct) {
        return {
          ...cartItem,
          product: matchingProduct,
        };
      } else {
        return cartItem;
      }
    });

    setTotalProduct(() =>
      updatedCartProducts.reduce((total, item) => total + item.count, 0)
    );

    setCartProducts(updatedCartProducts);
  }, [shopCardProducts, allProducts]);

  // console.log("cart products", cartProducts);

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
    const gender = categories[i].code.split(":")[0];

    const category = categories[i];

    if (gender == "k") {
      arrKadin.push(category);
    } else if (gender == "e") {
      arrErkek.push(category);
    }
  }

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
                            setWomenMenu(false);
                            setManMenu(false);
                          }}
                        />
                        <div className="absolute z-50 left-10 top-10 border py-2 px-4">
                          <div className="relative flex items-center justify-between gap-1 ">
                            {womanMenu == true ? (
                              <h2 className=" px-2 py-1 rounded-md bg-primaryColor text-white">
                                Woman
                              </h2>
                            ) : (
                              <h2 className="px-2 py-1">Woman</h2>
                            )}

                            {womanMenu == false ? (
                              <IoIosArrowForward
                                onClick={() => {
                                  setWomenMenu(true);
                                  setManMenu(false);
                                }}
                              />
                            ) : (
                              <IoIosArrowDown
                                className="w-7 h-5 text-primaryColor"
                                onClick={() => {
                                  setWomenMenu(false);
                                }}
                              />
                            )}

                            {womanMenu == true && (
                              <ul className="absolute left-[128px] flex gap-2 top-2 border border-primaryColor py-5 px-3 w-72 flex-wrap bg-gray-50">
                                {arrKadin.map((item, i) => (
                                  <li
                                    key={i}
                                    className="z-40 w-[30%] hover:underline text-base  hover:cursor-pointer"
                                  >
                                    <Link
                                      to={`shop/${item.code.replace(":", "/")}`}
                                    >
                                      {item.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>

                          <div className="relative flex items-center  justify-between gap-1 ">
                            {manMenu == true ? (
                              <h2 className=" px-2 py-1 rounded-md bg-primaryColor text-white">
                                Erkek
                              </h2>
                            ) : (
                              <h2 className="px-2 py-1">Erkek</h2>
                            )}

                            {manMenu == false ? (
                              <IoIosArrowForward
                                onClick={() => {
                                  setManMenu(true);
                                  setWomenMenu(false);
                                }}
                              />
                            ) : (
                              <IoIosArrowDown
                                className="w-7 h-5 text-primaryColor"
                                onClick={() => {
                                  setManMenu(false);
                                }}
                              />
                            )}

                            {manMenu === true && (
                              <ul className="absolute left-[117px] flex gap-2 top-2 border border-primaryColor py-5 px-3 w-72 flex-wrap bg-gray-50">
                                {arrErkek.map((item, i) => (
                                  <li
                                    className="z-40 w-[30%] hover:underline text-base hover:cursor-pointer"
                                    key={i}
                                  >
                                    <Link
                                      to={`shop/${item.code.replace(":", "/")}`}
                                    >
                                      {item.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
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
                className="xl:h-4 xl:w-4 h-5 w-5 "
                icon={faMagnifyingGlass}
              />
              {!cartMenu && (
                <div className="flex gap-1 items-center">
                  <FontAwesomeIcon
                    className="xl:h-4 xl:w-4 h-5 w-5 hover:cursor-pointer"
                    icon={faCartShopping}
                    onClick={() => setCartMenu(true)}
                  />
                  <p className="xl:block hidden">{totalProduct}</p>
                </div>
              )}
              {cartMenu && (
                <div className="flex gap-1 items-center">
                  <FontAwesomeIcon
                    className="xl:h-6 xl:w-6 text-[#424D76]  h-5 w-5  hover:cursor-pointer"
                    icon={faCartShopping}
                    onClick={() => setCartMenu(false)}
                  />
                  <p className="xl:block hidden  xl:font-bold">
                    {totalProduct}
                  </p>
                </div>
              )}

              {cartMenu && (
                <div className="absolute bg-[#D8DCE9] h-[330px] flex flex-col gap-2 justify-between rounded-lg z-50 w-[320px] right-0 top-10">
                  <div className="flex gap-2 py-2 pl-3 bg-[#424D76] h-[40px] text-darkBg">
                    <h2 className="font-medium text-white">Sepetim</h2>
                    <p className="font-medium text-white">
                      ({totalProduct} urun)
                    </p>
                  </div>
                  <div>
                    <div className="h-[220px] overflow-auto">
                      {cartProducts?.map((item) => {
                        return (
                          <div className="mb-2 ">
                            <div className="flex ">
                              <div className="h-24 w-24">
                                <img
                                  src={item.product?.images[0]?.url}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="flex flex-col justify-between">
                                <h2 className="text-darkBg font-medium tracking-wide">
                                  {item.product?.name}
                                </h2>
                                <div className="flex font-medium items-center gap-2 text-[#6F7DAE]">
                                  <h3 className="tracking-wider">
                                    Adet:&nbsp;
                                  </h3>
                                  <div className="flex gap-2 items-center">
                                    <button
                                      onClick={() =>
                                        dispatch(
                                          decrementProduct(item.product.id)
                                        )
                                      }
                                      className=" px-[6px] text-[#424D76] rounded-sm bg-[#7C89B6] flex justify-center items-start"
                                    >
                                      -
                                    </button>
                                    <p className="">{item?.count}</p>
                                    <button
                                      onClick={() =>
                                        dispatch(
                                          increaseProduct(item.product.id)
                                        )
                                      }
                                      className=" text-[#424D76] px-[6px] rounded-sm bg-[#7C89B6] flex justify-center items-start"
                                    >
                                      +
                                    </button>
                                  </div>
                                  <div className="ml-3">
                                    <RiDeleteBin5Line
                                      onClick={() =>
                                        dispatch(
                                          deleteShoppingCard(item.product.id)
                                        )
                                      }
                                      className="h-4 w-4 text-[#424D76] hover:cursor-pointer"
                                    />
                                  </div>
                                </div>
                                <p className="font-semibold tracking-wider">
                                  $ {item?.product.price}
                                </p>
                              </div>
                            </div>
                            <hr className="border mt-2 border-[#424D76]" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex gap-2 py-2 pl-3 h-[70px] bg-[#424D76]  text-darkBg">
                    <Link to="/shopping-cart">
                      <Button className="bg-[#0E88CD] text-white">
                        Sepete Git
                      </Button>
                    </Link>
                    <Link to="/order">
                      <Button className="bg-[#8994BD] text-white">
                        Siparisi Tamamla
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
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
                <img src={userGravatar} className="rounded-full w-8 h-8" />

                <p className="text-base text-darkBg font-medium">
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
