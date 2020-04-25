import React, { Fragment } from "react";
import Red from "../images/dome.jpg";
import Shirt from "../images/standing.jpg";
import Party from "../images/beer.png";
import Screening from "../images/screening.png";
import Lan from "../images/Lanparty.png";
import Soccer from "../images/soccer.png";
import Motor from "../images/motorcycle.png";
import Trekking from "../images/trekking.png";
import "./../style/home.css";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    // if (localStorage.Token) {
    //   if (this.props.userData.mobile === 987654) {
    //     return <Redirect to="/admin" />;
    //   }
    // }
    // console.log(this.props.show);
    return (
      <Fragment>
        <div className="wrapper">
          <div>
            <img src={Red} alt="" style={{ width: "100%", height: "500px" }} />
            <div id="caption" className="text-white">
              <h1>Welcome To Party Panda</h1>
              <h4>Find likeminded people for recreational activities</h4>
              <div>
                <Link to="/allevents"><button id="send">Join Event</button></Link>
                <Link to="/create-event"><button id="send">Create Event</button></Link>
              </div>
            </div>

          </div>
          {/* About us container */}
          <div className="container  mt-5">
            <div
              class="card border border-light"
              style={{
                "max-width": "100%",
                border: "none",
                padding: "50px",
                "border-radius": "35px",
              }}
            >
              <div class="row no-gutters">
                <div class="col-md-4 d-flex justify-content-center">
                  <img
                    src={Shirt}
                    class="card-img "
                    alt="..."
                    style={{
                      width: "320px",
                      height: "300px",
                      "border-radius": "10px",
                    }}
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body text-center">
                    <h1 class="card-title about ">About Us</h1>
                    <p
                      class="card-text  "
                      style={{
                        "padding-left": "70px",
                        "padding-right": "70px",
                      }}
                    >
                      PartyPanda gives you the real socializing experience
                      bringing out the best of both online and offline life. We
                      make sure you connect with right people and have a healthy
                      social life. Come. Explore.
                    </p>

                    <Link to="/allevents">
                      <button
                        id="send"
                        className="flex-nowrap  my-4 "
                        style={{ height: "3rem", width: "10rem" }}
                      >
                        Join the Party
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Party Ideas */}
          <div className="container  mt-5" style={{ "border-radius": "35px" }}>
            <h1 className="text-center theme">Party Ideas</h1>
            <div className="row " style={{ padding: "20px" }}>
              <div className="col-md-4  d-flex justify-content-center">
                <div
                  class="card idea"
                  style={{ width: "20rem", "border-radius": "25px" }}
                >
                  <div class="card-body text-center">
                    <img src={Party} alt="" style={{ width: "50px" }} />
                    <h5 class="card-title ">
                      <b>House Party</b>
                    </h5>
                    <p class="card-text ">
                      The ultimate social gathering. Large or small crowd, dance
                      to the beat or chill, the choice is yours. Meet prudent
                      individuals and mindful millennials in the comfort of the
                      house. All you need is chilled drink, good music and a
                      real squad.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4  d-flex justify-content-center">
                <div
                  class="card idea"
                  style={{ width: "20rem", "border-radius": "25px" }}
                >
                  <div class="card-body text-center">
                    <img src={Screening} alt="" style={{ width: "50px" }} />
                    <h5 class="card-title ">
                      <b>Screening</b>
                    </h5>
                    <p class="card-text ">
                      EPL, Wimbledon or IPL, screen your sport at your place or
                      simply join others. Watch the action. Shout for your team.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4  d-flex justify-content-center">
                <div
                  class="card idea"
                  style={{ width: "20rem", "border-radius": "25px" }}
                >
                  <div class="card-body text-center">
                    <img src={Lan} alt="" style={{ width: "50px" }} />
                    <h5 class="card-title ">
                      <b>LAN Party</b>
                    </h5>
                    <p class="card-text ">
                      Come together for some serious social gaming. Prepare for
                      battle. Join forces or compete head-to-head. Devise a
                      strategy, form an alliance and conquer your opponents.
                      Bring along your gadgets to take some top-notch headshots.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-5 d-flex justify-content-center">
                <div
                  class="card idea"
                  style={{ width: "20rem", "border-radius": "25px" }}
                >
                  <div class="card-body text-center">
                    <img src={Soccer} alt="" style={{ width: "50px" }} />
                    <h5 class="card-title ">
                      <b>Football Party</b>
                    </h5>
                    <p class="card-text ">
                      “I learned all about life with a ball at my feet” –
                      Ronaldinho.
                      <br />
                      Explore the opportunity of playing your game without
                      worrying about the team, or the hectic routine. Make a
                      team, plan a match at your convenience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-5 d-flex justify-content-center">
                <div
                  class="card idea"
                  style={{ width: "20rem", "border-radius": "25px" }}
                >
                  <div class="card-body text-center">
                    <img src={Motor} alt="" style={{ width: "50px" }} />
                    <h5 class="card-title ">
                      <b>Road Trips</b>
                    </h5>
                    <p class="card-text ">
                      “Just DO It! … and say a little prayer.” – Lugene Hessler
                      Hammond
                      <br />
                      Get on the wheels, explore the new landscapes with people
                      just like you. Join the community, wherever you go.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-5 d-flex justify-content-center">
                <div
                  class="card idea"
                  style={{ width: "20rem", "border-radius": "25px" }}
                >
                  <div class="card-body text-center">
                    <img src={Trekking} alt="" style={{ width: "50px" }} />
                    <h5 class="card-title ">
                      <b>Treks and Hikes</b>
                    </h5>
                    <p class="card-text ">
                      “In every walk with nature, one receives far more than he
                      seeks.” – John Muir
                      <br />
                      Keep looking till you find treasure. Spend your weekends
                      in a way which gets you rocking inside out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* team member container */}
          <div
            className="container border border-light mt-5 pb-5"
            style={{ "border-radius": "35px" }}
          >
            <h1 className="text-center theme">Team</h1>
            <div className="row   text-center mt-5">
              <div className="col-md-6 d-flex justify-content-center">
                <div
                  class="card"
                  style={{ width: "20rem", "border-radius": "10px" }}
                >
                  <img
                    src={Red}
                    class="card-img-top"
                    alt=""
                    style={{
                      height: "250px",
                      "border-radius": "10px 10px 0px 0px",
                    }}
                  />
                  <div class="card-body">
                    <h5 class="card-title text-dark">Manoj Kumar</h5>
                    <p class="card-text text-secondary">Founder</p>
                    <p class="card-text text-secondary">DITE Delhi, 2017</p>
                    <div className="d-flex justify-content-center">
                      <a
                        href="https://github.com/manoj-kumar-vst-au4"
                        className="text-dark mr-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          class="fa fa-github"
                          aria-hidden="true"
                          style={{ "font-size": "24px" }}
                        ></i>
                      </a>
                      <a
                        className=" text-dark px-1"
                        href="https://www.linkedin.com/in/manoj-kumar-119883193"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          class="fa fa-linkedin"
                          aria-hidden="true"
                          style={{ "font-size": "24px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <div
                  class="card mem"
                  style={{ width: "20rem", "border-radius": "10px" }}
                >
                  <img
                    src={Shirt}
                    class="card-img-top"
                    alt=""
                    style={{
                      height: "250px",
                      "border-radius": "10px 10px 0px 0px",
                    }}
                  />
                  <div class="card-body">
                    <h5 class="card-title text-dark">Ganesh Dasari</h5>
                    <p class="card-text text-secondary">Founder</p>
                    <p class="card-text text-secondary">TMV Mumbai, 2017</p>
                    <div className="d-flex justify-content-center">
                      <a
                        href="https://github.com/ganesh-dasari-vst-au4"
                        className="text-dark mr-1"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i
                          class="fa fa-github"
                          aria-hidden="true"
                          style={{ "font-size": "24px" }}
                        ></i>
                      </a>
                      <a
                        className=" text-dark px-1"
                        href="https://www.linkedin.com/in/ganesh-dasari-786096172/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i
                          class="fa fa-linkedin"
                          aria-hidden="true"
                          style={{ "font-size": "24px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const fromStroe = (state) => {
  return {
    show: state.show,
    userData: state.userData,
  };
};
export default connect(fromStroe)(Home);
