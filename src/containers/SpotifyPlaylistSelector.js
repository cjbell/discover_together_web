import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { map, includes } from 'lodash';
import * as PlaylistActions from '../store/SpotifyPlaylists/actions';

function mapStateToProps({spotifyPlaylists, entities}) {
  return {
    playlists: entities.spotifyPlaylist,
    selectedPlaylists: spotifyPlaylists.selectedPlaylists,
    loading: spotifyPlaylists.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlaylistActions, dispatch);
}

class SpotifyPlaylistSelector extends Component {

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    const {
      loading,
      playlists,
      selectPlaylist,
      selectedPlaylists,
      addPlaylists,
    } = this.props;

    return (
      <div>
        <button
          onClick={() => addPlaylists(selectedPlaylists)}
          disabled={selectedPlaylists.length === 0}>
          Add playlists
        </button>
        <h2>Add playlists to this collection</h2>

        {loading && <span>Loading...</span>}

        {map(playlists, (playlist, idx) => (
          <div key={idx}>
            <h3 onClick={() => selectPlaylist(playlist.id)}>{playlist.name}</h3>
            {includes(selectedPlaylists, playlist.id) && <span>Selected</span>}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpotifyPlaylistSelector);
