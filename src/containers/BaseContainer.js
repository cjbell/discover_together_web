import React, { Component } from 'react';

class BaseContainer extends Component {
  render() {
    return this.props.children;
  }
}

export default BaseContainer;
