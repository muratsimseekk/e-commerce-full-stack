const initialCardValues = {
  cart: [
    { count: "", product: { id: "" } },
    { count: "", product: { id: "" } },
  ],
  payment: {},
  address: {},
};

export const shopingCardReducer = (state = initialCardValues, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
