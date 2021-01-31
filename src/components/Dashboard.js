import React, { useState, useEffect } from "react";
import UserComponents from "./UserComponents";
function Dashboard() {
  const [data, setUser] = useState({
    name: "",
    email: "",
    username: "",
    users: [],
  });

  const handleChange = (event) => {
    const value = event.target.value;
    // console.log("input value changed", event.target.value);
    setUser({
      ...data,
      [event.target.name]: value,
    });
  };

  // let userObject = {
  //   name: data.name,
  //   email: data.email,
  //   username: data.username,
  // };
  let newUSers = [];
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ data: newUSers });
    console.log(newUSers);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUser({ data }));
  }, []);
  return (
    <div className="dashboard dashboard-container">
      <div>
        <UserComponents users={data.data} />{" "}
      </div>
      <div className="register-container">
        <form>
          <input
            type="text"
            placeholder="name"
            value={data.name || ""}
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="username"
            name="username"
            value={data.username || ""}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={data.email || ""}
            onChange={handleChange}
          />
          <input type="submit" value="Add" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
