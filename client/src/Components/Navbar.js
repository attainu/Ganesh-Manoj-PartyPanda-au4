import React from "react";
import Panda from "./../images/animal.png";
import { Link } from "react-router-dom";
import "./../style/navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-light bg-light py-0"
          style={{ minHeight: "3.5rem" }}
        >
          <div className="d-flex justify-content-start ">
            <button className="btn">Home</button>
            <button className="btn">About Us</button>
          </div>
          <img src={Panda} alt="" style={{ width: "65px" }} />
          <div className="d-flex justify-content-end">
            <button class="btn">My Events</button>
            <button className="btn">Contact Us</button>
            <Link to="/signin" className="btn">
              Signin
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
