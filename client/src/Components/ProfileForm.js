import React from "react";
import axios from "axios";
import moment from "moment";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class ProfileForm extends React.Component {
  state = {
    name: "",
    email: "",
    avatar: null,
    interest: "",
    bio: "",
    dob: null,
    profession: "",
    company: "",
    gender: "Male",
    location: "",
  };

  sendData = () => {
    let id = this.props.userData._id;

    axios
      .post(`http://localhost:3010/profile?id=${id}`, this.state)
      .then(async (res) => {
        if (res) {
          alert("Profile updated");

          return <Redirect to="/" />;
        } else {
          alert("Failed to Update Profile");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleImage = async (e) => {
    let image = e.target.files[0];
    let avatar = undefined;
    let fd = new FormData();

    fd.append("avatar", image, image.name);
    await axios
      .post("http://localhost:3010/uploader", fd)
      .then(async (res) => {
        avatar = res.data;
      })
      .catch((error) => {
        throw error;
      });

    this.setState({ avatar: avatar }, () => {
      console.log(avatar);
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
        ​
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
            ​
            <div className="pb-2">
              <label>Date Of Birth:</label>
              <br />
              <input
                type="date"
                name="dob"
                className="form-control border border-dark"
                onChange={this.handleChange}
              />
            </div>
            <div className="pb-2">
              <label>Gender:</label>
              <select
                name="gender"
                onClick={this.handleChange}
                className="form-control border border-dark "
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="pb-2">
              <label>User Image:</label>
              <input
                type="file"
                className="form-control-file border rounded py-1 border-dark"
                name="avatar"
                style={{ width: "200px" }}
                onChange={(event) => {
                  this.handleImage(event);
                }}
              />
            </div>
          </div>
          <div>
            <div className="pb-2">
              <label>Location:</label>
              <input
                type="text"
                placeholder="Mumbai"
                className="form-control border border-dark"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
              />
            </div>
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
            ​
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
              this.sendData();
            }}
            disabled={
              !this.state.name ||
              !this.state.email ||
              !this.state.interest ||
              !this.state.profession ||
              !this.state.company ||
              !this.state.avatar ||
              !this.state.bio ||
              !this.state.dob
                ? true
                : false
            }
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const fromStore = (state) => {
  return {
    userData: state.userData,
  };
};

export default connect(fromStore)(ProfileForm);
