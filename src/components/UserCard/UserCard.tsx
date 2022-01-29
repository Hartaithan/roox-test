import "./userCard.scss";
import React from "react";
import { User } from "../../pages/UserList/UserList";
import { Link } from "react-router-dom";

interface Props {
  key: number;
  user: User;
}

function UserCard(props: Props) {
  const { user } = props;
  return (
    <div className="userCard">
      <div className="userCard__row">
        <label className="userCard__label">ФИО:</label>
        <p className="userCard__value">{user.name}</p>
      </div>
      <div className="userCard__row">
        <label className="userCard__label">город:</label>
        <p className="userCard__value">{user.address.city}</p>
      </div>
      <div className="userCard__row">
        <label className="userCard__label">компания:</label>
        <p className="userCard__value">{user.company.name}</p>
        <Link className="userCard__link" to={`user/${user.id}`}>
          Подробнее
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
