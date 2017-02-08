import { call, takeEvery } from 'redux-saga/effects';
import { setAuthToken } from '../../utils/auth';

const LOGIN_URL = 'http://localhost:4000/login';

function navigateToLogin() {
  window.location.replace(LOGIN_URL);
}

function *handleLogin() {
  yield call(navigateToLogin);
}

function *handleSetToken(action) {
  yield call(setAuthToken, action.payload);
}

function *handleLogout(logout) {
  yield call(setAuthToken, null);
}

export default function* root() {
  yield takeEvery('AUTH_LOGIN', handleLogin);
  yield takeEvery('AUTH_SET_TOKEN', handleSetToken);
  yield takeEvery('AUTH_LOGOUT', handleLogout);
}
