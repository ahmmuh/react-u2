import React, { useState, useEffect } from "react";
function SingelUser({ match }) {
  const [user, setUser] = useState(true);
  // const [loading, setLoading] = useState(true);

  const [address, setAddress] = useState();
  const url = "https://jsonplaceholder.typicode.com/users";
  const id = match.params.id;
  // console.log(id);
  console.log(match);
  const getUsers = () => {
    fetch(`${url}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.log("FEL FEL", err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const addressToggle = () => {
    setAddress(!address);
  };

  return (
    <div className="user-container">
      {user ? (
        <div className="user">
          <img src="https://placekitten.com/150/150" alt="User" />
          <h2>{user.name}</h2>
          <h2>{user.username}</h2>
          <p>{user.email}</p>
          <button type="button" onClick={addressToggle}>
            {address ? "Hide address" : "Show address"}
          </button>
          {address ? (
            <div className="address">
              <p>{user.address.city}</p>
              <p>{user.address.suite}</p>
              <p>{user.address.street}</p>
            </div>
          ) : null}
        </div>
      ) : (
        <p>User is not selected</p>
      )}

      {/* {user ? <h2>Yes,you selected a user</h2> : <h2>No user is selected</h2>} */}
    </div>
  );
}

export default SingelUser;
