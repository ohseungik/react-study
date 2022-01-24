import React, { createContext, useContext, useReducer, useRef } from "react";

const initialTodos = [
    {
      id: 1,
      text: '프로젝트 생성하기',
      done: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링하기',
      done: true
    },
    {
      id: 3,
      text: 'Context 만들기',
      done: false
    },
    {
      id: 4,
      text: '기능 구현하기',
      done: false
    }
];

const TodoReducer = (state: { id: any; done: any; }[], action: { type: any; todo: any; id: any; }) => {
    switch (action.type) {
      case 'CREATE':
        return state.concat(action.todo);
      case 'TOGGLE':
        return state.map((todo: { id: any; done: any; }) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        );
      case 'REMOVE':
        return state.filter((todo: { id: any; }) => todo.id !== action.id);
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext<any>(null);
const TodoDispatchContext = createContext<any>(null);
const TodoNextIdContext = createContext<any>(null);

export const TodoProvider = (props: { children: any; }) => {
  const { children } = props;

  const [state, dispatch] = useReducer(TodoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}


export function useTodoState() {
  const context = useContext(TodoStateContext);

  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }

  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);

  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }

  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);

  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }

  return context;
}