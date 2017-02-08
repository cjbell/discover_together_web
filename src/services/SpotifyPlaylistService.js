import request from '../utils/request';

export function getAll() {
  return request('/spotify_playlists');
}
