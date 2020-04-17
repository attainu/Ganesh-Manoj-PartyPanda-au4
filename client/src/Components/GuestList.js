import { connect } from "react-redux";
import React, { Fragment } from "react";

class GuestList extends React.Component {
  render() {
    return (
      <Fragment>
        <div
          className="continer w-75 text-center pt-5 mt-3"
          style={{ margin: "auto" }}
        >
          <div
            class="card d-flex flex-row flex-wrap border border-success"
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
              src="https://images.unsplash.com/photo-1585056545745-6fc697a036b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
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
                  Veronica
                </h3>
                <p className="card-text">
                  Student | IES college | Introvert | 20 years | Female |
                  +918652302007
                </p>
              </div>
              <div className="d-flex flex-column">
                <p
                  className="card-title"
                  style={{ marginTop: "1rem", marginBottom: "0" }}
                >
                  Bio
                </p>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="d-flex flex-row flex-wrap pt-3 ">
                <a href="#" class="btn btn-danger mr-4">
                  Reject
                </a>
                <a href="#" class="btn btn-success ml-4">
                  Accept
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const fromStroe = (state) => {
  return state;
};

export default connect(fromStroe)(GuestList);
