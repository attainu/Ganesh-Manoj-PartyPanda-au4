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
import ProfileUpdate from "./Components/ProfileUpdate";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Signin from "./Components/Signin";
import { connect } from "react-redux";

class App extends React.Component {

  componentDidMount = async () => {
    const token = localStorage.Token;
    if (token) {
      console.log("token is available");
      const user = jwt_decode(token);

      await this.props.dispatch({ type: "userData", payload: user.user });
      await this.props.dispatch({ type: "login" });
      let id = this.props.userData._id;
      Promise.all([axios.get(`http://localhost:3010/one?id=${id}`), axios.get("http://localhost:3010/events")])
      .then(([res1, res2]) =>{
        this.props.dispatch({ type: "replace", payload: res1.data });
        console.log(res2)
        this.props.dispatch({ type: "allEvent", payload: res2.data });
      })
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
              <Route exact path="/profile-update" component={ProfileUpdate} />
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
  return {
    userData: state.userData,
    allEvent: state.allEvent
  };
};

export default connect(fromStore)(App);
