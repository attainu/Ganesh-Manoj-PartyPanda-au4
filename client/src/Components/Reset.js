import React, { Fragment } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Reset extends React.Component {
  state = {
    mobile: this.props.mobile,
    password: "",
    confirmPassword: "",
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
        .put("/update-password", signupData)
        .then((response) => {
          e.preventDefault();
          MySwal.fire(response.data, "", "success");
          this.setState({
            mobile: "",
            password: "",
            confirmPassword: "",
          });
          this.props.dispatch({ type: "forgetClean" });
        })
        .catch((err) => console.log(err));
    }
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    if (!this.props.mobile) return <Redirect to="/signin" />;

    return (
      <Fragment>
        <div className="text-center pt-5 mt-5">
          <div id="signup ">
            <input
              className="form-control w-25 mx-auto"
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
              className="form-control w-25 mx-auto"
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
      </Fragment>
    );
  }
}

const fromStore = (state) => {
  return {
    mobile: state.mobile,
  };
};

export default connect(fromStore)(Reset);
