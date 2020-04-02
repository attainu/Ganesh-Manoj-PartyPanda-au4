import React from "react";
import Panda from "./Panda.png";
import { Link } from "react-router-dom";
import "./../style/navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light py-0">
          <div className="d-flex justify-content-start ">
            <button className="btn">Home</button>
            <button className="btn">About Us</button>
          </div>
          <img src={Panda} alt="" style={{ width: "50px" }} />
          <div className="d-flex justify-content-end">
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
