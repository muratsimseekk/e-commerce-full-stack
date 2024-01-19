import {
  ORDER_ADDRESS_ID,
  ORDER_CARD_DETAILS,
  ORDER_PRODUCT_LIST,
} from "../actions/orderAction";

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

    case ORDER_ADDRESS_ID:
      return { ...state, address_id: action.payload };

    case ORDER_CARD_DETAILS:
      return {
        ...state,
        card_no: action.payload.card_no,
        card_name: action.payload.name_on_card,
        card_expire_month: action.payload.expire_month,
        card_expire_year: action.payload.expire_year,
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
