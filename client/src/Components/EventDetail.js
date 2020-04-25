import React, { Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class EventDetail extends React.Component {
  componentDidMount = () => {
    let id = this.props.match.params.id;
    axios
      .get(`http://localhost:3010/event?id=${id}`)
      .then((res) => {
        this.props.dispatch({ type: "eventData", payload: res.data });
      })
      .catch((err) => console.log(err));
  };

  handleSend() {
    let user_id = this.props.userData._id;
    let party_id = this.props.match.params.id;
    let MySwal = withReactContent(Swal);

    axios
      .post(
        `http://localhost:3010/join?user_id=${user_id}&party_id=${party_id}`
      )
      .then((res) => {
        MySwal.fire("Requested to join!", "", "success");
      });
  }

  render() {
    // console.log(this.props.match.params.id);
    // if (!this.props.selectedEventId) {
    //   return <Redirect to="/allevents" />;
    // }
    if (!localStorage.Token) {
      return <Redirect to="/signin" />;
    }
    if (
      !this.props.userData.name ||
      !this.props.userData.image ||
      !this.props.userData.email ||
      !this.props.userData.bio ||
      !this.props.userData.company ||
      !this.props.userData.dob ||
      !this.props.userData.interest ||
      !this.props.userData.gender ||
      !this.props.userData.location ||
      !this.props.userData.profession ||
      !this.props.userData.mobile
    ) {
      return <Redirect to="/create-profile" />;
    }

    let event = this.props.selectedEventData;
    let host = event.host;
    // if (host) console.log("Event", host.name);

    let result = [];
    this.props.attending.map((elem) => {
      if (elem.party._id === this.props.match.params.id) {
        // console.log("matched", elem);
        result.push(elem);
      } else {
        // console.log("not matched", elem);
      }
      // console.log(result);
    });
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
                        className="d-flex flex-column  border border-white shadow bg-white col-md-5 mt-1 py-2 px-2"
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
                        className="d-flex flex-column col-md-5 shadow border border-white bg-white mt-1 py-2 px-2"
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
                        className="d-flex flex-column shadow border border-white bg-white col-md-5 mt-1 py-2 px-2"
                        style={{ borderRadius: "35px" }}
                      >
                        <h3 className="text-dark">Event Ediquettes</h3>
                        <hr />
                        <div className="d-flex flex-column">
                          {event.type === "Online Party" ? (
                            <div className="text-muted text-left">
                              <p className="py-0">1. Be on time.</p>
                              <p className="py-0">
                                2. Dont go in & out of the call, it's not live.
                              </p>
                              <p className="py-0">
                                3. You can't join back if you leave the call.
                                The spot will be alloted to someone else.
                              </p>
                              <p className="py-0">
                                4. Take a kickAss SS and Tag @partypanda on IG
                              </p>
                            </div>
                          ) : event.type === "Outdoor Party" ? (
                            <div className="text-muted text-left">
                              <p className="py-0">1. Sport Camraderie</p>
                              <p className="py-0">
                                2. Dont expect spot on bike or in car unless
                                specified
                              </p>
                              <p className="py-0">
                                3. If needed, detailed itinerary will be shared
                                in WhatsApp group to confirmed people.
                              </p>
                              <p className="py-0">
                                4. Take a kickAss SS and Tag @partyherd_on IG
                              </p>
                            </div>
                          ) : (
                            <div className="text-muted text-left">
                              <p className="py-0">1. Spot your Host.</p>
                              <p className="py-0">
                                2. Bring the vibe and Respect the house.
                              </p>
                              <p className="py-0">3. Dont be a party pooper.</p>
                              <p className="py-0">
                                4. Take a kickAss SS and Tag @partypand on IG
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div
                        className="card d-flex flex-column shadow col-md-5 border border-white bg-white mt-1 py-2 px-2"
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
              {result[0] ? (
                <button
                  className="btn btn-warning"
                  style={{ borderRadius: "20px" }}
                >
                  Status : Already requested to join!{" "}
                </button>
              ) : (
                <button
                  className="btn btn-secondary"
                  style={{ borderRadius: "20px" }}
                  onClick={() => {
                    this.handleSend();
                  }}
                >
                  Join Event
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
export default connect(fromStroe)(EventDetail);
