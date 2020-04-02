import React, { Fragment } from "react";
import NavBar from "./component/navBar";
import Signup from "./Components/Signup";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid-lg">
          <NavBar />
          <Signup />
        </div>
      </Fragment>
    );
  }
}

export default App;
