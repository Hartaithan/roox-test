import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import UserList from "./pages/UserList/UserList";
import UserProfile from "./pages/UserProfile/UserProfile";

export interface UserGeo {
  lat: string;
  lng: string;
}

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserGeo;
}

export interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}

function App() {
  const [users, setUsers] = React.useState<User[]>([]);
  return (
    <>
      <Sidebar users={users} setUsers={setUsers} />
      <Routes>
        <Route
          path="/"
          element={<UserList users={users} setUsers={setUsers} />}
        />
        <Route path="user/:userId" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
