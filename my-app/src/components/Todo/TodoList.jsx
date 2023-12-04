import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleAllTodos,
  deleteCompletedTodos,
  fetchTodos,
  selectTodos,
} from "../../store/todoSlice.js";

export const TodoList = () => {
  const { todoArray, status, error } = useSelector(selectTodos);
  console.log(todoArray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleToggleAllTodos = () => {
    dispatch(toggleAllTodos());
  };

  const handleDeleteCompletedTodos = () => {
    dispatch(deleteCompletedTodos());
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <Box>
      <div className="all">
        <Button variant="contained" onClick={handleToggleAllTodos}>
          Select All ✅
        </Button>

        <span>
          <Button variant="contained" onClick={handleDeleteCompletedTodos}>
            Delete Checked Todos
          </Button>
        </span>

      </div>
      {todoArray.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Box>
  );
};
