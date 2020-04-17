import React, { Fragment } from "react";

import { connect } from "react-redux";

import Dome from "./../images/dome.jpg";
import "./../style/allparties.css";

class Myparty extends React.Component {
  
  render() {
      let events = this.props.allEvent;
      let user = this.props.userData;
      let myEvent = [];
       events.filter(event => 
          {
            if(event.host._id == user._id){
              myEvent.push(event);
            }else{
              console.log("not matched")
            }
          }
        );
        console.log(myEvent)
    return (
      <Fragment>
        <div className="d-flex flex-column flex-nowrap justify-content-center container-fluid pb-5 pl-5 pr-5 wrapper ">
          <center className="pb-4 pt-4 ">
            <h4 className="pages">My Party</h4>
            <hr />
          </center>
          <div className="d-flex flex-row flex-wrap justify-content-around">
            {myEvent.map( event =>{
              return (
                <div className="card event mb-5" style={{ width: "35vw" }}>
                <img className="card-img-top" src={event.image} alt="Card image cap" style={{"height":"300px","width":"100%"}} />
                <div className="card-body ">
                  <div className="d-flex flex-row justify-content-between flex-wrap pb-2">
                    <h5 className="card-title">{event.host.name}'s {event.theme}</h5>
                    <p className="card-text align-self-center pt-3">
                      {event.type}
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between flex-wrap pb-2">
                    <h5 className="card-text">{event.exact_location}</h5>
                    <p className="card-text">{event.date} | {event.start_time} to {event.end_timing}</p>
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
    userData: state.userData,
    myEvent: state.myEvent
  };
};
export default connect(fromStroe)(Myparty);
