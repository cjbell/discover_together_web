import { createAction } from 'redux-actions';

const fetchPlaylists        = createAction('SPOTIFY_PLAYLIST_FETCH_REQUEST');
const fetchPlaylistsSuccess = createAction('SPOTIFY_PLAYLIST_FETCH_SUCCESS');
const fetchPlaylistsFailure = createAction('SPOTIFY_PLAYLIST_FETCH_FAILURE');
const selectPlaylist        = createAction('SPOTIFY_PLAYLIST_SELECT_PLAYLIST');
const deselectPlaylist      = createAction('SPOTIFY_PLAYLIST_DESELECT_PLAYLIST');
const addPlaylists          = createAction('SPOTIFY_PLAYLIST_ADD_PLAYLISTS');

export {
  fetchPlaylists,
  fetchPlaylistsSuccess,
  fetchPlaylistsFailure,
  selectPlaylist,
  deselectPlaylist,
  addPlaylists,
};
