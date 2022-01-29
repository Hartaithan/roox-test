import "./userList.scss";
import axios from "axios";
import React from "react";
import UserCard from "../../components/UserCard/UserCard";
import Loader from "../../components/Loader/Loader";
import { User } from "../../App";

interface Props {
  users: User[];
  setUsers: (value: User[]) => void;
}

function UserList(props: Props) {
  const { users, setUsers } = props;

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("getUsers:", error);
      });
  }, []); // eslint-disable-line

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
