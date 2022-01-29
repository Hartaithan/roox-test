import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import UserList from "./pages/UserList/UserList";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="user/:userId" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
