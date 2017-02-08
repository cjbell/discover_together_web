import { without, concat } from 'lodash';

const initialState = {
  playlists: [],
  selectedPlaylists: [],
  loading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SPOTIFY_PLAYLIST_FETCH_REQUEST':
      return {
        ...initialState,
        loading: true,
      }
    case 'SPOTIFY_PLAYLIST_FETCH_SUCCESS':
      return {
        ...state,
        playlists: action.payload.data,
        loading: false,
      }
    case 'SPOTIFY_PLAYLIST_FETCH_FAILURE':
      return {
        ...state,
        loading: false,
      }
    case 'SPOTIFY_PLAYLIST_SELECT_PLAYLIST':
      return {
        ...state,
        selectedPlaylists: concat(state.selectedPlaylists, [action.payload]),
      }
    case 'SPOTIFY_PLAYLIST_DESELECT_PLAYLIST':
      return {
        ...state,
        selectedPlaylists: without(state.selectedPlaylists, action.payload),
      }
    default:
      return state;
  }
}

export default reducer;
