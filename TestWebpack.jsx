const React = require('react');
const { Component } = React;

class TestWebpack extends Component {
  state = {
    text: 'Hello webpack'
  }

  render() {
    return(
      <div>{text}</div>
    );
  }
}

module.exports = TestWebpack;