import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoCheckboxSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";

function OrderPage() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const [satisChecked, setSatisChecked] = useState(false);
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
  return (
    <div className="w-full bg-red-200 flex justify-center">
      <div className="bg-yellow w-[73%] flex flex-col">
        <div className="flex w-full">
          <div className="bg-blue-gray-200 w-1/2">
            <h2>Adres Bilgileri</h2>
            <h4>Ev</h4>
            <p>Ankara/ Etimesgut</p>
          </div>
          <div className="bg-orange-300 w-1/2">
            <h2>Ödeme Secenekleri</h2>

            <p>
              Banka/Kredi Karti veya Alisveris Kredisi ile odemenizi guvenle
              yapabilirsiniz.{" "}
            </p>
          </div>
        </div>
        <div className="flex bg-green-200">
          <RiErrorWarningFill />
          <p>
            Kurumsal faturali alisveris yapmak icin "Faturami Ayni Adrese
            Gonder" tikini kaldirin ve Fatura adresi olarak kayitli Kurumsal
            FAtura adresinizi secin.
          </p>
        </div>
        <div className="bg-alertColor flex flex-col gap-6">
          <div className="flex justify-between bg-indigo-100">
            <h2>Teslimat Adresi </h2>
            <div className="flex gap-2 items-center">
              <IoCheckboxSharp />
              <p>Faturami Ayni Adrese Gonder</p>
            </div>
          </div>
          <div className="w-full bg-gray-300 flex justify-between flex-wrap gap-y-10">
            <div className="flex flex-col w-[43%] gap-2 bg-mutedColor ">
              <div className="flex justify-between h-[27px] items-center"></div>
              <div className="flex flex-col justify-center items-center py-8 bg-red-100">
                <AiOutlinePlus className=" text-primaryColor " />
                <p className="text-sm">Yeni Adres Ekle</p>
              </div>
            </div>
            <div className="flex flex-col w-[43%]  gap-2 bg-mutedColor ">
              <div className="flex justify-between items-center">
                <div class="flex items-center gap-2">
                  <label
                    class="relative flex items-center rounded-full cursor-pointer"
                    htmlFor="react_version2"
                  >
                    <input
                      name="description"
                      type="radio"
                      class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                      id="react_version2"
                    />
                    <span class="absolute text-blue-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <circle
                          data-name="ellipse"
                          cx="8"
                          cy="8"
                          r="8"
                        ></circle>
                      </svg>
                    </span>
                  </label>
                  <label
                    class="mt-px font-light text-gray-700 cursor-pointer select-none"
                    htmlFor="react_version2"
                  >
                    <div>
                      <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        Ev
                      </p>
                    </div>
                  </label>
                </div>
                <p className="underline text-sm font-medium hover:cursor-pointer">
                  {" "}
                  Duzenle
                </p>
              </div>
              <div className=" flex flex-col p-3 bg-brown-400 rounded-md shadow-sm">
                <div className="flex justify-between ">
                  <div className="flex gap-2 items-center">
                    <FaUser />
                    <p>Mustafa</p>
                  </div>
                  <div className="flex  items-center">
                    <MdOutlinePhoneIphone />
                    <p>0534 123 45 67</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <h2>Adres:</h2>
                  <p>jnadsfjknbskjdbfkjsadfkjasjkd </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[22%] flex flex-col items-center justify-center">
        <div className="w-5/6 py-2  flex gap-2 justify-center">
          <div className=" border border-[#6CB9D8] rounded-lg w-11/12">
            <div className="flex px-2 py-2 justify-center items-start">
              {satisChecked ? (
                <MdOutlineCheckBox
                  className="w-12 h-12 text-darkBg"
                  onClick={() => setSatisChecked(false)}
                />
              ) : (
                <MdCheckBoxOutlineBlank
                  className="w-12 h-12 text-darkBg"
                  onClick={() => setSatisChecked(true)}
                />
              )}
              <p className="text-xs px-4">
                <span className="font-semibold underline text-darkBg">
                  Ön Bilgilendirme Koşulları
                </span>
                'nı ve{" "}
                <span className="font-semibold underline text-darkBg">
                  Mesafeli Satış Sözleşmesi
                </span>
                'ni okudum,onaylıyorum
              </p>
            </div>
          </div>
        </div>
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
          <Link to="/order">
            <div className="flex justify-center w-full">
              <Button className="w-11/12 bg-primaryColor">
                Kaydet ve Devam Et
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
