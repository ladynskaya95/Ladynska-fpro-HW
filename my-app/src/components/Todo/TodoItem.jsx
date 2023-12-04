import React from "react";
import { Box, Paper, Typography, Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../store/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const onCheckClick = () => {
    dispatch(toggleTodo({ id: todo.id }));
  };

  return (
    <Paper
      className="todoItem"
      elevation={2}
      sx={{
        opacity: todo.checked ? 0.6 : 1,
      }}
    >
      <Box textAlign="left">
        <Checkbox
          checked={todo.checked}
          onChange={onCheckClick}
          color="primary"
          inputProps={{ "aria-label": "checkbox" }}
        />
        <Typography
          sx={{
            cursor: "pointer",
            textDecorationLine: todo.checked ? "line-through" : "none",
          }}
          variant="h5"
          component="h5"
          gutterBottom
        >
          {todo.name}
        </Typography>
      </Box>
    </Paper>
  );
};

export default TodoItem;
