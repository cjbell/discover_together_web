import { call, put, takeEvery } from 'redux-saga/effects';
import { getAll } from '../../services/SpotifyPlaylistService';
import { fetchPlaylistsSuccess, fetchPlaylistsFailure } from './actions';

function *handleFetchPlaylists() {
  try {
    const response = yield call(getAll);
    yield put(fetchPlaylistsSuccess(response));
  } catch (e) {
    yield put(fetchPlaylistsFailure(e));
  }
}

export default function * root() {
  yield takeEvery('SPOTIFY_PLAYLIST_FETCH_REQUEST', handleFetchPlaylists);
}
