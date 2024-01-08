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
import { FaCcMastercard } from "react-icons/fa";
import { GrRadialSelected } from "react-icons/gr";

import { AxiosInstance } from "../../api/api";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { set, useForm } from "react-hook-form";

function OrderCompletePage() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);

  // country and region selection
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const [newAddressMenu, setNewAddressMenu] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);

  const [radioChecked, setRadioChecked] = useState(false);
  console.log("radio checked", radioChecked);
  const [satisChecked, setSatisChecked] = useState(false);
  const shopCardProducts = useSelector((state) => state.shopping.cart);

  const loginState = useSelector((state) => state.general.roles.loggedIn);
  console.log("login state", loginState);

  const [addressList, setAddressList] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const productList = useSelector((state) => state.product.productList);

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

  console.log("carttaki products", cartProducts);

  console.log("satis sozlesmeisi ", satisChecked);
  const submitHandler = (data) => {
    console.log("data", data);
    const formData = {
      title: data.title,
      name: data.name,
      surname: data.surname,
      phone: data.phoneNumber,
      city: data.region,
      district: data.district,
      neighborhood: data.neighborhood,
      address: data.address,
    };

    AxiosInstance.post("/user/address", formData)
      .then((res) => {
        console.log("yollanan data", res.data);
      })
      .catch((err) => console.log(err));
    getAddresses();
  };

  const getAddresses = () => {
    AxiosInstance.get("/user/address")
      .then((res) => {
        console.log("res data", res.data);
        setAddressList(res.data);
        console.log("address list", addressList);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAddresses();
    console.log("address list", addressList);
  }, []);

  const completeOrder = () => {
    if (cartProducts.length > 0 && radioChecked && satisChecked) {
      navigate("/complete-order");
    }
  };
  return (
    <div className="w-full  flex justify-center py-20">
      <div className=" w-[73%] flex flex-col gap-6">
        <div className="flex w-full ">
          <div className="w-1/2 flex flex-col gap-2 px-4 py-3 border rounded-md border-[#6CB9D8]">
            <div className="flex  justify-between items-center">
              <h2 className="font-medium text-lg text-primaryColor">
                Adres Bilgileri
              </h2>
              <p
                onClick={() => {
                  navigate("/order");
                }}
                className="underline font-medium text-primaryColor hover:cursor-pointer"
              >
                Degistir
              </p>
            </div>
            <h4 className="text-sm text-darkBg">Ev</h4>
            <p className="text-sm text-secondText">Ankara/ Etimesgut</p>
          </div>
          <div className="  flex flex-col gap-2 w-1/2 px-4 py-3 border border-b-8 rounded-md border-[#6CB9D8]">
            <h2 className="font-medium text-lg text-primaryColor">
              Ödeme Secenekleri
            </h2>
            <p className="text-sm text-secondText">
              <span className="text-darkBg font-medium">Banka/Kredi Karti</span>{" "}
              veya{" "}
              <span className="text-darkBg font-medium">Alisveris Kredisi</span>{" "}
              ile odemenizi guvenle yapabilirsiniz.{" "}
            </p>
          </div>
        </div>

        <div className=" flex flex-col  rounded-md border-[#6CB9D8] border">
          <div className="flex px-4 py-3 gap-4 items-center border rounded-md border-[#6CB9D8]">
            <GrRadialSelected className="w-6 h-6 text-primaryColor" />
            <div>
              <h2 className="text-lg font-semibold tracking-wider">
                Kart ile Ode
              </h2>
              <p className="text-darkBg font-medium text-sm">
                Kart ile odemeyi sectiniz. Banka veya Kredi Karti kullanarak
                odemenizi guvenle yapabilirsiniz.
              </p>
            </div>
          </div>
          <div className="flex py-5">
            <div className="w-3/5 border-r-2 gap-6 px-4 py-3 flex flex-col">
              <div className="flex justify-between ">
                <h3 className="text-base font-semibold">Kart Bilgileri</h3>
                <p className="text-sm font-medium underline text-secondText">
                  Baska bir Kart ile Odeme yap
                </p>
              </div>
              <div className="flex justify-between flex-wrap gap-y-6">
                <div className="flex w-[47%] flex-col">
                  <div className="flex items-center bg-roseBg rounded-t-lg gap-3">
                    <input type="radio" className="w-4 h-4" name="" id="" />
                    <h2>BONUS kartim</h2>
                  </div>
                  <div className="w-full flex flex-col gap-4 p-3 rounded-b-lg bg-[#EDF6FA]">
                    <div className="flex justify-between items-center ">
                      <h2>BonusCard</h2>
                      <FaCcMastercard className="w-6 h-6 text-white bg-gradient-to-r from-red-600 via-orange-500 to-yellow" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-end">
                        5555 60** **** 6885
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-end">8/2030</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-[47%] flex-col">
                  <div className="flex items-center bg-roseBg rounded-t-lg gap-3">
                    <input type="radio" className="w-4 h-4" name="" id="" />
                    <h2>BONUS kartim</h2>
                  </div>
                  <div className="w-full flex flex-col gap-4 p-3 rounded-b-lg bg-[#EDF6FA]">
                    <div className="flex justify-between items-center ">
                      <h2>BonusCard</h2>
                      <FaCcMastercard className="w-6 h-6 text-white bg-gradient-to-r from-red-600 via-orange-500 to-yellow" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-end">
                        5555 60** **** 6885
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-end">8/2030</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-[47%] flex-col">
                  <div className="flex items-center bg-roseBg rounded-t-lg gap-3">
                    <input type="radio" className="w-4 h-4" name="" id="" />
                    <h2>BONUS kartim</h2>
                  </div>
                  <div className="w-full flex flex-col gap-4 p-3 rounded-b-lg bg-[#EDF6FA]">
                    <div className="flex justify-between items-center ">
                      <h2>BonusCard</h2>
                      <FaCcMastercard className="w-6 h-6 text-white bg-gradient-to-r from-red-600 via-orange-500 to-yellow" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-end">
                        5555 60** **** 6885
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-end">8/2030</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/5 pl-4">
              <div>
                <h3 className="text-base font-semibold ">Taksit Secenekleri</h3>
                <p className="text-sm font-medium text-secondText">
                  Kartiniza uygun taksit secenegini seciniz
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[22%] flex flex-col items-center justify-start">
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

          <div className="flex justify-center w-full">
            <Button onClick={completeOrder} className="w-11/12 bg-primaryColor">
              Kaydet ve Devam Et
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCompletePage;
