export const ORDER_PRODUCT_LIST = "ORDER_PRODUCT_LIST";
export const ORDER_ADDRESS_ID = "ORDER_ADDRESS_ID";
export const ORDER_CARD_DETAILS = "ORDER_CARD_DETAILS";
export const ORDER_PRICE = "ORDER_PRICE";

export const orderPrice = (price) => {
  return { type: ORDER_PRICE, payload: price };
};
export const orderProductList = (products) => {
  return { type: ORDER_PRODUCT_LIST, payload: products };
};

export const orderAddressId = (addressID) => {
  return { type: ORDER_ADDRESS_ID, payload: addressID };
};

export const orderCardDetails = (card) => {
  return { type: ORDER_CARD_DETAILS, payload: card };
};
