export const LOGGED_IN = "USER_LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";
export const LOGIN_DATA = "LOGIN_DATA";

export const logInChange = () => {
  return { type: LOGGED_IN };
};

export const logOutChange = () => {
  return { type: LOGGED_OUT };
};

export const loginData = (data) => {
  return { type: LOGIN_DATA, payload: data };
};
