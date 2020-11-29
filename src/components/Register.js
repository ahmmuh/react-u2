import React, { useState } from "react";

function Register() {
  const submitHandle = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const [newUser, addUser] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {};
  return (
    <div className="register-container">
      <form>
        <input
          type="text"
          placeholder="name"
          value={newUser.name}
          onChange={handleChange}
        />
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="submit" value="Add" onClick={submitHandle} />
      </form>
    </div>
  );
}

export default Register;
