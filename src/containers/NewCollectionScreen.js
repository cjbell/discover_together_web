import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startNew } from '../store/Collections/actions';
import SpotifyPlaylistSelector from './SpotifyPlaylistSelector';

function mapStateToProps() { return {}; }
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ startNew }, dispatch);
}

class NewCollectionScreen extends Component {

  componentDidMount() {
    this.props.startNew();
  }

  createCollection() {

  }

  render() {
    return(
      <div>
        <h1>New Collection</h1>

        <button>Add a playlist</button>
        
        <SpotifyPlaylistSelector
          
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCollectionScreen);
