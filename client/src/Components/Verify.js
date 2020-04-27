import React, { Fragment } from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

class Verify extends React.Component {
  state = {
    mobile: this.props.mobile,
    code: "",
  };

  handelChange(e) {
    this.setState({
      code: e.target.value,
    });
  }

  handleSend() {
    let MySwal = withReactContent(Swal);
    axios
      .post(`/step2`, this.state)
      .then(async (res) => {
        console.log("approved", res);
        if (JSON.stringify(res.data) == "{}") {
          await this.props.dispatch({ type: "status", payload: "approved" });
          MySwal.fire("User Verified", "", "success");
        } else {
          MySwal.fire("Wrong Otp", "", "error");
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  render() {
    if (!this.props.mobile) return <Redirect to="/signin" />;
    if (this.props.status === "approved") return <Redirect to="/reset" />;
    return (
      <Fragment>
        <label>Otp</label>

        <input
          type="number"
          value={this.state.code}
          name="code"
          onChange={(e) => {
            this.handelChange(e);
          }}
        />

        <button
          onClick={() => {
            this.handleSend();
          }}
          disabled={!this.state.code ? true : false}
        >
          Verify
        </button>
      </Fragment>
    );
  }
}

const fromStore = (state) => {
  return {
    status: state.status,
    mobile: state.mobile,
  };
};

export default connect(fromStore)(Verify);
