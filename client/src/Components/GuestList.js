import { connect } from "react-redux";
import React, { Fragment } from "react";
import axios from "axios";

class GuestList extends React.Component {
  handleAccept(id) {
    axios
      .put(`http://localhost:3010/join?id=${id}&status=true`)
      .then((res) => {
        alert("Status Updated");
      })
      .catch((error) => {
        alert("Falied to update", error);
      });
  }
  handleReject(id) {
    axios
      .put(`http://localhost:3010/join?id=${id}&status=false`)
      .then((res) => {
        alert("Status Updated");
      })
      .catch((error) => {
        alert("Falied to update", error);
      });
  }

  async componentDidMount() {
    let event = this.props.selectedMyEventId;
    console.log("eve", event);
    let res = await axios.get("http://localhost:3010/join");

    let result = res.data.filter((elem, index) => {
      if (event === elem.party._id) {
        return elem;
      }
    });

    if (result) {
      await this.props.dispatch({ type: "Guests", payload: result });
    }
  }

  render() {
    return (
      <Fragment>
        <div
          className="continer w-75 text-center pt-5 mt-3"
          style={{ margin: "auto" }}
        >
          {this.props.guests.map((elem, index) => {
            return (
              <div
                className={
                  elem.status === true
                    ? "card d-flex flex-row flex-wrap border border-success"
                    : "card d-flex flex-row flex-wrap border border-danger"
                }
                style={{ width: "90%", margin: "auto" }}
              >
                <img
                  class="card-img-top mt-3 "
                  style={{
                    marginLeft: "2.3rem",
                    height: "10rem",
                    width: "10rem",
                    borderRadius: "50%",
                  }}
                  src={elem.user.image}
                  alt="Card image cap"
                />
                <div class="card-body p-3 d-flex flex-column ">
                  <div className="d-flex flex-column">
                    <h3
                      class="card-title"
                      style={{
                        fontSize: "1.8rem",
                        marginTop: "0",
                        marginBottom: "0",
                      }}
                    >
                      {elem.user.name}
                    </h3>
                    <p className="card-text">
                      {elem.user.profession} | {elem.user.company} |{" "}
                      {elem.user.interest} | 20 years | {elem.user.gender} |
                      {elem.user.mobile}
                    </p>
                  </div>
                  <div className="d-flex flex-column">
                    <p
                      className="card-title"
                      style={{ marginTop: "1rem", marginBottom: "0" }}
                    >
                      Bio
                    </p>
                    <p class="card-text">{elem.user.bio}</p>
                  </div>
                  <div className="d-flex flex-row flex-wrap pt-3 ">
                    <button
                      class="btn btn-danger mr-3"
                      onClick={() => {
                        this.handleReject(elem._id);
                      }}
                    >
                      Reject
                    </button>
                    <button
                      class="btn btn-success ml-3"
                      onClick={() => {
                        this.handleAccept(elem._id);
                      }}
                    >
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

const fromStroe = (state) => {
  return { selectedMyEventId: state.selectedMyEventId, guests: state.guests };
};

export default connect(fromStroe)(GuestList);
