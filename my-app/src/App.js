import React, { useState } from "react";

import Box from "@mui/material/Box";

import { Header } from "./components/Header";
import { Panel } from "./components/Panel";
import { TodoList } from "./components/Todo/TodoList";

import "./styles/App.scss";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "зробити домашку", checked: false },
    { id: 2, name: "позвонити мамі", checked: true },
    { id: 3, name: "задонатити на дрони", checked: true },
    { id: 4, name: "поділити на нуль", checked: false },
  ]);

  const onAddTodo = ({ name}) => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length  + 1,
        name,
        checked: false,
      },
    ]);
  };

  const onCheckTodo = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };


  return (
    <div className="App">
      <Box className="container" component="div">
        <Header todoCount={todoList.length} />
        <TodoList todoList={todoList} onCheckTodo={onCheckTodo} />
        <Panel onAddTodo={onAddTodo} />
      </Box>
    </div>
  );
}

export default App;
