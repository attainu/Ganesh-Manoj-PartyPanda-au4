import React from "react";
import Panda from "./../images/animal.png";
import { Link } from "react-router-dom";
import "./../style/navbar.css";
import { connect } from "react-redux";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-light bg-light py-0"
          style={{ minHeight: "3.5rem" }}
        >
          <div className="d-flex justify-content-start ">
            <Link to="/" className="logo btn">
              <img src={Panda} alt="" style={{ width: "65px" }} />
              PartyPanda
            </Link>
          </div>

          <div className="d-flex justify-content-end">
            <button class="btn">My Events</button>
            <Link to="/allevents" className="btn">
              All Events
            </Link>
            <Link to="/signin" className="btn">
              Signin
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

const fromStroe = (state) => {
  return {
    show: state.show,
  };
};
export default connect(fromStroe)(Navbar);
