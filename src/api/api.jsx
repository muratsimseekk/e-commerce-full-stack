import axios from "axios";

export const createAxiosInstance = () => {
  const token = localStorage.getItem("token");

  return token
    ? axios.create({
        baseURL: "https://workinteck-fe-final.onrender.com",
        headers: {
          Authorization: token,
        },
      })
    : axios.create({
        baseURL: "https://workinteck-fe-final.onrender.com",
        headers: {},
      });
};

export let AxiosInstance;

export const newAxiosInstance = () => {
  AxiosInstance = createAxiosInstance();
};

newAxiosInstance();
