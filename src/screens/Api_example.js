import React, { Component } from "react";

import { Link } from "react-router-dom";

class Api extends Component {
  render() {
    return (
      <div>
        <h1>This is Api example page</h1>
        <Link to="/">Go back to home</Link>
      </div>
    );
  }
}

export default Api;
