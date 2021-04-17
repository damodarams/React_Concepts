import { Component } from "react";
import "./styles.css";
import { Route } from "react-router-dom";
import Api from "./screens/Api_example";
import Form from "./screens/Form_example";
import Home from "./screens/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/Api" exact component={Api} />
        <Route path="/Form" exact component={Form} />
      </div>
    );
  }
}

export default App;
