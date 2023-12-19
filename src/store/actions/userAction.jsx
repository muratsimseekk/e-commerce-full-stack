export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_SURNAME = "CHANGE_SURNAME";
export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const CHANGE_ROLE = "CHANGE_ROLE";

export const changeName = (name) => {
  return { type: CHANGE_NAME, payload: name };
};

export const changeSurname = () => {};

export const changeEmail = () => {};

export const changePassword = () => {};

export const changeRole = () => {};
