import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Components/Home";
import Default from "./Components/Default";
import Navbar from "./Components/Navbar";
import Allparties from "./Components/Allparties";
import Footer from "./Components/Footer";
import CreateEvent from "./Components/CreateEvent";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import ProfileCreation from "./Components/ProfileForm";
import Admin from "./Components/Admin";
import Verify from "./Components/Verify";
import Reset from "./Components/Reset";
import "./style/app.css";
import EventDetail from "./Components/EventDetail";
import MyEventDetail from "./Components/MyEventDetail";
import ProfileUpdate from "./Components/ProfileUpdate";
import GuestList from "./Components/GuestList";
import EditEvent from "./Components/EditEvent";
import AdminEventDetail from "./Components/AdminEventDetail";
import Feedback from "./Components/Feedback";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Signin from "./Components/Signin";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount = async () => {
    const token = localStorage.Token;

    axios.get("http://localhost:3010/events").then((res) => {
      this.props.dispatch({ type: "allEvent", payload: res.data });
    });

    if (token) {
      // console.log("token is available");
      const user = jwt_decode(token);
      await this.props.dispatch({ type: "userData", payload: user.user });
      await this.props.dispatch({ type: "login" });
      let id = this.props.userData._id;

      Promise.all([
        axios.get(`http://localhost:3010/one?id=${id}`),
        axios.get("http://localhost:3010/join"),
      ]).then(([res1, res2]) => {
        this.props.dispatch({ type: "replace", payload: res1.data });
        let result = [];
        res2.data.map((elem, index) => {
          if (this.props.userData._id === elem.user._id) {
            return result.push(elem);
          } else {
            // console.log("not matched", elem)
          }
        });
        console.log(result);
        this.props.dispatch({ type: "attending", payload: result });
      });
    } else {
      // console.log("no token available");
    }
  };

  render() {
    return (
      <Fragment>
        <div className="container-fluid-lg mx-auto" id="container">
          <div id="wrapper">
            <Router>
              <Navbar />
              <Route path="/*" component={Default} />
              <Route exact path="/" component={Home} />
              <Route path="/reset" component={Reset} />
              <Route exact path="/verify" component={Verify} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/allevents" component={Allparties} />
              <Route exact path="/editevent" component={EditEvent} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/create-event" component={CreateEvent} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/create-profile" component={ProfileCreation} />
              <Route exact path="/event-detail/:id" component={EventDetail} />
              <Route
                exact
                path="/admin/event-detail/:id"
                component={AdminEventDetail}
              />
              <Route
                exact
                path="/myevent-detail/:id"
                component={MyEventDetail}
              />
              <Route exact path="/profile-update" component={ProfileUpdate} />
              <Route exact path="/guest" component={GuestList} />
              <Route exact path="/admin/feedback" component={Feedback} />
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
    allEvent: state.allEvent,
    selectedEventData: state.selectedEventData,
  };
};

export default connect(fromStore)(App);
