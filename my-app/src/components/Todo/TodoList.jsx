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
        {status === "loading" && <h3>Loading...</h3>}
        {status === "failed" && <h3>Error: {error}</h3>}
      </div>
      {todoArray.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Box>
  );
};
