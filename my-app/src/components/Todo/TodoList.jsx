import React from 'react'
import { Box } from "@mui/material";
import TodoItem from "./TodoItem"

export const TodoList = ({ todoList, onCheckTodo }) => {
  return (
    <Box>
      {todoList
      .sort((a, b) => 
      (a.checked && !b.checked) ? 1 :
      (!a.checked && b.checked) ? -1 : 0)
      .map((todo) => {
        return <TodoItem key={todo.id} todo={todo} onCheckTodo={onCheckTodo} />;
      })}
    </Box>
  );
};
