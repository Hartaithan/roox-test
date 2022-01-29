import "./sidebar.scss";
import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../Button/Button";

function Sidebar() {
  const { pathname } = useLocation();
  const disabled = pathname === "/" ? false : true;

  return (
    <div className="sidebar">
      <p>Сортировка</p>
      <Button text="по городу" disabled={disabled} />
      <Button text="по компании" disabled={disabled} />
    </div>
  );
}

export default Sidebar;
