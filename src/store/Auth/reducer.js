import { getAuthToken } from '../../utils/auth';

const initialState = {
  authToken: getAuthToken(),
  currentUser: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_SET_TOKEN':
      return {...state, authToken: action.payload};
    default:
      return state;
  }
}

export default reducer;
