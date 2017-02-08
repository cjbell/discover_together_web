import { call, take, put, takeEvery } from 'redux-saga/effects';
import { map } from 'lodash';
import * as Service from '../../services/CollectionService';
import * as Actions from './actions';

function * handleStartCreate(action) {
  while (true) {
    const addAction = yield take('SPOTIFY_PLAYLIST_ADD_PLAYLISTS');
    yield put(Actions.create());

    try {
      const {id} = yield call(Service.create, {});
      const response = yield call(Service.addPlaylist, id, {
        spotify_playlist_ids: addAction.payload
      });

      yield put(Actions.createSuccess(response));
    } catch (e) {
      yield put(Actions.createFailure(e));
    }
  }
}

export default function * root() {
  yield takeEvery('NEW_COLLECTION_START', handleStartCreate);
}
