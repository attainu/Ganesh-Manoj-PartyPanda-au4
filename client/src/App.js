import React, { Fragment } from "react";
import Navbar from "./Components/Navbar"
import Signup from "./Components/Signup";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid-lg">
          <Navbar />
          <Signup />
        </div>
      </Fragment>
    );
  }
}

export default App;
