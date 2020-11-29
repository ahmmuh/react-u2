import React, { Component } from "react";
import UserComponents from "./UserComponents";
import Login from "./Login";
import Register from "./Register";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      email: "",
      name: [""],
      userName: "",
      inputValue: [""],
      login: true,
    };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          users: data,
        })
      );
  }

  addUser = (event) => {
    event.preventDefault();
    let user = this.state.users.concat({
      name: this.state.name,
      email: this.state.email,
      username: this.state.userName,
    });
    this.setState({
      users: user,
    });

    console.log(this.state.users);
  };

  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
      // email: event.target.value,
      //  userName: event.target.value,
    });
  };
  emailChangeHandler = (event) => {
    this.setState({
      // name: event.target.value,
      email: event.target.value,
      // userName: event.target.value,
    });
  };

  userChangeHandler = (event) => {
    this.setState({
      // name: event.target.value,
      // email: event.target.value,
      userName: event.target.value,
    });
  };
  render() {
    const newUsers = this.state.users;
    console.log(newUsers);
    return (
      <div className="dashboard dashboard-container">
        <div>
          <UserComponents users={this.state.users} />
        </div>
        <div className="register-container">
          <form>
            <input
              type="text"
              placeholder="name"
              onChange={this.nameChangeHandler}
              name={this.state.name}
            />
            <input
              type="text"
              placeholder="username"
              onChange={this.userChangeHandler}
              username={this.state.userName}
            />
            <input
              type="email"
              placeholder="email"
              onChange={this.emailChangeHandler}
              email={this.state.email}
            />
            <input type="submit" value="Add" onClick={this.addUser} />
          </form>
        </div>
      </div>
    );
  }
}

export default Dashboard;
