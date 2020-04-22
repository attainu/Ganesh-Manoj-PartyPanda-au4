import React, { Fragment } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./../style/signin.css";

class Signin extends React.Component {
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
    // if (localStorage.Token) {
    //   if (this.props.userData.mobile === 9953776615) {
    //     return <Redirect to="/admin" />;
    //   } else {
    //     return <Redirect to="/" />;
    //   }
    // }
    if (this.props.id) return <Redirect to="/verify" />;

    if (localStorage.Token) {
      if (this.props.userData.mobile == 9953776615) {
        return <Redirect to="/admin" />;
      }
    }
    // if (local
    console.log(this.props.userData);
    let show = this.props.show;
    // console.log(show);
    return (
      <Fragment>
        <div className="card sig">
          <img
            className="card-img sigimg"
            src="https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/DESPERADOS-SMALL-APARTMENT-20190729094133314.jpg"
            alt="Cover"
          />
          <div className="card-img-overlay">
            <div className="container mx-auto text-center cont mt-5 pt-5 pb-5">
              <div id="buttons">
                <p
                  id="signupButton"
                  onClick={() => {
                    this.switch("signup");
                  }}
                  className={this.state.signup ? "yellow" : "blue"}
                >
                  Signup
                </p>
                <p
                  id="loginButton"
                  onClick={() => {
                    this.switch("login");
                  }}
                  className={this.state.login ? "yellow" : "blue"}
                >
                  Login
                </p>
              </div>

              <div className="content mt-3 border border-dark p-3">
                {this.state.signup ? <Signup /> : null}
                {this.state.login ? <Login /> : null}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const fromStroe = (state) => {
  return {
    userData: state.userData,
    id: state.id,
  };
};
export default connect(fromStroe)(Signin);
