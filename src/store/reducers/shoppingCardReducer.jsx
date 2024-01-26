import { toast } from "react-toastify";
import {
  ADD_SHOPPING_CARD,
  CHECKED_BUTTON,
  DECREMENT_BUTTON,
  DELETE_SHOPPING_CARD,
  INCREMENT_BUTTON,
} from "../actions/shoppingAction";

const initialCardValues = {
  cart: [],
  payment: {},
  address: {},
};

let i = 1;
export const shopingCardReducer = (state = initialCardValues, action) => {
  switch (action.type) {
    case ADD_SHOPPING_CARD:
      toast.success("Sepete Eklendi.");
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          count: updatedCart[existingProductIndex].count + 1,
        };

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              count: 1,
              checked: true,
              product: { id: action.payload.id },
            },
          ],
        };
      }
    case DELETE_SHOPPING_CARD:
      toast.error("Sepetten cikarildi.");
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    case INCREMENT_BUTTON:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.product.id === action.payload) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        }),
      };
    case DECREMENT_BUTTON:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.product.id === action.payload) {
            if (item.count === 1) {
              return { ...item, count: 1 };
            } else {
              return { ...item, count: item.count - 1 };
            }
          } else {
            return item;
          }
        }),
      };

    case CHECKED_BUTTON:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.product.id === action.payload) {
            return { ...item, checked: !item.checked };
          } else {
            return item;
          }
        }),
      };

    default:
      return state;
  }
};
