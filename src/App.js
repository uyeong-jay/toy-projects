import React from 'react';
import ToDoTemplete from './components/ToDoTemplete';
import ToDoHead from './components/ToDoHead';
import ToDoList from './components/ToDoList';
import ToDoCreate from './components/ToDoCreate';

import { createGlobalStyle } from 'styled-components';


//직접 Dom에 접근가능
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {
  return (
    <ToDoTemplete>
      <GlobalStyle />
      <ToDoHead />
      <ToDoList />
      <ToDoCreate />
    </ToDoTemplete>
  );
}

export default App;
