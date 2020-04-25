import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./../style/allparties.css";

class Allparties extends React.Component {
  state = {
    id: "",
    user: false,
    host: false,
  };
  sendId = async (data) => {
    let id = await data._id;
    this.setState({
      id: id,
    });
    let user = this.props.userData;
    if (data.host._id === user._id) {
      this.setState({
        host: true,
      });
    } else {
      this.setState({
        user: true,
      });
    }
  };
  render() {
    let result = [];

    this.props.allEvent.filter((event) => {
      if (event.status) {
        console.log("status true");
        result.push(event);
      } else {
        console.log("status false");
      }
    });

    if (this.state.user) {
      let id = this.state.id;
      let link = `/event-detail/${id}`;
      return <Redirect to={link} />;
    }

    if (this.state.host) {
      let id = this.state.id;
      let link = `/myevent-detail/${id}`;
      return <Redirect to={link} />;
    }

    if (this.props.ftheme === "Theme") {
      return result;
    }
    if (this.props.ftheme === "Game Night") {
      let newData = result.filter((elem) => {
        return elem.theme === "Game Night";
      });
      result = newData;
    }

    if (this.props.ftheme === "Laughter Party") {
      let newData = result.filter((elem) => {
        return elem.theme === "Laughter Party";
      });
      result = newData;
    }
    if (this.props.ftheme === "Musical Night") {
      let newData = result.filter((elem) => {
        return elem.theme === "Musical Night";
      });
      result = newData;
    }
    if (this.props.ftheme === "Movie Night") {
      let newData = result.filter((elem) => {
        return elem.theme === "Movie Night";
      });
      result = newData;
    }
    if (this.props.ftheme === "Quarantine & Chill") {
      let newData = result.filter((elem) => {
        return elem.theme === "Quarantine & Chill";
      });
      result = newData;
    }
    if (this.props.ftheme === "Weekend Trip") {
      let newData = result.filter((elem) => {
        return elem.theme === "Weekend Trip";
      });
      result = newData;
    }
    if (this.props.ftheme === "House Party") {
      let newData = result.filter((elem) => {
        return elem.theme === "House Party";
      });
      result = newData;
    }
    if (this.props.ftheme === "Pool Party") {
      let newData = result.filter((elem) => {
        return elem.theme === "Pool Party";
      });
      result = newData;
    }
    if (this.props.ftheme === "Halloween Party") {
      let newData = result.filter((elem) => {
        return elem.theme === "Halloween Party";
      });
      result = newData;
    }
    if (this.props.ftheme === "RoadTrip") {
      let newData = result.filter((elem) => {
        return elem.theme === "RoadTrip";
      });
      result = newData;
    }
    if (this.props.ftheme === "Trekking") {
      let newData = result.filter((elem) => {
        return elem.theme === "Trekking";
      });
      result = newData;
    }
    if (this.props.ftheme === "Gataway") {
      let newData = result.filter((elem) => {
        return elem.theme === "Gataway";
      });
      result = newData;
    }
    if (this.props.ftype === "Type") {
      return result;
    }

    if (this.props.ftype === "House Party") {
      let newData = result.filter((elem) => {
        return elem.type === "House Party";
      });
      result = newData;
    }

    if (this.props.ftype === "Online Party") {
      let newData = result.filter((elem) => {
        return elem.type === "Online Party";
      });
      result = newData;
    }
    if (this.props.ftype === "Outdoor Party") {
      let newData = result.filter((elem) => {
        return elem.type === "Outdoor Party";
      });
      result = newData;
    }
    if (this.props.ftype === "Pool Party") {
      let newData = result.filter((elem) => {
        return elem.type === "Pool Party";
      });
      result = newData;
    }
    if (this.props.ftype === "Others") {
      let newData = result.filter((elem) => {
        return elem.type === "Others";
      });
      result = newData;
    }

    if (this.props.fcharges === "Charges") {
      return result;
    }

    if (this.props.fcharges === "0 to 100") {
      let newData = result.filter((elem) => {
        return elem.charges <= 100;
      });
      result = newData;
    }
    if (this.props.fcharges === "100 to 500") {
      let newData = result.filter((elem) => {
        return elem.charges > 100 && elem.charges <= 500;
      });
      result = newData;
    }
    if (this.props.fcharges === "500 to 1000") {
      let newData = result.filter((elem) => {
        return elem.charges > 500 && elem.charges <= 1000;
      });
      result = newData;
    }
    if (this.props.fcharges === "more than 1000") {
      let newData = result.filter((elem) => {
        return elem.charges > 1000;
      });
      result = newData;
    }

    if (this.props.fparking === "Parking") {
      return result;
    }

    if (this.props.fparking === "Yes") {
      let newData = result.filter((elem) => {
        return elem.parking === "Yes";
      });
      result = newData;
    }
    if (this.props.fparking === "No") {
      let newData = result.filter((elem) => {
        return elem.parking === "No";
      });
      result = newData;
    }
    if (this.props.fparking === "OnRoad") {
      let newData = result.filter((elem) => {
        return elem.parking === "OnRoad";
      });
      result = newData;
    }

    if (this.props.fstay === "Stay") {
      return result;
    }
    if (this.props.fstay === "Yes") {
      let newData = result.filter((elem) => {
        return elem.stayover === "Yes";
      });
      result = newData;
    }
    if (this.props.fstay === "No") {
      let newData = result.filter((elem) => {
        return elem.stayover === "No";
      });
      result = newData;
    }

    if (this.props.fsmoking === "Stay") {
      return result;
    }
    if (this.props.fsmoking === "Yes") {
      let newData = result.filter((elem) => {
        return elem.smoking === "Yes";
      });
      result = newData;
    }
    if (this.props.fsmoking === "No") {
      let newData = result.filter((elem) => {
        return elem.smoking === "No";
      });
      result = newData;
    }
    if (this.props.fbeverages === "Beverages") {
      return result;
    }
    if (this.props.fbeverages === "BYOB") {
      let newData = result.filter((elem) => {
        return elem.beverages === "BYOB";
      });
      result = newData;
    }
    if (this.props.fbeverages === "Not Allowed") {
      let newData = result.filter((elem) => {
        return elem.beverages === "Not Allowed";
      });
      result = newData;
    }
    if (this.props.fbeverages === "On the House") {
      let newData = result.filter((elem) => {
        return elem.beverages === "On the House";
      });
      result = newData;
    }
    return (
      <Fragment>
        <div
          className="d-flex flex-column flex-nowrap  container-fluid pb-5 pl-5 pr-5 wrapper "
          style={{ minHeight: "100vh" }}
        >
          <center className="pb-4 pt-4 ">
            <h4 className="pages">All Parties</h4>
            <hr />
          </center>

          <div className="d-flex flex-row justify-content-around flex-wrap">
            <div class="dropdown pb-2">
              <select
                className="custom-select"
                onChange={(event) => {
                  this.props.dispatch({
                    type: "ftheme",
                    payload: event.target.value,
                  });
                }}
                style={{ width: "200px", height: "40px" }}
              >
                <option value="Theme">Theme</option>
                <option value="Game Night">Game Night</option>
                <option value="Laughter Party">Laughter Party</option>
                <option value="Musical Night">Musical Night</option>
                <option value="Movie Night">Movie Night</option>
                <option value="Quarantine & Chill">Quarantine & Chill</option>
                <option value="Weekend Trip">Weekend Trip</option>
                <option value="House Party">House Party</option>
                <option value="Pool Party">Pool Party</option>
                <option value="Halloween Party">Halloween Party</option>
                <option value="RoadTrip">RoadTrip</option>
                <option value="Trekking">Trekking</option>
                <option value="Gataway">Gataway</option>
              </select>
            </div>
            <div>
              <select
                className="custom-select"
                onChange={(event) => {
                  this.props.dispatch({
                    type: "ftype",
                    payload: event.target.value,
                  });
                }}
              >
                <option value="Type">Type</option>
                <option value="House Party">House Party</option>
                <option value="Online Party">Online Party</option>
                <option value="Outdoor Party">Outdoor Party</option>
                <option value="Pool Party">Pool Party</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div>
              <select
                className="custom-select"
                onChange={(event) => {
                  this.props.dispatch({
                    type: "fcharges",
                    payload: event.target.value,
                  });
                }}
              >
                <option value="Charges">Charges</option>
                <option value="0 to 100">0 to 100</option>
                <option value="100 to 500">100 to 500</option>
                <option value="500 to 1000">500 to 1000</option>
                <option value="more than 1000">more than 1000</option>
              </select>
            </div>
            <div>
              <select
                className="custom-select"
                onChange={(event) => {
                  this.props.dispatch({
                    type: "fparking",
                    payload: event.target.value,
                  });
                }}
              >
                <option value="Parking">Parking</option>
                <option value="Yes">Yes</option>
                <option value="">No</option>
                <option value="OnRoad">On Road</option>
              </select>
            </div>

            <div>
              <select
                className="custom-select"
                onChange={(event) => {
                  this.props.dispatch({
                    type: "fstay",
                    payload: event.target.value,
                  });
                }}
              >
                <option value="Stay">Stay</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <select
                className="custom-select"
                onChange={(event) => {
                  this.props.dispatch({
                    type: "fsmoking",
                    payload: event.target.value,
                  });
                }}
              >
                <option value="Smoking">Smoking</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <select
                className="custom-select"
                onChange={(event) => {
                  this.props.dispatch({
                    type: "fbeverages",
                    payload: event.target.value,
                  });
                }}
              >
                <option value="Beverages">Beverages</option>
                <option value="BYOB">BYOB</option>
                <option value="Not Allowed">Not Allowed</option>
                <option value="On the House">On the House</option>
              </select>
            </div>
          </div>

          <div className="d-flex flex-row flex-wrap justify-content-around pt-5 mt-3">
            {!result[0] ? (
              <h2 className="text-secondary">Events not available!</h2>
            ) : (
              result.map((item) => {
                return (
                  <div
                    className="card event mb-5"
                    style={{ width: "35vw" }}
                    onClick={() => this.sendId(item)}
                  >
                    <img
                      className="card-img-top"
                      src={item.image}
                      alt=""
                      style={{ height: "300px", width: "100%" }}
                    />
                    <div className="card-body ">
                      <div className="d-flex flex-row justify-content-between flex-wrap pb-2">
                        <h5 className="card-title">
                          {item.host.name}'s {item.type}
                        </h5>
                        <p className="card-text align-self-center pt-3">
                          {item.theme}
                        </p>
                      </div>
                      <div className="d-flex flex-row justify-content-between flex-wrap pb-2">
                        <h5 className="card-text">{item.location}</h5>
                        <p className="card-text">
                          {item.date} | {item.start_time} to {item.end_timing}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

const fromStroe = (state) => {
  return {
    show: state.show,
    allEvent: state.allEvent,
    selectedEventId: state.selectedEventId,
    selectedEventData: state.selectedEventData,
    userData: state.userData,
    ftheme: state.ftheme,
    ftype: state.ftype,
    fcharges: state.fcharges,
    fparking: state.fparking,
    fstay: state.fstay,
    fsmoking: state.fsmoking,
    fbeverages: state.fbeverages,
  };
};
export default connect(fromStroe)(Allparties);
