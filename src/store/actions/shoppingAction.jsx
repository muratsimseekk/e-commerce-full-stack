export const ADD_SHOPPING_CARD = "ADD_SHOPPING_CARD";

export const addShoppingCard = (product) => {
  return { type: ADD_SHOPPING_CARD, payload: product };
};
