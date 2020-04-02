import React from 'react';
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";

class App extends React.Component{
  render(){
    return(
      <div className="container-fluid-lg">
        <NavBar/>
        <Home/>
      </div>
    )
  }
}

export default App;
