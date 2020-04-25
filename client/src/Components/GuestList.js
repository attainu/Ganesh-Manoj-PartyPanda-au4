import { connect } from "react-redux";
import React, { Fragment } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class GuestList extends React.Component {
  handleAccept(id) {
    let MySwal = withReactContent(Swal);
    axios
      .put(`http://localhost:3010/join?id=${id}&status=true`)
      .then((res) => {
        MySwal.fire("Status Updated", "", "success");
      })
      .catch((error) => {
        MySwal.fire("Status failed to Update!", error, "warning");
      });
  }
  handleReject(id) {
    let MySwal = withReactContent(Swal);
    axios
      .put(`http://localhost:3010/join?id=${id}&status=false`)
      .then((res) => {
        MySwal.fire("Status Updated", "", "success");
      })
      .catch((error) => {
        MySwal.fire("Status failed to Update!", error, "warning");
      });
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
                    ? "card d-flex flex-row flex-wrap border border-success mb-5"
                    : "card d-flex flex-row flex-wrap border border-danger mb-5"
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
                      {elem.user.profession} | {elem.user.company} |
                      {elem.user.interest} |{" "}
                      {new Intl.DateTimeFormat("en-GB", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      }).format(new Date(elem.user.dob))}
                      |{elem.user.gender} |{elem.user.mobile}
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
  return { guests: state.guests };
};

export default connect(fromStroe)(GuestList);
