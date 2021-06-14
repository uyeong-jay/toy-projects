// const React = require('react');
// const ReactDom = require('react-dom'); // react 코드들을 웹에 띄우는 역할
import React from 'react'; // webpack덕에 import도 사용가능
import ReactDom from 'react-dom';

// const Test = require('./Test'); // Test.jsx 불러옴
import Test from './Test';


ReactDom.render(<Test />, document.querySelector('#root')) // react-dom 사용