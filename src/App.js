import { Component } from "react";
import "./styles.css";
import { Route } from "react-router-dom";
import Api from "./screens/Api_example";
import Form from "./screens/Form_example";
import Home from "./screens/Home";
import Counter from "./screens/Counter_app_class";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/Api" exact component={Api} />
        <Route path="/Form" exact component={Form} />
        <Route path="/Counter" exact component={Counter} />
      </div>
    );
  }
}

export default App;
