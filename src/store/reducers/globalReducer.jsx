import { CHANGE_ROLE } from "../actions/userAction";

const languages = [
  { name: "Türkçe", value: "tr" },
  { name: "English", value: "en" },
];

const browserLang = Intl.DateTimeFormat().resolvedOptions().locale;
const selectedLang = languages.find((lan) => browserLang.includes(lan.value));

const initialValues = {
  roles: "",
  categories: "",
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? true
    : false,
  language: selectedLang ? selectedLang.value : "tr",
};

export const globalReducer = (state = initialValues, action) => {
  switch (action.type) {
    case CHANGE_ROLE:
      return { ...state, languages: "en" };
    default:
      return state; // Return the current state if no action type matches
  }
};
