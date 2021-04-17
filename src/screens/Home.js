import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello Welcome to react examples </h1>
        <Link to="/Api"> Class API Example </Link>
        <Link to="/Form"> Form Example</Link>
      </div>
    );
  }
}

export default Home;
