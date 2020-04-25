import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import config from "./../config";

class Signup extends React.Component {
  state = {
    mobile: "",
    password: "",
    confirmPassword: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  userData = (e) => {
    e.preventDefault();
    const signupData = {
      mobile: this.state.mobile,
      password: this.state.password,
    };
    const MySwal = withReactContent(Swal);
    if (this.state.password !== this.state.confirmPassword) {
      MySwal.fire("Password and Confirm password is not same", "", "error");
    } else {
      axios
        .post(`http://localhost:3010/signup`, signupData)
        .then((response) => {
          e.preventDefault();
          MySwal.fire(response.data, "", "warning");

          this.setState({
            mobile: "",
            password: "",
            confirmPassword: "",
          });
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <div className="text-center">
        <div id="signup ">
          <input
            className="form-control "
            type="number"
            id="mobile"
            placeholder="Mobile"
            name="mobile"
            value={this.state.mobile}
            minLength="8"
            maxLength="10"
            onChange={this.handleInput}
            required
          />
          <br />
          <input
            className="form-control "
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            minLength="5"
            maxLength="10"
            required
            onChange={this.handleInput}
          />
          <br />
          <input
            className="form-control "
            type="password"
            id="confirm"
            name="confirmPassword"
            value={this.state.confirmPassword}
            placeholder="Confirm Password"
            required
            onChange={this.handleInput}
          />
          <br />

          {this.state.mobile === "" ||
          this.state.password === "" ||
          this.state.confirmPassword === "" ? null : (
            <button id="send" className="pb-2" onClick={this.userData}>
              Send
            </button>
          )}
        </div>
      </div>
    );
  }
}

const fromStroe = (state) => {
  return {
    show: state.show,
  };
};
export default connect(fromStroe)(Signup);
