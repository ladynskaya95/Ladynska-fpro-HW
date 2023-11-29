import React from "react";
import { Provider } from "react-redux";
import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { Panel } from "./components/Panel";
import { TodoList } from "./components/Todo/TodoList";
import store from "./store/index";
import "./styles/App.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Box className="container" component="div">
          <Header />
          <Panel />
          <TodoList />
        </Box>
      </div>
    </Provider>
  );
}

export default App;
