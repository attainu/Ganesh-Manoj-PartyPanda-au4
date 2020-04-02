import React, { Fragment } from "react";
import "./../style/signin.css";

const Signup = () => {
  return (
    <div className="text-center">
      <div id="signup ">
        <input
          className="form-control "
          type="text"
          id="first"
          placeholder="First Name"
        />
        <br />
        <input
          className="form-control "
          type="text"
          id="last"
          placeholder="Last Name"
        />
        <br />
        <input
          className="form-control "
          type="email"
          id="email"
          placeholder="Email"
        />
        <br />
        <input
          className="form-control "
          type="password"
          id="password"
          placeholder="Password"
        />
        <br />
        <input
          className="form-control "
          type="password"
          id="confirm"
          placeholder="Confirm Password"
        />
        <br />
        <button id="send">Send</button>
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <div className="text-center">
      <div id="login ">
        <input
          className="form-control "
          type="email"
          id="email"
          placeholder="Email"
        />
        <br />
        <input
          className="form-control "
          type="password"
          id="password"
          placeholder="Password"
        />
        <br />
        <button id="send">Send</button>
      </div>
    </div>
  );
};

class Signin extends React.Component {
  state = {
    signup: false,
    login: true
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
      console.log("State", this.state);
    });
  }

  render() {
    return (
      <Fragment>
        <img
          className="w-100 coverpic"
          src="https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/DESPERADOS-SMALL-APARTMENT-20190729094133314.jpg"
        />
        <div className="container mx-auto text-center cont mt-5 pt-5 pb-5">
          <div id="buttons">
            <p
              id="signupButton"
              onClick={() => {
                this.switch("signup");
              }}
              className={this.state.signup ? "yellow" : "blue"}
            >
              Sign In
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
      </Fragment>
    );
  }
}

export default Signin;
