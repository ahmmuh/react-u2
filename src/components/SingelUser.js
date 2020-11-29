import React, { Component } from "react";

class SingelUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    this.setState({ id });
    console.log(id);
  }
  render() {
    return (
      <div className="singel-user">
        <div>
          <h2>User_id: {this.props.id}</h2>
          <h3>Name</h3>
          <p>@email.com</p>
        </div>
        <div className="adress">
          <p>City</p>
          <p>City name</p>
          <p>Zip code</p>
        </div>
      </div>
    );
  }
}

export default SingelUser;
