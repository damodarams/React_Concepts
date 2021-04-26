import React, { Component } from "react";
import { Link } from "react-router-dom";
class Counter extends Component {
  // constructor(props) {
  //   super(props);
  state = {
    counter: 0
    // this.state = {
    //   counter: 0
    // };
    //this.increment = this.increment.bind(this);
  };

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  // increment() {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   });
  // }

  render() {
    return (
      <div>
        <h1> Counter app using Class Component </h1>
        <button onClick={this.increment}>
          {" "}
          you Clicked me {this.state.counter} times
        </button>
        <Link to="/"> Go back to home </Link>
      </div>
    );
  }
}

export default Counter;
