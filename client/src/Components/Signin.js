import React, { Fragment } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import "./../style/signin.css";

const Signup = () => {
  return (
    <div className="text-center">
      <form>
        <div id="signup ">
          <input
            className="form-control "
            type="number"
            id="mobile"
            placeholder="Mobile"
            minLength="8"
            maxLength="10"
          />
          <br />
          <input
            className="form-control "
            type="password"
            id="password"
            placeholder="Password"
            minLength="5"
            maxLength="10"
          />
          <br />
          <input
            className="form-control "
            type="password"
            id="confirm"
            placeholder="Confirm Password"
          />
          <br />
          <button id="send" className="pb-2">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

const Login = () => {
  return (
    <div className="text-center">
      <form>
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
          <p
            className="float-left"
            onClick={() => {
              this.props.dispatch({ type: "show" });
            }}
            style={{ color: "white", cursor: "pointer", fontSize: "0.9rem" }}
          >
            Forgot password?
          </p>
          <br />
          <center className="mr-5 pl-5 pt-3 pb-2">
            <button id="send">Send</button>
          </center>
        </div>
      </form>
    </div>
  );
};

class Signin extends React.Component {
  state = {
    signup: false,
    login: true
  };

  handleShow() {
    this.setState({ show: true });
  }
  handleClose() {
    this.setState({ show: false });
  }

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
    let show = this.props.show;
    console.log(show);
    return (
      <Fragment>
        <img
          className="w-100 coverpic"
          alt="coverpic"
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
        <Modal
          show={this.props.show}
          onHide={this.props.dispatch({ type: "hide" })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Please Enter Mobile number</Modal.Title>
            <Modal.Body>
              <div className="text-center">
                <div id="login ">
                  <input
                    className="form-control "
                    type="number"
                    id="mobile"
                    placeholder="Mobile"
                  />
                  <br />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button id="send">Submit</button>
            </Modal.Footer>
          </Modal.Header>
        </Modal>
      </Fragment>
    );
  }
}

const fromStroe = state => {
  return {
    show: state.show
  };
};
export default connect(fromStroe)(Signin);
