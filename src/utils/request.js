import { merge } from 'lodash';
import { getAuthToken } from './auth';
import normalize from './normalize';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function buildUrl(path) {
  return `http://localhost:4000${path}`;
}

function optionsWithDefaults(options) {
  const defaults = {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/json',
      'Authorization': getAuthToken(),
    }
  };

  return merge({}, defaults, options);
}

export default async function request(path, options = {}) {
  const url = buildUrl(path);
  options = optionsWithDefaults(options);
  const response = await fetch(url, options);

  checkStatus(response);

  const jsonResponse = await response.json();

  return normalize(jsonResponse);
}
