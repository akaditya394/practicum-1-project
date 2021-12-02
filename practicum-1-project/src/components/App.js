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
import history from "./history";

import "../Navbar.css";

import Edit from "./edit/edit"

import { AppContext } from "./context";

const App = () => {
  // User login Info (payload)
  const [payload, updatePayload] = useState({});

  const [isLoggedIn, updateLogin] = useState(false);

  // function checkEmptyObject(obj){
  //   return (obj&&Object.keys(obj).length === 0&& Object.getPrototypeOf(obj) === Object.prototype)
  // }

  function PayLoadUpdate(newPayload) {
    updatePayload(newPayload);
    updateLogin(true);

    // console.log("payload from app")
    // console.log(payload)
  }

  return (
    <AppContext.Provider value={{ payload, PayLoadUpdate }}>
      <Router history={history}>
        <div>
          <div className="login-register">
            <nav className="navbar navbar-expand-lg navbar-light bg-blue static-top">
              <div className="container">
                <Link to="/" className="navbar-brand">
                  rendezvous
                </Link>
                {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link to="/createroom" className="navbar-brand">
                        Create Room
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/profile" className="navbar-brand">
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/auth" className="navbar-brand">
                        {isLoggedIn ? (
                          <img
                            className="nav__img"
                            src={payload.picture}
                            alt="profile card"
                          />
                        ) : (
                          "SignUp/ Login"
                        )}
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
          <Route
            exact
            path="/profile"
            component={isLoggedIn ? Profile : Auth}
          />
          <Route
            exact
            path="/createroom"
            component={isLoggedIn ? CreateRoom : Auth}
          />
          <Route exact path="/rest" component={Rest} />
          <Route exact path="/about" component={About} />
          <Route exact path="/waiting" component={Waiting} />
          <Route exact path="/call" component={Call} />
          <Route exact path="/edit" render={(props)=> <Edit {...props} />} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
