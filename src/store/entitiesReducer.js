import { merge } from 'lodash';

const initialState = {
  spotifyPlaylist: {},
  collection: {},
  contributor: {},
};

function reducer(state = initialState, action) {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities);
  }

  return state;
}

export default reducer;
