import React, { Fragment } from "react";
import GIF from "../images/404.gif";

class Default extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center flex-wrap">
        <div className="d-flex flex-column text-center text-dark my-5">
          <h1>Sorry!</h1>
          <h3>Page not found.</h3>
          <img src = {GIF} style={{"width":"500px"}} />
        </div>
      </div>
    );
  }
}

export default Default;
