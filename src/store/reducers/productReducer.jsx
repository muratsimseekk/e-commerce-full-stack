const initialProductValues = {
  productList: [],
  totalProductCount: 0,
  pageCoount: 0,
  activePage: 0,
  fetchState: "NOT_FETCHED",
};

export const productReducer = (state = initialProductValues, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
