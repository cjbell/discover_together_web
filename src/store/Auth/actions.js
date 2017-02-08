import { createAction } from 'redux-actions';

const login         = createAction('AUTH_LOGIN');
const setToken      = createAction('AUTH_SET_TOKEN');
const logout        = createAction('AUTH_LOGOUT');
const logoutSuccess = createAction('AUTH_LOGOUT_SUCCESS');

export {
  login,
  logout,
  logoutSuccess,
  setToken,
};
