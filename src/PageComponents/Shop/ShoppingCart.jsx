import React, { useEffect, useState } from "react";
import { HiOutlineCube } from "react-icons/hi2";
import { FaSquareCheck } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ImCheckboxUnchecked } from "react-icons/im";

import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkedProduct,
  decrementProduct,
  deleteShoppingCard,
  increaseProduct,
} from "../../store/actions/shoppingAction";
import { Link, useNavigate } from "react-router-dom";
import { set } from "react-hook-form";
import { toast } from "react-toastify";
import { orderPrice, orderProductList } from "../../store/actions/orderAction";
function ShoppingCart() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [orderTotalPrice, setOrderTotalPrice] = useState(0);

  const [discount, setDiscount] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [discountApply, setDiscountApply] = useState(false);

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
        (total, item) =>
          total + (item.checked ? item.product.price * item.count : 0),
        0
      )
    );
  }, [totalProduct, cartProducts]);

  useEffect(() => {
    if (totalPrice.toFixed(2) >= 150) {
      setOrderTotalPrice(
        (
          Number(totalPrice) -
          Number(discountApply ? Number(29, 99) : Number(0))
        ).toFixed(2)
      );
    } else {
      setOrderTotalPrice(
        totalPrice.toFixed(2) == 0
          ? Number(0)
          : (
              Number(totalPrice) +
              Number(cartProducts.length == 0 ? Number(0) : Number(29, 99)) -
              Number(discountApply ? Number(29, 99) : Number(0))
            ).toFixed(2)
      );
    }
  }, [totalPrice]);

  console.log("cart products", cartProducts);

  const orderHandler = () => {
    dispatch(orderProductList(cartProducts));
    dispatch(orderPrice(orderTotalPrice));
  };

  const discountCodeHandler = () => {
    if (discountCode == "KOD123" && !discountApply) {
      setDiscount(false);
      toast.success("İndirim kodu başarıyla uygulandı");
      setDiscountApply(true);
    } else if (discountApply && discountCode == "KOD123") {
      toast.warning("İndirim kodu zaten uygulanmış");
    } else {
      toast.error("İndirim kodu yanlış");
      setDiscountApply(false);
    }
  };
  return (
    <div className="w-full flex justify-center py-20">
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
                <div className="w-11/12  flex justify-between items-center">
                  <div className="flex  w-[65%] items-center gap-2">
                    <div className="flex flex-col justify-center">
                      {item.checked ? (
                        <FaSquareCheck
                          onClick={() =>
                            dispatch(checkedProduct(item.product.id))
                          }
                          className="h-7 w-7 text-primaryColor"
                        />
                      ) : (
                        <ImCheckboxUnchecked
                          onClick={() =>
                            dispatch(checkedProduct(item.product.id))
                          }
                          className="h-7 w-7 text-primaryColor"
                        />
                      )}
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
                    <div className="min-w-max flex flex-col items-center">
                      <p className="font-medium ">Adet fiyati</p>
                      <p className="text-base font-semibold text-primaryColor">
                        $ {item.product.price}
                      </p>
                    </div>
                  </div>
                  <div className=" flex items-center">
                    <Button
                      size="sm"
                      className="h-[45px] flex justify-center items-center bg-[#E2F3FD] text-white rounded-none"
                      onClick={() =>
                        dispatch(decrementProduct(item.product.id))
                      }
                    >
                      <span className="font-bold text-3xl text-darkBg">-</span>
                    </Button>
                    <div className="border h-[45px] w-12 flex justify-center items-center text-lg font-medium">
                      <p>{item.count}</p>
                    </div>

                    <Button
                      size="sm"
                      className="h-[45px] flex justify-center items-center bg-[#E2F3FD] text-white rounded-none"
                      onClick={() => dispatch(increaseProduct(item.product.id))}
                    >
                      <span className="font-bold text-xl text-darkBg">+</span>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center ">
                    <p className=" text-darkBg font-medium min-w-max">
                      Urun toplami{" "}
                    </p>
                    <p className="text-base font-semibold text-primaryColor">
                      ${(item.product.price * item.count).toFixed(2)}
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
                {cartProducts.length !== 0 && (
                  <div className="flex justify-between">
                    <h3>Kargo Toplamı</h3>
                    <p>$ 29,99 </p>
                  </div>
                )}
                {totalPrice.toFixed(2) >= 150 && (
                  <div className="flex justify-between">
                    <h3>
                      $ 150 ve Uzeri <br />
                      Kargo Bedava{" "}
                    </h3>
                    <p className="text-primaryColor">-$ 29.99</p>
                  </div>
                )}
                {discountApply && (
                  <div className="flex justify-between">
                    <h3>İndirim Kodu</h3>
                    <p className="text-primaryColor">-$ 29.99</p>
                  </div>
                )}
              </div>
              <hr className="border border-primaryColor" />
              {totalPrice.toFixed(2) >= 150 ? (
                <div className="flex justify-between items-center">
                  <h3>Toplam</h3>
                  <p className="font-semibold text-xl text-primaryColor">
                    ${" "}
                    {(
                      Number(totalPrice) -
                      Number(discountApply ? Number(29, 99) : Number(0))
                    ).toFixed(2)}
                  </p>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <h3>Toplam</h3>
                  <p className="font-semibold text-xl text-primaryColor">
                    ${" "}
                    {totalPrice.toFixed(2) == 0
                      ? Number(0)
                      : (
                          Number(totalPrice) +
                          Number(
                            cartProducts.length == 0
                              ? Number(0)
                              : Number(29, 99)
                          ) -
                          Number(discountApply ? Number(29, 99) : Number(0))
                        ).toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 ">
            {discount && (
              <input
                onChange={(e) => setDiscountCode(e.target.value)}
                className="w-11/12 text-center border border-[#6CB9D8] rounded-md py-[2px]"
                type="text"
                placeholder="Indirim Kodu"
              />
            )}
            <div className="border border-[#6CB9D8] rounded-md py-1 w-11/12">
              {discount ? (
                <div
                  onClick={() => {
                    discountCodeHandler();
                  }}
                  className="flex items-center justify-center gap-2 hover:cursor-pointer w-full"
                >
                  <p className="text-sm tracking-tight">KODU GIR</p>
                </div>
              ) : (
                <div
                  onClick={() => setDiscount(true)}
                  className="flex items-center justify-center gap-2 hover:cursor-pointer w-full"
                >
                  <AiOutlinePlus className=" text-primaryColor " />
                  <p className="text-sm tracking-tight">İNDİRİM KODU GİR</p>
                </div>
              )}
            </div>
          </div>
          <Link to="/order">
            <div className="flex justify-center w-full">
              <Button
                onClick={orderHandler}
                className="w-11/12 bg-primaryColor"
              >
                Siparisi Onayla
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
