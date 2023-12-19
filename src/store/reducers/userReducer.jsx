import { CHANGE_NAME, CHANGE_ROLE } from "../actions/userAction";

const userInitialValues = {
  //   customer: {
  //     name: {},
  //     email: {},
  //     password: {},
  //     role_id: {},
  //   },
  name: "",
  email: "",
  password: "",
  role_id: "customer",
  //   store: {
  //     name: {},
  //     email: {},
  //     password: {},
  //     role_id: {},
  //     storeName: {},
  //     storePhone: {},
  //     tax_no: {},
  //     bank_account: {},
  //   },
};

export const userReducer = (state = userInitialValues, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };
      break;

    case CHANGE_ROLE:
      return { ...state, role_id: action.payload };
    default:
      return state;
      break;
  }
};
