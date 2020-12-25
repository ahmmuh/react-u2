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
            {/* <Route path="/users" component={UserComponents} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register" component={Register} />
            <Route path="/user/:id" component={SingelUser} /> */}
            {/* <Route path="/" exact component={Login} /> */}
            <Route path="/" render={() => <Login />} exact />
            <Route path="/users" render={() => <UserComponents />} />
            <Route path="/dashboard" render={() => <Dashboard />} />
            <Route path="/register" render={() => <Register />} />
            <Route
              path="/user/:id"
              render={(props) => (
                <SingelUser {...props} key={props.location.key} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
