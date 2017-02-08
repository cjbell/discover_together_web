import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './Auth/reducer';
import spotifyPlaylists from './SpotifyPlaylists/reducer';
import entities from './entitiesReducer';

const reducer = combineReducers({
  routing: routerReducer,
  auth,
  spotifyPlaylists,
  entities,
});

export default reducer;
