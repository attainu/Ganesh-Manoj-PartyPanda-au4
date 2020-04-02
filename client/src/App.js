import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

import Signin from "./Components/Signin";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid-lg">
          <Router>
            <Navbar />
            <Route exact path="/" component={Home} />

            <Route exact path="/signin" component={Signin} />
          </Router>
        </div>
      </Fragment>
    );
  }
}

export default App;
