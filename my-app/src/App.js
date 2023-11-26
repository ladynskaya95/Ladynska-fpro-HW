import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import AlbumList from "./components/AlbumList";
import PhotoList from "./components/PhotoList";

import "./App.scss"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/albums/:userId" element={<AlbumList />} />
          <Route path="/photos/:albumId" element={<PhotoList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
