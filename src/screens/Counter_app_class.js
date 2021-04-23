import React, { Component } from "react";
import { Link } from "react-router-dom";
class Counter extends Component {
  // constructor(props) {
  //   super(props);
  state = {
    Counter: 0
  };

  //this.increment = this.increment.bind(this);
  //}

  increment = () => {
    this.setState({
      Counter: this.state.Counter + 1
    });
  };

  render() {
    return (
      <div>
        <h1> Counter app using Class Component </h1>
        <button onClick={this.increment}>
          {" "}
          you Clicked me {this.state.Counter} times
        </button>
        <Link to="/"> Go back to home </Link>
      </div>
    );
  }
}

export default Counter;
