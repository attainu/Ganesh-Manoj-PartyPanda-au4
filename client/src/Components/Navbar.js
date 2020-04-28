import React from "react";
import Panda from "./../images/animal.png";
import { Link, Route } from "react-router-dom";
import "./../style/navbar.css";
import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { Redirect } from "react-router-dom";
// import UserImg from "../images/red.jpg";

class Navbar extends React.Component {
  state = {
    isUserData: false,
  };
  userLogout = (e) => {
    localStorage.removeItem("Token");
    this.props.dispatch({ type: "loginFalse" });
    this.props.dispatch({ type: "userDirect" });
  };

  reDir = () => {
    if (
      !this.props.userData.name ||
      !this.props.userData.image ||
      !this.props.userData.email ||
      !this.props.userData.bio ||
      !this.props.userData.company ||
      !this.props.userData.dob ||
      !this.props.userData.interest ||
      !this.props.userData.gender ||
      !this.props.userData.location ||
      !this.props.userData.profession ||
      !this.props.userData.mobile
    ) {
      console.log("userData not available");
      window.location.replace("/create-profile");
    } else {
      console.log("userData  available");
      window.location.replace("/create-event");
    }
  };

  reDirProfile = () => {
    if (
      !this.props.userData.name ||
      !this.props.userData.image ||
      !this.props.userData.email ||
      !this.props.userData.bio ||
      !this.props.userData.company ||
      !this.props.userData.dob ||
      !this.props.userData.interest ||
      !this.props.userData.gender ||
      !this.props.userData.location ||
      !this.props.userData.profession ||
      !this.props.userData.mobile
    ) {
      console.log("userData not available");
      window.location.replace("/create-profile");
    } else {
      console.log("userData  available");
      window.location.replace("/profile");
    }
  };

  render() {
    return (
      <div>
        {this.props.userData.mobile == 9953776615 ? (
          // if admin logged in
          <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light py-0">
            <div className=" navbar-brand d-flex justify-content-start ">
              <Link
                to="/"
                className="logo text-white "
                style={{ textDecoration: "none" }}
              >
                <img src={Panda} alt="" style={{ width: "65px" }} />
                PartyPanda
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse text-right"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <Link to="/admin" className="nav-link btn text-white">
                    Events
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    to="/admin/feedback"
                    className="nav-link btn text-white"
                  >
                    Feedback
                  </Link>
                </li>
                <li className="nav-item">
                  {this.props.isLogin ? (
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        {this.props.userData.image ? (
                          <img
                            src={this.props.userData.image}
                            className="rounded-circle mr-2"
                            style={{ height: "35px", width: "35px" }}
                          />
                        ) : (
                          <img
                            src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                            className="rounded-circle mr-2"
                            style={{ height: "35px", width: "35px" }}
                          />
                        )}

                        <span className="pr-1">
                          {this.props.userData.name
                            ? this.props.userData.name
                            : null}
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="text-center px-0">
                        <Link to="/profile" onClick={this.reDirProfile}>
                          <option className="text-dark">Profile</option>
                        </Link>
                        <Dropdown.Item onClick={this.userLogout}>
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    // if admin not logged in
                    <Link to="/signin" className="nav-link btn text-white">
                      Signin
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        ) : (
          <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light py-0">
            <div className=" navbar-brand d-flex justify-content-start ">
              <Link
                to="/"
                className="logo text-white"
                style={{ textDecoration: "none" }}
              >
                <img src={Panda} alt="" style={{ width: "65px" }} />
                PartyPanda
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse text-right"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <Link to="/dashboard" className="nav-link btn text-white">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/allevents" className="nav-link btn text-white">
                    All Events
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/create-event"
                    className="nav-link btn text-white"
                    onClick={this.reDir}
                  >
                    Create Event
                  </Link>
                </li>
                <li className="nav-item">
                  {this.props.isLogin ? (
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        {this.props.userData.image ? (
                          <img
                            src={this.props.userData.image}
                            className="rounded-circle mr-2"
                            style={{ height: "35px", width: "35px" }}
                          />
                        ) : (
                          <img
                            src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                            className="rounded-circle mr-2"
                            style={{ height: "35px", width: "35px" }}
                          />
                        )}
                        <span className="pr-1">
                          {this.props.userData.name
                            ? this.props.userData.name
                            : null}
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="text-center px-0">
                        <Dropdown.Item
                          className="text-dark"
                          onClick={this.reDirProfile}
                        >
                          Profile
                        </Dropdown.Item>

                        <Dropdown.Item onClick={this.userLogout}>
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <Link to="/signin" className="nav-link btn text-white">
                      Signin
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        )}
      </div>
    );
  }
}

const fromStroe = (state) => {
  return {
    show: state.show,
    isLogin: state.isLogin,
    userData: state.userData,
  };
};
export default connect(fromStroe)(Navbar);
