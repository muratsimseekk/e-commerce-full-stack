import React, { useEffect, useState } from "react";
import { HiOutlineCube } from "react-icons/hi2";
import { FaSquareCheck } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";

import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementProduct,
  deleteShoppingCard,
  increaseProduct,
} from "../../store/actions/shoppingAction";
import { Link, useNavigate } from "react-router-dom";
function ShoppingCart() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const shopCardProducts = useSelector((state) => state.shopping.cart);

  const loginState = useSelector((state) => state.general.roles.loggedIn);
  console.log("login state", loginState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log("shopping card items", shopCardProducts);

  const productList = useSelector((state) => state.product.productList);
  // console.log("cart products ", cartProducts);
  useEffect(() => {
    const updatedCartProducts = shopCardProducts.map((cartItem) => {
      if (cartItem.product) {
        const matchingProduct = productList.find(
          (product) => product.id === cartItem.product.id
        );

        if (matchingProduct) {
          return {
            ...cartItem,
            product: matchingProduct,
          };
        } else {
          return cartItem;
        }
      } else {
        return cartItem;
      }
    });

    setTotalProduct((prev) =>
      shopCardProducts.reduce((total, item) => total + item.count, 0)
    );

    setCartProducts(updatedCartProducts);
  }, [shopCardProducts, productList]);

  useEffect(() => {
    setTotalPrice(
      cartProducts.reduce(
        (total, item) => total + item.product.price * item.count,
        0
      )
    );
  }, [totalProduct]);
  const navigateHandler = () => {
    if (loginState) {
      navigate("/order");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-full flex justify-center   py-20">
      <div className="w-[73%]  flex flex-col gap-5">
        <div className="py-3 ">
          <h2 className="text-lg font-medium">
            Sepetim ({cartProducts.length} Ürün)
          </h2>
        </div>
        {cartProducts?.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full rounded-lg border border-mutedColor "
            >
              {/* <div className="border-b-2"></div> Buraya satici kismi gelecek  */}
              {item.product.price * item.count >= 150 && (
                <div className="border-b-2 flex items-center justify-center gap-2 bg-[#E2F3FD] rounded-lg py-2">
                  <HiOutlineCube className="text-primaryColor h-7 w-7" />

                  <p className="text-black font-medium">Kargo Bedava !</p>
                </div>
              )}
              <div className="border-b-2 py-5 w-full flex justify-center">
                <div className="w-11/12  flex justify-between">
                  <div className="flex  w-3/5 items-center gap-2">
                    <div className="flex flex-col justify-center">
                      <FaSquareCheck className="h-7 w-7 text-primaryColor" />
                    </div>
                    <div className="h-24 w-24">
                      <img
                        src={item.product.images[0].url}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="">{item.product.name}</h2>
                      <p className=""></p>
                      <div className="flex items-center gap-2">
                        <FaShippingFast className="text-green-600" />
                        <p className="text-sm text-blue-gray-500">
                          <span className="text-black font-medium">
                            39 dakika
                          </span>{" "}
                          icinde siparis verirsen{" "}
                          <span className="text-black font-medium">
                            en gec yarin
                          </span>{" "}
                          kargoda !
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center ">
                    <Button
                      size="sm"
                      className="h-2/5 flex justify-center items-center bg-[#E2F3FD] text-white rounded-none"
                      onClick={() =>
                        dispatch(decrementProduct(item.product.id))
                      }
                    >
                      <span className="font-bold text-3xl text-darkBg">-</span>
                    </Button>
                    <div className="border h-2/5 w-12 flex justify-center items-center text-lg font-medium">
                      <p>{item.count}</p>
                    </div>

                    <Button
                      size="sm"
                      className="h-2/5 flex justify-center items-center bg-[#E2F3FD] text-white rounded-none"
                      onClick={() => dispatch(increaseProduct(item.product.id))}
                    >
                      <span className="font-bold text-xl text-darkBg">+</span>
                    </Button>
                  </div>
                  <div className=" flex justify-center items-center">
                    <p className="text-lg font-semibold text-primaryColor">
                      $ {item.product.price}
                    </p>
                  </div>
                  <div className=" flex justify-center items-center hover:cursor-pointer">
                    <RiDeleteBin5Line
                      onClick={() =>
                        dispatch(deleteShoppingCard(item.product.id))
                      }
                      className="w-7 h-6 text-darkBg"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[22%]  flex justify-center">
        <div className="w-5/6  h-max py-2 flex flex-col gap-3">
          <div className="flex justify-center">
            <div className="w-11/12 flex flex-col gap-4 py-2 border rounded-lg border-[#6CB9D8] px-2 shadow-md">
              <h2 className="text-xl">Sipariş Özeti</h2>
              <div className="text-sm flex flex-col gap-3 py-2">
                <div className="flex justify-between">
                  <h3>Ürünler Toplamı</h3>
                  <p className="font-semibold text-darkBg">
                    $ {totalPrice.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <h3>Kargo Toplamı</h3>
                  <p>$ 29,99 </p>
                </div>
                {totalPrice.toFixed(2) >= 150 && (
                  <div className="flex justify-between">
                    <h3>
                      $ 150 ve Uzeri <br />
                      Kargo Bedava{" "}
                    </h3>
                    <p className="text-primaryColor">-$ 29.99</p>
                  </div>
                )}
              </div>
              <hr className="border border-primaryColor" />
              {totalPrice.toFixed(2) >= 150 ? (
                <div className="flex justify-between items-center">
                  <h3>Toplam</h3>
                  <p className="font-semibold text-xl text-primaryColor">
                    $ {totalPrice.toFixed(2)}
                  </p>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <h3>Toplam</h3>
                  <p className="font-semibold text-xl text-primaryColor">
                    $ {Number(Number(totalPrice) + Number(29, 99)).toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="border border-[#6CB9D8] rounded-md py-1 w-11/12">
              <div className="flex items-center justify-center gap-2 hover:cursor-pointer w-full">
                <AiOutlinePlus className=" text-primaryColor " />
                <p className="text-sm tracking-tight">İNDİRİM KODU GİR</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <Button
              onClick={() => navigateHandler()}
              className="w-11/12 bg-primaryColor"
            >
              Siparisi Onayla
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
