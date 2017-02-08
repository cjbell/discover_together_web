import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../store/Auth/actions';

function mapStateToProps({ auth }) {
  return { isLoggedIn: auth.authToken };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

class EnsureLoggedIn extends Component {
  componentDidMount() {
    const { isLoggedIn, login } = this.props;
    if (!isLoggedIn) {
      login();
    }
  }

  render() {
    const { children, isLoggedIn } = this.props;
    if (!isLoggedIn) { return null };
    return children;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EnsureLoggedIn);
