import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers() {
    this.setState({
      loading: true
    });
    axios("https://api.randomuser.me/?results=5").then((response) => {
      this.setState({
        users: [...this.state.users, ...response.data.results],
        loading: false
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
    const { loading, users } = this.state;
    return (
      <div>
        <h1>This is Api example page</h1>

        {!loading ? (
          users.map((user) => (
            <div Key={user.id.value}>
              <p> {user.email}</p>
              <p> {user.cell} </p>
              <hr />
            </div>
          ))
        ) : (
          <Loading message="Hello please wait" />
        )}
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="load more" />
        </form>
        <Link to="/">Go back to home</Link>
      </div>
    );
  }
}

export default Api;
