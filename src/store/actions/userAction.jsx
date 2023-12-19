export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_SURNAME = "CHANGE_SURNAME";
export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const CHANGE_ROLE = "CHANGE_ROLE";

export const changeName = (name) => {
  return { type: CHANGE_NAME, payload: name };
};

export const changeSurname = (surname) => {
  return { type: CHANGE_SURNAME, payload: surname };
};

export const changeEmail = (mail) => {
  return { type: CHANGE_EMAIL, payload: mail };
};

export const changePassword = (password) => {
  return { type: CHANGE_PASSWORD, payload: password };
};

export const changeRole = (role) => {
  return { type: CHANGE_ROLE, payload: role };
};
