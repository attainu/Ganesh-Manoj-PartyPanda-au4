import React from "react";
import Red from "./red.jpg";

class Home extends React.Component{
    render(){
        return(
            <div>
                <img src={Red} alt="" style={{"width":"100%", "height":"500px"}}/>
            </div>
        )
    }
}

export default Home;