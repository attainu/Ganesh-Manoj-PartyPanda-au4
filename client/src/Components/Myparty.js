import React, { Fragment } from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./../style/allparties.css";

class Myparty extends React.Component {
  state = {
    id: "",
  };

  sendId = (id) => {
    this.setState({
      id: id,
    });
  };
  render() {
    let events = this.props.allEvent;
    let user = this.props.userData;
    let myEvent = [];
    events.filter((event) => {
      if (event.host._id == user._id) {
        myEvent.push(event);
      } else {
        // console.log("not matched")
      }
    });
    if (this.state.id) {
      let id = this.state.id;
      let link = `/myevent-detail/${id}`;
      return <Redirect to={link} />;
    }
    return (
      <Fragment>
        <div
          className="d-flex flex-column flex-nowrap container-fluid pb-5 pl-5 pr-5 wrapper "
          style={{ minHeight: "70vh" }}
        >
          <center className="pb-4 pt-4 ">
            <h4 className="pages">My Party</h4>
            <hr />
          </center>
          <div className="d-flex flex-row flex-wrap justify-content-around">
            {!myEvent[0] ? (
              <center>
                <h2 className="text-secondary">
                  You have not hosted any Event.
                </h2>
                <h4 className="text-secondary">What are you waiting for?</h4>
              </center>
            ) : (
              myEvent.map((event) => {
                return (
                  <div
                    className="card event mb-5"
                    style={{ width: "35vw" }}
                    onClick={() => this.sendId(event._id)}
                  >
                    <img
                      className="card-img-top"
                      src={event.image}
                      alt="Card image cap"
                      style={{ height: "300px", width: "100%" }}
                    />
                    <div className="card-body ">
                      <div className="d-flex flex-row justify-content-between flex-wrap pb-2">
                        <h5 className="card-title">
                          {event.host.name}'s {event.theme}
                        </h5>
                        <p className="card-text align-self-center pt-3">
                          {event.type}
                        </p>
                      </div>
                      <div className="d-flex flex-row justify-content-between flex-wrap pb-2">
                        <h5 className="card-text">{event.exact_location}</h5>
                        <p className="card-text">
                          {event.date} | {event.start_time} to{" "}
                          {event.end_timing}
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
    userData: state.userData,
  };
};
export default connect(fromStroe)(Myparty);
