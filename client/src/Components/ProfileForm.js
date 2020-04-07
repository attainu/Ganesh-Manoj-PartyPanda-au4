import React from "react";

class ProfileForm extends React.Component {
  render() {
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
              <label>FullName:</label>
              <input
                type="text"
                className="form-control border border-dark"
                required placeholder="Full Name..."
              />
            </div>
            <div className="pb-2">
              <label>Email:</label>
              <input
                type="email"
                className="form-control border border-dark"
                required placeholder="Email..."
              />
            </div>
            <div className="pb-2">
              <label>Password:</label>
              <br />
              <input
                type="password"
                className="form-control border border-dark"
                required placeholder="Password..."
              />
            </div>
            <div className="pb-2">
              <label>Date Of Birth:</label>
              <br />
              <input type="date"
                className="form-control border border-dark"
                required placeholder="DOB..."
              />
            </div>
            <div className="pb-2">
              <label>User Image:</label>
              <input
                type="file"
                className="form-control-file border rounded py-1 border-dark"
                required style={{"width":"200px"}}
              />
            </div>
          </div>
          <div>
          <div className="pb-2">
              <label>Mobile No:</label>
              <input
                type="number"
                className="form-control border border-dark"
                required placeholder="Mobile Number..."
              />
            </div>
            <div className="pb-2">
              <label>Profession:</label>
              <input
                type="Text"
                className="form-control border border-dark"
                required placeholder="Profession..."
              />
            </div>
            <div className="pb-2">
              <label>Company/Institute:</label>
              <br />
              <input
                type="text"
                className="form-control border border-dark"
                required placeholder="Office/Institute..."
              />
            </div>
            <div className="pb-2">
              <label>Bio:</label>
              <br />
              <textarea type="date"
                className="form-control border border-dark"
                required placeholder="Write something about yourself..."
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center py-3">
          <button className="btn" id="send" style={{ "border-radius": "20px" }}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default ProfileForm;
