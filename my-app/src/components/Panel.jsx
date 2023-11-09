import React, { useState } from "react";
import { TextField, Paper, Button } from "@mui/material";
import { Add } from "@mui/icons-material";

export const Panel = ({ onAddTodo }) => {
  const [todo, setTodo] = useState({name: ""});

  const onClick = () => {
    onAddTodo(todo);
    setTodo({name: ""});
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
        label="name"
        name="name"
      />
      <Button
        startIcon={<Add />}
        onClick={onClick}
        variant="outlined"
      >
        Add
      </Button>
    </Paper>
  );
};
