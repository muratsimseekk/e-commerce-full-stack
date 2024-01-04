export const ADD_SHOPPING_CARD = "ADD_SHOPPING_CARD";
export const DELETE_SHOPPING_CARD = "DELETE_SHOPPING_CARD";

export const addShoppingCard = (product) => {
  return { type: ADD_SHOPPING_CARD, payload: product };
};
export const deleteShoppingCard = (productID) => {
  return { type: DELETE_SHOPPING_CARD, payload: productID };
};
