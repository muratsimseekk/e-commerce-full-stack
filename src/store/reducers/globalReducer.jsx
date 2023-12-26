import { LOGGED_OUT, LOGIN_DATA } from "../actions/globalAction";
import { CATEG_FETCH } from "../actions/thunkAction";

const languages = [
  { name: "Türkçe", value: "tr" },
  { name: "English", value: "en" },
];

const browserLang = Intl.DateTimeFormat().resolvedOptions().locale;
const selectedLang = languages.find((lan) => browserLang.includes(lan.value));

const initialValues = {
  roles: {
    loggedIn: false,
    role: "",
    name: "",
    email: "",
    photo: "",
  },
  categories: [],
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? true
    : false,
  language: selectedLang ? selectedLang.value : "tr",
};

export function localStorageWrite(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageRead(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function localStorageMemory(key) {
  const lastState = localStorageRead(key);
  if (lastState) {
    return localStorageRead(key);
  } else {
    return initialValues;
  }
}

export const globalReducer = (state = initialValues, action) => {
  switch (action.type) {
    case LOGIN_DATA:
      return {
        ...state,
        roles: {
          ...state.roles,
          name: action.payload.name,
          email: action.payload.email,
          role: action.payload.role,
          loggedIn: true,
          photo: action.payload.photo,
        },
      };

    case LOGGED_OUT:
      localStorage.removeItem("token");
      const loggedOut = {
        ...state,
        roles: { ...state.roles, loggedIn: false },
      };
      return loggedOut;

    case CATEG_FETCH:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
