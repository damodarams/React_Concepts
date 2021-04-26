import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello Welcome to react examples </h1>
        <ul>
          <li>
            <Link to="/Api"> Class API Example </Link>{" "}
          </li>
          <li>
            <Link to="/Form"> Form Example</Link>
          </li>
          <li>
            <Link to="/Counter"> Counter Example</Link>
          </li>
          <li>
            <Link to="/CounterHooks"> Counter Example using hooks</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
