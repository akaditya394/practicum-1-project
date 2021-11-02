import React, { useState } from "react";
import CreateRoom from "./CreateRoom";
import Profile from "./Profile";
import Auth from "./Auth";
import Call from "./Call";
import Rest from "./Rest";
import Home from "./Home";
import About from "./About";
import Waiting from "./Waiting";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../Navbar.css";



import { AppContext } from "./context";

const App = () => {

  // User login Info (payload)
  const [payload, updatePayload] = useState({
    picture:
      "https://image.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg",
    name: "Mr Bean",
    email: "mrbean@gmail.com",
    roomMember: ["math", "science"],
    roomHost: ["Something 1", "Something 2"],
  });


  function PayLoadUpdate(newPayload){
    updatePayload(newPayload)
    // console.log("payload from app")
    // console.log(payload)
  }

  return (
      <AppContext.Provider value={{ payload, PayLoadUpdate }}>
    <Router>
      <div>
      <div className="login-register">
      <nav className="navbar navbar-expand-lg navbar-light bg-blue static-top">
        <div className="container">
        <Link to="/" className="navbar-brand">
        rendezvous
            </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <Link to="/createroom" className="navbar-brand">
             Create Room
            </Link>
              </li>
              <li className="nav-item">
              <Link to="/auth" className="navbar-brand">
              Auth
            </Link>
              </li>
              <li className="nav-item">
              <Link to="/profile" className="navbar-brand">
              Profile
            </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

      </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/createroom" component={CreateRoom} />
          <Route exact path="/rest" component={Rest} />
          <Route exact path="/about" component={About} />
          <Route exact path="/waiting" component={Waiting} />
          <Route exact path="/call" component={Call} />
        </Switch>

    </Router>
        </AppContext.Provider>
  );
};

export default App;
