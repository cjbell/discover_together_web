import { createAction } from 'redux-actions';

const startNew      = createAction('NEW_COLLECTION_START');
const create        = createAction('CREATE_COLLECTION_REQUEST');
const createSuccess = createAction('CREATE_COLLECTION_SUCCESS');
const createFailure = createAction('CREATE_COLLECTION_FAILURE');

export {
  startNew,
  create,
  createSuccess,
  createFailure,
};
