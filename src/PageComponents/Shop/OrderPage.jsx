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
import { set, useForm } from "react-hook-form";

function OrderPage() {
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
            {addressList?.map((item, index) => {
              return (
                <div key={index} className={`flex flex-col w-[46%]   gap-2`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <label className="flex gap-2 items-center " htmlFor="">
                        {" "}
                        <input
                          className="w-4 h-4 accent-primaryColor"
                          type="radio"
                          name="addressTitle"
                          id={item?.id}
                          onClick={() => setRadioChecked(item.id)}
                        />
                        {item?.title}
                      </label>
                    </div>
                    <p className="underline text-sm font-medium hover:cursor-pointer">
                      {" "}
                      Duzenle
                    </p>
                  </div>
                  <div
                    className={`flex flex-col h-[130px] bg-[#EDF6FA] ${
                      radioChecked == item.id
                        ? "border-2 border-primaryColor "
                        : null
                    } rounded-md shadow-sm px-4 `}
                  >
                    <div className="flex justify-between py-2">
                      <div className="flex gap-2 items-center">
                        <FaUser />
                        <p>{item?.name}</p>
                        <p>{item?.surname}</p>
                      </div>
                      <div className="flex  items-center">
                        <MdOutlinePhoneIphone />
                        <p>{item?.phone}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <h2>Adres:</h2>
                      <p>{item?.address}</p>
                      <p>
                        {item?.neighborhood} / {item?.district} / {item?.city}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {newAddressMenu && (
          <div className="py-5 px-10 border border-[#6CB9D8] rounded-md flex justify-between">
            <form
              className="flex flex-col p-3 rounded-md  gap-4 "
              onSubmit={handleSubmit(submitHandler)}
            >
              <h3 className="font-semibold text-xl text-darkBg border-b-2 w-4/5 border-primaryColor">
                New Address
              </h3>
              <div>
                <label
                  className="font-medium flex items-center  gap-5"
                  htmlFor="addressTitle"
                >
                  Address Title :
                  <input
                    {...register("title", { required: true })}
                    type="text"
                    id="addressTitle"
                    className="border border-primaryColor p-[2px]"
                  />
                </label>
              </div>
              <div>
                <label
                  className="font-medium flex items-center  gap-5"
                  htmlFor="name"
                >
                  {" "}
                  Name:
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    id="name"
                    className="border border-primaryColor"
                  />
                </label>
              </div>
              <div>
                <label
                  className="font-medium flex items-center  gap-5"
                  htmlFor="surname"
                >
                  {" "}
                  Surname:
                  <input
                    {...register("surname", { required: true })}
                    type="text"
                    id="surname"
                    className="border border-primaryColor"
                  />
                </label>
              </div>
              <div>
                <label
                  className="font-medium flex items-center  gap-5"
                  htmlFor="phoneNumber"
                >
                  {" "}
                  Phone Number:
                  <input
                    {...register("phoneNumber", { required: true })}
                    type="number"
                    id="phoneNumber"
                    className="border border-primaryColor"
                  />
                </label>
              </div>
              <div>
                <div className="font-medium flex items-center  gap-5">
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
                    classes="border border-primaryColor bg-[#ACD8E9] w-1/6"
                  />
                </div>
              </div>
              <div>
                <label
                  className="font-medium flex items-center  gap-5"
                  htmlFor="district"
                >
                  District :
                  <input
                    {...register("district", { required: true })}
                    type="text"
                    id="district"
                    className="border border-primaryColor"
                  />
                </label>
              </div>
              <div>
                <label
                  className="font-medium flex items-center  gap-5"
                  htmlFor="neighborhood"
                >
                  Neighborhood :
                  <input
                    {...register("neighborhood", { required: true })}
                    type="text"
                    id="neighborhood"
                    className="border border-primaryColor"
                  />
                </label>
              </div>
              <div className="flex">
                <label
                  htmlFor="address"
                  className="font-medium flex items-center  gap-5"
                >
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
                  className="rounded-lg py-1 px-3 bg-[#6CB9D8] text-white"
                >
                  Submit
                </button>
              </div>
            </form>
            <div>
              <button
                onClick={() => setNewAddressMenu(false)}
                type="button "
                className="border-[#6CB9D8] border text-darkBg  px-3 py-2 rounded-lg hover:bg-[#6CB9D8] hover:text-white"
              >
                Cancel
              </button>
            </div>
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

export default OrderPage;
