import React from 'react'
import { Box, Paper, Typography} from "@mui/material";

const TodoItem = ({todo, onCheckTodo}) => {
  return (

   <Paper className="todoItem"
      elevation={2}
      sx={{
        opacity: todo.checked ? 0.6 : 1,
      }}
    >
      <Box textAlign="left">
        <Typography
          onClick={() => onCheckTodo(todo.id)}
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
}
export default TodoItem;


