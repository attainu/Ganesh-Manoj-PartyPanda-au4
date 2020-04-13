import React from "react";
import Panda from "./../images/animal.png";
import { Link } from "react-router-dom";
import "./../style/navbar.css";
import { connect } from "react-redux";

class Navbar extends React.Component {

  userLogout =(e) => {
    localStorage.removeItem("Token");
    this.props.dispatch({type:"loginFalse"})
    this.props.dispatch({type:"userDirect"})
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light py-0">
        <div className=" navbar-brand d-flex justify-content-start ">
          <Link to="/" className="logo btn">
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
              <Link to="/create-event" className="nav-link btn text-white">
                Create Event
              </Link>
            </li>
            <li>
              {this.props.isLogin ? <button className="nav-link btn text-white" onClick={this.userLogout}>Logout</button> : <Link to="/signin" className="nav-link btn text-white">
                Signin
              </Link> }
              {/* <Link to="/signin" className="nav-link btn text-white">
                Signin
              </Link> */}
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
    isLogin: state.isLogin
  };
};
export default connect(fromStroe)(Navbar);
