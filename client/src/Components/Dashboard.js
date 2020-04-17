import React, { Fragment } from "react";
import Attending from "./Attending";
import Myparty from "./Myparty";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import "./../style/signin.css";

class Dashboard extends React.Component {
  state = {
    signup: false,
    login: true,
  };

  switch(word) {
    let signup, login;
    if (word === "signup") {
      signup = true;
      login = false;
    } else {
      login = true;
      signup = false;
    }
    this.setState({ login: login, signup: signup }, () => {
      // console.log("State", this.state);
    });
  }

  render() {
    let show = this.props.show;
    // console.log(show);
    if(!localStorage.Token){
      return <Redirect to="/signin" />
    }
    return (
      <Fragment>
        <div className="container-fluid d-flex flex-column text-center px-0  pt-5 ">
          <div id="buttons" className="mx-auto" style={{ width: "20rem" }}>
            <div
              id="signupButton"
              onClick={() => {
                this.switch("signup");
              }}
              className={this.state.signup ? "yellow" : "blue"}
            >
              Attending
            </div>
            <div
              id="loginButton"
              onClick={() => {
                this.switch("login");
              }}
              className={this.state.login ? "yellow" : "blue"}
            >
              My Party
            </div>
          </div>

          <div className=" mt-3 pt-3 ">
            {this.state.signup ? <Attending /> : null}
            {this.state.login ? <Myparty /> : null}
          </div>
        </div>
      </Fragment>
    );
  }
}

const fromStroe = (state) => {
  return {
    show: state.show,
  };
};
export default connect(fromStroe)(Dashboard);
