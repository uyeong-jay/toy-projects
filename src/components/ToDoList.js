import React from 'react';
import styled from 'styled-components';

const ToDoListBlock = styled.div`
  border: 1px solid black;
  flex: 0.75;
  padding: 25px 25px;
  padding-bottom: 50px;
  overflow-y: auto;
`;

const ToDoList = () => {

  return(
    <ToDoListBlock>
      ToDoList
    </ToDoListBlock>
  );
}

export default ToDoList;