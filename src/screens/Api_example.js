import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers() {
    axios("https://api.randomuser.me/?results=5").then((response) => {
      this.setState({
        users: [...this.state.users, ...response.data.results]
      });
      console.log("response", this.state);
    });
  }

  componentDidMount() {
    this.getUsers();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers();
  }

  render() {
    return (
      <div>
        <h1>This is Api example page</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="load more" />
        </form>
        {this.state.users.map((user) => (
          <>
            <p> {user.email}</p>
            <p> {user.cell} </p>
            <hr />
          </>
        ))}

        <Link to="/">Go back to home</Link>
      </div>
    );
  }
}

export default Api;
