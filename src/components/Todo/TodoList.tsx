import React from "react";
import "./Todo.scss";
import TodoItem from "./TodoItem";
import { useTodoState } from "./TodoProvider";

const TodoList = () => {
    const todos = useTodoState();

    return (
      <div className="TodoListBlock">
          {todos.map((todo: { id: React.Key | null | undefined; text: any; done: any; }) => (
              <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done}/>
          ))}
      </div>
    );
}

export default TodoList;