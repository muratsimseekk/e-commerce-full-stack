export const STORE_CHANGE_NAME = "STORE_CHANGE_NAME";
export const STORE_CHANGE_SURNAME = "STORE_CHANGE_SURNAME";
export const STORE_CHANGE_EMAIL = "STORE_CHANGE_EMAIL";
export const STORE_CHANGE_PASSWORD = "STORE_CHANGE_PASSWORD";
export const STORE_CHANGE_ROLE = "STORE_CHANGE_ROLE";

export const STORE_CHANGE_STORE_NAME = "STORE_CHANGE_STORE_NAME";
export const STORE_PHONE_NUMBER = "STORE_PHONE_NUMBER";
export const STORE_TAX_ID = "STORE_TAX_ID";
export const STORE_IBAN = "STORE_IBAN";

export const storeChangeName = (name) => {
  return { type: STORE_CHANGE_NAME, payload: name };
};
export const storeChangeSurname = (surname) => {
  return { type: STORE_CHANGE_SURNAME, payload: surname };
};
export const storeChangeEmail = (mail) => {
  return { type: STORE_CHANGE_EMAIL, payload: mail };
};
export const storeChangePassword = (password) => {
  return { type: STORE_CHANGE_PASSWORD, payload: password };
};
export const storeChangeRole = (role) => {
  return { type: STORE_CHANGE_ROLE, payload: role };
};
export const storeChangeStoreName = (storeName) => {
  return { type: STORE_CHANGE_STORE_NAME, payload: storeName };
};
export const storePhoneNumber = (phoneNumber) => {
  return { type: STORE_PHONE_NUMBER, payload: phoneNumber };
};
export const storeTaxId = (taxId) => {
  return { type: STORE_TAX_ID, payload: taxId };
};
export const storeIban = (iban) => {
  return { type: STORE_IBAN, payload: iban };
};
