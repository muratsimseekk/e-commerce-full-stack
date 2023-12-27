export const CATEG_FETCH = "CATEG_FETCH";

export const PRODUCT_FETCH = "PRODUCT_FETCH";

export const categFetch = (data) => {
  return { type: CATEG_FETCH, payload: data };
};

export const productFetch = (products) => {
  return { type: PRODUCT_FETCH, payload: products };
};
