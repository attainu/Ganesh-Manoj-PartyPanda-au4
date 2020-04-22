import React, { Fragment } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

class Login extends React.Component {
  state = {
    jack: false,
    mobile: "",
    password: "",
    forget: "",
  };

  handleForget() {
    if (this.state.forget.length < 9)
      return alert("Enter a valid Mobile number");
    let body = {
      mobile: this.state.forget,
    };

    axios
      .post("http://localhost:3010/step1", this.state)
      .then((res) => {
        console.log("Res", res);
        if (res.data.id) {
          this.props.dispatch({ type: "id", payload: res.data.id });
        } else {
          alert("Failed to send OTP");
        }
      })
      .catch((error) => {
        throw error;
      });
  }

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
      .then(async (res) => {
        const MySwal = withReactContent(Swal);
        if (res.data.token) {
          
          const { token } = res.data;
          localStorage.setItem("Token", token);
          // const user = jwt_decode(token);
          // this.props.dispatch({type:"userData", payload: user})
          
          await MySwal.fire(
            'You have successfully Logged In',
            '',
            'success'
          );
          window.location.reload();
          // if (this.props.isLogin) return <Redirect to="/" />;
          // window.location.replace("http://localhost:3000/");
        } else {
          MySwal.fire(
            "Mobile no or password incorrect!",
            '',
            "warning"
          );
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    if (this.props.isLogin) {
      return <Redirect to="/" />;
    }

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
              {this.state.mobile === "" || this.state.password === "" ? null : (
                <button
                  id="send"
                  onClick={() => {
                    this.getToken();
                  }}
                >
                  {" "}
                  Send
                </button>
              )}
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
                  id="forget"
                  name="forget"
                  placeholder="Mobile"
                  value={this.state.forget}
                  onChange={this.handleChange}
                />
                <br />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              id="send"
              disabled={!this.state.forget}
              onClick={() => {
                this.handleForget();
              }}
            >
              Submit
            </button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}
const fromStroe = (state) => {
  return {
    show: state.show,
    isLogin: state.isLogin,
    usereData: state.userData,
    id: state.id,
  };
};
export default connect(fromStroe)(Login);
