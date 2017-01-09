function ResponseError(code = 500, response) {
  const message = response.message || 'Something went wrong';
  this.message = message;
  this.errors = response.errors || {};
  this.statusCode = code;
  this.name = 'ResponseError';
  const err = Error(message);
  this.stack = err.stack;
}

function resolveJson(res) {
  const originalRes = res.clone();
  return res.json().then(json =>
    Object.assign({}, json, { status: originalRes.status, ok: originalRes.ok }),
  );
}

function fetchWithJson(method, url, headers, body = '') {
  // eslint-disable-next-line no-undef
  return fetch(url, { headers, method, body })
    .then(resolveJson);
}

function maybeHandleError(res) {
  if (!res.ok) {
    throw new ResponseError(res.status, res);
  }

  return res;
}

export {
  fetchWithJson,
  maybeHandleError,
};
