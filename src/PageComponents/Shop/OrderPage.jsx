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
import { AxiosInstance } from "../../api/api";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useForm } from "react-hook-form";

function OrderPage() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);

  const [country, setCountry] = useState("");
  console.log("secilen ulke", country);
  const [region, setRegion] = useState("");
  console.log("secilen bolge", region);

  const [newAddressMenu, setNewAddressMenu] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);

  const [radioChecked, setRadioChecked] = useState(false);

  const [satisChecked, setSatisChecked] = useState(false);
  const shopCardProducts = useSelector((state) => state.shopping.cart);

  const loginState = useSelector((state) => state.general.roles.loggedIn);
  console.log("login state", loginState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

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
  const getAddresses = () => {
    AxiosInstance.get("/user/address")
      .then((res) => console.log("res data", res))
      .catch((err) => console.log(err));
  };

  const submitHandler = (data) => {
    console.log("data", data);
    const formData = {
      title: data.title,
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      country: data.country,
      region: data.region,
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

  return (
    <div className="w-full  flex justify-center py-20">
      <div className=" w-[73%] flex flex-col gap-6">
        <div className="flex w-full ">
          <div className=" flex flex-col gap-2 w-1/2 px-4 py-3 border border-b-8 rounded-md border-[#6CB9D8]">
            <h2 className="font-medium text-lg text-primaryColor">
              Adres Bilgileri
            </h2>
            <h4 className="text-sm text-darkBg">Ev</h4>
            <p className="text-sm text-secondText">Ankara/ Etimesgut</p>
          </div>
          <div className=" w-1/2 flex flex-col gap-2 px-4 py-3 border rounded-md border-[#6CB9D8]">
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
        <div className="flex px-4 py-3 gap-2 items-center border rounded-md border-[#6CB9D8]">
          <RiErrorWarningFill className="w-6 h-6 text-primaryColor" />
          <p className="text-darkBg font-medium text-sm">
            Kurumsal faturali alisveris yapmak icin "Faturami Ayni Adrese
            Gonder" tikini kaldirin ve Fatura adresi olarak kayitli Kurumsal
            Fatura adresinizi secin.
          </p>
        </div>
        <div className=" flex flex-col gap-6 py-5 rounded-md border-[#6CB9D8] border">
          <div className="flex justify-between  px-4 py-3">
            <h2 className="font-medium text-lg text-darkBg">
              Teslimat Adresi{" "}
            </h2>
            <div className="flex gap-2 items-center">
              <IoCheckboxSharp className="w-6 h-6 text-primaryColor" />
              <p className="text-secondText text-sm">
                Faturami Ayni Adrese Gonder
              </p>
            </div>
          </div>
          <div className="w-full  flex justify-between flex-wrap gap-y-10 px-4">
            <div className="flex flex-col w-[46%] gap-2  ">
              <div className="flex justify-between h-[27px] items-center"></div>
              <div
                onClick={() => setNewAddressMenu(true)}
                className="flex flex-col justify-center items-center h-[130px] hover:cursor-pointer rounded-md bg-[#EDF6FA]"
              >
                <AiOutlinePlus className=" text-primaryColor h-7 w-7" />
                <p className="text-sm font-medium text-darkBg">
                  Yeni Adres Ekle
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[46%]  gap-2  ">
              <div className="flex justify-between items-center">
                <div>
                  <label className="flex gap-2 items-center " htmlFor="">
                    {" "}
                    <input
                      className="w-4 h-4 accent-primaryColor"
                      type="radio"
                      name="addressTitle"
                    />
                    Ev
                  </label>
                </div>
                <p className="underline text-sm font-medium hover:cursor-pointer">
                  {" "}
                  Duzenle
                </p>
              </div>
              <div className=" flex flex-col h-[130px] bg-[#EDF6FA] rounded-md shadow-sm px-4 ">
                <div className="flex justify-between py-2">
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
            <div className="flex flex-col w-[46%]  gap-2  ">
              <div className="flex justify-between items-center">
                <div>
                  <label className="flex gap-2 items-center " htmlFor="">
                    {" "}
                    <input
                      className="w-4 h-4 accent-primaryColor"
                      type="radio"
                      name="addressTitle"
                    />
                    Ev
                  </label>
                </div>
                <p className="underline text-sm font-medium hover:cursor-pointer">
                  {" "}
                  Duzenle
                </p>
              </div>
              <div className=" flex flex-col h-[130px] bg-[#EDF6FA] rounded-md shadow-sm px-4 ">
                <div className="flex justify-between py-2">
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
            <div className="flex flex-col w-[46%]  gap-2  ">
              <div className="flex justify-between items-center">
                <div>
                  <label className="flex gap-2 items-center " htmlFor="">
                    {" "}
                    <input
                      className="w-4 h-4 accent-primaryColor"
                      type="radio"
                      name="addressTitle"
                    />
                    Ev
                  </label>
                </div>
                <p className="underline text-sm font-medium hover:cursor-pointer">
                  {" "}
                  Duzenle
                </p>
              </div>
              <div className=" flex flex-col h-[130px] bg-[#EDF6FA] rounded-md shadow-sm px-4 ">
                <div className="flex justify-between py-2">
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
            <div className="flex flex-col w-[46%]  gap-2  ">
              <div className="flex justify-between items-center">
                <div>
                  <label className="flex gap-2 items-center " htmlFor="">
                    <input
                      className="w-4 h-4 accent-primaryColor"
                      type="radio"
                      name="addressTitle"
                      onClick={(e) => setRadioChecked(true)}
                    />
                    Ev
                  </label>
                </div>
                <p className="underline text-sm font-medium hover:cursor-pointer">
                  {" "}
                  Duzenle
                </p>
              </div>
              {radioChecked ? (
                <div
                  className={
                    " flex flex-col h-[130px] border-2 border-primaryColor bg-[#EDF6FA] rounded-md shadow-sm px-4 "
                  }
                >
                  <div className="flex justify-between py-2">
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
              ) : (
                <div
                  className={
                    " flex flex-col h-[130px] bg-[#EDF6FA] rounded-md shadow-sm px-4 "
                  }
                >
                  <div className="flex justify-between py-2">
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
              )}
            </div>
          </div>
        </div>
        {newAddressMenu && (
          <div className="py-5 border border-black ">
            <form
              className="flex flex-col gap-2"
              onSubmit={handleSubmit(submitHandler)}
            >
              <h3 className="">New Address</h3>
              <div>
                <label htmlFor="">
                  {" "}
                  Address Title :
                  <input
                    {...register("title", { required: true })}
                    type="text"
                    className="border border-primaryColor"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="">
                  {" "}
                  Full Name:
                  <input
                    {...register("fullName", { required: true })}
                    type="text"
                    className="border border-primaryColor"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="">
                  {" "}
                  Phone Number:
                  <input
                    {...register("phoneNumber", { required: true })}
                    type="number"
                    className="border border-primaryColor"
                  />
                </label>
              </div>
              <div>
                <div>
                  <CountryDropdown
                    {...register("country", { required: true })}
                    value={country}
                    onChange={(val) => {
                      setCountry(val);
                      setValue("country", val);
                    }}
                    classes="border border-primaryColor bg-[#ACD8E9] w-1/6"
                  />
                  <RegionDropdown
                    {...register("region", { required: true })}
                    country={country}
                    value={region}
                    onChange={(val) => {
                      setRegion(val);
                      setValue("region", val);
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="">
                  District :
                  <input
                    {...register("district", { required: true })}
                    type="text"
                    className="border border-primaryColor"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="">
                  Neighborhood :
                  <input
                    {...register("neighborhood", { required: true })}
                    type="text"
                    className="border border-primaryColor"
                  />
                </label>
              </div>
              <div className="flex">
                <label htmlFor="address" className="">
                  Address :
                </label>
                <textarea
                  name="address"
                  id="address"
                  cols="30"
                  rows="3"
                  className="border border-primaryColor"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-gray-400 py-1 px-3 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
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
