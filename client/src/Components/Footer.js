import React from "react";
import "./../style/footer.css";
import Animal from "./../images/animal.png";
import { connect } from "react-redux";

class Footer extends React.Component {
  render() {
    return (
      <div class="footer ">
        <div className="col-md-2" id="footer-left">
          <h4 className="text-center">Contact Us</h4>
          <form id="contact-form">
            <input className="form-control" type="text" placeholder="Name.." />
            <input
              className="form-control"
              type="email"
              placeholder="Email.."
            />
            <input
              className="form-control"
              type="number"
              placeholder="Mobile no.."
            />
            <textarea
              className="form-control"
              placeholder="Query Or Complaint.."
            />
            <button
              className="btn border border-white mt-2"
              style={{ "border-radius": "25px", float: "right" }}
            >
              Submit
            </button>
          </form>
        </div>
        <div id="footer-right">
          <img src={Animal} id="footer-img" alt="" />
        </div>
        <div id="footer-center">
          <h5 style={{ paddingTop: "90px" }}>Social Media Links</h5>
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
      </div>
    );
  }
}

const fromStroe = state => {
  return {
    show: state.show
  };
};
export default connect(fromStroe)(Footer);
