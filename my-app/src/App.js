import React from "react";

import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { Panel } from "./components/Panel";
import { TodoList } from "./components/Todo/TodoList";

import "./styles/App.scss";

function App() {
  return (
      <div className="App">
        <Box className="container" component="div">
          <Header />
          <Panel />
          <TodoList />
        </Box>
      </div>
  );
}

export default App;
