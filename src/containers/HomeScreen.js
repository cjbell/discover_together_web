import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../store/Auth/actions';

function mapStateToProps() { return {}; }
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

const HomeScreen = ({login}) => (
  <div>
    <h1>Discover Together</h1>
    <p>Humble beginnings.</p>

    <button onClick={() => login()}>
      Login
    </button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
