import React, { useState } from "react";
import { Box, Button} from "@mui/material";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { checkTodo, deleteCheckedTodos } from "../../store/todoSlice";

export const TodoList = () => {
  const todoList = useSelector((state) => state.todos);
  console.log(todoList);
  const dispatch = useDispatch();

  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
    dispatch(checkTodo({ checkAll: !selectAll }));
  };

  const handleDeleteCheckedTodos = () => {
    dispatch(deleteCheckedTodos());
  };

  return (
    <Box>
      <div className="all">
        
        <input
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAllChange}
        />
        Select All
        <span>
          <Button variant="contained" onClick={handleDeleteCheckedTodos}>
            Delete Checked Todos
          </Button>
        </span>
      </div>
      {todoList
        // .sort((a, b) =>
        //   a.checked && !b.checked ? 1 : !a.checked && b.checked ? -1 : 0
        // )
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </Box>
  );
};
