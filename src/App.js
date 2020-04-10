import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login-flow/Login";
import CMS from "./components/main-flow/CMS";
import ForgotPass from "./components/login-flow/ForgotPass";
import SignUp from "./components/login-flow/SignUp";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/forgot" component={ForgotPass} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" component={CMS} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
