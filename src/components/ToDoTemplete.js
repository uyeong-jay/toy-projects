import React from 'react';
import styled from 'styled-components';

const ToDoTempleteBlock = styled.div`
  display: flex;
  flex-direction: column;
  aglin-itmes: center;
  width: 500px;
  height: 750px;
  margin: 0 auto;
  margin-top: 100px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

const ToDoTemplete = ({ children }) => {

  return(
    <ToDoTempleteBlock>
      {children}
    </ToDoTempleteBlock>
  );

}

export default ToDoTemplete;