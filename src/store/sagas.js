import authSaga from './Auth/sagas';
import spotifyPlaylistsSaga from './SpotifyPlaylists/sagas';
import collectionSaga from './Collections/sagas';

export default function* rootSaga() {
  yield [
    authSaga(),
    collectionSaga(),
    spotifyPlaylistsSaga(),
  ];
}
