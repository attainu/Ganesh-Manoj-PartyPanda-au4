import { connect } from "react-redux";
import React, { Fragment } from "react";
import "./../style/profile.css";

class Profile extends React.Component {
  render() {
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
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.entrepreneur.com%2Fcontent%2F3x2%2F1300%2F20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg&f=1&nofb=1"
              alt="profile"
              className="propimg "
            />

            <h3 className="propname">Veronica Dsouza</h3>
            <h6 className="card-text">+918652374607</h6>
            <div className="d-flex flex-row flex-wrap justify-content-center pb-5 card-text">
              <span>Student | </span>
              <span> IES college of science | </span>
              <span> Story-teller | </span>
              <span> 18 years</span>
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
                <h6 className="card-text">
                  Lorie has worked with reputable real estate agencies,
                  including ReMax, Century 21, and Coldwell Banker, among
                  others. Lorie helps homeowners and new buyers secure a loan
                  that suits their budget and goals. You can expect 100%
                  transparency, no horror stories, and nasty surprises when
                  working with Lorie.
                </h6>
              </div>
              <div className="d-flex flex-row justify-content-between flex-wrap">
                <div className="float-left">
                  <h4 className="theme float-left">Email</h4>

                  <h6 className="card-text">veronica@gmail.com</h6>
                </div>
                <div>
                  <h4 className="theme">Location</h4>
                  <center>
                    <h6 className="card-text">Mumbai</h6>
                  </center>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between flex-wrap">
                <div className="float-left">
                  <h4 className="theme">DOB</h4>

                  <h6 className="card-text">02-01-1996</h6>
                </div>
                <div>
                  <h4 className="theme">Gender</h4>
                  <center>
                    <h6 className="card-text">Female</h6>
                  </center>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between flex-wrap pb-3">
                <div className="float-left">
                  <h4 className="theme ">Profession</h4>

                  <h6 className="card-text">Student</h6>
                </div>
                <div>
                  <h5 className="theme">Company/College</h5>

                  <h6
                    className="card-text float-right"
                    style={{ paddingRight: "27px" }}
                  >
                    St Xavier's
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const fromStroe = (state) => {
  return {
    show: state.show,
  };
};
export default connect(fromStroe)(Profile);
