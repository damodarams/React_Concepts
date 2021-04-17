import React, { Component } from "react";
import { Link } from "react-router-dom";
class Form extends Component {
  render() {
    return (
      <div>
        <h1>This is Form example page</h1>
        <Link to="/">Go back to home</Link>
      </div>
    );
  }
}

export default Form;
