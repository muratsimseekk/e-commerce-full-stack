import { PRODUCT_FETCH, SET_PRODUCT_LIST } from "../actions/thunkAction";

const initialProductValues = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 0,
  fetchState: "NOT_FETCHED",
};

export const productReducer = (state = initialProductValues, action) => {
  switch (action.type) {
    case PRODUCT_FETCH:
      return { ...state, productList: action.payload };
    case SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };
    default:
      return state;
  }
};
