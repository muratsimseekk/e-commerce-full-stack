import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";

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
      <div className="bg-yellow w-[73%]">ajkmsdklmasl,mndlksadlkmns</div>
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
