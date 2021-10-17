import React from "react";
import CreateRoom from "./CreateRoom";
import Profile from "./Profile";
import Auth from "./Auth";
import Call from "./Call";
import Rest from "./Rest";
import Home from "./Home";
import About from "./About";
import Waiting from "./Waiting";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/createroom" component={CreateRoom} />
          <Route exact path="/rest" component={Rest} />
          <Route exact path="/about" component={About} />
          <Route exact path="/waiting" component={Waiting} />
          <Route exact path="/call" component={Call} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
