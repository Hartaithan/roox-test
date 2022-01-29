import "./sidebar.scss";
import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import { User } from "../../App";

interface Props {
  users: User[];
  setUsers: (value: User[]) => void;
}

function Sidebar(props: Props) {
  const { users, setUsers } = props;
  const { pathname } = useLocation();
  const disabled = pathname === "/" ? false : true;

  function sortByCity() {
    const usersClone = [...users];
    usersClone.sort((a, b) => (a.address.city > b.address.city ? 1 : -1));
    setUsers(usersClone);
  }

  function sortByCompany() {
    const usersClone = [...users];
    usersClone.sort((a, b) => (a.company.name > b.company.name ? 1 : -1));
    setUsers(usersClone);
  }

  return (
    <div className="sidebar">
      <p>Сортировка</p>
      <Button
        text="по городу"
        disabled={disabled}
        onClick={() => sortByCity()}
      />
      <Button
        text="по компании"
        disabled={disabled}
        onClick={() => sortByCompany()}
      />
    </div>
  );
}

export default Sidebar;
