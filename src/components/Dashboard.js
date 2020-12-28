import React, { useState, useEffect } from "react";
import UserComponents from "./UserComponents";
function Dashboard() {
  // const [data, setData] = useState([]);

  const [data, setUser] = useState({
    name: "",
    email: "",
    username: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    console.log("input value changed", event.target.value);
    setUser({
      ...data,
      [event.target.name]: value,
    });
  };

  let userObject = {
    name: data.name,
    email: data.email,
    dataname: data.username,
  };
  let newUSers = [];
  newUSers.push(userObject);
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ ...data, userObject });
    console.log(userObject);
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
            value={userObject.name || ""}
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="username"
            name="username"
            value={userObject.username || ""}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={userObject.email || ""}
            onChange={handleChange}
          />
          <input type="submit" value="Add" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
