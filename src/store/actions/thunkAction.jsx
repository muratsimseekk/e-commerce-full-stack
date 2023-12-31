import { useSelector } from "react-redux";
import { AxiosInstance } from "../../api/api";

export const CATEG_FETCH = "CATEG_FETCH";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const PRODUCT_FETCH = "PRODUCT_FETCH";

export const categFetch = (data) => {
  return { type: CATEG_FETCH, payload: data };
};

export const setProductList = (products) => {
  return { type: "SET_PRODUCT_LIST", payload: products };
};

export const productFetch = (params = {}) => {
  return (dispatch, getState) => {
    AxiosInstance.get("/products", { params: params })
      .then((res) => {
        if (params.offset) {
          const currentProductList = getState().product.productList;
          const newProductList = res.data.products;
          const updatedProductList = [...currentProductList, ...newProductList];
          dispatch(setProductList(updatedProductList));
        } else {
          dispatch(setProductList(res.data.products));
        }
      })
      .catch((err) => {
        console.error("Error occurs while fetching:", err);
      });
  };
};
