import React, { useState } from "react";
import CreateRoom from "./CreateRoom";
import Profile from "./Profile";
import Auth from "./Auth";
import Call from "./Call";
import Rest from "./Rest";
import Home from "./Home";
import About from "./About";
import Waiting from "./Waiting";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import { AppContext } from "./context";

const App = () => {
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
    console.log("payload from app")
    console.log(payload)
  }

  return (
    <Router>
      <div>
      <AppContext.Provider value={{ payload, PayLoadUpdate }}>

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
        </AppContext.Provider>

      </div>
    </Router>
  );
};

export default App;
