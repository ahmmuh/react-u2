import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login(props) {
  const [routeState, setRoute] = useState();
  const [toggle, setToggle] = useState("false");
  const history = useHistory();

  const loginHandler = () => {
    history.push("/dashboard");
  };

  const toggleContent = () => {
    setToggle(!toggle);
    console.log("toggle content");
  };
  return (
    <div className="form-card">
      {toggle ? (
        <form>
          <div className="form-control">
            <input type="text" placeholder="new user" />
            <button type="button" onClick={loginHandler}>
              Login
            </button>
          </div>
        </form>
      ) : null}
      <button className="show-info" onClick={toggleContent}>
        Show info
      </button>
    </div>
  );
}

export default Login;
