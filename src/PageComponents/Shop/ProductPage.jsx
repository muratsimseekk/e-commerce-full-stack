import React from "react";

function ProductPage() {
  return (
    <div className="w-full  bg-black text-teal-50">
      <div className=" w-[23%] flex flex-col text-center gap-4 ">
        <img />
        <h4 className="text-textColor font-bold tracking-wider">
          Graphic Design
        </h4>
        <p className="text-secondText font-medium">English Department</p>
        <div className="flex gap-5 justify-center">
          <span className="text-mutedColor">$16.48</span>
          <span className="text-secondaryColorGreen font-bold">$6.48</span>
        </div>
        <div className="flex gap-2 justify-center">
          <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
          <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
          <button className="h-5 w-5 bg-alertColor rounded-full"></button>
          <button className="h-5 w-5 bg-darkBg rounded-full"></button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
