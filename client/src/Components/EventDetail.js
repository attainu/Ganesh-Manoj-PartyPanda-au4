import React from "react";

class EventDetail extends React.Component{
    render(){
        return(
            <div className="container-fluid d-flex  bg-light flex-column ">
                {/* heading */}
                <div className=" text-center py-3">
                    <h1>Event Details</h1>
                </div>
                {/* content */}
                <div className="container d-flex flex-column flex-nowrap mt-3 ">
                    <div className="col-md-8 offset-md-2">
                        <div className="d-flex justify-content-around pt-3" style={{"borderRadius":"20px","backgroundColor":"gainsboro"}}>
                            <div className="d-flex flex-column justify-content-center">
                                <img  src="https://img.icons8.com/ios-filled/50/000000/parking.png" style={{"width":"40px","height":"40px"}}/>
                                <p >Parking</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <img src="https://img.icons8.com/ios-filled/50/000000/smoking.png" style={{"width":"40px","height":"40px"}}/>
                                <p>Smoking</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <img src="https://img.icons8.com/android/24/000000/home.png" style={{"width":"40px","height":"40px"}}/>
                                <p>Stayover</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <img src="https://img.icons8.com/ios-filled/50/000000/alcoholic-beverage-licensing.png" style={{"width":"40px","height":"40px"}}/>
                                <p>BYOB</p>
                            </div>
                        </div>
                        <div className="card mt-2 border border-white" style={{"borderRadius":"35px"}}>
                            <div className="card-body ">
                                <h3 className="text-dark">Avinash's Outdoor Party</h3>
                                <hr/>
                                <div className="d-flex flex-column">
                                    <div className="d-flex flex-row py-0" style={{"float":"left"}}>
                                        <img src="https://img.icons8.com/material-sharp/24/000000/planner.png" style={{"width":"30px","height":"30px"}}/>
                                        <p className="text-muted  ml-1">Mon, 27-Apr at 11:0 AM - 2:0 PM</p>
                                    </div>
                                    <div className="d-flex flex-row py-0" style={{"float":"left"}}>
                                    <img src="https://img.icons8.com/material-rounded/24/000000/location-marker.png" style={{"width":"30px","height":"30px"}}/>
                                        <p className="text-muted pt-1 ml-1">Meghalaya (Revealed after payment)</p>
                                    </div>
                                    <div className="d-flex flex-row py-0" style={{"float":"left"}}>
                                        <img src="https://img.icons8.com/ios-glyphs/30/000000/apple-music.png" style={{"width":"30px","height":"30px"}}/>
                                        <p className="text-muted pt-1 ml-1">Nature</p>
                                    </div>
                                </div>
                                <hr/>
                                <div>
                                    <h5 className=" pt-1 pb-2">What to expects?</h5>
                                    <p className="text-muted">It is a one of a Kind outdoor experiance, and 
                                        i am here to look for 3 more like-minded people to join my group.
                                        Full itinerary will be shared on WhatsApp.
                                        It's a 5N/6D plan on caravan.
                                    </p>
                                </div>
                                <hr/>
                                <div>
                                    <h5 className=" pt-1 pb-2 " >Event Ediquettes</h5>
                                    <div className="text-muted text-left">
                                        <p >1. Sport Camraderie</p>
                                        <p>2. Dont expect spot on bike or in car unless specified</p>
                                        <p>3. If needed, detailed itinerary will be shared in WhatsApp group to confirmed people.</p>
                                        <p>4. Take a kickAss SS and Tag @partyherd_on IG</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-around">
                                    <h6>Contribution per person: 15000</h6>
                                    <h6> Inviting People: 6</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* submit button */}
                <div className="d-flex justify-content-center py-5">
                    <button className="btn btn-secondary" style={{"borderRadius":"20px"}}>Join Event</button>
                </div>
            </div>
        )
    }
}

export default EventDetail;