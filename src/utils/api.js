import { fetchWithJson, maybeHandleError } from './request';
import { getAuthToken } from './auth';

const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

function buildUrl(path) {
  return `${process.env.API_URL}${path}`;
}

function buildHeaders() {
  const authToken = getAuthToken();

  if (authToken) {
    return Object.assign({}, HEADERS, { Authorization: authToken });
  }

  return HEADERS;
}

function makeRequest(action) {
  return (path, body = null) => {
    const url = buildUrl(path);
    const headers = buildHeaders();
    const jsonBody = body && JSON.stringify(body);

    return fetchWithJson(action, url, headers, jsonBody)
      .then(res => maybeHandleError(res));
  }
}

const delete = makeRequest("DELETE");
const get = makeRequest("GET");
const post = makeRequest("POST");
const put = makeRequest("PUT");

export {
  makeRequest,
  delete,
  get,
  post,
  put,
};
