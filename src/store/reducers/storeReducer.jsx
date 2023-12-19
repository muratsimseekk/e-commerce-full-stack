import {
  STORE_CHANGE_EMAIL,
  STORE_CHANGE_NAME,
  STORE_CHANGE_PASSWORD,
  STORE_CHANGE_ROLE,
  STORE_CHANGE_STORE_NAME,
  STORE_CHANGE_SURNAME,
  STORE_IBAN,
  STORE_PHONE_NUMBER,
  STORE_TAX_ID,
} from "../actions/storeAction";

const storeInitialValues = {
  name: "",
  surname: "",
  email: "",
  password: "",
  role_id: "",
  store: {
    storeName: "",
    storePhone: "",
    tax_no: "",
    bank_account: "",
  },
};

export const storeReducer = (state = storeInitialValues, action) => {
  switch (action.type) {
    case STORE_CHANGE_NAME:
      return { ...state, name: action.payload };
    case STORE_CHANGE_SURNAME:
      return { ...state, surname: action.payload };

    case STORE_CHANGE_EMAIL:
      return { ...state, email: action.payload };

    case STORE_CHANGE_PASSWORD:
      return { ...state, password: action.payload };

    case STORE_CHANGE_ROLE:
      return { ...state, role_id: action.payload };

    case STORE_CHANGE_STORE_NAME:
      return { ...state, store: { ...state.store, storeName: action.payload } };

    case STORE_PHONE_NUMBER:
      return {
        ...state,
        store: { ...state.store, storePhone: action.payload },
      };

    case STORE_TAX_ID:
      return { ...state, store: { ...state.store, tax_no: action.payload } };

    case STORE_IBAN:
      return {
        ...state,
        store: { ...state.store, bank_account: action.payload },
      };
    default:
      return state;
  }
};
