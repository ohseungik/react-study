import React from "react";
import { MdDone, MdDelete } from 'react-icons/md';
import styled, { css } from 'styled-components';
import "./Todo.scss";
import { useTodoDispatch } from "./TodoProvider";


interface initialProps {
    done: boolean
}

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<initialProps>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div<initialProps>`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const TodoItem = (props: { id: any, done: any; text: any; }) => {
    const { id, done, text } = props;
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({type: 'TOGGLE', id});
    const onRemove = () => dispatch({type: 'REMOVE', id});
    
    return (
      <TodoItemBlock>
        <CheckCircle done={done} onClick={onToggle}>{done && <MdDone />}</CheckCircle>
        <Text done={done}>{text}</Text>
        <Remove onClick={onRemove}>
          <MdDelete />
        </Remove>
      </TodoItemBlock>
    );
}

export default React.memo(TodoItem);