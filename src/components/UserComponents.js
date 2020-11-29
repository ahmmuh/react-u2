import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";
import SingelUser from "./SingelUser";
function UserComponents(props) {
  const users = props.users;

  const [singelUser, setUser] = useState();

  // const navigateTouser = useHistory();
  // const [user, setData] = useState();
  const [isColor, setColor] = useState("false");
  // const {
  //   match: { params },
  // } = props.location;

  // useEffect(() => {
  //   // const selectedUser = (id) => {};
  //   fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(
  //     ({ data: user }) => {
  //       console.log("user", user);
  //       setUser({ user });
  //     }
  //   );
  // });

  // axios.get(`/api/users/${params.userId}`).then(({ data: user }) => {
  //   console.log("user", user);

  //   this.setState({ user });
  // });

  const toggleColor = () => {
    setColor(!isColor);
    console.log("toggle colors");
  };

  let userList;
  if (users) {
    userList = users.map((user, id) => {
      return (
        <li
          key={id}
          // onClick={selectedUser}
          className={isColor ? "redColor" : "blueColor"}
        >
          {user.name}
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
        {/* <SingelUser /> */}
      </ul>
    </div>
  );
}

export default UserComponents;
