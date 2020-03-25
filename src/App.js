import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import { Wiki } from "./components/wiki/Wiki";
import { LandingPage } from "./pages/landing-page/LandingPage";
import { Shop } from "./pages/shop/Shop";
import { Directory } from "./components/directory/Directory";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/categories" component={Directory}></Route>
          <Route exact path="/collections" component={Shop}></Route>
          <Route exact path="/landing-page" component={LandingPage}></Route>
          <Route exact path="/wiki" component={Wiki}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
