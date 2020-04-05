import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Allparties from "./Components/Allparties";
import Footer from "./Components/Footer";
import CreateEvent from "./Components/CreateEvent";
import Dashboard from "./Components/Dashboard";

import "./style/app.css";

import Signin from "./Components/Signin";
import { connect } from "react-redux";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid-lg mx-auto" id="container">
          <div id="wrapper">
            <Router>
              <Navbar />
              <Route exact path="/" component={Home} />
              <Route exact path="/allevents" component={Allparties} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/create-event" component={CreateEvent} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Router>
          </div>
          <div id="footer">
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

const fromStore = (state) => {
  return state;
};

export default connect(fromStore)(App);
