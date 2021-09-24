import React, { memo, useCallback } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDeleteForever } from "react-icons/md";
import { useToDoDispatch } from "../hooks/useToDoContext";
import { removeToDo, toggleToDo } from "../actions/actions";

const Remove = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0);
  font-size: 25px;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
  }
`;

const ToDoItemBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const CheckCircle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0); // 투명색
  border-radius: 50%;
  border: 1px solid #ced4da;
  cursor: pointer;

  ${({ done }) =>
    !done &&
    css`
      &:hover {
        color: #ced4da;
      }
    `}

  ${({ done }) =>
    done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const Text = styled.span`
  flex: 1; //남은 부분을 다 차지하도록함
  padding-left: 10px;

  &:hover + ${Remove} {
    // Remove가 먼저 선언되어있어야함
    color: #ced4da;
  }

  ${({ done }) =>
    done &&
    css`
      color: #ced4da;
    `}
`;

const ToDoItem = ({ text, id, done }) => {
  const toDoDispatch = useToDoDispatch();

  const onToggleDone = useCallback(() => {
    toDoDispatch(toggleToDo(id));
  }, [toDoDispatch, id]);

  const onRemoveToDo = useCallback(() => {
    toDoDispatch(removeToDo(id));
  }, [toDoDispatch, id]);

  return (
    <ToDoItemBlock>
      <CheckCircle onClick={onToggleDone} done={done}>
        <MdDone />
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemoveToDo}>
        <MdDeleteForever />
      </Remove>
    </ToDoItemBlock>
  );
};

export default memo(ToDoItem);
//TodoContext 에서 관리하고 있는 state 가 바뀔 때 TodoCreate 의 불필요한 리렌더링을 방지 할 수 있습니다. 만약 우리가 Context 를 하나만 만들었다면 이런 최적화를 하지 못하게 됩니다.
