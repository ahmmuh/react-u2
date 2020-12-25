import React, { useState } from "react";
import { Link } from "react-router-dom";
function UserComponents(props) {
  const users = props.users;
  console.log(users);

  const [isColor, setColor] = useState("false");

  const toggleColor = () => {
    setColor(!isColor);
    console.log("toggle colors");
  };

  let userList;
  if (users) {
    userList = users.data.map((user, id) => {
      return (
        <li key={user.id}>
          <Link
            className={isColor ? "redColor" : "blueColor"}
            to={`/user/${user.id}`}
          >
            {" "}
            {user.name}
          </Link>
        </li>
      );
    });
  }
  return (
    <div className="user-list">
      <ul>
        {userList}
        <button className="toggle-btn" type="button" onClick={toggleColor}>
          Toggle Colors
        </button>
      </ul>
    </div>
  );
}

export default UserComponents;
