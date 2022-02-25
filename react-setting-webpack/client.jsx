const React = require('react');
const ReactDom = require('react-dom');

const TestWebpack = require('./TestWebpack'); 

ReactDom.render(<TestWebpack />, document.querySelector('#root')); //화면에 그려줌