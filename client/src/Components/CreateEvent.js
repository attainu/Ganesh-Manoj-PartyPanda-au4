import React from "react";

class CreateEvent extends React.Component{
    render(){
        return(
            <div className="container-fluid bg-light">
                <div className="card text-center bg-light mt-0" style={{"border":"none"}} >
                    <h2 className="text-center text-dark mt-3 ">Create Event</h2>
                    <div className="card-body d-flex justify-content-center">
                        <form className="form-group col-md-5 d-flex text-dark justify-content-center bg-white text-left border border-light   py-3" style={{"border-radius":"35px"}} >
                            <div style={{"width":"300px"}}>
                            <div className="mb-3" >
                                <label >Theme:</label>   
                                <input type="text" className="form-control" required/>
                            </div>
                            <div className="mb-3">
                                <label >City:</label>  
                                <input type="text" className="form-control" required/>
                            </div>
                            <div className="mb-3">
                            <label  >Location Of Event:</label>  
                                <input type="text" className="form-control" required/>
                            </div>
                            <div className="mb-3" >
                            <label  >Event Timing:</label>   
                                <div className="text-center">
                                    <input type="time" className="form-control" required/>
                                    <label >To:</label>
                                    <input type="time" className="form-control" required/>
                                </div>
                            </div>
                            <div className="mb-3">
                            <label  >Event Date</label>   
                                <input type="date" className="form-control" required/>
                            </div>
                            <div className="mb-3">
                            <label  >Strength of Event:</label>   
                                <input type="number" className="form-control" required/>
                            </div>
                            <div className="mb-3" >
                            <label  >Charges per person:</label>   
                                <input type="number" className="form-control" required/>
                            </div>
                            <div className="mb-3">
                                <label  >Parking Availablity:</label>   
                                <div >
                                    <div>
                                        <input type="radio" name="parking"/>
                                        <label>Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="parking"/>
                                        <label>no</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3" >
                                <label  >StayOver:</label>   
                                <div>
                                    <div>
                                        <input type="radio" name="StayOver"/>
                                        <label>Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="StayOver" />
                                        <label>no</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label  >Smoking and Drinking</label>   
                                <div>
                                    <div>
                                        <input type="radio" name="drunk" />
                                        <label>Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="drunk" />
                                        <label>no</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 text-center" >
                            <button className="btn btn-success" style={{"border-radius":"20px"}}>Create Event</button>
                            </div>
                            </div>
                            
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEvent;