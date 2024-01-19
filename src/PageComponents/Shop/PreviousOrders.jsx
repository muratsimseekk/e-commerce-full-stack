import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../../api/api";

function PreviousOrders() {
  const [previousOrders, setPreviousOrders] = useState([]);
  const getPreviousOrders = async () => {
    await AxiosInstance.get("/order").then((res) => {
      console.log("Previos data ", res.data);
      setPreviousOrders(res.data);
    });
  };

  useEffect(() => {
    getPreviousOrders();
  }, []);

  const dateConverter = (orderDate) => {
    const dateString = orderDate;
    const date = new Date(dateString);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formattedDate = date.toLocaleDateString("tr-TR", options);
    return formattedDate;
  };

  return (
    <div className="w-full h-max  flex justify-center py-10">
      <div className=" w-[95%] flex flex-col gap-5">
        {previousOrders?.map((item, index) => {
          return (
            <div
              key={index}
              className="border-[#6CB9D8] border rounded-lg px-6 py-3"
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-sm">Siparis Tarihi </p>
                  <p className="text-sm font-medium">
                    {dateConverter(item.order_date)}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-sm">Alici</p>
                  <p className="capitalize text-sm font-medium">
                    {item.card_name}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-sm">Siparis Numarasi</p>
                  <p className="text-sm font-medium">{item.id}</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-sm">Siparis Toplam </p>
                  <p className="text-sm font-medium">$ {item.price}</p>
                </div>
                <button
                  type="button"
                  className="bg-primaryColor text-sm py-0 px-12 rounded-lg text-white hover:bg-"
                >
                  Siparis Detay
                </button>
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PreviousOrders;
