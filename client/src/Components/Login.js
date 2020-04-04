import React, { Fragment } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    jack: false,
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

  render() {
    return (
      <Fragment>
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
                  console.log("clicked state", this.state.jack);

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
                <button id="send">Send</button>
              </center>
            </div>
          </form>
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
  };
};
export default connect(fromStroe)(Login);
