import {
  CHANGE_EMAIL,
  CHANGE_NAME,
  CHANGE_PASSWORD,
  CHANGE_ROLE,
  CHANGE_SURNAME,
} from "../actions/userAction";

const userInitialValues = {
  name: "",
  surname: "",
  email: "",
  password: "",
  role_id: "",
};

export const userReducer = (state = userInitialValues, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };

    case CHANGE_SURNAME:
      return { ...state, surname: action.payload };

    case CHANGE_EMAIL:
      return { ...state, email: action.payload };

    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };

    case CHANGE_ROLE:
      return { ...state, role_id: action.payload };
    default:
      return state;
  }
};
