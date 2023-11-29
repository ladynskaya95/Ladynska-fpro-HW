import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const Header = () => {
  const todoCount = useSelector((state) => state.todos.length);

  return (
    <Box textAlign="left">
      <Typography className="header" variant="h1" component="h1" gutterBottom>
        Todo List: {todoCount}
      </Typography>
    </Box>
  );
};
