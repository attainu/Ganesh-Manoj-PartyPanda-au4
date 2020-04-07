import React from "react";

class MyEventDetail extends React.Component{
    render(){
        return(
            <div className="container-fluid d-flex bg-light flex-column ">
                <h1 className="text-center text-dark">My Event Detail</h1>
                {/* content */}
                <div className="container d-flex flex-column flex-nowrap mt-1 ">
                    <div className="d-flex flex-column">
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
                        <div className="card mt-1 bg-light" style={{"border":"none"}}>
                            <div className="card-body" >
                                <div className="d-flex flex-row flex-wrap justify-content-around">
                                    <div className="d-flex flex-column  border border-white shadow bg-white col-md-5 mt-1 py-2 px-2" style={{"borderRadius":"35px"}}>
                                        <h3 className="text-dark">When & Where</h3>
                                        <hr/>
                                        <div className="d-flex flex-column">
                                            <div className="d-flex flex-row py-0" >
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
                                    </div>
                                    <div className="d-flex flex-column col-md-5 shadow border border-white bg-white mt-1 py-2 px-2" style={{"borderRadius":"35px"}}>
                                        <h3 className=" pt-1 pb-2 text-dark">What to expects?</h3>
                                        <p className="text-muted pt-4">It is a one of a Kind outdoor experiance, and 
                                            i am here to look for 3 more like-minded people to join my group.
                                            Full itinerary will be shared on WhatsApp.
                                            It's a 5N/6D plan on caravan.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row flex-wrap justify-content-around mt-1">
                                    <div className="d-flex flex-column shadow border border-white bg-white col-md-5 mt-1 py-2 px-2" style={{"borderRadius":"35px"}}>
                                        <h3 className="text-dark">Event Ediquettes</h3>
                                        <hr/>
                                        <div className="d-flex flex-column">
                                            <div className="text-muted text-left">
                                                <p className="py-0">1. Sport Camraderie</p>
                                                <p className="py-0">2. Dont expect spot on bike or in car unless specified</p>
                                                <p className="py-0">3. If needed, detailed itinerary will be shared in WhatsApp group to confirmed people.</p>
                                                <p className="py-0">4. Take a kickAss SS and Tag @partyherd_on IG</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row flex-wrap justify-content-around" style={{"fontSize":"20px"}}>
                            <p><b>Cost per person: 15000</b></p>
                            <p><b>Inviting People: 6</b></p>
                        </div>
                    </div>
                </div>
                {/* submit button */}
                <div className="d-flex flex-row flex-wrap justify-content-center pb-3">
                    <button className="btn btn-info mr-1" style={{"borderRadius":"20px"}}>Edit Event</button>
                    <button className="btn btn-danger" style={{"borderRadius":"20px"}}>Delete Event</button>
                </div>
            </div>
        )
    }
}

export default MyEventDetail;