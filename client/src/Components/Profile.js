import { connect } from "react-redux";
import React, { Fragment } from "react";

class Profile extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="contianer-fluid d-flex flex-column ">
          <div className="row prop1">
            <div className="col-md-6 border border-dark mx-auto ">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.entrepreneur.com%2Fcontent%2F3x2%2F1300%2F20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg&f=1&nofb=1"
                alt="profile"
                className="propimg "
              />
            </div>
          </div>

          <div className=" h-25 contianer-fluid border border-dark "></div>
          <div></div>
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
