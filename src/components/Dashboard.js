import React, { useState, useEffect } from "react";
import UserComponents from "./UserComponents";
// import api from "../api.json";
import Loading from "./Loading";
function Dashboard() {
  const [users, setUser] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const [state, setChange] = useState({
    email: "",
    name: [""],
    userName: "",
    inputValue: [""],
    login: true,
    users: [],
  });
  const name = "Elvin";
  console.log(name);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData({ data }));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const addUser = (event) => {
    event.preventDefault();
    const newUser = state.users.concat({
      name: state.name,
      email: state.email,
      username: state.userName,
    });
    setUser({ users: newUser });
    console.log(newUser);
    // this.setUser(newUser);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    console.log("input value changed", event.target.value);
    setChange({
      ...state,
      [event.target.name]: value,
    });
  };

  return (
    <div className="dashboard dashboard-container">
      <div>
        {" "}
        <UserComponents users={data} />{" "}
      </div>
      <div className="register-container">
        <form>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
            value={state.name}
          />
          <input
            type="text"
            placeholder="username"
            name="userName"
            onChange={handleChange}
            value={state.userName}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
            value={state.email}
          />
          <input type="submit" value="Add" onClick={addUser} />
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
