import React from "react";
import "./CMS.css";
import { Switch, Route } from "react-router-dom";
import Schedule from "./Schedule";
import Services from "./Services";
import Rating from "./Rating";
import Nav from "./Nav";
import "../assests/css/bootstrap.css";
import "../assests/css/style.css";
import "../assests/font-awesome/font-awesome.css";
import Setting from "./Setting";

class CMS extends React.Component {
  render() {
    return (
      <div className="App1">
        <Nav />
        <Switch>
          <Route path="/schedule" component={Schedule} />
          <Route path="/services" component={Services} />
          <Route path="/rating" component={Rating} />
          <Route path="/setting" component={Setting} />
        </Switch>
      </div>
    );
  }
}

export default CMS;
