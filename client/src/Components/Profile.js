import { connect } from "react-redux";
import React, { Fragment } from "react";
import "./../style/profile.css";
import { Link, Redirect } from "react-router-dom";

class Profile extends React.Component {
  render() {
    if (!localStorage.Token) {
      return <Redirect to="/signin" />;
    }
    let birth = new Date(this.props.userData.dob);
    let now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    if (now.getMonth() >= birth.getMonth() && now.getDate() > birth.getDate()) {
      age--;
    }
    let dob = `${birth.getDate()}-${birth.getMonth()}-${birth.getFullYear()}`;
    return (
      <Fragment>
        <div
          className="contianer-fluid d-flex flex-column align-items-center "
          style={{ backgroundColor: "#f6f9fa" }}
        >
          <img
            src="https://images.unsplash.com/photo-1559060680-36abfac01944?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
            height="400px"
            width="100%"
            alt="cover"
          />
          <div
            className="card col-md-5 prop1 d-flex flex-column  align-items-center"
            style={{ backgroundColor: "white" }}
          >
            {this.props.userData.image ? (
              <img
                src={this.props.userData.image}
                alt="profile"
                className="propimg "
              />
            ) : (
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.entrepreneur.com%2Fcontent%2F3x2%2F1300%2F20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg&f=1&nofb=1"
                alt="profile"
                className="propimg "
              />
            )}

            {/* <form
              class="md-form"
              action="/profile"
              enctype="multipart/form-data"
              method="POST"
            >
              <div id="profile">
                <div class="d-flex btn-mdb-color btn-rounded justify-content-center">
                  <div class="upload-btn-wrapper">
                    <button class="btn update">Add photo</button>
                    <input
                      type="file"
                      name="avatar"
                      onchange="this.form.submit()"
                    />
                  </div>
                </div>
                <Link
                  to="/profile"
                  id="removeProfile"
                  style={{ backgroundColor: "#afafaf;" }}
                  class="btn"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Remove the profile pic"
                >
                  Remove
                </Link>
              </div>
            </form> */}
            <h3 className="propname">{this.props.userData.name}</h3>
            <h6 className="card-text">{this.props.userData.mobile}</h6>
            <div className="d-flex flex-row flex-wrap justify-content-center pb-5 card-text">
              <span>{this.props.userData.profession} | </span>
              <span> {this.props.userData.company} | </span>
              <span> {this.props.userData.interest} | </span>

              <span> {age} years</span>
            </div>
          </div>

          <div
            className=" h-25 w-100 contianer-fluid"
            style={{ marginTop: "-120px" }}
          >
            <div className="col-md-8 py-5 d-flex flex-column mx-auto">
              <div
                className="d-flex flex-column align-item-center"
                style={{ marginTop: "30px" }}
              >
                <h4 className="theme">Bio</h4>
                <h6 className="card-text mx-auto">{this.props.userData.bio}</h6>
              </div>
              <div className="d-flex flex-row justify-content-between flex-wrap">
                <div className="float-left">
                  <h4 className="theme float-left">Email</h4>

                  <h6 className="card-text">{this.props.userData.email}</h6>
                </div>
                <div>
                  <h4 className="theme">Location</h4>
                  <center>
                    <h6 className="card-text">
                      {this.props.userData.location}
                    </h6>
                  </center>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between flex-wrap">
                <div className="float-left">
                  <h4 className="theme">DOB</h4>

                  <h6 className="card-text">{dob}</h6>
                </div>
                <div>
                  <h4 className="theme">Gender</h4>
                  <center>
                    <h6 className="card-text">{this.props.userData.gender}</h6>
                  </center>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between flex-wrap ">
                <div className="float-left">
                  <h4 className="theme ">Profession</h4>

                  <h6 className="card-text">
                    {this.props.userData.profession}
                  </h6>
                </div>
                <div>
                  <h5 className="theme">Company/College</h5>

                  <h6
                    className="card-text float-right"
                    style={{ paddingRight: "27px" }}
                  >
                    {this.props.userData.company}
                  </h6>
                </div>
              </div>
              <center className="pt-5">
                <button id="send">Update</button>
              </center>
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
    isLogin: state.isLogin,
  };
};
export default connect(fromStroe)(Profile);
