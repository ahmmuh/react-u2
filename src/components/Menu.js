import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink exact={true} activeClassName="is-active" to="/">
            Login
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink activeClassName="is-active" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to="/users">
            User
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to="/user/:2">
            User singel
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
