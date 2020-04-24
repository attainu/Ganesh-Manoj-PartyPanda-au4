import React, { Component } from 'react'
import axios from "axios";
import {connect} from "react-redux";

class Feedback extends Component {

    componentDidMount = () =>{
        axios.get("http://localhost:3010/feedback").then(
            res =>{
                this.props.dispatch({ type:"feedback" , payload:res.data}) 
            }
        ).catch(
            err => console.log(err)
        )
    }
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center  bg-light ">
                <div className="d-flex flex-column">
                    <h1 className="text-center text-secondary my-5">Feedback</h1>
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
        feedback : state.feedback
    }
}
export default connect(fromStore)(Feedback);