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
function ShoppingCart() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const shopCardProducts = useSelector((state) => state.shopping.cart);

  const dispatch = useDispatch();
  console.log("shopping card items", shopCardProducts);

  const productList = useSelector((state) => state.product.productList);
  console.log("cart products ", cartProducts);
  useEffect(() => {
    const updatedCartProducts = shopCardProducts.map((cartItem) => {
      const matchingProduct = productList.find(
        (product) => product.id === cartItem.product.id
      );

      if (matchingProduct) {
        return {
          ...cartItem,
          product: matchingProduct,
        };
      }
      return cartItem;
    });
    setTotalProduct((prev) =>
      shopCardProducts.reduce((total, item) => total + item.count, 0)
    );

    setCartProducts(updatedCartProducts);
  }, [shopCardProducts, productList]);

  return (
    <div className="w-full flex justify-center  bg-roseBg py-20">
      <div className="w-[73%] bg-green-50 flex flex-col gap-5">
        <div className="py-3 bg-green-200">
          <h2 className="text-lg font-medium">Sepetim (2 Urun)</h2>
        </div>
        {cartProducts.map((item, index) => {
          return (
            <div key={index} className="w-full bg-blue-gray-400 rounded-lg">
              {/* <div className="border-b-2"></div> Buraya satici kismi gelecek  */}
              <div className="border-b-2 flex items-center justify-center gap-2 bg-green-100 py-2">
                <HiOutlineCube className="text-green-600 h-7 w-7" />
                <p className="text-black font-medium">Kargo Bedava !</p>
              </div>
              <div className="border-b-2 py-5 w-full flex justify-center">
                <div className="w-11/12  flex bg-blue-200 justify-between">
                  <div className="flex bg-brown-200 w-3/5 items-center gap-2">
                    <div className="flex flex-col justify-center">
                      <FaSquareCheck className="h-7 w-7 " />
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
                  <div className="bg-red-300 flex items-center ">
                    <Button
                      size="sm"
                      className="h-2/5 bg-[#8994BD] text-white rounded-sm"
                      onClick={() =>
                        dispatch(decrementProduct(item.product.id))
                      }
                    >
                      {" "}
                      -{" "}
                    </Button>
                    <div className="border h-2/5 w-12 flex justify-center items-center text-lg font-medium">
                      <p>{item.count}</p>
                    </div>

                    <Button
                      size="sm"
                      className="h-2/5 bg-[#8994BD] text-white rounded-sm"
                      onClick={() => dispatch(increaseProduct(item.product.id))}
                    >
                      {" "}
                      +{" "}
                    </Button>
                  </div>
                  <div className="bg-orange-300 flex justify-center items-center">
                    <p className="text-lg">
                      $ {item.product.price * item.count}
                    </p>
                  </div>
                  <div className="bg-deep-orange-500 flex justify-center items-center hover:cursor-pointer">
                    <RiDeleteBin5Line
                      onClick={() =>
                        dispatch(deleteShoppingCard(item.product.id))
                      }
                      className="w-7 h-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[22%] bg-red-300 flex justify-center">
        <div className="w-5/6 bg-blue-gray-600 h-max py-2 flex flex-col gap-3">
          <div className="flex justify-center">
            <div className="w-11/12 flex flex-col gap-4 py-2 border px-2">
              <h2>Siparis Ozeti</h2>
              <div className="bg-yellow text-sm flex flex-col gap-3 py-2">
                <div className="flex justify-between">
                  <h3>Urunun Toplami</h3>
                  <p>8.448,99 TL</p>
                </div>
                <div className="flex justify-between">
                  <h3>Kargo Toplami</h3>
                  <p>29,99 TL</p>
                </div>
                <div className="flex justify-between">
                  <h3>
                    150 TL ve Uzeri <br />
                    Kargo Bedava{" "}
                  </h3>
                  <p>-29.99 TL</p>
                </div>
              </div>
              <hr />
              <div className="flex justify-between">
                <h3>Toplam</h3>
                <p>8.448,99 TL</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="border border-mutedColor rounded-md py-1 w-11/12">
              <div className="flex items-center justify-center gap-2 hover:cursor-pointer w-full">
                <AiOutlinePlus className="" />
                <p className="text-sm tracking-tight">INDIRIM KODU GIR</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="w-11/12">Siparisi Onayla</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
