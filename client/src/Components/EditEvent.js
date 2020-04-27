import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class EditEvent extends React.Component {
  state = {
    type: "House Party",
    theme: "Game Night",
    music: this.props.selectedEventData.music,
    location: this.props.selectedEventData.location,
    exact_location: this.props.selectedEventData.exact_location,
    date: null,
    start_time: this.props.selectedEventData.start_time,
    end_timing: this.props.selectedEventData.end_timing,
    strength: this.props.selectedEventData.strength,
    charges: this.props.selectedEventData.charges,
    beverages: "BYOB",
    smoking: "No",
    parking: "Yes",
    stayover: "Yes",
    details: this.props.selectedEventData.details,
    avatar: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  sendData = () => {
    let id = this.props.selectedEventData._id;
    let MySwal = withReactContent(Swal);
    axios
      .put(`/event?id=${id}`, this.state)
      .then(async (res) => {
        if (res) {
          await MySwal.fire("Event Updated","","success");
          console.log(res);
          window.location.replace("/allevents");
        } else {
          MySwal.fire("Failed to Update Profile","", "warning");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  handleImage = async (e) => {
    let image = e.target.files[0];
    let avatar = undefined;
    let fd = new FormData();

    fd.append("avatar", image, image.name);
    await axios
      .post("/uploader", fd)
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
    if (!this.props.userData.name) {
      return <Redirect to="/create-profile" />;
    }
    return (
      <div className="container-fluid d-flex flex-column flex-nowrap bg-light pb-5">
        <center className="pb-4 pt-4 ">
          <h4 className="pages">Create Event</h4>
          <hr />
        </center>
        <div
          className=" container  d-flex flex-row flex-wrap justify-content-around bg-white py-5 mem"
          style={{ borderRadius: "35px" }}
        >
          <div>
            <div class="dropdown pb-2">
              <label>Theme:</label>
              <br />
              <select
                className="from-control text-muted border border-dark rounded"
                name="theme"
                value={this.state.theme}
                onChange={this.handleChange}
                style={{ width: "200px", height: "40px" }}
              >
                <option>Game Night</option>
                <option>Laughter Party</option>
                <option>Musical Night</option>
                <option>Movie Night</option>
                <option>Quarantine & Chill</option>
                <option>Weekend Trip</option>
                <option>House Party</option>
                <option>Pool Party</option>
                <option>Halloween Party</option>
                <option>RoadTrip</option>
                <option>Trekking</option>
                <option>Gataway</option>
              </select>
            </div>
            <div>
              <label>Type:</label>
              <select
                className="form-control border border-dark"
                name="type"
                value={this.state.type}
                onChange={this.handleChange}
              >
                <option>House Party</option>
                <option>Online Party</option>
                <option>Outdoor Party</option>
                <option>Pool Party</option>
                <option>Others</option>
              </select>
            </div>
            <div className="pb-2">
              <label>Event Location:</label>
              <input
                type="text"
                className="form-control border border-dark"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="pb-2">
              <label>Exact Address:</label>
              <input
                type="text"
                className="form-control border border-dark"
                name="exact_location"
                value={this.state.exact_location}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="pb-2">
              <label>Event Timing:</label>
              <div className="text-center">
                <input
                  type="time"
                  className="form-control border border-dark"
                  name="start_time"
                  value={this.state.start_time}
                  onChange={this.handleChange}
                  required
                />
                <label>To:</label>
                <input
                  type="time"
                  className="form-control border border-dark"
                  name="end_timing"
                  value={this.state.end_timing}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className="pb-2">
              <label>Event Date</label>
              <input
                type="date"
                className="form-control border border-dark"
                name="date"
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>Music:</label>
              <input
                type="text"
                className="form-control border border-dark"
                name="music"
                value={this.state.music}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div>
            <div>
              <label>Cover Image:</label>
              <input
                type="file"
                className="form-control border border-dark"
                name="avatar"
                style={{ width: "200px" }}
                onChange={(event) => {
                  this.handleImage(event);
                }}
              />
            </div>
            <div className="pb-2">
              <label>No Of People Inviting:</label>
              <input
                type="number"
                className="form-control border border-dark"
                name="strength"
                value={this.state.strength}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="pb-2">
              <label>Event charges:</label>
              <input
                type="number"
                className="form-control border border-dark"
                name="charges"
                value={this.state.charges}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="pb-2">
              <label>Parking Available:</label>
              <br />
              <select
                className="from-control text-muted border border-dark rounded"
                name="parking"
                value={this.state.parking}
                onChange={this.handleChange}
                style={{ width: "200px", height: "40px" }}
              >
                <option>Yes</option>
                <option>No</option>
                <option>OnRoad</option>
              </select>
            </div>
            <div className="pb-2">
              <label>StayOver:</label>
              <br />
              <select
                className="from-control text-muted border border-dark rounded"
                name="stayover"
                value={this.state.stayover}
                onChange={this.handleChange}
                style={{ width: "200px", height: "40px" }}
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="pb-2">
              <label>Smoking Allowed:</label>
              <br />
              <select
                className="from-control text-muted border border-dark rounded"
                name="smoking"
                value={this.state.smoking}
                onChange={this.handleChange}
                style={{ width: "200px", height: "40px" }}
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="pb-2">
              <label>Beverages:</label>
              <br />
              <select
                className="from-control border border-dark rounded text-muted"
                name="beverages"
                value={this.state.beverages}
                onChange={this.handleChange}
                style={{ width: "200px", height: "40px" }}
              >
                <option>BYOB</option>
                <option>Not Allowed</option>
                <option>On the House</option>
              </select>
            </div>
            <div>
              <label>Event Description:</label>
              <br />
              <textarea
                className="border border-dark"
                name="details"
                value={this.state.details}
                onChange={this.handleChange}
                style={{ width: "200px" }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center py-5">
          <button
            className="btn"
            id="send"
            style={{ "border-radius": "20px" }}
            onClick={this.sendData}
            disabled={
              !this.state.theme |
              !this.state.music |
              !this.state.location |
              !this.state.exact_location |
              !this.state.date |
              !this.state.start_time |
              !this.state.end_timing |
              !this.state.strength |
              !this.state.charges |
              this.state.details |
              this.state.avatar
                ? true
                : false
            }
          >
            Update Event
          </button>
        </div>
      </div>
    );
  }
}

const fromStore = (state) => {
  return {
    userData: state.userData,
    selectedEventData: state.selectedEventData,
  };
};

export default connect(fromStore)(EditEvent);
