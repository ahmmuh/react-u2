import "./App.css";
import React, { Component } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserComponents from "./components/UserComponents";
import SingelUser from "./components/SingelUser";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/users" component={UserComponents} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register" component={Register} />
            <Route path="/user/:id" component={SingelUser} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
