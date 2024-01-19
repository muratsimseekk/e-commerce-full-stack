import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { FaCcMastercard } from "react-icons/fa";
import { GrRadialSelected } from "react-icons/gr";

import { AxiosInstance } from "../../api/api";

import { useForm } from "react-hook-form";
import { orderCardDetails } from "../../store/actions/orderAction";

function OrderCompletePage() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [creditCards, setCreditCards] = useState([]);

  const [newCard, setNewCard] = useState(false);

  const [radioChecked, setRadioChecked] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(1);

  const [orderCard, setOrderCard] = useState({});
  // console.log("radio checked", radioChecked);
  const [satisChecked, setSatisChecked] = useState(false);

  const orderSummaryReducer = useSelector((state) => state.order);

  const shopCardProducts = useSelector((state) => state.shopping.cart);

  const loginState = useSelector((state) => state.general.roles.loggedIn);
  // console.log("login state", loginState);

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

  // console.log("carttaki products", cartProducts);

  // console.log("satis sozlesmeisi ", satisChecked);
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

  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  // console.log("state", state);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    if (
      (name == "number" && value.length > 16) ||
      (name == "expiry" && value.length > 4) ||
      (name == "cvc" && value.length > 3)
    ) {
      return;
    }

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const saveCardHandler = async (data) => {
    console.log("tiklandi", data);
    const splt = data.expiry.split("");
    console.log(splt);

    const month = splt.slice(0, 2).join("");

    console.log("month", month);

    const year = splt.slice(2, 4).join("");
    console.log("year", year);

    const cardData = {
      card_no: data.number,
      expire_month: month,
      expire_year: year,
      name_on_card: data.name,
    };
    console.log("Card data", data);

    // cannot post card data

    await AxiosInstance.post("/user/card", cardData)
      .then((res) => {
        console.log("yollanan card data", res.data);
        getCards();
      })
      .catch((err) => console.log("error occurs posting card data", err));
    // cannot get card list
  };

  const getCards = async () => {
    try {
      AxiosInstance.get("/user/card").then((res) => {
        console.log("gelen card data ", res.data);
        setCreditCards(res.data);
      });
    } catch (err) {
      console.log("Data cekilirken hata ile karsilasildi", err);
    }
  };

  useEffect(() => {
    console.log("cardlar getirildi");
    getCards();
  }, []);

  const handleCardSelect = (id) => {
    setSelectedCard(id);
  };

  useEffect(() => {
    for (let i = 0; i < creditCards.length; i++) {
      if (selectedCard == creditCards[i].id) {
        setOrderCard(creditCards[i]);
        dispatch(orderCardDetails(creditCards[i]));
      }
    }
  }, [selectedCard]);

  const completeOrder = () => {
    if (cartProducts.length > 0 && selectedCard) {
      AxiosInstance.post("/order", orderSummaryReducer).then((res) => {
        console.log("Siparis verildi ", res.data);
      });
    }
  };

  const handlePaymentSelect = (id) => {
    setSelectedPayment(id);
  };
  console.log("secilen kartin id si", selectedCard);

  console.log("secilen taksit sayisi", selectedPayment);

  console.log("Credit Cards", creditCards);
  console.log("anlik secilen kart bu dur ", orderCard);

  console.log("orderSummaryReducer anlik", orderSummaryReducer);
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
          <div className="flex px-4 py-3 gap-4 items-center border-b rounded-md border-[#6CB9D8]">
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
                <p
                  onClick={() => setNewCard(true)}
                  className="text-sm font-medium hover:cursor-pointer underline text-secondText"
                >
                  Baska bir Kart ile Odeme yap
                </p>
              </div>
              <div className="flex justify-between flex-wrap gap-y-6">
                {creditCards?.map((item, index) => {
                  return (
                    <div key={index} className="flex w-[47%] flex-col gap-2">
                      <div className="flex items-center justify-between rounded-t-lg ">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            className="w-4 h-4 accent-[#6CB9D8]"
                            name="creditCard"
                            id={item.id}
                            checked={selectedCard == item.id}
                            onChange={() => handleCardSelect(item.id)}
                          />
                          <h2 className="text-sm">Kart {item.id}</h2>
                        </div>
                        <div>
                          <p className="text-sm font-medium hover:cursor-pointer hover:underline hover:text-dangerRed">
                            Duzenle
                          </p>
                        </div>
                      </div>
                      <div className="w-full flex flex-col gap-4 p-3 rounded-lg bg-[#EDF6FA]">
                        <div className="flex justify-between items-center ">
                          <h2 className="text-sm capitalize">
                            <span className="font-medium ">Name : </span>
                            {item.name_on_card}
                          </h2>
                          <FaCcMastercard className="w-6 h-6 text-white bg-gradient-to-r from-red-600 via-orange-500 to-yellow" />
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-medium">Kart No :</p>
                          <p className="text-sm  ">{item.card_no}</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-medium">
                            Son Kullanma Tarihi :
                          </p>
                          <p className="text-sm  text-end ">
                            {item.expire_month}/{item.expire_year}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-2/5 flex flex-col gap-5 px-4">
              <div>
                <h3 className="text-base font-semibold ">Taksit Secenekleri</h3>
                <p className="text-sm font-medium text-secondText">
                  Kartiniza uygun taksit secenegini seciniz
                </p>
              </div>
              <div className="border border-[#6CB9D8]  rounded-lg  flex flex-col">
                <div className=" w-full border-r flex rounded-md  border-[#6CB9D8]">
                  <div className="border-b border-r w-1/2 border-[#6CB9D8] bg-[#EDF6FA] rounded-md pl-4 py-2 tracking-wide font-medium">
                    Taksit Sayisi
                  </div>
                  <div className="border-l border-b border-[#6CB9D8] rounded-md w-1/2 bg-[#EDF6FA]  pl-4 py-2 tracking-wide font-medium">
                    Aylik Odeme
                  </div>
                </div>
                <div className="w-full flex border-b border-[#6CB9D8] rounded-md">
                  <div className="pl-4 py-2 text-primaryColor border-r border-[#6CB9D8] rounded-md items-center w-1/2 flex gap-3 ">
                    <input
                      className="accent-[#6CB9D8]"
                      type="radio"
                      name=""
                      id="1"
                      checked={selectedPayment == "1"}
                      onChange={() => setSelectedPayment("1")}
                    />
                    <p className="text-sm ">Tek Cekim</p>
                  </div>
                  <div className=" py-2 w-1/2 text-center border-l border-[#6CB9D8] rounded-md text-primaryColor">
                    $ {totalPrice.toFixed(2)}
                  </div>
                </div>
                <div className="w-full flex border-b border-[#6CB9D8] rounded-md">
                  <div className="pl-4 py-2 text-primaryColor border-r border-[#6CB9D8] rounded-md items-center w-1/2 flex gap-3 ">
                    <input
                      className="accent-[#6CB9D8]"
                      type="radio"
                      name=""
                      id="3"
                      checked={selectedPayment == "3"}
                      onChange={() => setSelectedPayment("3")}
                    />
                    <p className="text-sm ">3 Taksit</p>
                  </div>
                  <div className=" py-2 w-1/2 text-center border-l border-[#6CB9D8] rounded-md text-primaryColor">
                    $ {(totalPrice / 3).toFixed(2)}
                  </div>
                </div>
                <div className="w-full flex  border-[#6CB9D8] rounded-md">
                  <div className="pl-4 py-2 text-primaryColor border-r border-[#6CB9D8] rounded-md items-center w-1/2 flex gap-3 ">
                    <input
                      className="accent-[#6CB9D8]"
                      type="radio"
                      name=""
                      id="6"
                      checked={selectedPayment == "6"}
                      onChange={() => setSelectedPayment("6")}
                    />
                    <p className="text-sm ">6 Taksit</p>
                  </div>
                  <div className=" py-2 w-1/2 text-center border-l border-[#6CB9D8] rounded-md text-primaryColor">
                    $ {(totalPrice / 6).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {newCard && (
          <div className="w-full  flex justify-center">
            <div className="w-full border flex flex-col gap-4 border-[#6CB9D8] rounded-md px-4 py-6">
              <div className="flex justify-between items-center pb-2 border-b-2 border-[#EDF6FA] ">
                <h3 className="text-xl font-semibold ">Kart Bilgileri</h3>
                <p
                  onClick={() => setNewCard(false)}
                  className="text-sm hover:cursor-pointer font-medium text-secondText underline"
                >
                  Kayitli kartimla odeme yap
                </p>
              </div>

              <form
                onSubmit={handleSubmit(saveCardHandler)}
                className="flex flex-col flex-wrap gap-y-4 "
              >
                <Cards
                  number={state.number}
                  expiry={state.expiry}
                  cvc={state.cvc}
                  name={state.name}
                  focused={state.focus}
                />
                <div className="flex gap-6 items-center">
                  <label
                    className=" border-b-2 border-l-2 border-l-secondText border-b-secondText text-darkBg px-2 py-1 "
                    htmlFor="number"
                  >
                    Card Number :
                  </label>
                  <input
                    {...register("number", {
                      required: true,
                    })}
                    id="number"
                    type="number"
                    name="number"
                    placeholder="Card Number"
                    value={state.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    className=" border border-l-4 border-l-darkBg  bg-[#EDF6FA] p-1 rounded-md"
                  />
                </div>
                <div className="flex gap-6 items-center">
                  <label
                    className=" border-b-2 border-l-2 border-l-secondText border-b-secondText text-darkBg px-2 py-1 "
                    htmlFor="name"
                  >
                    Card Holder Name :
                  </label>
                  <input
                    {...register("name", {
                      required: true,
                    })}
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={state.name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    className=" border border-l-4 border-l-darkBg  bg-[#EDF6FA] p-1 rounded-md"
                  />
                </div>
                <div className="flex gap-6 items-center">
                  <label
                    className=" border-b-2 border-l-2 border-l-secondText border-b-secondText text-darkBg px-2 py-1 "
                    htmlFor="expiry"
                  >
                    Expiry Date :
                  </label>
                  <input
                    {...register("expiry", {
                      required: true,
                    })}
                    id="expiry"
                    type="number"
                    name="expiry"
                    placeholder="Expiration Date"
                    value={state.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    className=" border border-l-4 border-l-darkBg  bg-[#EDF6FA] p-1 rounded-md"
                  />
                </div>
                <div className="flex gap-6 items-center">
                  <label
                    className=" border-b-2 border-l-2 border-l-secondText border-b-secondText text-darkBg px-2 py-1 "
                    htmlFor="cvc"
                  >
                    CVC :
                  </label>
                  <input
                    {...register("cvc", {
                      required: true,
                    })}
                    id="cvc"
                    type="number"
                    name="cvc"
                    placeholder="Expiration Date"
                    value={state.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    className=" border border-l-4 border-l-darkBg  bg-[#EDF6FA] p-1 rounded-md"
                  />
                </div>
                <div className=" flex justify-center">
                  <button
                    type="submit"
                    className="bg-darkBg text-white px-2 py-1 rounded-lg hover:bg-white hover:text-darkBg border border-darkBg hover:font-medium"
                  >
                    Save Card
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <div className="w-[22%] flex flex-col items-center justify-start">
        <div className="w-5/6 py-2 flex-col items-center flex gap-3 justify-center">
          <div className="flex justify-center w-full">
            <Button
              onClick={completeOrder}
              className="w-11/12 tracking-widest bg-primaryColor"
            >
              Odeme Yap
            </Button>
          </div>
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
                <div className="flex justify-between">
                  <h3 className="">Taksit Sayisi</h3>
                  {selectedPayment == "1" ? (
                    <p className=" text-sm font-medium text-primaryColor">
                      Tek Cekim
                    </p>
                  ) : (
                    <p className="text-sm font-medium text-primaryColor">
                      {selectedPayment} Taksit
                    </p>
                  )}
                </div>
                <div className="flex justify-between">
                  <h3 className="">Aylik Odeme</h3>
                  <p className="font-medium text-primaryColor">
                    $ {(totalPrice / Number(selectedPayment)).toFixed(2)}
                  </p>
                </div>
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
          <div className="flex justify-center w-full">
            <Button
              onClick={completeOrder}
              className="w-11/12 tracking-widest bg-primaryColor"
            >
              Odeme Yap
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCompletePage;
