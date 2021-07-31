const React = rquire('react');
const ReactDom = rquire('react-dom');

const TestWebpack = require('./TestWebpack'); 

ReactDom.render(<TestWebpack />, documnet.querySelector('#root')); //화면에 그려줌