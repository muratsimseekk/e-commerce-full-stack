export const ADD_SHOPPING_CARD = "ADD_SHOPPING_CARD";
export const DELETE_SHOPPING_CARD = "DELETE_SHOPPING_CARD";
export const INCREMENT_BUTTON = "INCREMENT_BUTTON";
export const DECREMENT_BUTTON = "DECREMENT_BUTTON";
export const CHECKED_BUTTON = "CHECKED_BUTTON";

export const addShoppingCard = (product) => {
  return { type: ADD_SHOPPING_CARD, payload: product };
};
export const deleteShoppingCard = (productID) => {
  return { type: DELETE_SHOPPING_CARD, payload: productID };
};

export const increaseProduct = (productID) => {
  return { type: INCREMENT_BUTTON, payload: productID };
};

export const decrementProduct = (productID) => {
  return { type: DECREMENT_BUTTON, payload: productID };
};

export const checkedProduct = (productID) => {
  return { type: CHECKED_BUTTON, payload: productID };
};
