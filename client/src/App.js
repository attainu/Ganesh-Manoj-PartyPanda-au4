import React, { Fragment } from "react";
import Navbar from "./Components/Navbar"
import Signup from "./Components/Signup";
import Home from "./Components/Home";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid-lg">
          <Navbar />
          <Home/>
          <Signup />
        </div>
      </Fragment>
    );
  }
}

export default App;
