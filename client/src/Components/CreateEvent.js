import React from "react";
import {Redirect} from "react-router-dom";

class CreateEvent extends React.Component {
  render() {
    if(!localStorage.Token){
      return <Redirect to="/signin" />
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
            <div className="pb-2">
              <label>Event Location:</label>
              <input
                type="text"
                className="form-control border border-dark"
                required
              />
            </div>
            <div className="pb-2">
              <label>Exact Address:</label>
              <input
                type="text"
                className="form-control border border-dark"
                required
              />
            </div>
            <div className="pb-2">
              <label>Event Timing:</label>
              <div className="text-center">
                <input
                  type="time"
                  className="form-control border border-dark"
                  required
                />
                <label>To:</label>
                <input
                  type="time"
                  className="form-control border border-dark"
                  required
                />
              </div>
            </div>
            <div className="pb-2">
              <label>Event Date</label>
              <input
                type="date"
                className="form-control border border-dark"
                required
              />
            </div>
            <div>
              <label>No Of People Inviting:</label>
              <input
                type="number"
                className="form-control border border-dark"
                required
              />
            </div>
          </div>
          <div>
            <div className="pb-2">
              <label>No Of People Inviting:</label>
              <input
                type="number"
                className="form-control border border-dark"
                required
              />
            </div>
            <div className="pb-2">
              <label>Event charges:</label>
              <input
                type="number"
                className="form-control border border-dark"
                required
              />
            </div>
            <div className="pb-2">
              <label>Parking Available:</label>
              <br />
              <select
                className="from-control text-muted border border-dark rounded"
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
                style={{ width: "200px" }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center py-5">
          <button className="btn" id="send" style={{ "border-radius": "20px" }}>
            Create Event
          </button>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
