import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./../style/allparties.css";
import dome from "./../images/dome.jpg";
import axios from "axios";

class Attending extends React.Component {
  state={
    id: ""
  }

  async componentDidMount() {
    let res = await axios.get("http://localhost:3010/join");

    let result = await res.data.map((elem, index) => {
      if (this.props.userData._id === elem.user._id) return elem;
    });
    if (result) {
      await this.props.dispatch({ type: "attending", payload: result });
    }
  }

  sendId = async (id) => {
    console.log(id);
    this.setState({
      id: id
    })
    
  };

  render() {
    if (this.state.id) {
      let id = this.state.id;
      let link = `/event-detail/${id}`
      return <Redirect to={link} />;
    }
    window.onhashchange = function () {
      this.props.dispatch({ type: "back" });
    };

    return (
      <Fragment>
        {console.log(this.props.attending)}
        <div className="d-flex flex-column flex-nowrap justify-content-center container-fluid pb-5 pl-5 pr-5 wrapper ">
          <center className="pb-4 pt-4 ">
            <h4 className="pages">Attending</h4>
            <hr />
          </center>
          <div className="d-flex flex-row flex-wrap justify-content-around">
            {this.props.attending.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="card event mb-5"
                  style={{ width: "35vw" }}
                  onClick={() => this.sendId(elem.party._id)}
                >
                  <img
                    className="card-img-top"
                    src={elem.party.image}
                    alt="Card image cap"
                    style={{ height: "300px", width: "100%" }}
                  />

                  <div className="card-body ">
                    <div className="d-flex flex-row justify-content-between flex-wrap pb-2">
                      <h5 className="card-title">
                        {elem.party.host.name}'s {elem.party.type}
                      </h5>
                      <p className="card-text align-self-center pt-3">
                        {elem.party.theme}
                      </p>
                    </div>
                    <div className="d-flex flex-row justify-content-between flex-wrap pb-2">
                      <h5 className="card-text">{elem.party.location}</h5>
                      <p className="card-text">
                        {elem.party.date} | {elem.party.start_time} to{" "}
                        {elem.party.end_time}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

const fromStroe = (state) => {
  return {
    userData: state.userData,
    attending: state.attending,
  };
};
export default connect(fromStroe)(Attending);
