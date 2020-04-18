import React, { Fragment } from "react";
import {Redirect} from "react-router-dom";
import { connect } from "react-redux";
import Dome from "./../images/dome.jpg";
import "./../style/allparties.css";


class Allparties extends React.Component {
 sendId =(data) =>{
   let id = data._id;
  //  console.log(id);
  this.props.dispatch({type:"eventId", payload: id})
 }
  render() {
    if(this.props.selectedEventId){
      return <Redirect to="/event-detail" />
    }
    let allEvent = this.props.allEvent;
    return (
      <Fragment>
        <div className="d-flex flex-column flex-nowrap justify-content-center container-fluid pb-5 pl-5 pr-5 wrapper ">
          <center className="pb-4 pt-4 ">
            <h4 className="pages">All Parties</h4>
            <hr />
          </center>
          <div className="d-flex flex-row flex-wrap justify-content-around">
            {allEvent.map(item =>{
              return(
                <div className="card event mb-5" style={{ width: "35vw" }} onClick={() =>this.sendId(item)}>
              <img className="card-img-top" src={item.image} alt="Card image cap"  style={{"height":"300px","width":"100%"}}/>
              <div className="card-body ">
                <div className="d-flex flex-row justify-content-between flex-wrap pb-2">
                  <h5 className="card-title">{item.host.name}'s {item.theme}</h5>
                  <p className="card-text align-self-center pt-3">
                    {item.type}
                  </p>
                </div>
                <div className="d-flex flex-row justify-content-between flex-wrap pb-2">
                  <h5 className="card-text">{item.location}</h5>
              <p className="card-text">{item.date} |  {item.start_time} to {item.end_timing}</p>
                </div>
              </div>
            </div>
              )
            })}
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
    selectedEventId: state.selectedEventId
  };
};
export default connect(fromStroe)(Allparties);
