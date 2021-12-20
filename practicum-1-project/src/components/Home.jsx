import React, { useEffect, useRef } from "react";
import "../Home.css";
// import Navbar from "./Navbar";
import { gsap } from "gsap";
import "animate.css";

const Home = () => {
  const animeRef = useRef();

  useEffect(() => {
    gsap.to(animeRef.current, { y:"-5%", duration: 1 });
  });
  const animeRef2 = useRef();

  useEffect(() => {
    gsap.to(animeRef2.current, { y: "-100%", duration: 2, delay: 1 });
  });

  const animeRef3 = useRef();

  useEffect(() => {
    gsap.to(animeRef3.current, { y: "-100%", duration:2.8 , delay: 1 });
  });

  return (
    <div>
      <div className="home">
        {/* <Navbar /> */}
        <div className="container-1">
          <div className="fluid-conatiner">
            <img
              src="https://image.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg"
              alt="Someimage"
            />
          </div>
          <div className="container-1-b">
            <p className="animate__swing">seamless meetings!</p>
          </div>
        </div>
        <div className="container-2">
          <div className="container-2-a">
            <button type="button" className="btn-home btn-outline-danger">
             <a href="http://localhost:4000/" target="_blank">
              Instant Meet </a>
            </button>
          </div>
        </div>
      </div>
      <div className="animation" ref={animeRef2}>
        <h1 className="hide" ref={animeRef}>
          rendezvous
        </h1>
      </div>
      <div className="slider" ref={animeRef3}>
        <h1 className="slider-text">नमस्ते !</h1>
      </div>
    </div>
  );
};

export default Home;
