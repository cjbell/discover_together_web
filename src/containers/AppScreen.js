import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setToken } from '../store/Auth/actions';

function mapStateToProps(state, ownProps) {
  return { token: ownProps.location.query.token };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setToken }, dispatch);
}

class AppScreen extends React.Component {

  componentDidMount() {
    const { token, setToken } = this.props;
    if (token) { setToken(token); }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppScreen);
