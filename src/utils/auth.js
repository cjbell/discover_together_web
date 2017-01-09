import store from 'store';

const KEY = '@DT/authToken';

function getAuthToken() {
  return store.get(KEY);
}

function setAuthToken(token) {
  return store.set(KEY, token);
}

export {
  getAuthToken,
  setAuthToken,
};
