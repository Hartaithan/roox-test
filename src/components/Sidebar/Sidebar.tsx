import "./sidebar.scss";
import React from "react";
import Button from "../Button/Button";

function Sidebar() {
  return (
    <div className="sidebar">
      <p>Сортировка</p>
      <Button text="по городу" />
      <Button text="по компании" />
    </div>
  );
}

export default Sidebar;
