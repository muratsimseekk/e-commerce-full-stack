import { ORDER_PRODUCT_LIST } from "../actions/orderAction";

const initialOrderValues = {
  address_id: null,
  order_date: "",
  card_no: null,
  card_name: "",
  card_expire_month: null,
  card_expire_year: null,
  card_ccv: null,
  price: null,
  products: [],
};

export const orderReducer = (state = initialOrderValues, action) => {
  switch (action.type) {
    case ORDER_PRODUCT_LIST:
      const newProducts = action.payload.map((item) => ({
        product_id: item.product.id,
        count: item.count,
        detail: item.product.description,
      }));
      return {
        ...state,
        products: [...state.products, ...newProducts],
      };

    default:
      return state;
  }
};

// products arrayi bu keyword leri alip yollanacak .
// products: [
//         {
//             product_id: 12,
//             count: 1,
//             detail: "açık mavi - xl"
//         },
