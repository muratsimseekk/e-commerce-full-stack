export const ORDER_PRODUCT_LIST = "ORDER_PRODUCT_LIST";

export const orderProductList = (products) => {
  return { type: ORDER_PRODUCT_LIST, payload: products };
};
