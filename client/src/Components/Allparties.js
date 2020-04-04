import React, { Fragment } from "react";

import { connect } from "react-redux";

import Dome from "./../images/dome.jpg";
import "./../style/allparties.css";

class Allparties extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="d-flex flex-column flex-nowrap justify-content-center container-fluid pb-5 pl-5 pr-5 wrapper ">
          <center className="pb-5 pt-5 ">
            <h4 className="pages">All Parties</h4>
            <hr />
          </center>
          <div className="d-flex flex-row flex-wrap justify-content-around">
            <div className="card mem mb-5" style={{ width: "35vw" }}>
              <img className="card-img-top" src={Dome} alt="Card image cap" />
              <div className="card-body ">
                <div className="d-flex flex-row justify-content-between flex-wrap pb-2">
                  <h5 className="card-title">Manisha's House Party</h5>
                  <p className="card-text align-self-center pt-3">
                    Couple Party
                  </p>
                </div>
                <div className="d-flex flex-row justify-content-between flex-wrap pb-2">
                  <h5 className="card-text">Andheri Mumbai</h5>
                  <p className="card-text">Sat, 14-May | 8.00 pm</p>
                </div>
              </div>
            </div>
            <div className="card mem mb-5" style={{ width: "35vw" }}>
              <img className="card-img-top" src={Dome} alt="Card image cap" />
              <div className="card-body ">
                <div className="d-flex flex-row justify-content-between flex-wrap pb-2">
                  <h5 className="card-title">Manisha's House Party</h5>
                  <p className="card-text align-self-center pt-3">
                    Couple Party
                  </p>
                </div>
                <div className="d-flex flex-row justify-content-between flex-wrap pb-2">
                  <h5 className="card-text">Andheri Mumbai</h5>
                  <p className="card-text">Sat, 14-May | 8.00 pm</p>
                </div>
              </div>
            </div>
            <div className="card mem mb-5" style={{ width: "35vw" }}>
              <img className="card-img-top" src={Dome} alt="Card image cap" />
              <div className="card-body ">
                <div className="d-flex flex-row justify-content-between flex-wrap pb-2">
                  <h5 className="card-title">Manisha's House Party</h5>
                  <p className="card-text align-self-center pt-3">
                    Couple Party
                  </p>
                </div>
                <div className="d-flex flex-row justify-content-between flex-wrap pb-2">
                  <h5 className="card-text">Andheri Mumbai</h5>
                  <p className="card-text">Sat, 14-May | 8.00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const fromStroe = (state) => {
  return {
    show: state.show,
  };
};
export default connect(fromStroe)(Allparties);
