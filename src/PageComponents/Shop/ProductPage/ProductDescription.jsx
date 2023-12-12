import React from "react";
import card1 from "../../../assets/hero/productCard/descCard1.png";
import { IoIosArrowForward } from "react-icons/io";
function ProductDescription() {
  return (
    <div className=" w-full flex flex-col items-center gap-14">
      <div className="w-4/5 py-10  border-b-4 border-gray-200">
        <ul className="flex justify-center items-center gap-10 text-secondText font-normal tracking-wider">
          <li>Description</li>
          <li>Additional Information</li>
          <li>Reviews (0)</li>
        </ul>
      </div>
      <div className="w-4/5 ">
        <div className="flex w-full justify-between pb-16">
          <div className="w-[32%] relative">
            <img className="w-full z-40 rounded-md" src={card1} />
            <div className="h-full w-full bg-stone absolute -right-3 -bottom-2 -z-30 rounded-md"></div>
          </div>
          <div className="w-[32%] font-normal tracking-wider text-md flex flex-col gap-5">
            <h3 className="font-semibold tracking-wider text-xl">
              the quick fox jumps over{" "}
            </h3>
            <p className="font-normal tracking-wider text-md">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="font-normal tracking-wider text-md">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="font-normal tracking-wider text-md">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="w-[32%] font-normal tracking-wider text-md flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold tracking-wider text-xl text-textColor">
                the quick fox jumps over{" "}
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <IoIosArrowForward className="h-6 w-6 text-secondText" />
                  <p className="text-secondText font-normal text-base">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="flex gap-3">
                  <IoIosArrowForward className="h-6 w-6 text-secondText" />
                  <p className="text-secondText font-normal text-base">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="flex gap-3">
                  <IoIosArrowForward className="h-6 w-6 text-secondText" />
                  <p className="text-secondText font-normal text-base">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="flex gap-3">
                  <IoIosArrowForward className="h-6 w-6 text-secondText" />
                  <p className="text-secondText font-normal text-base">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold tracking-wider text-xl text-textColor">
                the quick fox jumps over{" "}
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <IoIosArrowForward className="h-6 w-6 text-secondText" />
                  <p className="text-secondText font-normal text-base">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="flex gap-3">
                  <IoIosArrowForward className="h-6 w-6 text-secondText" />
                  <p className="text-secondText font-normal text-base">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="flex gap-3">
                  <IoIosArrowForward className="h-6 w-6 text-secondText" />
                  <p className="text-secondText font-normal text-base">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="flex gap-3">
                  <IoIosArrowForward className="h-6 w-6 text-secondText" />
                  <p className="text-secondText font-normal text-base">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
