import React from "react";
import "../About.css";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="about-page">
    <Navbar />
      <div className="container-cards">
        <div className="card-about card0">
          <div className="border-card">
            <h2>Al Pacino</h2>
            <div className="icons">
              
              <i className="fa fa-instagram" aria-hidden="true"></i>
              
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="card-about card1">
          <div className="border-card">
            <h2>Ben Stiller</h2>
            <div className="icons">
              
              <i className="fa fa-instagram" aria-hidden="true"></i>
             
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="card-about card2">
          <div className="border-card">
            <h2>Patrick Stewart</h2>
            <div className="icons">
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
