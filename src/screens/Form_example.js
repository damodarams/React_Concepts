import React, { Component } from "react";
import { Link } from "react-router-dom";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "sdsa"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  render() {
    return (
      <div>
        <h1>This is Form example page</h1>
        <form>
          <label>
            Enter name :
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <p> {this.state.name} </p>
        </form>
        <Link to="/">Go back to home</Link>
      </div>
    );
  }
}

export default Form;
