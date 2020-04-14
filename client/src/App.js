import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Allparties from "./Components/Allparties";
import Footer from "./Components/Footer";
import CreateEvent from "./Components/CreateEvent";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import ProfileCreation from "./Components/ProfileForm";
import "./style/app.css";
import EventDetail from "./Components/EventDetail";
import MyEventDetail from "./Components/MyEventDetail";
import jwt_decode from "jwt-decode";
import Signin from "./Components/Signin";
import { connect } from "react-redux";
class App extends React.Component {
  componentDidMount = () => {
    const token = localStorage.Token;
    if (token) {
      console.log("token is available");
      const user = jwt_decode(token);
      this.props.dispatch({ type: "userData", payload: user });
      this.props.dispatch({ type: "login" });
    } else {
      console.log("no token available");
    }
  };

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
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/create-profile" component={ProfileCreation} />
              <Route exact path="/event-detail" component={EventDetail} />
              <Route exact path="/myevent-detail" component={MyEventDetail} />
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
