// const React = require('react');
// const {Component} = React;
import React, {Component} from 'react';

class Test extends Component {
  state = {
    text: 'Hi',
  };

  onClickDiv = () => {
    this.setState({
      text: 'webpack',
    })
  }
  
  render() {
    return (
      <>
        <div onClick={this.onClickDiv}>{this.state.text}</div>
      </>
    );
  }
}

export default Test;