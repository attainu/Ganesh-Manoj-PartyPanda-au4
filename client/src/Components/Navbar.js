import React from "react";
import Panda from "./Panda.png";

class NavBar extends React.Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-light bg-light py-0">
                        <div className="d-flex justify-content-start ">
                            <button class="btn">Home</button>
                            <button class="btn">About Us</button>
                        </div>
                        <img src={Panda} alt="" style={{"width":"50px"}}/>
                        <div className="d-flex justify-content-end">
                            <button class="btn">Contact Us</button>
                            <button class="btn">SignIn</button>
                        </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;