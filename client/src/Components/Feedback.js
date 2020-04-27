import React, { Component } from 'react'
import axios from "axios";
import {connect} from "react-redux";
import { Redirect} from "react-router-dom";

class Feedback extends Component {

    componentDidMount = () =>{
        axios.get("/feedback").then(
            res =>{
                this.props.dispatch({ type:"feedback" , payload:res.data}) 
            }
        ).catch(
            err => console.log(err)
        )
    }
    render() {
        if (!localStorage.Token || this.props.userData.mobile !== 9953776615) {
            return <Redirect to="/signin" />;
        }
        return (
            <div className="container-fluid d-flex justify-content-center  bg-light ">
                <div className="d-flex flex-column">
                    <h1 className="text-center text-dark my-5">Feedback</h1>
                    {this.props.feedback ? this.props.feedback.map(feedback =>{
                    return(
                        <div class="card mb-5 shadow rounded-lg" style={{"width" : "650px", "border":"none"}}>
                            <div class="card-body" >
                                <h5 class="card-title text-left">Name:{feedback.name}</h5>
                                <h5 class="card-title text-left">Email:{feedback.email}</h5>
                                <h5 class="card-title text-left">Mobile No:{feedback.mobile}</h5>
                                <h5 class="card-title text-left">Feedback:{feedback.concern}</h5>
                            </div>
                        </div>
                    )
                }) : <h1 className="text-center mt-5 pt-5 text-secondary">There is no feedback to show!</h1>}
                </div>
            </div>
        )
    }
}

const fromStore = (state) =>{
    return {
        feedback : state.feedback,
        userData : state.userData
    }
}
export default connect(fromStore)(Feedback);