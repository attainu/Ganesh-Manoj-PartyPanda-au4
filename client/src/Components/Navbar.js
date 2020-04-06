import React from "react";
import Panda from "./../images/animal.png";
import { Link } from "react-router-dom";
import "./../style/navbar.css";
import { connect } from "react-redux";

class Navbar extends React.Component {
  render() {
    return (
          <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light py-0" >
            <div className=" navbar-brand d-flex justify-content-start ">
              <Link to="/" className="logo btn">
                <img src={Panda} alt="" style={{ width: "65px" }} />
                PartyPanda
              </Link>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-right" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item ">
                  <Link to="/dashboard" className="nav-link btn text-white">
                  Dashboard
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/allevents" className="nav-link btn text-white">
                  All Events
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/create-event" className="nav-link btn text-white">
                  Create Event
                  </Link>
                </li>
                <li>
                  <Link to="/signin" className="nav-link btn text-white">
                  Signin
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
    );
  }
}

const fromStroe = (state) => {
  return {
    show: state.show,
  };
};
export default connect(fromStroe)(Navbar);
