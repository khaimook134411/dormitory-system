import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import StatusRoom from "./pages/Admin/statusRoom";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/status_rooms" element={<StatusRoom />} />
      </Routes>
    </div>
  );
}

export default App;
