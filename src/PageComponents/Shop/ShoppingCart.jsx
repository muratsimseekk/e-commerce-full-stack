import React from "react";
import { HiOutlineCube } from "react-icons/hi2";
import { FaSquareCheck } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";

import { Button } from "@material-tailwind/react";
function ShoppingCart() {
  return (
    <div className="w-full flex justify-center  bg-roseBg py-20">
      <div className="w-[73%] bg-green-50 flex flex-col gap-5">
        <div className="py-3 bg-green-200">
          <h2 className="text-lg font-medium">Sepetim (2 Urun)</h2>
        </div>
        <div className="w-full bg-blue-gray-400 rounded-lg">
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
                  <img className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <h2 className="">Lorem ipsum dolor sit amet.</h2>
                  <p>Beden : 38</p>
                  <div className="flex items-center gap-2">
                    <FaShippingFast className="text-green-600" />
                    <p className="text-sm text-blue-gray-500">
                      <span className="text-black font-medium">39 dakika</span>{" "}
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
                >
                  {" "}
                  -{" "}
                </Button>
                <div className="border h-2/5 w-12 flex justify-center items-center text-lg font-medium">
                  <p>1</p>
                </div>

                <Button
                  size="sm"
                  className="h-2/5 bg-[#8994BD] text-white rounded-sm"
                >
                  {" "}
                  +{" "}
                </Button>
              </div>
              <div className="bg-orange-300 flex justify-center items-center">
                <p className="text-lg">$ 449,99</p>
              </div>
              <div className="bg-deep-orange-500 flex justify-center items-center">
                <RiDeleteBin5Line className="w-7 h-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-blue-gray-400 rounded-lg">
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
                  <img className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <h2 className="">Lorem ipsum dolor sit amet.</h2>
                  <p>Beden : 38</p>
                  <div className="flex items-center gap-2">
                    <FaShippingFast className="text-green-600" />
                    <p className="text-sm text-blue-gray-500">
                      <span className="text-black font-medium">39 dakika</span>{" "}
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
                >
                  {" "}
                  -{" "}
                </Button>
                <div className="border h-2/5 w-12 flex justify-center items-center text-lg font-medium">
                  <p>1</p>
                </div>

                <Button
                  size="sm"
                  className="h-2/5 bg-[#8994BD] text-white rounded-sm"
                >
                  {" "}
                  +{" "}
                </Button>
              </div>
              <div className="bg-orange-300 flex justify-center items-center">
                <p className="text-lg">$ 449,99</p>
              </div>
              <div className="bg-deep-orange-500 flex justify-center items-center">
                <RiDeleteBin5Line className="w-7 h-6" />
              </div>
            </div>
          </div>
        </div>
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
