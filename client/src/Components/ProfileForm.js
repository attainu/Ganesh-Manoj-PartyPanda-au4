import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class ProfileForm extends React.Component {
  state = {
    name: "",
    email: "",
    avatar: "",
    interest: "",
    bio: "",
    dob: "",
    profession: "",
    company: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    if (!localStorage.Token) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="container-fluid d-flex flex-column flex-nowrap bg-light pb-5">
        <center className="pb-4 pt-4 ">
          <h4 className="pages">Profile Form</h4>
          <hr />
        </center>
        <div
          className="container  d-flex flex-row flex-wrap justify-content-around bg-white py-4 mem"
          style={{ borderRadius: "35px" }}
        >
          <div>
            <div className="pb-2">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                className="form-control border border-dark"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Name"
              />
            </div>
            <div className="pb-2">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                className="form-control border border-dark"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email..."
              />
            </div>
            {/* <div className="pb-2">
              <label>Password:</label>
              <br />
              <input
                type="password"
                className="form-control border border-dark"
                value={this.state.pas}
                onChange={(event)=>{
                    this.setState({
                      name:event.target.value
                    })
                }}
                placeholder="Password..."
              />
            </div> */}
            <div className="pb-2">
              <label>Date Of Birth:</label>
              <br />
              <input
                type="date"
                name="dob"
                className="form-control border border-dark"
                value={this.state.dob}
                onChange={this.handleChange}
              />
            </div>
            <div className="pb-2">
              <label>User Image:</label>
              <input
                type="file"
                className="form-control-file border rounded py-1 border-dark"
                name="avatar"
                style={{ width: "200px" }}
                value={this.state.avatar}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            {/* <div className="pb-2">
              <label>Mobile No:</label>
              <input
                type="number"
                className="form-control border border-dark"
                
                placeholder="Mobile Number"
              />
            </div> */}
            <div className="pb-2">
              <label>Profession:</label>
              <input
                type="text"
                name="profession"
                className="form-control border border-dark"
                value={this.state.profession}
                onChange={this.handleChange}
                placeholder="Profession"
              />
            </div>
            <div className="pb-2">
              <label>Company/Institute:</label>
              <br />
              <input
                type="text"
                name="company"
                className="form-control border border-dark"
                value={this.state.company}
                onChange={this.handleChange}
                placeholder="Office/Institute..."
              />
            </div>
            <div className="pb-2">
              <label>Interest:</label>
              <br />
              <input
                type="text"
                name="interest"
                className="form-control border border-dark"
                value={this.state.interest}
                onChange={this.handleChange}
                placeholder="Introvert"
              />
            </div>

            <div className="pb-2">
              <label>Bio:</label>
              <br />
              <textarea
                type="text"
                name="bio"
                className="form-control border border-dark"
                value={this.state.bio}
                onChange={this.handleChange}
                placeholder="Write something about yourself..."
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center py-3">
          <button
            className="btn"
            id="send"
            style={{ "border-radius": "20px" }}
            onClick={() => {
              console.log("State", this.state);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const fromStore = (state) => {
  return state;
};

export default connect(fromStore)(ProfileForm);
