const React = require('react');
const ReactDom = require('react-dom'); // react 코드들을 웹에 띄우는 역할

const Test = require('./Test'); // 불러올 컴포넌트

ReactDom.render(<Test />, document.querySelector('#root')) // react-dom 사용