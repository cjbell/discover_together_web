import request from '../utils/request';

export function create(attrs) {
  return request('/playlists', {
    method: 'POST',
    body: JSON.stringify(attrs),
  });
}

export function addPlaylist(playlistId, attrs) {
  return request(`/playlists/${playlistId}/contributors`, {
    method: 'POST',
    body: JSON.stringify(attrs)
  });
}
