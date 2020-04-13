import React, { Fragment } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";
import jwt_decode from "jwt-decode";
import {Redirect} from "react-router-dom";

class Login extends React.Component {
  state = {
    jack: false,
    mobile: "",
    password: "",
  };

  handleShow() {
    this.setState({
      jack: true,
    });
  }
  handleHide() {
    this.setState({
      jack: false,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getToken = () => {
    // e.preventDefault();
    let userData = {
      mobile: this.state.mobile,
      password: this.state.password,
    };

    axios
      .post("http://localhost:3010/login", userData)
      .then((res) => {
        if (res.data.token) {
          const { token } = res.data;
          localStorage.setItem("Token", token);
          // const user = jwt_decode(token);
          // this.props.dispatch({type:"userData", payload: user})
          alert("successfully Login");
        } else {
          alert("Password or Mobile No incorrect");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentDidMount = () => {
    const token = localStorage.Token;
    if (token) {
      console.log("token is available");
      const user = jwt_decode(token);
      this.props.dispatch({ type: "userData", payload: user });
      this.props.dispatch({ type:"login"})
    } else {
      console.log("no token available");
    }
  };

  render() {
    return (
      <Fragment>
        <div className="text-center">
          <div id="login ">
            <input
              className="form-control"
              type="number"
              id="mobile"
              name="mobile"
              value={this.state.mobile}
              onChange={this.handleChange}
              placeholder="Mobile number"
            />
            <br />
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
            <br />
            <p
              className="float-left"
              onClick={() => {
                // console.log("clicked state", this.state.jack);
                this.handleShow();
              }}
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
            >
              Forgot password?
            </p>
            <br />
            <center className="mr-5 pl-5 pt-3 pb-2">
              <button
                id="send"
                onClick={() => {
                  this.getToken();
                }}
              >
                Send
              </button>
            </center>
          </div>
        </div>
        <Modal
          show={this.state.jack}
          onHide={() => {
            this.handleHide();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Please Enter Mobile number</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center mt-3">
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
        </Modal>
      </Fragment>
    );
  }
}
const fromStroe = (state) => {
  return {
    show: state.show,
    isLogin: state.isLogin
  };
};
export default connect(fromStroe)(Login);
