import React from "react";
import "../Home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="container-1">
        <div className="fluid-conatiner">
          <img
            src="https://image.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg"
            alt="image"
          />
        </div>
        <div className="container-1-b">
          <p>seamless meetings!</p>
        </div>
      </div>
      <div className="container-2">
        <div className="container-2-a">
          <button type="button" className="btn-home btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
