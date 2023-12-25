import { LOGGED_IN, LOGGED_OUT, LOGIN_DATA } from "../actions/globalAction";
import {
  STORE_CHANGE_EMAIL,
  STORE_CHANGE_NAME,
  STORE_CHANGE_PASSWORD,
  STORE_CHANGE_ROLE,
} from "../actions/storeAction";
import {
  CHANGE_EMAIL,
  CHANGE_NAME,
  CHANGE_PASSWORD,
  CHANGE_ROLE,
} from "../actions/userAction";

export const s12finalKey = "s12final";

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
    password: "",
    photo: "",
  },
  categories: "",
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

    case CHANGE_ROLE:
      const newRole = {
        ...state,
        roles: { ...state.roles, role: action.payload },
      };
      localStorageWrite(s12finalKey, newRole);
      return newRole;

    case CHANGE_NAME:
      const newName = {
        ...state,
        roles: { ...state.roles, name: action.payload },
      };
      localStorageWrite(s12finalKey, newName);
      return newName;

    case CHANGE_EMAIL:
      const newMail = {
        ...state,
        roles: { ...state.roles, email: action.payload },
      };
      localStorageWrite(s12finalKey, newMail);
      return newMail;

    case CHANGE_PASSWORD:
      const newPass = {
        ...state,
        roles: { ...state.roles, password: action.payload },
      };
      localStorageWrite(s12finalKey, newPass);
      return newPass;

    case LOGGED_IN:
      const logged = { ...state, roles: { ...state.roles, loggedIn: true } };
      localStorageWrite(s12finalKey, logged);
      return logged;

    case LOGGED_OUT:
      const loggedOut = {
        ...state,
        roles: { ...state.roles, loggedIn: false },
      };
      localStorageWrite(s12finalKey, loggedOut);
      return loggedOut;

    case STORE_CHANGE_ROLE:
      const storeRole = {
        ...state,
        roles: { ...state.roles, role: action.payload },
      };
      localStorageWrite(s12finalKey, storeRole);

      return storeRole;

    case STORE_CHANGE_NAME:
      const storeName = {
        ...state,
        roles: { ...state.roles, name: action.payload },
      };
      localStorageWrite(s12finalKey, storeName);
      return storeName;

    case STORE_CHANGE_EMAIL:
      const storeMail = {
        ...state,
        roles: { ...state.roles, email: action.payload },
      };
      localStorageWrite(s12finalKey, storeMail);
      return storeMail;

    case STORE_CHANGE_PASSWORD:
      const storePass = {
        ...state,
        roles: { ...state.roles, password: action.payload },
      };
      localStorageWrite(s12finalKey, storePass);
      return storePass;

    default:
      return state;
  }
};
