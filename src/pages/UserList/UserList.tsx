import "./userList.scss";
import axios from "axios";
import React from "react";
import UserCard from "../../components/UserCard/UserCard";
import Loader from "../../components/Loader/Loader";

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

function UserList() {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("getUsers:", error);
      });
  });

  return (
    <div className="userList">
      <h3>Список пользователей</h3>
      {users.length === 0 ? (
        <Loader />
      ) : (
        <>
          {users.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
          <p className="userList__count">
            {`Найдено ${users.length} пользователей`}
          </p>
        </>
      )}
    </div>
  );
}

export default UserList;
