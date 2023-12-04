import React, { useState } from "react";
import { TextField, Paper, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

export const Panel = () => {
  const [todo, setTodo] = useState({ name: "" });
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addTodo(todo));
    setTodo({ name: "" });
  };

  const onChange = (event) => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <Paper className="panel" elevation={1}>
      <TextField
        value={todo.name}
        onChange={onChange}
        variant="outlined"
        label="add todo.."
        name="name"
      />
      <Button startIcon={<Add />} onClick={onClick} variant="outlined">
        Add
      </Button>
    </Paper>
  );
};
