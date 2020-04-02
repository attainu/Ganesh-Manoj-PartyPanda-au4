import React from "react";
import Panda from "./panda.png";

class NavBar extends React.Component{
    render(){
        return(
            <div>
                {/* <nav class="navbar navbar-light bg-secondary py-0">
                        <div className="d-flex justify-content-start ">
                            <button class="btn btn-secondary text-dark">Home</button>
                            <button class="btn btn-secondary text-dark">About Us</button>
                        </div>
                        <img src={Panda} alt="panda image" style={{"width":"50px"}}/>
                        <div className="d-flex justify-content-end">
                            <button class="btn btn-secondary text-dark">Contact Us</button>
                            <button class="btn btn-secondary text-dark">SignIn</button>
                        </div>
                </nav> */}
            </div>
        )
    }
}

export default NavBar;