import React from "react";
import "./../style/footer.css";
import Animal from "./../images/animal.png";
import { connect } from "react-redux";
import axios from "axios";

class Footer extends React.Component {
  state = {
    name: "",
    email: "",
    mobile: "",
    concern: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSend() {
    axios
      .post("http://localhost:3010/feedback", this.state)
      .then((res) => {
        if (res.data._id) {
          return alert("Feedback Sent");
        } else {
          return alert("Failed to sent Feedback");
        }
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    return (
      <div class="card-footer d-flex flex-row flex-wrap justify-content-between align-items-center">
        <div>
          <img src={Animal} id="footer-img" alt="" />
        </div>
        <div id="footer-center">
          <h5>Social Media Links</h5>
          <div>
            <a href="#" className="text-dark">
              <i class="fa fa-github-square" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-dark">
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-dark">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-dark">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
          <p className="text-warning" style={{ "margin-top": "40px" }}>
            Copyright © 2020, PartyPanda Pvt. Ltd.
          </p>
        </div>
        <div className="col-md-2" style={{ marginRight: "3rem" }}>
          <h4 className="text-center">Contact Us</h4>
          <form id="contact-form">
            <input
              className="form-control"
              name="name"
              type="text"
              placeholder="Name.."
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              className="form-control"
              type="email"
              placeholder="Email.."
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />

            <input
              className="form-control"
              type="number"
              placeholder="Mobile no.."
              name="mobile"
              value={this.state.mobile}
              onChange={this.handleChange}
            />

            <textarea
              className="form-control"
              placeholder="Query Or Complaint.."
              name="concern"
              value={this.state.concern}
              onChange={this.handleChange}
            />

            <button
              className="btn border border-white mt-2"
              style={{ "border-radius": "25px", float: "right" }}
              disabled={
                !this.state.name ||
                !this.state.mobile ||
                !this.state.email ||
                !this.state.concern
                  ? true
                  : false
              }
              onClick={() => {
                this.handleSend();
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const fromStroe = (state) => {
  return {
    show: state.show,
  };
};
export default connect(fromStroe)(Footer);
