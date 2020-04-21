import React, { Fragment } from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Verify extends React.Component {
  state = {
    id: this.props.id,
    token: "",
  };

  handelChange(e) {
    this.setState({
      token: e.target.value,
    });
  }

  handleSend() {
    axios
      .post(`http://localhost:3010/step2`, this.state)
      .then(async (res) => {
        console.log("Verified", res);
        if (res.data === "Verified") {
          await this.props.dispatch({ type: "status" });
          alert("User Verified");
        } else {
          alert("Wrong Otp");
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  render() {
    if (this.props.status) return <Redirect to="/result" />;
    return (
      <Fragment>
        <label>Otp</label>

        <input
          type="number"
          value={this.state.token}
          name="token"
          onChange={(e) => {
            this.handelChange(e);
          }}
        />

        <button
          onClick={() => {
            this.handleSend();
          }}
          disabled={!this.state.token ? true : false}
        >
          Verify
        </button>
      </Fragment>
    );
  }
}

const fromStore = (state) => {
  return {
    id: state.id,
    status: state.status,
  };
};

export default connect(fromStore)(Verify);
