import React, { Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class AdminEventDetail extends React.Component {
  componentDidMount = () => {
    let id = this.props.match.params.id;
    axios
      .get(`/event?id=${id}`)
      .then((res) => {
        this.props.dispatch({ type: "eventData", payload: res.data });
      })
      .catch((err) => console.log(err));
  };

  accept = () => {
    let id = this.props.match.params.id;
    let status = true;
    let MySwal = withReactContent(Swal);
    axios
      .put(`/update-status?id=${id}&status=${status}`)
      .then(async (res) => {
        await MySwal.fire("Event Accepted", "", "success");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  remove = () => {
    let id = this.props.match.params.id;
    console.log(id);
    let MySwal = withReactContent(Swal);
    axios
      .delete(`/event?id=${id}`)
      .then(async (res) => {
        await MySwal.fire("Event Deleted", "", "success");
        window.location.replace("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (!localStorage.Token && this.props.userData.mobile !== 9953776615) {
      return <Redirect to="/signin" />;
    }
    let event = this.props.selectedEventData;
    let host = event.host;

    return (
      <Fragment>
        {host ? (
          <div className="container-fluid d-flex bg-light flex-column ">
            <h1 className="text-center text-dark">
              {host.name}'s {event.theme}
            </h1>
            {/* content */}
            <div className="container d-flex flex-column flex-nowrap mt-1 ">
              <div className="d-flex flex-column">
                <div
                  className="d-flex justify-content-around pt-3"
                  style={{ borderRadius: "20px", backgroundColor: "gainsboro" }}
                >
                  <div className="d-flex flex-column justify-content-center">
                    <img
                      className="text-center"
                      src="https://img.icons8.com/ios-filled/50/000000/parking.png"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <p className="text-center">Parking</p>
                    <p className="text-center">{event.parking}</p>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/smoking.png"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <p>Smoking</p>
                    <p className="text-center">{event.smoking}</p>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <img
                      src="https://img.icons8.com/android/24/000000/home.png"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <p>Stayover</p>
                    <p className="text-center">{event.stayover}</p>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/alcoholic-beverage-licensing.png"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <p>Beverages</p>
                    <p className="text-center">{event.beverages}</p>
                  </div>
                </div>
                <div className="card mt-1 bg-light" style={{ border: "none" }}>
                  <div className="card-body">
                    <div className="d-flex flex-row flex-wrap justify-content-around">
                      <div
                        className="d-flex mt-5 flex-column  border border-white shadow bg-white col-md-5 mt-1 py-2 px-2"
                        style={{ borderRadius: "35px" }}
                      >
                        <h3 className="text-dark">When & Where</h3>
                        <hr />
                        <div className="d-flex flex-column">
                          <div className="d-flex flex-row py-0">
                            <img
                              src="https://img.icons8.com/material-sharp/24/000000/planner.png"
                              style={{ width: "30px", height: "30px" }}
                            />
                            <p className="text-muted  ml-1">
                              {new Intl.DateTimeFormat("en-GB", {
                                month: "2-digit",
                                day: "2-digit",
                                year: "numeric",
                              }).format(new Date(event.date))}{" "}
                              at {event.start_time} - {event.end_timing}
                            </p>
                          </div>
                          <div
                            className="d-flex flex-row py-0"
                            style={{ float: "left" }}
                          >
                            <img
                              src="https://img.icons8.com/material-rounded/24/000000/location-marker.png"
                              style={{ width: "30px", height: "30px" }}
                            />
                            <p className="text-muted pt-1 ml-1">
                              {event.location} (Revealed after payment)
                            </p>
                          </div>
                          <div
                            className="d-flex flex-row py-0"
                            style={{ float: "left" }}
                          >
                            <img
                              src="https://img.icons8.com/ios-glyphs/30/000000/apple-music.png"
                              style={{ width: "30px", height: "30px" }}
                            />
                            <p className="text-muted pt-1 ml-1">
                              {event.music}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-flex mt-5 flex-column col-md-5 shadow border border-white bg-white mt-1 py-2 px-2"
                        style={{ borderRadius: "35px" }}
                      >
                        <h3 className=" pt-1 pb-2 text-dark">
                          What to expects?
                        </h3>
                        <p className="text-muted pt-4">{event.details}</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row flex-wrap justify-content-around mt-1">
                      <div
                        className="d-flex mt-5 flex-column shadow border border-white bg-white col-md-5 mt-1 py-2 px-2"
                        style={{ borderRadius: "35px" }}
                      >
                        <h3 className="text-dark">Event Ediquettes</h3>
                        <hr />
                        <div className="d-flex flex-column">
                          <div className="text-muted text-left">
                            <p className="py-0">1. Sport Camraderie</p>
                            <p className="py-0">
                              2. Dont expect spot on bike or in car unless
                              specified
                            </p>
                            <p className="py-0">
                              3. If needed, detailed itinerary will be shared in
                              WhatsApp group to confirmed people.
                            </p>
                            <p className="py-0">
                              4. Take a kickAss SS and Tag @partyherd_on IG
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-flex mt-5 flex-column shadow col-md-5 border border-white bg-white mt-1 py-2 px-2"
                        style={{ borderRadius: "35px" }}
                      >
                        <h3 className=" pt-1 pb-2 text-dark">Host</h3>

                        <div className="card d-flex flex-row flex-wrap border-white justify-content-center">
                          <img
                            class="card-img-top mt-4 ml-1"
                            // style={{
                            //   marginLeft: "2.3rem",
                            //   height: "10rem",
                            //   width: "10rem",
                            //   borderRadius: "50%",
                            // }}
                            src={host.image}
                            alt="Card image cap"
                            style={{
                              height: "8rem",
                              width: "8rem",
                              borderRadius: "50%",
                            }}
                          />
                          <div className="card-body p-3 d-flex flex-column ">
                            <h4 className="card-title text-dark">
                              {host.name}
                            </h4>
                            <div className="d-flex flex-column flex-wrap card-text">
                              {host.profession} | {host.company} |
                              {host.interest} | {host.gender}
                            </div>
                            <h5>Bio</h5>
                            <div>{host.bio}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex flex-row flex-wrap justify-content-around"
                  style={{ fontSize: "20px" }}
                >
                  <p>
                    <b>Cost per person: {event.charges}</b>
                  </p>
                  <p>
                    <b>Inviting People: {event.strength}</b>
                  </p>
                </div>
              </div>
            </div>
            {/* submit button */}
            <div className="d-flex justify-content-center pt-2 pb-3">
              {/* <div><button className="btn btn-success mr-3" onClick={this.accept}>Accept</button> <button className="btn btn-danger ml-3">Remove</button></div> */}
              {!event.status ? (
                <div>
                  <button
                    className="btn btn-success mr-3"
                    onClick={this.accept}
                  >
                    Accept
                  </button>{" "}
                  <button className="btn btn-danger ml-3" onClick={this.remove}>
                    Remove
                  </button>
                </div>
              ) : (
                <button
                  className="btn btn-warning"
                  style={{ borderRadius: "20px" }}
                >
                  Accepted
                </button>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

const fromStroe = (state) => {
  return {
    show: state.show,
    userData: state.userData,
    allEvent: state.allEvent,
    selectedEventData: state.selectedEventData,
    attending: state.attending,
  };
};
export default connect(fromStroe)(AdminEventDetail);
